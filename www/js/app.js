// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
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

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
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
        .state('app.venue', {
            url: '/venue',
            views: {
                'menuContent': {
                    templateUrl: 'templates/venue.html',
                    controller: 'VenueCtrl'
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
        .state('app.gallery', {
            url: '/gallery',
            views: {
                'menuContent': {
                    templateUrl: 'templates/gallery.html',
                    controller: 'GalleryCtrl'
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});