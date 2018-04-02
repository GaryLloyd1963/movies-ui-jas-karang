app.factory("moviesDataService", ["$resource", "$q", "serviceUris",
    function ($resource, $q, serviceUris) {
        "use strict";

        return {
            fakePromise: function(data) {
                var deferred = $q.defer();
                deferred.resolve(data);
                return deferred.promise;
            },

            getMoviesTotalCount: function() {
                if ( serviceUris.moviesDataServiceUrl.indexOf('fake-service') !== -1) {
                    return this.fakePromise(moviesFakeDataHelper.getMoviesCount());
                }

                var serviceResource = $resource(serviceUris.moviesDataServiceUrl + "/count");
                var request = serviceResource.get();
                return request.$promise;
            },
            
            getMoviesListData: function(listCriteria) {
                if ( serviceUris.moviesDataServiceUrl.indexOf('fake-service') !== -1) {
                    return this.fakePromise(moviesFakeDataHelper.getMoviesFakeData(listCriteria));
                }

                // NEED TO PASS LIST CRITERIA HERE!
                var serviceResource = $resource(serviceUris.moviesDataServiceUrl + "/list");
                var request = serviceResource.get();
                return request.$promise;
            }
        };
    }
]);