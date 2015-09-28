//var adminurl = "http://192.168.2.11:1337/";
var adminurl = "http://localhost:1337/";
var imgpath = adminurl + "user/resize?file=";

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
        findVillage: function (data, village, callback) {
            $http({
                url: adminurl + 'village/find',
                method: 'POST',
                data: {
                    search: data,
                    village: village
                }
            }).success(callback);
        },
        findArea: function (data, area, callback) {
            $http({
                url: adminurl + 'area/find',
                method: 'POST',
                data: {
                    search: data,
                    area: area
                }
            }).success(callback);
        }
    };
});