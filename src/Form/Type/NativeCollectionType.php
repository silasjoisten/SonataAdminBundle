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

namespace SensioLabs\AdminBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType as SymfonyCollectionType;
use Symfony\Component\Form\FormTypeInterface;

/**
 * This type wraps native `collection` form type and renders `add` and `delete`
 * buttons in standard Symfony collection form type.
 *
 * Use this for simple collections like a list of strings, emails, etc.
 * For admin-backed associations (OneToMany, ManyToMany), use CollectionType instead.
 *
 * @author Andrej Hudec <pulzarraider@gmail.com>
 */
final class NativeCollectionType extends AbstractType
{
    /**
     * @phpstan-return class-string<FormTypeInterface>
     */
    public function getParent(): string
    {
        return SymfonyCollectionType::class;
    }

    public function getBlockPrefix(): string
    {
        return 'sensiolabs_type_native_collection';
    }
}
