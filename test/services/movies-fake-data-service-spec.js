describe("Given a movies data service", function() {
    var vmoviesDataService = null,
        $rootScope,
        listCriteria = {
            listStart: 0,
            itemsCount: 10,
            sortName: "",
            sortMode: ""
        };

    beforeEach(module("movies"));

    describe("And the fake movies data is fetched when in fake service mode", function() {
        var mockUrlConfig = {moviesDataServiceUrl: "localhost:3456/fake-service/movies-data"},
        testMoviesListData = { title : "Test Movies Data"},
        deferredPromise;

        beforeEach(module(function ($provide) {
            $provide.value("serviceUris", mockUrlConfig);
        }));
        
        beforeEach(inject(function ($injector, _$rootScope_) {
            moviesDataService = $injector.get("moviesDataService");
            $rootScope = _$rootScope_;
        }));

        beforeEach(function () {
            deferredPromise = moviesDataService.getMoviesListData(listCriteria)
                .then(function (returnFromPromise) {                    
                    expect(returnFromPromise.title).toEqual('Movies List Data');
                });
            $rootScope.$apply();
        });

        it("Then the service is defined", function() {
            expect(moviesDataService).toBeTruthy();            
        });
    });
});