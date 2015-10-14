//var adminurl = "http://192.168.2.22:1337/";
var adminurl = "http://wohlig.com:81/";
//var adminurl = "http://localhost:1337/";
var imgpath = adminurl + "uploadfile/resize?file=";

angular.module('starter.services', [])

.factory('MyServices', function($http) {

    return {
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveUser: function(data, callback) {
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        findVillage: function(data, callback) {
            $http({
                url: adminurl + 'village/find',
                method: 'POST',
                data: {
                    search: data,
                    village: []
                }
            }).success(callback);
        },
        findArea: function(data, callback) {
            $http({
                url: adminurl + 'area/find',
                method: 'POST',
                data: {
                    search: data,
                    area: []
                }
            }).success(callback);
        },
        downloadP: function(callback) {
            $http({
                url: adminurl + 'user/downloadP',
                method: 'POST',
            }).success(callback);
        },
        downloadE: function(callback) {
            $http({
                url: adminurl + 'user/downloadE',
                method: 'POST',
            }).success(callback);
        },
        registerUser: function(data, callback) {
            $http({
                url: adminurl + 'user/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getSlider: function(callback) {
            $http({
                url: adminurl + 'slider/find',
                method: 'POST'
            }).success(callback);
        },
        login: function(data, callback) {
            $http({
                url: adminurl + 'loginuser/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        saveNotification: function(data, callback) {
            $http({
                url: adminurl + 'notification/save',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getFolderImages: function(id, callback) {
            $http({
                url: adminurl + 'folder/findone',
                method: 'POST',
			 data:{_id:id}
            }).success(callback);
        },
        getNotification: function(callback) {
            $http({
                url: adminurl + 'notification/find',
                method: 'POST',
			 data:{user:$.jStorage.get("user").id}
            }).success(callback);
        },
        findMyTeam: function(pincode, callback) {
            $http({
                url: adminurl + 'team/findteam',
                method: 'POST',
                data: {"pincode":JSON.stringify(pincode)}
            }).success(callback);
        },
        notification: function(pincode, callback) {
            $http({
                url: adminurl + 'loginuser/save',
                method: 'POST',
                data: {"pincode":JSON.stringify(pincode)}
            }).success(callback);
        },
        getFolder: function(callback) {
            $http({
                url: adminurl + 'folder/find',
                method: 'POST'
            }).success(callback);
        },
        findTeam: function(callback) {
            $http({
                url: adminurl + 'team/find',
                method: 'POST'
            }).success(callback);
        },
        getHotNotification: function(callback) {
            $http({
                url: adminurl + 'notification/findhotnotify',
                method: 'POST'
            }).success(callback);
        },
        setNotify: function(data) {
		   $.jStorage.set("notify",data);
        },
        getNotify: function() {
		   return $.jStorage.get("notify");
        },
        setUser: function(data) {
		   $.jStorage.set("user",data);
        },
        getUser: function() {
		   return $.jStorage.get("user");
        }
    };
});