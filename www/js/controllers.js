angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {


})

.controller('HomeCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicLoading) {
    

         $scope.slides = [{
            image: "img/6.jpg",
           
    },  {
            image: "img/4.jpg",
           
    }, {
            image: "img/5.jpg",
           
    }];
})

.controller('PlaylistCtrl', function ($scope, $stateParams) {});