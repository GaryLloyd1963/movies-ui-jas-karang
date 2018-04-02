describe("Given a movies list controller", function() {
    var scope, rootScope,
        controller,

        mockMoviesDataService = jasmine.createSpyObj("moviesDataService", ["getMoviesListData", "getMoviesTotalCount"]),
        deferredMoviesListData,
        deferredMoviesTotalCount;

    beforeEach(module("movies"));

    beforeEach(module(function($provide) {
        $provide.value("moviesDataService", mockMoviesDataService);
    }));

    beforeEach(inject(function($injector, $controller, $rootScope, $q) {
        rootScope = $rootScope;
        scope = $rootScope.$new();

        deferredMoviesListData = $q.defer();       
        mockMoviesDataService.getMoviesListData.and.returnValue(deferredMoviesListData.promise);
        deferredMoviesTotalCount = $q.defer();       
        mockMoviesDataService.getMoviesTotalCount.and.returnValue(deferredMoviesTotalCount.promise);

        controller = $controller("MoviesListController", { $scope: scope });
    }));

    describe("when the controller is loaded and the movies list data is retreived", function() {
        beforeEach(function() {
            deferredMoviesListData.resolve(moviesListTestData);
            deferredMoviesTotalCount.resolve({ moviesTotalCount : moviesListTestData.moviesList.length});
            rootScope.$apply();
        });

        it("then a call to the getMoviesListDataService service is made.", function() {
            expect(mockMoviesDataService.getMoviesListData).toHaveBeenCalled();
        });

        it ("then sets the controller movies data", function() {
            expect(controller.moviesListData.moviesList.length > 0).toBeTruthy();
        })

        it ("then sets the controller movies page count", function() {
            expect(controller.pageCount > 0).toBeTruthy();
        })
    });
});