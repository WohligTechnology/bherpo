angular.module('starter.controllers', [ 'ion-gallery'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('GalleryCtrl', function($scope, $ionicModal, $timeout, $ionicScrollDelegate) {

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

    
//    *** Tab Change ****
        $scope.tab = 'photos';
        $scope.classa = 'active';
        $scope.classb = '';

        $scope.tabchange = function (tab, a) {
            //        console.log(tab);
            $scope.tab = tab;
            if (a == 1) {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = "active";
                $scope.classb = '';
                $scope.classc = '';
            } else if (a == 2) {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = '';
                $scope.classb = "active";
                $scope.classc = '';
            } else {
                $ionicScrollDelegate.scrollTop();
                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active";
            }
        };


        //            ******** end *******
    
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
  $scope.gallery = [{
    image: "img/team/1.jpg",
    name: "Team Game Rockers",
    logo: "img/team-logo/1.png",

  }, {
    image: "img/team/2.jpg",
    name: "Jessilina Topers",
    logo: "img/team-logo/2.png",

  }, {
    image: "img/team/3.jpg",
    name: "atlanta blazers",
    logo: "img/team-logo/3.png",

  }, {
    image: "img/team/4.jpg",
    name: "Mumbai Riders",
    logo: "img/team-logo/4.png",

  }];

  })
  .controller('EventCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('ScoreCtrl', function($scope, $ionicModal, $timeout) {


  }) 
    .controller('VenueCtrl', function($scope, $ionicModal, $timeout) {

  $scope.venue = [{
    image: "img/venue/1.jpg",
    name: "Rectangular stadium",
    place: "South Australia",

  }, {
    image: "img/venue/2.jpg",
    name: "Oval stadium",
    place: "Tasmania",

  }, {
    image: "img/venue/3.jpg",
    name: "Soccer-specific stadium",
    place: "Saskatchewan",

  }, {
    image: "img/venue/4.jpg",
    name: "Football stadium",
    place: "Mechelen",

  }];
  })
  .controller('MerchandiseCtrl', function($scope, $ionicModal, $timeout) {


  })
  .controller('ConatctCtrl', function($scope, $ionicModal, $timeout) {


  }) 
    .controller('NotificationCtrl', function($scope, $ionicModal, $timeout) {


  })

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate, $ionicLoading) {


  $scope.slides = [{
    image: "img/slider/1.jpg",

  }, {
    image: "img/slider/2.jpg",

  }, {
    image: "img/slider/3.jpg",

  }];

  $scope.gallery = [{
    image: "img/slider/1.jpg",

  }, {
    image: "img/slider/2.jpg",

  }, {
    image: "img/slider/3.jpg",

  }, {
    image: "img/slider/4.jpg",

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
