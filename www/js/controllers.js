angular.module('starter.controllers', ['ion-gallery', 'ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {


})

.controller('BherpoCtrl', function ($scope, $ionicModal, $timeout) {


})

.controller('LoginCtrl', function ($scope, $ionicModal, $timeout, MyServices) {
    $scope.teams = {};
    $scope.user = {};

    $ionicModal.fromTemplateUrl('templates/modal-terms.html', function ($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    $scope.openterms = function () {
        $scope.modal.show();
    };

    $scope.closeterms = function () {
        $scope.modal.hide();
    };

    MyServices.findTeam(function (data, status) {
        console.log(data);
        $scope.teams = data;
    })

    $scope.loginUser = function () {
        // console.log("habch");
        // $scope.allvalidation = [{
        //     field: $scope.user.firstname,
        //     validation: ""
        // }, {
        //     field: $scope.user.pincode,
        //     validation: ""
        // }, {
        //     field: $scope.user.mobileno,
        //     validation: ""
        // }, {
        //     field: $scope.user.team,
        //     validation: ""
        // }];
        // var check = formvalidation($scope.allvalidation);
        // if (check) {}
    }
})

.controller('RegistrationCtrl', function ($scope, $ionicModal, $timeout, MyServices, $filter, $ionicPopup, $location) {

    $scope.user = {};
    $scope.user.sports = [];
    $scope.user.quiz = [];
    $scope.user.aquatics = [];
    $scope.user.dance = [];
    $scope.user.volunteer = [];
    $scope.checked = [];
    $scope.divs = [{
        name: "div1",
        vlaue: false
    }, {
        name: "div2",
        value: false
    }, {
        name: "div3",
        value: false
    }, {
        name: "div4",
        value: false
    }];
    $scope.user.registrationdate = new Date();
    $scope.user.city = "Mumbai";
    $scope.user.area = [];
    $scope.user.village = [];
    $scope.divmodel = {};
    $scope.divmodel.sports = false;
    $scope.divmodel.quiz = false;
    $scope.divmodel.aquatics = false;
    $scope.divmodel.dance = false;

    //    $scope.user.dateofbirth = moment().subtract(18, 'years');

    $scope.allsports = ["Bucket Ball", "Handminton", "Lagori", "Handball", "3 Legged Race", "4 Legged Race", "Triathalon", "Relay", "Skating Relay", "Tug of War"];

    // Load the modal from the given template URL
    $ionicModal.fromTemplateUrl('templates/popupsearch.html', function ($ionicModal) {
        $scope.modal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });


    $scope.openmodal = function () {
        $scope.modal.show();
    };
    $scope.closemodal = function () {
        $scope.modal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/popuparea.html', function ($ionicModal) {
        $scope.modal1 = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    $scope.dancedisable = true;
    $scope.quizdisable = true;
    $scope.aquaticsdisable = true;
    $scope.sportsdisable = true;

    $scope.enableordisable = function (value) {
        checknow();
        var popindex = $scope.checked.indexOf(value);
        if (popindex == -1) {
            if ($scope.checked.length <= 1) {
                $scope.checked.push(value);
                if ($scope.checked.length == 2) {
                    _.each($scope.divs, function (n) {
                        var foundindex = $scope.checked.indexOf(n.name);
                        if (foundindex == -1) {
                            n.value = true;
                        } else {
                            n.value = false;
                        }
                    })
                }
            }
        } else {
            $scope.checked.splice(popindex, 1);
            _.each($scope.divs, function (n) {
                n.value = false;
            })
        }

        function checknow() {
            if (value == 'div1') {
                if ($scope.divmodel.quiz == false) {
                    $scope.quizdisable = true;
                    document.getElementById("quiz1").checked = false;
                    $scope.user.quiz = [];
                } else {
                    $scope.quizdisable = false;
                    document.getElementById("quiz1").checked = true;
                }
            }

            if (value == 'div2') {
                if ($scope.divmodel.aquatics == false) {
                    $scope.aquaticsdisable = true;
                    document.getElementById("aqua1").checked = false;
                    document.getElementById("aqua2").checked = false;
                    document.getElementById("aqua3").checked = false;
                    $scope.user.aquatics = []
                } else {
                    $scope.aquaticsdisable = false;
                }
            }

            if (value == 'div3') {
                if ($scope.divmodel.dance == false) {
                    $scope.dancedisable = true;
                    document.getElementById("dance1").checked = false;
                    document.getElementById("dance2").checked = false;
                    $scope.user.dance = [];
                } else {
                    $scope.dancedisable = false;
                }
            }

            if (value == 'div4') {
                if ($scope.divmodel.sports == false) {
                    $scope.sportsdisable = true;
                    for (var i = 0; i < $scope.allsports.length; i++) {
                        document.getElementById($scope.allsports[i] + i + "").checked = false;
                        $scope.user.sports = [];
                    }
                } else {
                    $scope.sportsdisable = false;
                }
            }
        }
    }

    $scope.openmodalarea = function () {
        $scope.modal1.show();
    };
    $scope.closemodalarea = function () {
        $scope.modal1.hide();
    };

    $scope.doSearchVillage = function (datasearch) {
        if (datasearch.length >= 3) {
            MyServices.findVillage(datasearch, function (data, status) {
                console.log(data)
                $scope.villages = data;
            });
        }
    }

    $scope.selectVillage = function (comp) {
        console.log(comp);
        $scope.closemodal();
        $scope.user.village.push(comp);
    }

    $scope.doSearchArea = function (datasearch) {
        if (datasearch.length >= 3) {
            MyServices.findArea(datasearch, function (data, status) {
                console.log(data)
                $scope.areas = data;
            });
        }
    }

    $scope.selectArea = function (comp) {
        console.log(comp);
        $scope.closemodalarea();
        $scope.user.area.push(comp);
    }

    $scope.registerUser = function () {
        $scope.allvalidation = [{
            field: $scope.user.firstname,
            validation: ""
        }, {
            field: $scope.user.middlename,
            validation: ""
        }, {
            field: $scope.user.lastname,
            validation: ""
        }, {
            field: $scope.user.dateofbirth,
            validation: ""
        }, {
            field: $scope.user.gender,
            validation: ""
        }, {
            field: $scope.user.mobileno,
            validation: ""
        }, {
            field: $scope.user.email,
            validation: ""
        }, {
            field: $scope.user.address,
            validation: ""
        }, {
            field: $scope.user.area,
            validation: ""
        }, {
            field: $scope.user.pincode,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            console.log($scope.user);
            MyServices.registerUser($scope.user, function (data, status) {
                console.log(data);
                if (data.value == true) {
                    var alertPopup = $ionicPopup.show({
                        title: 'Thank You!',
                        template: '<span style="color:#002C5F">Registration Successful</span>'
                    });
                    $timeout(function () {
                        alertPopup.close();
                        $location.url("/app/home");
                    }, 2500)
                } else if (data.value == false && data.comment == "No such pincode") {
                    var alertPopup = $ionicPopup.show({
                        title: 'Sorry! Registration failed',
                        template: '<span style="color:#002C5F">Your Pincode is not valid</span>'
                    });
                    $timeout(function () {
                        alertPopup.close();
                    }, 2500)
                } else if (data.value == false && data.comment == "User already exists") {
                    var alertPopup = $ionicPopup.show({
                        title: 'Sorry! Registration failed',
                        template: '<span style="color:#002C5F">Email Id already exists</span>'
                    });
                    $timeout(function () {
                        alertPopup.close();
                    }, 2500)
                }
            })
        } else {
            var alertPopup = $ionicPopup.show({
                title: 'Error!',
                template: '<span style="color:#002C5F">Please fill in the mandatory fields</span>'
            });
            $timeout(function () {
                alertPopup.close();
            }, 2500)
        }
    }

})

.controller('GalleryCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $location) {

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

    $scope.galleryImg = [3078, 3079, 3096, 3127, 3142, 3156, 3159, 3166, 3171, 3167, 3169, 3173, 3174, 3177, 3182, 3193, 3201, 3210, 3215, 3224, 3244, 3248, 3250, 3254, 3266, 3271, 3280, 3292, 3294, 3298, 3307, 3315, 3317, 3322, 3326, 3392, 3414, 3416, 3426, 3430, 3431, 3438, 3436, 3440, 3442, 3444, 3481, 3485, 3550, 3553, 3583, 3642];

    $scope.gallery = [];
    _.each($scope.galleryImg, function (n) {
        $scope.photoObj = {};
        $scope.photoObj.src = "http://wohlig.co.in/bherpoimg/IMG_" + n + ".JPG";
        $scope.gallery.push($scope.photoObj);
    });

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

    $scope.openFolder = function (num) {
        $location.url("/app/innergallery/" + num);
    }

})

.controller('InnerGalleryCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $stateParams) {

    $scope.galleryImg = [3078, 3079, 3096, 3127, 3142, 3156, 3159, 3166, 3171, 3167, 3169, 3173, 3174, 3177, 3182, 3193, 3201, 3210, 3215, 3224, 3244, 3248, 3250, 3254, 3266, 3271, 3280, 3292, 3294, 3298, 3307, 3315, 3317, 3322, 3326, 3392, 3414, 3416, 3426, 3430, 3431, 3438, 3436, 3440, 3442, 3444, 3481, 3485, 3550, 3553, 3583, 3642];

    $scope.teamImg = [3476, 3479, 3483, 3485, 3489, 3490, 3493, 3496, 3499, 3501, 3503, 3505, 3507, 3510, 3512, 3517, 3518, 3520, 3523, 3525, 3532, 3535, 3541, 3547, 3596, 3597, 3605, 3607, 3608, 3612];


    $scope.gallery = [];

    if ($stateParams.id == 1) {
        _.each($scope.galleryImg, function (n) {
            $scope.photoObj = {};
            $scope.photoObj.src = "http://wohlig.co.in/bherpoimg/IMG_" + n + ".JPG";
            $scope.gallery.push($scope.photoObj);
        });
    } else if ($stateParams.id == 2) {
        _.each($scope.teamImg, function (n) {
            $scope.photoObj = {};
            $scope.photoObj.src = "http://wohlig.co.in/bherpoimg/IMG_" + n + ".JPG";
            $scope.gallery.push($scope.photoObj);
        });
    }


    $ionicModal.fromTemplateUrl('templates/modal-gallery.html', function ($ionicModal) {
        $scope.omodal = $ionicModal;
    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });

    $scope.opengallery = function () {
        $scope.omodal.show();
    };

    $scope.closegallery = function () {
        $scope.omodal.hide();
    };

    $scope.openFolder = function (num) {
        $scope.opengallery();
    }

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

        }];

    $scope.gallerys = _.chunk($scope.gallery, 3);

})

.controller('TeamDetailCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $location) {

    $scope.sponsor = [{
        image: "img/sponsor/1.png",


    }, {
        image: "img/sponsor/2.png",

    }, {
        image: "img/sponsor/3.png",

    }, {
        image: "img/sponsor/1.png",

    }, {
        image: "img/sponsor/2.png",

    }, {
        image: "img/sponsor/3.png",

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

.controller('TeamCtrl', function ($scope, $ionicModal, $timeout) {

        $scope.gallery = [{
            
            name: "Antra Ace",
            logo: "img/team-logo/t12.jpg",

        },{
            image: "img/team/t9.jpg",
            name: "Blazing Blues",
            logo: "img/team-logo/t9.png",

        },{
            image: "img/team/t6.jpg",
            name: "Borivali Stars",
            logo: "img/team-logo/t6.png",

        }, {
            image: "img/team/t8.jpg",
            name: "Jyoti Giants",
            logo: "img/team-logo/t8.jpg",


        }, {
            image: "img/team/t3.jpg",
            name: "Khelaiya",
            logo: "img/team-logo/t3.png",

        },  {
            image: "img/team/t10.jpg",
            name: "Khelbaajz",
            logo: "img/team-logo/t10.png",

        }, {
            image: "img/team/t4.jpg",
            name: "Nirmall Roals",
            logo: "img/team-logo/t4.png",

        },  {
            image: "img/team/t7.jpg",
            name: "Roaring Lions",
            logo: "img/team-logo/t7.png",

        },{
            image: "img/team/t1.jpg",
            name: "Roman Vision",
            logo: "img/team-logo/t1.jpg",

        },{
            image: "img/team/t1.jpg",
            name: "Transform Heroes",
            logo: "img/team-logo/t11.png",

        }, {
            image: "img/team/t5.jpg",
            name: "Vinipull",
            logo: "img/team-logo/t5.png",

        }, {
            image: "img/team/t2.jpg",
            name: "Yuvamann",
            logo: "img/team-logo/t2.jpg",

        }];

        $scope.gallerys = _.chunk($scope.gallery, 3);
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

        $scope.teams = [ {
            image: "img/team-logo/t12.jpg",
            name: "Antra Ace",
            num: "1",
            points: "0"

        }, {
            image: "img/team-logo/t9.png",
            name: "Blazing Blues",
            num: "2",
            points: "0"

        }, {
            image: "img/team-logo/t6.png",
            name: "borivali stars",
            num: "3",
            points: "0"

        }, {
            image: "img/team-logo/t8.jpg",
            name: "jyoti giants",
            num: "4",
            points: "0"

        }, {
            image: "img/team-logo/t3.png",
            name: "khelaiya",
            num: "5",
            points: "0"

        }, {
            image: "img/team-logo/t10.png",
            name: "Khelbaajz",
            num: "6",
            points: "0"

        }, {
            image: "img/team-logo/t4.png",
            name: "Nirmall royals",
            num: "7",
            points: "0"

        }, {
            image: "img/team-logo/t7.png",
            name: "roaring lions",
            num: "8",
            points: "0"

        },{
            image: "img/team-logo/t1.jpg",
            name: "roman vision",
            num: "9",
            points: "0"

        },{
           
           
            image: "img/team-logo/t11.png",
             name: "Transform Heroes",
             num: "10",
            points: "0"

        },  {
            image: "img/team-logo/t5.png",
            name: "vinipul",
            num: "11",
            points: "0"

        }, {
            image: "img/team-logo/t2.jpg",
            name: "yuvamann",
            num: "12",
            points: "0"

        }];

    })
    .controller('ConatctCtrl', function ($scope, $ionicModal, $timeout) {


    })
    .controller('NotificationCtrl', function ($scope, $ionicModal, $ionicScrollDelegate, $timeout) {

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
    
        	$scope.video = [{
		image: "img/notification/1.jpg",
		title: "Disnei Beauty and the Beast",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate venenatis faucibus"
  }, {
		image: "img/notification/3.jpg",
		title: "Bollywud Dream Tours",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate venenatis faucibus"
  }, {
		image: "img/notification/5.jpg",
		title: "Mumbai Filmcity Tours",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate venenatis faucibus"
  }];


    })
    .controller('NotidetailCtrl', function ($scope, $ionicModal, $ionicScrollDelegate, $timeout) {


    })

.controller('HomeCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicLoading, $ionicModal, $location, $cordovaFileTransfer, $cordovaFile, $ionicPopup, $timeout, MyServices) {

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

    $scope.savePDF = function () {
        MyServices.downloadP(function (data, status) {
            //            console.log(data);
        })
    }

    $scope.savePDF = function () {

        var url = "http://192.168.2.22:1337/user/downloadP";
        var targetPath = cordova.file.externalRootDirectory + "/bherpo/" + "Participate_Rule.pdf";
        var trustHosts = true;
        var options = {};

        $cordovaFile.createDir(cordova.file.externalRootDirectory, "bherpo", true)
            .then(function (success) {
                console.log("directory created");
                saveNow();
            }, function (error) {});

        function saveNow() {
            var alertPopup = $ionicPopup.show({
                title: "Saving PDF...",
            });
            $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                .then(function (result) {
                    alertPopup.close();
                    console.log(result);
                }, function (err) {
                    console.log(err);
                    var alertPopup2 = $ionicPopup.show({
                        title: "Error Saving PDF...",
                    });
                    $timeout(function () {
                        alertPopup2.close();
                    }, 2500)
                }, function (progress) {
                    $timeout(function () {
                        $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                    })
                });

            $timeout(function () {
                alertPopup.close();
            }, 2500);
        }
    }


    //    *** end ****
    $scope.slides = [{
        image: "img/slider/1.jpg",

    }, {
        image: "img/slider/2.jpg",

    }, {
        image: "img/slider/3.jpg",


    }, {
        image: "img/slider/5.jpg",

    }];


    $scope.gallery = [{
        image: "img/sponsor/4.png",

    }, {
        image: "img/sponsor/s5.jpg",

    },{
        image: "img/sponsor/4.png",

    }, {
        image: "img/sponsor/s5.jpg",

    }];
    
    $scope.repeatslides = _.chunk($scope.gallery, 1);

    	$scope.video = [{
		image: "img/notification/1.jpg",
		title: "Disnei Beauty and the Beast",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate venenatis faucibus"
  }, {
		image: "img/notification/3.jpg",
		title: "Bollywud Dream Tours",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate venenatis faucibus"
  }, {
		image: "img/notification/5.jpg",
		title: "Mumbai Filmcity Tours",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate venenatis faucibus"
  }];

    
})

.controller('KnowyourteamCtrl', function ($scope, $stateParams) {});
