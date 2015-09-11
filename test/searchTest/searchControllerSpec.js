describe('SearchController', function() {

    var $controller;

    beforeEach(module('ui.router'));
    beforeEach(module('soundGlomerate.search'));
    beforeEach(inject(function(_$controller_){
      $controller = _$controller_;
        


    }));

    // var searchObject = {
    //   location: "Oakland",
    //   // startDate: Thu Sep 10 2015 00:00:00 GMT-0700 (PDT),
    //   // endDate: Fri Sep 11 2015 00:00:00 GMT-0700 (PDT)
    // }

    describe('SearchController', function() {
      it('it should have a search method', function() {
          var $scope = {};

          var controller = $controller('SearchController', {$scope: $scope, });

          expect($scope.message).toEqual("hello");
          // expect($scope.getEBEvents).toEqual('function');
          
          
      });
    });

    

    
});

// describe("hello world", function() {
  
//   // it("should work", function (){
//   //   expect(true).toBe(true)
//   // })
  
//   var searchCtrl;
//   beforeEach(module["soundGlomerate"])
//   beforeEach(inject(function($controller) {
//   var searchCtrl = $controller("SearchController")
  
//   }))
//   describe ("searchCtrl", function(){
//     it("should say hello", function(){
//       expect(searchCtrl.message).toBe("hello")
//     })
//   })
// })