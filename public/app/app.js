angular.module('myApp', ['ngResource', 'ngRoute']);

angular.module('myApp')

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/commits', {
        templateUrl: '/views/commits',
        controller: 'CommitCtrl'
    });
});

angular.module('myApp').controller('CommitCtrl', function($scope, $http) {

    $http.get('/commitData').success(function(data) {
        $scope.commits = JSON.parse(data.text);
    });

});
