"use strict()";
// Dependency: "apiKeys.js" 'soundGlomerate.keysFactory'
angular.module('soundGlomerate.searchFactory', ['soundGlomerate.keysFactory'])

// Service for api calls NOTE: Make sure to create the APIkeys service 
.service('Search', ['$http', 'APIkeys', function($http, APIkeys){ 
  
  var searchService = {};
  searchService.events = [];

  // Eventbrite API call definition
  searchService.eventBriteCall = function(city, startDate, endDate){   
    // This allows user to search within any page need to refactor for all API's
    angular.copy([], searchService.events);
    // Get the date range or just set to empty string
    startDate = startDate ? '&start_date.range_start='+ startDate : '';
    endDate = endDate ? '&start_date.range_end='+endDate : '';
        
    return $http({ // Http request to Eventbrite
      method: 'GET',
      url: 'https://www.eventbriteapi.com/v3/events/search/?sort_by=date&venue.city=' + city + 
          '&venue.region=CA' + startDate + endDate + '&categories=103&expand=venue&token=' + APIkeys.eventBriteKey
    
    }).success(function(eventBriteData){ // Promise for APi data
        eventBriteData.events.forEach(function(evnt){            
          // Push each event into the events array 
          searchService.events.push(evnt);
        });
        
        return searchService.events
      });  
  };

  // Call to Facebook API
  searchService.faceBookCall = function(city, startDate, endDate) {
    console.log('Facebook API call', city, startDate, endDate);
  }

  return searchService;    

}]);
  

