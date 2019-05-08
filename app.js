var app = angular.module("app", ["angularUtils.directives.dirPagination", "ngRoute", "ngCookies"])

.run(run)

run.$inject = ["$rootScope", "$location", "$cookies", "$http"];
function run($rootScope, $location, $cookies, $http) {

    $rootScope.globals = $cookies.getObject("globals") || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common["Authorization"] = 'Bearer ' +  $rootScope.globals.currentUser.token;
       
    }

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
        
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path("/login");
        }
    })
}


// Prevent scroll to top on ng-view //
app.value('$anchorScroll', angular.noop)    
 
// Routes //
.config(function(paginationTemplateProvider, $routeProvider) {
    paginationTemplateProvider.setPath('views/dirPagination.tpl.html');

    $routeProvider
    .when("/", {
        controller: "homeController",
        templateUrl: "views/home.view.html",
        controllerAs: "vm"
    })
    .when("/login", {
        controller: "loginController",
        templateUrl: "views/login.view.html",
        controllerAs: "vm"                
    })
    .when("/register", {
        controller: "registerController",
        templateUrl: "views/register.view.html",
        controllerAs: "vm"                
    })
    .otherwise({ redirectTo: "/login" });  

})


// CONTROLLER //

.controller("appController", ["$rootScope", "$scope", "$http", "$cookies", function($rootScope, $scope, $http, $cookies) {
    
    // Get products from API //
    $http.get("http://localhost:5000/api/products").then(function(res) {
        $rootScope.products = res.data;
    })


    // Sort products and limit products //
    $rootScope.rowLimits = {
        "type": "select", 
        "name": "rowLimits",
        "value": "10", 
        "values": [ "2", "5", "10", "15", "20", "50", "100"] 
    };

    $rootScope.sortProducts = {
        "type": "select", 
        "name": "sortProducts",
        "value": "manufacture", 
        "values": [ "manufacture", "price", "category"] 
    };
    

    // Get star rating //
    const starsTotal = 5;

    $rootScope.rating = function(input) {
        const starProcentage = (input / starsTotal) * 100;
        const starProcentageRounded = `${Math.round(starProcentage / 10) * 10}%`;

        return starProcentageRounded;
    }

    // Search functionallity //
    $rootScope.search = function(item) {
        if($scope.searchText == undefined) {
            return true;
        }
        else {
            if(
                item.manufacture.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.productname.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.category.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
            ) {
                return true;
            }
        }
        return false;
    }

    // ng-include
    $rootScope.changeView = function(view) {
        $rootScope.productComponent = "views/" + view;
    }
    $rootScope.productComponent = "views/store-column.html"

    // Back to top button just for fun //
    $rootScope.backToTop = function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    }   

    // Show login
      $rootScope.showLogin = false;

      $rootScope.showHide = function(){
        $scope.showLogin = $scope.showLogin = true;
    }

    // Store & shoppingcart  + cookies//
    var getProductId = function(products, id) {
        return _.find(products, function(product) {
            return product.id === id
        });
    };

    $rootScope.cart = [];
    $rootScope.emptycart = "";

    if (!angular.isUndefined($cookies.get('cart'))) {
        $rootScope.cart = $cookies.getObject('cart');
    }

    $rootScope.addItem = function(product) {
        var found = getProductId($rootScope.cart, product.id);

        if(found) {
            found.quantity += product.quantity;
        }
        else {
            $rootScope.cart.push(angular.copy(product));
        }

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 7);
        $cookies.putObject('cart', $rootScope.cart,  {'expires': expireDate});
        $rootScope.cart = $cookies.getObject('cart');
        
    }

    $rootScope.removeItem = function(product) {
        var index = $rootScope.cart.indexOf(product);
        $rootScope.cart.splice(index, 1);

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 7);
        $cookies.putObject('cart', $rootScope.cart,  {'expires': expireDate});
        $rootScope.cart = $cookies.getObject('cart');
    }

    $rootScope.getProductCost = function(product) {
        return product.quantity * product.price;
    }

    $rootScope.getProductQuantity = function(product) {
        return product.quantity;
    }

    $rootScope.getTotal = function() {
        var total = _.reduce($rootScope.cart, function(sum, product) {
            return sum + $rootScope.getProductCost(product);
        }, 0);

        if($rootScope.cart.length === 0) {
            $rootScope.emptycart = "Your cart is empty."
        }
        else {
            $rootScope.emptycart = ""
        }   
        return total;
    }

    $rootScope.getQuantity = function() {
        var quantity = _.reduce($rootScope.cart, function(sum, product) {
            return sum + $rootScope.getProductQuantity(product);
        }, 0);

        if(quantity === 0) {
            $rootScope.badgeColor ="badge-secondary"
        } else {
            $rootScope.badgeColor = "badge-danger"
        }

        return quantity;
    }

  
}]);