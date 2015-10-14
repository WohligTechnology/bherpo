var allfunction = {};
angular.module('starter.controllers', ['ion-gallery', 'ngCordova'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPopup, $ionicLoading, $timeout, MyServices, $location) {

	if (!MyServices.getUser()) {
		$location.url("/login");
	}
	console.log("appctrl");
	allfunction.msg = function (msg, title) {
		var myPopup = $ionicPopup.show({
			template: '<p class="text-center">' + msg + '!</p>',
			title: title,
			scope: $scope,
		});
		$timeout(function () {
			myPopup.close(); //close the popup after 3 seconds for some reason
		}, 2000);
	}

	allfunction.loading = function () {
		$ionicLoading.show({
			template: '<ion-spinner class="spinner-positive"></ion-spinner>'
		});
		$timeout(function () {
			$ionicLoading.hide();
		}, 5000);
	}


})

.controller('BherpoCtrl', function ($scope, $ionicModal, $timeout) {


})

.controller('LoginCtrl', function ($scope, $ionicModal, $timeout, MyServices, $ionicPopup, $location) {
	$scope.teams = {};
	$scope.user = {};
	if (MyServices.getUser()) {
		$location.url("/app/home");
	}
	allfunction.msg = function (msg, title) {
		var myPopup = $ionicPopup.show({
			template: '<p class="text-center">' + msg + '!</p>',
			title: title,
			scope: $scope,
		});
		$timeout(function () {
			myPopup.close(); //close the popup after 3 seconds for some reason
		}, 2000);
	}
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
		$scope.teams = data;
	})

	$scope.loginUser = function () {
		$scope.allvalidation = [{
			field: $scope.user.firstname,
			validation: ""
         }, {
			field: $scope.user.pincode,
			validation: ""
         }, {
			field: $scope.user.mobileno,
			validation: ""
         }, {
			field: $scope.user.team,
			validation: ""
         }];
		var check = formvalidation($scope.allvalidation);
		if (check) {
			$scope.user.token = $.jStorage.get("pushid");
			MyServices.login($scope.user, function (data) {
				console.log(data);
				if (data.value == true) {
					MyServices.setUser(data);
					$location.url("/app/home");
				} else {
					allfunction.msg("Login successfully !", "Login");
				}
			})
		} else {
			allfunction.msg("mandatory fields are ", "Error !");
		}
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

.controller('GalleryCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $location, MyServices, $ionicLoading) {

	$scope.folders = [];
	$scope.msg = "";

	allfunction.loading();
	MyServices.getFolder(function (data) {
		$scope.folders = data;
		if(data.value == false){
			$scope.msg = "No Folders";
		}
		$ionicLoading.hide();
	});

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

	$scope.openFolder = function (folder) {
		$location.url("/app/innergallery/" + folder._id);
	}

})

.controller('InnerGalleryCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $stateParams, MyServices, $filter, $ionicLoading) {

	$scope.gallery = [];
	$scope.msg = "";
	allfunction.loading();
	MyServices.getFolderImages($stateParams.id, function (data) {
		if(data.value == false || !data.image || data.image==''){
			$scope.msg = "No Galleries";
		}
		_.each(data.image, function (n) {
			$scope.gallery.push({
				"src": $filter("serverimage")(n)
			});
		});
		$ionicLoading.hide();
	});


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

.controller('TeamDetailCtrl', function ($scope, $ionicModal, $timeout, $ionicScrollDelegate, $location, $stateParams) {

	$scope.id = $stateParams.id;
	$scope.video = [{
		image: "img/team-logo/t11.png",
		name: "Transform Heroes",
		slogane: "Hum Hai Khel ke Veeroes.. Banege Jeet ke Heroes "
  }];


	$scope.repeatslides = _.chunk($scope.sponsor, 4);

})

.controller('TeamCtrl', function ($scope, $ionicModal, $timeout, $location) {

		$scope.gallery = [{

			name: "Antra Ace",
			logo: "img/team-logo/t12.jpg",
			id: 1

        }, {
			image: "img/team/t9.jpg",
			name: "Blazing Blues",
			logo: "img/team-logo/t9.png",
			id: 2

        }, {
			image: "img/team/t6.jpg",
			name: "Borivali Stars",
			logo: "img/team-logo/t6.png",
			id: 3

        }, {
			image: "img/team/t8.jpg",
			name: "Jyoti Giants",
			logo: "img/team-logo/t8.jpg",
			id: 4


        }, {
			image: "img/team/t3.jpg",
			name: "Khelaiya",
			logo: "img/team-logo/t3.png",
			id: 5

        }, {
			image: "img/team/t10.jpg",
			name: "Khelbaajz",
			logo: "img/team-logo/t10.png",
			id: 6

        }, {
			image: "img/team/t4.jpg",
			name: "Nirmall Roals",
			logo: "img/team-logo/t4.png",
			id: 7

        }, {
			image: "img/team/t7.jpg",
			name: "Roaring Lions",
			logo: "img/team-logo/t7.png",
			id: 8

        }, {
			image: "img/team/t1.jpg",
			name: "Roman Vision",
			logo: "img/team-logo/t1.jpg",
			id: 9

        }, {
			image: "img/team/t1.jpg",
			name: "Transform Heroes",
			logo: "img/team-logo/t11.png",
			id: 10

        }, {
			image: "img/team/t5.jpg",
			name: "Vinipull",
			logo: "img/team-logo/t5.png",
			id: 11

        }, {
			image: "img/team/t2.jpg",
			name: "Yuvamann",
			logo: "img/team-logo/t2.jpg",
			id: 12

        }];

		$scope.gallerys = _.chunk($scope.gallery, 3);
	
		$scope.toTeamDetail = function(id){
			if(id!=3 && id!=5 && id!=6 && id!=8 && id!=10 && id!=11){
			$location.url("/app/team/detail/"+id);
			}
		}
	
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
	.controller('TeamstandingCtrl', function ($scope, $ionicModal, $timeout, MyServices, $ionicLoading) {

		allfunction.loading();
		MyServices.findTeam(function (data) {
			$scope.teams = data;
			$ionicLoading.hide();
		});


	})
	.controller('ConatctCtrl', function ($scope, $ionicModal, $timeout) {

		$scope.teams = [{

			name: "Antra Ace",
			num: "1",
			email: "antra_ace@gmail.com",
            href:"mailto:antra_ace@gmail.com"

        }, {

			name: "Blazing Blues",
			num: "2",
			email: "dombivalibherpo@gmail.com",
            href:"mailto:dombivalibherpo@gmail.com"

        }, {

			name: "borivali stars",
			num: "3",
			email: "borivalidahisarbherpo@gmail.com",
            href:"mailto:borivalidahisarbherpo@gmail.com"

        }, {

			name: "jyoti giants",
			num: "4",
			email: "smbherpo@gmail.com",
            href:"mailto:smbherpo@gmail.com"

        }, {

			name: "khelaiya",
			num: "5",
			email: "mulundbherpo@gmail.com",
            href:"mailto:mulundbherpo@gmail.com"

        }, {

			name: "Khelbaajz",
			num: "6",
			email: "bherpokandivali@gmail.com",
            href:"mailto:bherpokandivali@gmail.com"

        }, {

			name: "Nirmall royals",
			num: "7",
			email: "nirmallroyals@gmail.com",
            href:"mailto:nirmallroyals@gmail.com"

        }, {

			name: "roaring lions",
			num: "8",
			email: "roaring_lions@gmail.com",
            href:"mailto:roaring_lions@gmail.com"

        }, {

			name: "roman vision",
			num: "9",
			email: "Miranavirbherpo@gmail.com",
            href:"mailto:Miranavirbherpo@gmail.com"

        }, {



			name: "Transform Heroes",
			num: "10",
			email: "Bksvbherpo@gmail.com",
            href:"mailto:Bksvbherpo@gmail.com"

        }, {

			name: "vinipul",
			num: "11",

			email: "Vinipul@gmail.com",
            href:"mailto:Vinipul@gmail.com"
        }, {

			name: "yuvamann",
			num: "12",
			email: "bherpomalad@gmail.com",
            href:"mailto:bherpomalad@gmail.com"

        }];
	})

.controller('NotificationCtrl', function ($scope, $ionicModal, $ionicScrollDelegate, $timeout, MyServices, $ionicLoading, $location) {
	//    *** Tab Change ****
	$scope.tab = 'photos';
	$scope.classa = 'active';
	$scope.classb = '';
	allfunction.loading();
	$scope.notificationtosend = {};
	allfunction.loading();
	$scope.msg = "";
	$scope.msg1 = "";
	MyServices.getNotification(function (data) {
		$scope.notification = data;
		if(data.value == false){
			$scope.msg = "No notifications.";
		}
		$ionicLoading.hide();

	});

	$scope.detailNotification = function (notify) {
		MyServices.setNotify(notify);
		if (notify.clicks) {
			++notify.clicks;
		} else {
			notify.clicks = 1;
		}
		$scope.notificationtosend._id = notify._id;
		$scope.notificationtosend.clicks = notify.clicks;
		MyServices.saveNotification($scope.notificationtosend, function (data) {})

		$location.url("/app/notidetail");
	}

	$scope.tabchange = function (tab, a) {
		//        console.log(tab);
		$scope.tab = tab;
		if (a == 1) {
			$ionicScrollDelegate.scrollTop();
			$scope.classa = "active";
			$scope.classb = '';
			$scope.classc = '';
		} else if (a == 2) {
			allfunction.loading();
			MyServices.getHotNotification(function (data) {
				$scope.video = data;
				if(data.value == false){
					$scope.msg1 = "No hotnotifications.";
				}
				$ionicLoading.hide();

			});
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


})

.controller('NotidetailCtrl', function ($scope, $ionicModal, $ionicScrollDelegate, $timeout, MyServices, $filter) {

	$scope.notification = MyServices.getNotify();

	$scope.share = function () {
		console.log("share");
		console.log($filter("cut")($scope.notification.content, "true", "120", "'....'"));
		window.plugins.socialsharing.share($scope.notification.title, null, $filter("serverimage")($scope.notification.image));
	}


})

.controller('HomeCtrl', function ($scope, $ionicSlideBoxDelegate, $ionicLoading, $ionicModal, $location, $cordovaFileTransfer, $cordovaFile, $ionicPopup, $timeout, MyServices) {

	// ***** Modal
	$scope.notificationtosend = {};
	
	MyServices.getNotification(function (data) {
		if(data){
		$scope.notification = data.slice(0,2);
		}
		if(data.value == false){
			$scope.msg = "No notifications.";
		}
		$ionicLoading.hide();

	});
	
	if (!MyServices.getUser()) {
		$location.url("/login");
	}
	
	
	$scope.detailNotification = function (notify) {
		MyServices.setNotify(notify);
		if (notify.clicks) {
			++notify.clicks;
		} else {
			notify.clicks = 1;
		}
		$scope.notificationtosend._id = notify._id;
		$scope.notificationtosend.clicks = notify.clicks;
		MyServices.saveNotification($scope.notificationtosend, function (data) {})

		$location.url("/app/notidetail");
	}


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
	MyServices.getSlider(function (data) {
		$scope.slides = data.image;
		$ionicSlideBoxDelegate.$getByHandle("bannerSlides").update();
	});

	$scope.gallery = [{
		image: "img/sponsor/s1.jpg",

    }, {
		image: "img/sponsor/s6.jpg",

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

.controller('KnowyourteamCtrl', function ($scope, $stateParams, MyServices, $ionicLoading, $timeout) {
	$scope.team = {};
	$scope.myteam = {};
	$scope.msg = false;
	var showloading = function () {
		$ionicLoading.show({
			template: '<ion-spinner class="spinner-positive"></ion-spinner>'
		});
		$timeout(function () {
			$ionicLoading.hide();
		}, 5000);
	}

	$scope.findTeam = function () {
		showloading();
		MyServices.findMyTeam($scope.team.pincode, function (data) {
			console.log(data);
			$ionicLoading.hide();
			$scope.myteam = data;
			if (data.value == false) {
				$scope.myteam.value = false;
				$scope.msg = true;
			} else {
				$scope.myteam.value = true;
				$scope.msg = true;
			}
		})
	}
});