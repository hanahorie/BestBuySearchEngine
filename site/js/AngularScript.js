///reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js" />

var myApp = angular.module("myModule", []);


myApp.controller("myController", function ($scope) {
    $scope.message = "Hello Angular";
    $scope.somethingCool = "";
    $scope.somethingCool2 = "";

    $scope.somethingCoolChanged = function () {
        $scope.somethingCool2 = $scope.somethingCool + '123';
        console.log('somethingCoolChanged',$scope.somethingCool);
    }
    
});





var myDemo = angular.module("Module", []);

myDemo.controller("Controller", function ($scope, $http, $location) {
    $scope.searchBox = " ";
    $scope.resultView = false;

    $scope.productChanged = function () {
        $scope.productChanged = $scope.searchBox;
        console.log("productChanged", $scope.searchBox);
    }

    

    var rootUrl = 'https://cors-anywhere.herokuapp.com/http://www.bestbuy.ca/api/v2/JSON/search?query=';
    $scope.productSearch = function (productSearchStr) {
        var searchUrl = rootUrl + encodeURI(productSearchStr);
        console.log('productSearch', productSearchStr, searchUrl);
        $http.get(searchUrl).
            then(function (response) {
                console.log(response);
                $scope.thing = response.data;
                $scope.displayedProducts = angular.copy($scope.thing);
                $scope.srtByPrice('desc');
                //$scope.srtByRating('desc');
            });
    }
    

    $scope.sortProperties = {
        salePrice: [
            { text: 'Price: Low to High', sortOrder: 'asc' },
            { text: 'Price: High to Low', sortOrder: 'desc' } 
        ]
    };

    $scope.sortNumber = {
        customerRating: [
            { text: 'Highest Rated', sortStar: 'desc' }
        ]
    };

    
    $scope.displayedProducts = [];
    $scope.srtByPrice = function (direction) {
        if (!$scope.thing) { return; }
        if (!$scope.thing.products || $scope.thing.products.length < 2) { return; }

        $scope.displayedProducts.products = alasql('select * from ? order by salePrice ' + direction, [$scope.thing.products]);

        //console.log($scope.displayedProducts[0], $scope.displayedProducts[$scope.displayedProducts.length-1]);
    }
    $scope.displayedProducts = [];
    $scope.srtByRating = function (direction) {
        if (!$scope.thing) { return; }
        if (!$scope.thing.products || $scope.thing.products.length < 1) { return; }
        $scope.displayedProducts.products = alasql('select * from ? order by customerRating ' + direction, [$scope.thing.products]);
    }

    //$scope.propertyPrice = 'salePrice';
    //$scope.reverse = true;

    //$scope.srtBy = function (propertyPrice) {
    //    $scope.reverse = ($scope.propertyPrice === propertyPrice) ? !$scope.reverse : false;
    //    $scope.propertyPrice = propertyPrice;
    //};

    //$scope.price = function () {
    //    $scope.price = alasql""
    //}

    

    

});
    //s
    //.config(['$routeProvider', function ($routeProvider) {
    //    $routeProvider.
    //        when('', {
    //            template: '<h1>Welcome </h1>',
    //            controller:'Controller'
    //        }).
    //        when('/projectSearch', {
    //            templateUrl: 'projectSearch.html'
    //        }).
    //}]);

    //var url = "https://cors-anywhere.herokuapp.com/http://www.bestbuy.ca/api/v2/JSON/product/10749368"
    //$http({ method: 'GET', url: url, headers: { 'Content-Type': 'application/json' } }).then(function (data) {
    //        console.log(data);
    //  });

    //$http.jsonp(trustedUrl, { jsonpCallbackParam: 'callback' })
    //    .then(function (data) {
    //        console.log(data.found);
    //    });

    //console.log('hello');
    //$http(
    //    {
    //        method: 'JSONP',
    //        url: trustedUrl
    //    }
    //    ).
    //    then(function(response) {
    //        $scope.thing = response.data;
    //        console.log(response);
    //    });

   


    

    //var url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback";

    //$http.jsonp(trustedUrl);









