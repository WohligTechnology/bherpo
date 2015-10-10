var adminurl = "http://192.168.2.22:1337/";
//var adminurl = "http://localhost:1337/";
var imgpath = adminurl + "user/resize?file=";

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
        findMyTeam: function(pincode, callback) {
            $http({
                url: adminurl + 'team/findteam',
                method: 'POST',
                data: {"pincode":JSON.stringify(pincode)}
            }).success(callback);
        },
        findTeam: function(callback) {
            $http({
                url: adminurl + 'team/find',
                method: 'POST'
            }).success(callback);
        }
    };
});