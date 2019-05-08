(function () {

    angular
        .module("app")
        .controller("homeController", homeController)

    homeController.$inject = ["userService", "$rootScope", "$location", "dialogService"];
    function homeController(userService, $rootScope, $location, dialogService) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];

        function getCurrentUser(id) {
            userService.GetUser(id)
                .then(function (user) {
                    vm.user = user;             
                })      
        }

        function getAllUsers() {
            userService.GetUsers()
                .then(function (users) {
                    vm.allUsers = users
                })
        }

        function deleteUser(id) {
            userService.Delete(id)
                .then(function () {
                    dialogService.Success("Your account was successfuly deleted", true);
                    $location.path("/login")
                })
        }

        function initController() {
            getCurrentUser($rootScope.globals.currentUser.id);
            getAllUsers();
        }


        initController();
        vm.deleteUser = deleteUser;
        
    }

})();