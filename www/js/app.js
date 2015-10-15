// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

push = {};
var formvalidation = function (allvalidation) {
	var isvalid2 = true;
	for (var i = 0; i < allvalidation.length; i++) {
		if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
			allvalidation[i].validation = "ng-dirty";
			isvalid2 = false;
		}
	}
	return isvalid2;
}
angular.module('starter', ['ionic', 'ionic.service.core', 'starter.controllers', 'starter.services', 'ngCordova', 'ionic.service.push'])

.run(function ($ionicPlatform, $http) {
	$ionicPlatform.ready(function () {

		Ionic.io();
		push = new Ionic.Push({
			"debug": false,
			"onNotification": function (notification) {
				console.log("on notification");
				var payload = notification.payload;
				console.log(notification, payload);
			},
			"onRegister": function (data) {
				console.log("on registered");
				console.log(data.token);

				// Define relevant info
				var privateKey = '53eeb170092240340c354dc59160facf4b633c72255f52b6';
				var tokens = data.token;
				var appId = 'e9ef8369';

				// Encode your key
				var auth = btoa(privateKey + ':');
				console.log(auth);

				// Build the request object
				var req = {
					method: 'POST',
					url: 'https://push.ionic.io/api/v1/push',
					headers: {
						'Content-Type': 'application/json',
						'X-Ionic-Application-Id': appId,
						'Authorization': 'basic ' + auth
					},
					data: {
						"tokens": tokens,
						"notification": {
							"alert": "Hello World!"
						}
					}
				};

				// Make the API call
				console.log(req);
				$http(req).success(function (resp) {
					// Handle success
					console.log("Ionic Push: Push success!");
				}).error(function (error) {
					// Handle error 
					console.log("Ionic Push: Push error...");
				});



				$.jStoage.set("pushid", data.token);
			}
		});
		push.register(function (token) {
			console.log("push register");
			console.log("Device token:", token.token);


		});









		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.views.maxCache(0);
	$stateProvider

		.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('login', {
		url: "/login",
		templateUrl: "templates/login.html",
		controller: 'LoginCtrl'
	})

	.state('app.venue', {
		url: '/venue',
		views: {
			'menuContent': {
				templateUrl: 'templates/venue.html',
				controller: 'VenueCtrl'
			}
		}
	})

	.state('app.team', {
			url: '/team',
			views: {
				'menuContent': {
					templateUrl: 'templates/team.html',
					controller: 'TeamCtrl'
				}
			}
		})
		.state('app.event', {
			url: '/event',
			views: {
				'menuContent': {
					templateUrl: 'templates/event.html',
					controller: 'EventCtrl'
				}
			}
		})
		.state('app.knowyourteam', {
			url: '/knowyourteam',
			views: {
				'menuContent': {
					templateUrl: 'templates/knowyourteam.html',
					controller: 'KnowyourteamCtrl'
				}
			}
		})
		.state('app.score', {
			url: '/score',
			views: {
				'menuContent': {
					templateUrl: 'templates/score.html',
					controller: 'ScoreCtrl'
				}
			}
		})
		.state('app.merchandise', {
			url: '/merchandise',
			views: {
				'menuContent': {
					templateUrl: 'templates/merchandise.html',
					controller: 'MerchandiseCtrl'
				}
			}
		})

	.state('app.team-detail', {
		url: '/team/detail/:id',
		views: {
			'menuContent': {
				templateUrl: 'templates/team-detail.html',
				controller: 'TeamDetailCtrl'
			}
		}
	})

	.state('app.contact', {
			url: '/contact',
			views: {
				'menuContent': {
					templateUrl: 'templates/contact.html',
					controller: 'ConatctCtrl'
				}
			}
		})
		.state('app.sponsor', {
			url: '/sponsor',
			views: {
				'menuContent': {
					templateUrl: 'templates/sponsor.html',
					controller: 'SponsorCtrl'
				}
			}
		})
		.state('app.notification', {
			url: '/notification',
			views: {
				'menuContent': {
					templateUrl: 'templates/notification.html',
					controller: 'NotificationCtrl'
				}
			}
		})

	.state('app.login', {
			url: '/login',
			views: {
				'menuContent': {
					templateUrl: 'templates/login.html',
					controller: 'LoginCtrl'
				}
			}
		})
		.state('app.teamstanding', {
			url: '/teamstanding',
			views: {
				'menuContent': {
					templateUrl: 'templates/teamstanding.html',
					controller: 'TeamstandingCtrl'
				}
			}
		})
		.state('app.schedule', {
			url: '/schedule',
			views: {
				'menuContent': {
					templateUrl: 'templates/schedule.html',
					controller: 'ScheduleCtrl'
				}
			}
		})
		.state('app.registration', {
			url: '/registration',
			views: {
				'menuContent': {
					templateUrl: 'templates/registration.html',
					controller: 'RegistrationCtrl'
				}
			}
		})
		.state('app.bherpo', {
			url: '/bherpo',
			views: {
				'menuContent': {
					templateUrl: 'templates/bherpo.html',
					controller: 'BherpoCtrl'
				}
			}
		})

	.state('app.home', {
			url: '/home',
			views: {
				'menuContent': {
					templateUrl: 'templates/home.html',
					controller: 'HomeCtrl'
				}
			}
		})
		.state('app.notidetail', {
			url: '/notidetail',
			views: {
				'menuContent': {
					templateUrl: 'templates/notidetail.html',
					controller: 'NotidetailCtrl'
				}
			}
		})
		.state('app.gallery', {
			url: '/gallery',
			views: {
				'menuContent': {
					templateUrl: 'templates/gallery.html',
					controller: 'GalleryCtrl'
				}
			}
		}).state('app.innergallery', {
			url: '/innergallery/:id',
			views: {
				'menuContent': {
					templateUrl: 'templates/innergallery.html',
					controller: 'InnerGalleryCtrl'
				}
			}
		});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/login');
})

.directive('onlyDigits', function () {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function (scope, element, attr, ctrl) {
			function inputValue(val) {
				if (val) {
					var digits = val.replace(/[^0-9]/g, '');
					if (digits !== val) {
						ctrl.$setViewValue(digits);
						ctrl.$render();
					}
					return parseInt(digits, 10);
				}
				return undefined;
			}
			ctrl.$parsers.push(inputValue);
		}
	};
})


.filter('serverimage', function () {
	return function (image) {
		if (image && image != null) {
			return imgpath + image;
		} else {
			return "img/default.png";
		}
	};
})
.filter('teamimage', function () {
	return function (image) {
		if (image && image != null) {
			return "img/team-logo/" + image;
		} else {
			return "img/default.png";
		}
	};
})

.filter('mypoints', function () {
	return function (points) {
		if (points && points != null) {
			return points;
		} else {
			return 0;
		}
	};
})


.directive('bherpoactive', function(){
	return{
		link: function(scope, element, attr){
			var $element = $(element);
			var allelements = $(".menuitem");
			allelements.eq(0).addClass("active");
			$element.on("touch", function(data){
				for(var i = 0 ; i < allelements.length ; i++){
					allelements.eq(i).removeClass("active");
				}
					$element.addClass("active");
			})
		}
	}
})

.directive('isdata', function ($sce) {
	return {
		restrict: 'A',
		scope: {
			data: '='
		},
		replace: true,
		template: '<p>{{msg}}</p>',
		link: function (scope) {
			scope.$watch('data', function (newVal) {
				if (newVal == '') {
					scope.msg = '';
				} else if (newVal.value == false) {
					scope.msg = "No data found";
				}
			});
		}
	};
})

.filter('cut', function () {
		return function (value, wordwise, max, tail) {
			if (!value) return '';

			max = parseInt(max, 10);
			if (!max) return value;
			if (value.length <= max) return value;

			value = value.substr(0, max);
			if (wordwise) {
				var lastspace = value.lastIndexOf(' ');
				if (lastspace != -1) {
					value = value.substr(0, lastspace);
				}
			}

			return value + (tail || ' …');
		};
	})
	.directive('img', function ($compile, $parse) {
		return {
			restrict: 'EA',
			replace: false,
			link: function ($scope, element, attrs) {
				var $element = $(element);
				if (!attrs.noloading) {
					$element.after("<img src='img/loading.gif' class='loading' />");
					var $loading = $element.next(".loading");
					$element.load(function () {
						$loading.remove();
						$(this).addClass("doneLoading");
					});
				} else {
					$($element).addClass("doneLoading");
				}
			}
		};
	});