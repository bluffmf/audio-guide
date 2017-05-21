KumApp.controller('HeaderCtrl', function($scope, $mdSidenav, headerService) {
    var vm = this;


    vm.head = {
        title = "title head"
    };


    vm.toAdmin = function() {
        $mdSidenav('left').toggle();
    };


});
