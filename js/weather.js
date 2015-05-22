'use strict';

var weatherApp = angular.module('weatherApp', []);

weatherApp.controller('WeatherCtrl', function ($scope, $http) {
    $http.get("http://api.openweathermap.org/data/2.5/weather?q=Hanoi,vn&units=metric")
            .success(function (data) {
                if (data) {

                    $scope.current = data.main.temp;
                    $scope.temp_min = data.main.temp_min;
                    $scope.temp_max = data.main.temp_max;
                    $scope.wind_speed = data.wind.speed;
                    $scope.clouds = data.clouds ? data.clouds.all : undefined;

                    //Lay anh thoi tiet
                    var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                    if ($scope.clouds < 20) {
                        $scope.img_url = baseUrl + 'sunny.png';
                    } else if ($scope.clouds < 90) {
                        $scope.img_url = baseUrl + 'partly_cloudy.png';
                    } else {
                        $scope.img_url = baseUrl + 'cloudy.png';
                    }
                }
            })
            .error(function (data, status) {
                console.log(data);
            });

});