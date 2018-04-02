app.controller('MoviesListController',['$scope', 'moviesDataService',
function($scope, moviesDataService) {
    var vm = this;

    vm.headings = [
        {title: "ID", name: "id"},
        {title: "Title", name: "movietitle"},
        {title: "Director", name: "director"},
        {title: "Category", name: "category"},
        {title: "Rank", name: "rank"},
        {title: "Value ($m)", name: "value"},
        {title: "Year", name: "year"},
        {title: "Company", name :"company"}
    ];

    vm.listCriteria = {
        listStart: 0,
        itemsCount: 10,
        sortName: "",
        sortMode: ""
    }

    vm.pageCount = 0;
    vm.currentPage = 0;
    vm.moviesListData = {};

    vm.loadMoviesPageCount = function() {
        moviesDataService.getMoviesTotalCount()
            .then(function (response) {
                var totalCount = response.moviesTotalCount;
                vm.pageCount = Math.floor(totalCount / vm.listCriteria.itemsCount) + 1;
                console.log(vm.pageCount);
            }, function () {
                //Console.log("Failed to retrieve the data.");
            });
    }

    vm.moviesListDataIsEmpty = function() {
        return (vm.moviesListData === undefined ||
                                vm.moviesListData.moviesList === undefined);
    }

    vm.loadMoviesListData = function() {
        moviesDataService.getMoviesListData(vm.listCriteria)
            .then(function (response) {
                vm.moviesListData = response;
            }, function () {
                //Console.log("Failed to retrieve the data.");
            });
        };

    vm.isSortAscending = function(headerId) {
        if ( vm.headings[headerId].name != vm.listCriteria.sortName )
            return false;
        return vm.listCriteria.sortMode === "asc";
    }

    vm.isSortDescending = function(headerId) {
        if ( vm.headings[headerId].name != vm.listCriteria.sortName )
            return false;
        return vm.listCriteria.sortMode === "desc";
    }

    vm.switchHeaderSort = function(headerId) {
        if ( headerId < 0 || headerId >= vm.headings.length )
            return;

        if ( vm.headings[headerId].name != vm.listCriteria.sortName ) {
            vm.listCriteria.sortName = "";
            vm.listCriteria.sortMode = "";
        }

        if ( vm.listCriteria.sortMode === "" ) {
            vm.listCriteria.sortMode = "desc";
            vm.listCriteria.sortName = vm.headings[headerId].name;
        }
        else if ( vm.listCriteria.sortMode === "desc" )
            vm.listCriteria.sortMode = "asc";
        else {
            vm.listCriteria.sortMode = "";
            vm.listCriteria.sortName = "";
        }

        vm.resetPage();
        vm.loadMoviesListData();
    }

    vm.resetPage = function()
    {
        vm.currentPage = 0;
        vm.listCriteria.listStart = 0;        
    }

    vm.changePage = function(direction) {
        var increment = (direction > 0)? 1 : -1;
        vm.currentPage += increment;
        vm.listCriteria.listStart += (vm.listCriteria.itemsCount * increment);
        vm.loadMoviesListData();
    }

    vm.loadMoviesPageCount();
    vm.loadMoviesListData();
}]);