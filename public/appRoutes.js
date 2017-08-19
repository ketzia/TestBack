angular.module('appRoutes', ["ui.router","ui.router.stateHelper"])
    .config(function ($stateProvider) {

        $stateProvider
            .state({
            url: '/',
            name: 'test',
            templateUrl: 'templates/persona.html',
            controller: '',
            controllerAs: 'vm'
        })
        ;

    })
;