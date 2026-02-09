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

use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DateTimeRangeType extends DateRangeType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'field_type' => DateTimeType::class,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return 'sensiolabs_type_datetime_range';
    }
}
