describe('SearchController', function() {

    var $scope, $httpBackend, Search, $rootScope createController;

    beforeEach(module('soundGlomerate'));

    beforeEach(inject(function($injector){
        
      $rootScope = $injector.get('$rootScope');
      $httpBackend = $injector.get('$httpBackend');
      Search = $injector.get('Search');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('SearchCOntroller', {
          $scope: $scope,
          Search: Search
        });
      };

    }));

    var searchObject = {
      location: "Oakland",
      startDate: Thu Sep 10 2015 00:00:00 GMT-0700 (PDT),
      endDate: Fri Sep 11 2015 00:00:00 GMT-0700 (PDT)
    }



    it('it should have and Search method', function() {
        expect($scope.update).toEqual('function');
        expect($scope.getEBEvents).toEqual('function');
        expect($scope.getEBEvents).toEqual('function');
        
    });

    
});