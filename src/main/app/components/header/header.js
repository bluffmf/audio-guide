KumApp.controller('HeaderCtrl', function($scope, $mdSidenav, headerService) {
    var vm = this;


    vm.head = {
        title: "title head"
    };

    // test



    vm.toAdmin = function() {
        $mdSidenav('left').toggle();
    };


});
