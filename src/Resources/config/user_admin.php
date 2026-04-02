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

namespace Symfony\Component\DependencyInjection\Loader\Configurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->services()

        ->set('sensiolabs.admin.user.admin.user')
            ->class('%sensiolabs.admin.user.admin.user.class%')
            ->tag('sensiolabs.admin', [
                'model_class' => '%sensiolabs.admin.user.class.user%',
                'manager_type' => 'orm',
                'controller' => '%sensiolabs.admin.user.admin.user.controller%',
                'label' => 'users',
                'translation_domain' => '%sensiolabs.admin.user.admin.user.translation_domain%',
                'group' => 'sensiolabs_user',
                'icon' => 'lucide:users',
            ])
            ->call('setUserManager', [service('sensiolabs.admin.user.manager')])

        ->set('sensiolabs.admin.user.admin.group')
            ->class('%sensiolabs.admin.user.admin.group.class%')
            ->tag('sensiolabs.admin', [
                'model_class' => '%sensiolabs.admin.user.class.group%',
                'manager_type' => 'orm',
                'controller' => '%sensiolabs.admin.user.admin.group.controller%',
                'label' => 'groups',
                'translation_domain' => '%sensiolabs.admin.user.admin.group.translation_domain%',
                'group' => 'sensiolabs_user',
                'icon' => 'lucide:shield',
            ]);
};
