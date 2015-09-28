angular.module('starter.controllers', ['ion-gallery'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {


    })
    .controller('BherpoCtrl', function ($scope, $ionicModal, $timeout) {


    })

.controller('RegistrationCtrl', function ($scope, $ionicModal, $timeout, MyServices, $filter) {

    $scope.user = {};
//    $scope.user.registrationdate = moment().format("DD-MM-YYYY");
//    $scope.user.dateofbirth = moment().subtract(18, 'years');

})

.controller('GalleryCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate) {

        $scope.gallery = [{
            "src": "img/gallery/1.jpg",
            //      "sub":"lnzdvnsjd"

  }, {
            "src": "img/gallery/2.jpg",

  }, {
            "src": "img/gallery/3.jpg",

  }, {
            "src": "img/gallery/4.jpg",

  }, {
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
    .controller('SponsorCtrl', function ($scope, $ionicModal, $timeout) {
        $scope.gallery = [{
            "src": "img/sponsor/s1.jpg",

  }, {
            "src": "img/sponsor/s2.jpg",

  }, {
            "src": "img/sponsor/s3.jpg",

  }, {
            "src": "img/sponsor/s4.jpg",

  }, {
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
    .controller('TeamCtrl', function ($scope, $ionicModal, $timeout) {
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
    .controller('EventCtrl', function ($scope, $ionicModal, $timeout) {
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
    .controller('ScoreCtrl', function ($scope, $ionicModal, $timeout) {


    })
    .controller('ScheduleCtrl', function ($scope, $ionicModal, $timeout) {


    })
    .controller('VenueCtrl', function ($scope, $ionicModal, $timeout) {

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
    .controller('MerchandiseCtrl', function ($scope, $ionicModal, $timeout) {


    })
    .controller('TeamstandingCtrl', function ($scope, $ionicModal, $timeout) {

        $scope.teams = [{
            image: "img/team-logo/t1.jpg",
            name: "roman vision",
            num: "1",
            points: "0"

  }, {
            image: "img/team-logo/t2.jpg",
            name: "yuvamann",
            num: "2",
            points: "0"

  }, {
            image: "img/team-logo/t3.png",
            name: "khelaiya",
            num: "3",
            points: "0"

  }, {
            image: "img/team-logo/t4.png",
            name: "Nirmall royals",
            num: "4",
            points: "0"

  }, {
            image: "img/team-logo/t5.png",
            name: "vinipul",
            num: "5",
            points: "0"

  }, {
            image: "img/team-logo/t6.png",
            name: "borivali stars",
            num: "6",
            points: "0"

  }, {
            image: "img/team-logo/t7.png",
            name: "roaring lions",
            num: "7",
            points: "0"

  }, {
            image: "img/team-logo/t8.jpg",
            name: "jyoti giants",
            num: "8",
            points: "0"

  }];
    })
    .controller('ConatctCtrl', function ($scope, $ionicModal, $timeout) {


    })
    .controller('NotificationCtrl', function ($scope, $ionicModal, $timeout) {


    })

.controller('HomeCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicLoading, $ionicModal, $location) {

    // ***** Modal 


    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/modal-regi.html', function ($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });


    $scope.openmodal = function () {
        console.log('Opening Modal');
        $scope.modal.show();
    };
    $scope.closemodal = function () {
        console.log('Closing Modal');
        $scope.modal.hide();
        $location.url("/app/registration");
    };


    //    *** end **** 
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

.controller('PlaylistCtrl', function ($scope, $stateParams) {});