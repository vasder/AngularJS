var vinzApp = angular.module('vinzApp', ['ngAnimate', 'ui.bootstrap']);
vinzApp.controller('AccordionCustom', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [{
            title: 'Dynamic Group Header - 1',
            content: 'Dynamic Group Body - 1'
        },
        {
            title: 'Dynamic Group Header - 2',
            content: 'Dynamic Group Body - 2'
        }, {
            title: 'Dynamic Group Header - 3',
            content: 'Dynamic Group Body - 3'
        }, {
            title: 'Dynamic Group Header - 4',
            content: 'Dynamic Group Body - 4'
        }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});

vinzApp.directive('arrownavigation', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            var keyCode = event.which;
            console.log("Key Pressed : " + keyCode);
            switch (keyCode) {
                case 38:
                    scope.isOpen = false;
                    var prevNode = element[0].previousElementSibling;
                    console.log(prevNode);
                    var prev = angular.element(prevNode);
                    console.log(prev);
                    prev[0].focus();
                    break;
                case 40:
                    scope.isOpen = false;
                    var target = element.next();
                    console.log(target);
                    target[0].focus();
                    break;
                case 13:
                    console.log(angular.element(event.target).attr('class'));
                    scope.isOpen = true;
                    break;
                case 32:
                    console.log(angular.element(event.target).attr('class'));
                    scope.isOpen = true;
                    break;
            }
        });
    };
});