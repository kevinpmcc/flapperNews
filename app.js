var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
      $scope.posts = [
        {title: 'post 1', upvotes: 5, link: 'http://www.google.com'},
        {title: 'post 2', upvotes: 2, link: 'http://www.reddit.com'},
        {title: 'post 3', upvotes: 15, link: 'http://www.medium.com'},
        {title: 'post 4', upvotes: 9, link: 'http://www.guardian.com'},
        {title: 'post 5', upvotes: 4, link: 'http://www.twitter.com'}
      ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
        });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes++;
    }
}]);
