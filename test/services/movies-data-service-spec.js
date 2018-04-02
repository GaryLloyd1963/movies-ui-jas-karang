describe("Given a movies data service", function() {
    var moviesDataService = null,
        $rootScope,
        listCriteria = {
            listStart: 0,
            itemsCount: 10,
            sortName: "",
            sortMode: ""
        };

    beforeEach(module("movies"));

    describe("And the movies list data is fetched from a real endpoint", function() {
        var $httpBackend,
        mockUrlConfig = {moviesDataServiceUrl: "localhost:3456/real-service/movies-data"},
        testMoviesListData = { title : "Test Movies Data"};

        beforeEach(module(function ($provide) {
            $provide.value("serviceUris", mockUrlConfig);
        }));
        
        beforeEach(inject(function ($injector, _$rootScope_) {
            moviesDataService = $injector.get("moviesDataService");
            $rootScope = _$rootScope_;
            $httpBackend = $injector.get("$httpBackend");
        }));


        beforeEach(function () {
            $httpBackend.expect("GET",mockUrlConfig.moviesDataServiceUrl + "/list")
                        .respond(testMoviesListData);

            moviesDataService.getMoviesListData(listCriteria)
                .then(function (returnFromPromise) {
                    expect(returnFromPromise.title).toEqual('Test Movies Data');
                });
        });

        it("Then the service is defined", function() {
            expect(moviesDataService).toBeTruthy();            
        });

        it("Then it calls the correct Uri with a GET method.\n", function () {           
            $httpBackend.flush();
        }); 
    });           
});