angular.module('starter.controllers', [ 'ion-gallery'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('GalleryCtrl', function($scope, $ionicModal, $timeout) {

  $scope.gallery = [{
    "src": "img/gallery/1.jpg",
//      "sub":"lnzdvnsjd"

  }, {
    "src": "img/gallery/2.jpg",

  }, {
    "src": "img/gallery/3.jpg",

  }, {
    "src": "img/gallery/4.jpg",

  },{
    "src": "img/gallery/1.jpg",

  }, {
    "src": "img/gallery/2.jpg",

  }, {
    "src": "img/gallery/3.jpg",

  }, {
    "src": "img/gallery/4.jpg",

  }];
    
      $scope.gallerys = _.chunk($scope.gallery, 3);
    
  })
  .controller('SponsorCtrl', function($scope, $ionicModal, $timeout) {
  $scope.gallery = [{
    "src": "img/sponsor/s1.jpg",

  }, {
    "src": "img/sponsor/s2.jpg",

  }, {
    "src": "img/sponsor/s3.jpg",

  }, {
    "src": "img/sponsor/s4.jpg",

  },{
    "src": "img/sponsor/s1.jpg",

  }, {
    "src": "img/sponsor/s2.jpg",

  }, {
    "src": "img/sponsor/s3.jpg",

  }, {
    "src": "img/sponsor/s4.jpg",

  }];
    
      $scope.gallerys = _.chunk($scope.gallery, 3);

  })
  .controller('TeamCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('EventCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('ScoreCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('MerchandiseCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('ConatctCtrl', function($scope, $ionicModal, $timeout) {


  }) 
    .controller('NotificationCtrl', function($scope, $ionicModal, $timeout) {


  })

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate, $ionicLoading) {


  $scope.slides = [{
    image: "img/6.jpg",

  }, {
    image: "img/4.jpg",

  }, {
    image: "img/5.jpg",

  }];

  $scope.gallery = [{
    image: "img/gallery/1.jpg",

  }, {
    image: "img/gallery/2.jpg",

  }, {
    image: "img/gallery/3.jpg",

  }, {
    image: "img/gallery/4.jpg",

  }];
  $scope.sponsor = [{
    image: "img/sponsor/s1.jpg",

  }, {
    image: "img/sponsor/s2.jpg",

  }, {
    image: "img/sponsor/s3.jpg",

  }, {
    image: "img/sponsor/s4.jpg",

  }, {
    image: "img/sponsor/s1.jpg",

  }, {
    image: "img/sponsor/s2.jpg",

  }, {
    image: "img/sponsor/s3.jpg",

  }, {
    image: "img/sponsor/s4.jpg",

  }];

  $scope.repeatslides = _.chunk($scope.sponsor, 4);
})

.controller('PlaylistCtrl', function($scope, $stateParams) {});
