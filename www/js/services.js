var adminurl = "http://192.168.2.22:1337/";
var adminurl = "http://wohlig.in:81/";
//var adminurl = "http://wohlig.com:81/";
// var adminurl = "http://localhost:1337/";
var imgpath = adminurl + "uploadfile/resize?file=";

angular.module('starter.services', [])

.factory('MyServices', function ($http) {

    return {
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveUser: function (data, callback) {
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        findVillage: function (data, callback) {
            $http({
                url: adminurl + 'village/find',
                method: 'POST',
                data: {
                    search: data,
                    village: []
                }
            }).success(callback);
        },
        findArea: function (data, callback) {
            $http({
                url: adminurl + 'area/find',
                method: 'POST',
                data: {
                    search: data,
                    area: []
                }
            }).success(callback);
        },
        sendNotification: function (data, callback) {
            var privateKey = '53eeb170092240340c354dc59160facf4b633c72255f52b6';
            var tokens = [token.token];
            var appId = 'e9ef8369';
            var auth = btoa(privateKey + ':');

            $http({
                url: 'https://push.ionic.io/api/v1/push',
                method: 'POST',
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
            }).success(callback);
        },
        downloadP: function (callback) {
            $http({
                url: adminurl + 'user/downloadP',
                method: 'POST',
            }).success(callback);
        },
        downloadE: function (callback) {
            $http({
                url: adminurl + 'user/downloadE',
                method: 'POST',
            }).success(callback);
        },
        registerUser: function (data, callback) {
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        badgeCount: function (callback) {
            $http({
                url: adminurl + 'loginuser/countnotify',
                method: 'POST',
                data: {
                    _id: $.jStorage.get("user").id
                }
            }).success(callback);
        },
        getSlider: function (callback) {
            $http({
                url: adminurl + 'slider/find',
                method: 'POST'
            }).success(callback);
        },
        login: function (data, callback) {
            $http({
                url: adminurl + 'loginuser/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        saveNotification: function (data, callback) {
            $http({
                url: adminurl + 'notification/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getFolderImages: function (id, callback) {
            $http({
                url: adminurl + 'folder/findone',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        getNotification: function (pageno, callback) {
            if (iswebapp) {
                $http({
                    url: adminurl + 'notification/findlimited',
                    method: 'POST',
                    data: {
                        pagesize: 10,
                        pagenumber: pageno
                    }
                }).success(callback);
            } else {
                $http({
                    url: adminurl + 'notification/findlimited',
                    method: 'POST',
                    data: {
                        user: $.jStorage.get("user").id,
                        pagesize: 10,
                        pagenumber: pageno
                    }
                }).success(callback);
            }
        },
        findMyTeam: function (pincode, callback) {
            $http({
                url: adminurl + 'team/findteam',
                method: 'POST',
                data: {
                    "pincode": JSON.stringify(pincode)
                }
            }).success(callback);
        },
        notification: function (pincode, callback) {
            $http({
                url: adminurl + 'loginuser/save',
                method: 'POST',
                data: {
                    "pincode": JSON.stringify(pincode)
                }
            }).success(callback);
        },
        getFolder: function (pageno, callback) {
            $http({
                url: adminurl + 'folder/findlimited',
                method: 'POST',
                data: {
                    pagenumber: pageno,
                    pagesize: 2
                }
            }).success(callback);
        },
        findTeam: function (callback) {
            $http({
                url: adminurl + 'team/find',
                method: 'POST'
            }).success(callback);
        },
        getHotNotification: function (pageno, callback) {
            $http({
                url: adminurl + 'notification/findhotnotify',
                method: 'POST',
                data: {
                    pagenumber: pageno,
                    pagesize: 1
                }
            }).success(callback);
        },
        getVideos: function (callback) {
            $http({
                url: adminurl + 'videogallery/find',
                method: 'POST'
            }).success(callback);
        },
        findSchedule: function(callback) {
            $http({
                url: adminurl + 'schedule/find',
                method: 'POST'
            }).success(callback);
        },
        findSponsor: function(callback) {
            $http({
                url: adminurl + 'sponsor/find',
                method: 'POST'
            }).success(callback);
        },
        findoneSchedule: function(id, callback) {
            $http({
                url: adminurl + 'schedule/findone',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        findSponsorDetail: function(id, callback) {
            $http({
                url: adminurl + 'sponsor/findone',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        findOneVersion: function(callback) {
            $http({
                url: adminurl + 'version/findone',
                method: 'POST',
                data: {
                    _id: "5638421140a7afc36318db17"
                }
            }).success(callback);
        },
        setNotify: function (data) {
            $.jStorage.set("notify", data);
        },
        getNotify: function () {
            return $.jStorage.get("notify");
        },
        setUser: function (data) {
            $.jStorage.set("user", data);
        },
        getUser: function () {
            return $.jStorage.get("user");
        }
    };
});