<?php

declare(strict_types=1);

/*
 * This file is part of sensiolabs-de/admin-bundle.
 *
 * (c) SensioLabs Deutschland <info@sensiolabs.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SensioLabs\AdminBundle\Filter\ORM;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Expr\Orx;
use SensioLabs\AdminBundle\Datagrid\ORM\ProxyQueryInterface;
use SensioLabs\AdminBundle\Filter\Model\FilterData;
use SensioLabs\AdminBundle\Form\Type\ModelAutocompleteType;
use SensioLabs\AdminBundle\Form\Type\Operator\EqualOperatorType;

/**
 * Filter for association fields using autocomplete.
 *
 * Use this filter instead of ModelFilter when you have many related entities
 * and don't want to load them all into a dropdown.
 */
final class ModelAutocompleteFilter extends Filter
{
    public function filter(ProxyQueryInterface $query, string $alias, string $field, FilterData $data): void
    {
        if (!$data->hasValue()) {
            return;
        }

        $value = $data->getValue();

        if ($value instanceof Collection) {
            $data = $data->changeValue($value->toArray());
        } elseif (!\is_array($value)) {
            $data = $data->changeValue([$value]);
        }

        $this->handleMultiple($query, $alias, $data);
    }

    public function getDefaultOptions(): array
    {
        return [
            'field_name' => false,
            'field_type' => ModelAutocompleteType::class,
            'field_options' => [],
            'operator_type' => EqualOperatorType::class,
            'operator_options' => [],
            'property' => null,
            'callback' => null,
            'minimum_input_length' => 2,
            'items_per_page' => 10,
            'req_param_name_page_number' => '_page',
            'to_string_callback' => null,
            'target_admin_access_action' => 'list',
            'response_item_callback' => null,
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function getFormOptions(): array
    {
        return [
            'field_type' => $this->getFieldType(),
            'field_options' => $this->getFieldOptions(),
            'operator_type' => $this->getOption('operator_type'),
            'operator_options' => $this->getOption('operator_options'),
            'label' => $this->getLabel(),
        ];
    }

    /**
     * For the record, the $alias value is provided by the association method (and the entity join method)
     * so the field value is not used here.
     *
     * @param ProxyQueryInterface<object> $query
     */
    protected function handleMultiple(ProxyQueryInterface $query, string $alias, FilterData $data): void
    {
        if (0 === \count($data->getValue())) {
            return;
        }

        $inExpression = $this->buildInExpression($query, $alias, $data);

        if ($data->isType(EqualOperatorType::TYPE_NOT_EQUAL)) {
            if (false === ($this->getAssociationMapping()['isOwningSide'] ?? true)) {
                $nullExpression = \sprintf('IDENTITY(%s.%s) IS NULL', $alias, $this->getAssociationMapping()['mappedBy']);
            } else {
                $nullExpression = ClassMetadata::MANY_TO_MANY === $this->getAssociationMapping()['type']
                    ? \sprintf('%s.%s IS EMPTY', $this->getParentAlias($query, $alias), $this->getFieldName())
                    : \sprintf('IDENTITY(%s.%s) IS NULL', $this->getParentAlias($query, $alias), $this->getFieldName());
            }

            $inExpression = $query->getQueryBuilder()->expr()->orX(
                $query->getQueryBuilder()->expr()->not($inExpression),
                $nullExpression
            );
        }

        if ($inExpression->count() > 0) {
            $this->applyWhere($query, $inExpression);
        }
    }

    protected function association(ProxyQueryInterface $query, FilterData $data): array
    {
        $associationMappings = $this->getParentAssociationMappings();
        $associationMappings[] = $this->getAssociationMapping();
        $alias = $query->entityJoin($associationMappings);

        return [$alias, ''];
    }

    /**
     * Retrieve the parent alias for given alias.
     * Root alias for direct association or entity joined alias for association depth >= 2.
     *
     * @param ProxyQueryInterface<object> $query
     */
    private function getParentAlias(ProxyQueryInterface $query, string $alias): string
    {
        $parentAlias = $rootAlias = current($query->getQueryBuilder()->getRootAliases());

        if (false === $parentAlias) {
            throw new \RuntimeException('There are not root aliases defined in the query.');
        }

        $joins = $query->getQueryBuilder()->getDQLPart('join');
        if (isset($joins[$rootAlias])) {
            foreach ($joins[$rootAlias] as $join) {
                if ($join->getAlias() === $alias) {
                    $parts = explode('.', (string) $join->getJoin());
                    $parentAlias = $parts[0];

                    break;
                }
            }
        }

        return $parentAlias;
    }

    /**
     * @param ProxyQueryInterface<object> $query
     */
    private function buildInExpression(ProxyQueryInterface $query, string $alias, FilterData $data): Orx
    {
        $queryBuilder = $query->getQueryBuilder();
        $metadata = $queryBuilder->getEntityManager()->getClassMetadata(
            $this->getFieldOption('class')
        );
        $orX = $queryBuilder->expr()->orX();

        foreach ($data->getValue() as $value) {
            if (!\is_object($value)) {
                continue;
            }

            $andX = $queryBuilder->expr()->andX();

            foreach ($metadata->getIdentifierValues($value) as $fieldName => $identifierValue) {
                $parameterName = $this->getNewParameterName($query);

                $andX->add($queryBuilder->expr()->eq(\sprintf('%s.%s', $alias, $fieldName), ':'.$parameterName));
                $queryBuilder->setParameter(
                    $parameterName,
                    $identifierValue,
                    $metadata->getTypeOfField($fieldName)
                );
            }

            $orX->add($andX);
        }

        return $orX;
    }
}
