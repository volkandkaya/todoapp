angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );

  $stateProvider
    .state('hello', {
      url: '/hello',
      template: '<p>Hello, world!</p>'
    });

})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

.controller('TodoCtrl', ['$scope', function($scope) {

      $scope.date = new Date();

      $scope.todos = [
        {title:'Learn AngularJS', text:'to do list', date: $scope.date, done:false},
        {title:'Build an app', text:'to do list', date: $scope.date, done:false}
      ];
      $scope.laterTodos = [
        {title:'Learn AngularJS later', text:'to do list', date: $scope.date, done:false},
        {title:'Build an app later', text:'to do list', date: $scope.date, done:false}
        ];

      $scope.completedTodos = [
        {title:'Completed AngularJS', text:'to do list', date: $scope.date, done:false},
        {title:'Completed an app', text:'to do list', date: $scope.date, done:false}
      ];

      $scope.getTotalTodos = function () {
        return $scope.todos.length;
      };

      $scope.getLaterTotalTodos = function () {
        return $scope.laterTodos.length;
      };

      $scope.getCompletedTotalTodos = function () {
        return $scope.completedTodos.length;
      };

      $scope.clearCompleted = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.todos.push(todo);}
        });
      };

      $scope.moveNowCompleted = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];

        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.todos.push(todo);}
          if (todo.done) {
            $scope.completedTodos.push(todo);
            $scope.completedTodos[$scope.completedTodos.length - 1].done = false;
          }});
      };

      $scope.moveNowLater = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];

        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.todos.push(todo);}
          if (todo.done) {
            $scope.laterTodos.push(todo);
            $scope.laterTodos[$scope.laterTodos.length - 1].done = false;
          }});
      };

      $scope.moveLaterNow = function () {
        var oldTodos = $scope.laterTodos;
        $scope.laterTodos = [];

        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.laterTodos.push(todo);}
          if (todo.done) {
            $scope.todos.push(todo);
            $scope.todos[$scope.todos.length - 1].done = false;
          }});
      };

      $scope.moveLaterCompleted = function () {
        var oldTodos = $scope.laterTodos;
        $scope.laterTodos = [];

        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.laterTodos.push(todo);}
          if (todo.done) {
            $scope.completedTodos.push(todo);
            $scope.completedTodos[$scope.completedTodos.length - 1].done = false;
          }});
      };

      $scope.clearLaterCompleted = function () {
        var oldLaterTodos = $scope.laterTodos;
        $scope.laterTodos = [];
        angular.forEach(oldLaterTodos, function(todo) {
          if (!todo.done) {$scope.laterTodos.push(todo);}
        });
      };

      $scope.moveCompletedNow = function () {
        var oldTodos = $scope.completedTodos;
        $scope.completedTodos = [];

        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.completedTodos.push(todo);}
          if (todo.done) {
            $scope.todos.push(todo);
            $scope.todos[$scope.todos.length - 1].done = false;
          }});
      };

      $scope.moveCompletedLater = function () {
        var oldTodos = $scope.completedTodos;
        $scope.completedTodos = [];

        angular.forEach(oldTodos, function(todo) {
          if (!todo.done) {$scope.completedTodos.push(todo);}
          if (todo.done) {
            $scope.laterTodos.push(todo);
            $scope.laterTodos[$scope.laterTodos.length - 1].done = false;
          }});
      };

      $scope.clearCompletedCompleted = function () {
        var oldCompletedTodos = $scope.completedTodos;
        $scope.completedTodos = [];
        angular.forEach(oldCompletedTodos, function(todo) {
          if (!todo.done) {$scope.completedTodos.push(todo);}
        });
      };

      $scope.addTodo = function () {
        $scope.date = new Date();
        if($scope.formTodoTitle.length){
            $scope.todos.push({title:$scope.formTodoTitle, text:$scope.formTodoText, date: $scope.date, done:false});

            $scope.formTodoTitle= '';
            $scope.formTodoText= '';
        }
      };
    }])
;

