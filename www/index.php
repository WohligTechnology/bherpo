<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self' *; style-src 'self' 'unsafe-inline' *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *">
	<title></title>

	<link rel="stylesheet" href="lib/linearicons/icons.css">

	<!-- compiled css output -->
	<link href="css/ionic.app.css" rel="stylesheet">
	<link href="lib/ion-gallery/ion-gallery.css" rel="stylesheet">
	<!--	<link href="css/style.css" rel="stylesheet">-->

	<script src="lib/js/jquery-2.1.4.min.js"></script>

	<!-- ionic/angularjs js -->
	<script src="lib/ionic/js/ionic.bundle.js"></script>
	<script src="lib/ionic-platform-web-client/dist/ionic.io.bundle.min.js"></script>
	<script src="lib/ion-gallery/ion.gallery.min.js"></script>
	<script src="lib/js/ng-cordova.min.js"></script>

	<!-- cordova script (this will be a 404 during development) -->
	<script src="cordova.js"></script>

	<!-- your app's js -->
	<script src="js/app.js"></script>
	<script src="js/services.js"></script>
	<script src="js/controllers.js"></script>
	<script src="lib/js/lodash.js"></script>
	<script src="lib/js/jstorage.js"></script>
	<script src="lib/js/moment/min/moment-with-locales.min.js"></script>
</head>

<body ng-app="starter" style="max-width:1024px;">
	<ion-nav-view></ion-nav-view>
</body>

</html>