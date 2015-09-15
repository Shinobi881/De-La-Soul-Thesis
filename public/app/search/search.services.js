"use strict()";
angular.module('soundGlomerate.searchFactory', ['soundGlomerate.keysFactory'])

.service('Search', ['$http', 'APIkeys', function($http, APIkeys){ // naming the factory 'Search', requiring the $http module to make API calls

  var events = []; 

  var LatLong =[];
 
  ////////////////////////


  var getEventBriteData = function(city, startDate, endDate){ // Defines the getEventBriteData fxn


    angular.copy([], events); // Creates a copy of the search data

    var fixTime = function(date){
      
      date = date.substring(0,19);
      console.log('date', date);
      date += 'Z';
      return date;
    }
    startDate = fixTime(startDate.toISOString());
    endDate = fixTime(endDate.toISOString());

    console.log('start', startDate);
    console.log('end', endDate);


    startDate = startDate ? '&start_date.range_start='+startDate : '';
    endDate = endDate ? '&start_date.range_end='+endDate : '';
  

    return $http({ // the direct API call with the user specificed input as the fxn's parameters
      method: 'GET',
      url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=date&venue.city=' + city + '&venue.region=CA'+startDate+endDate+'&categories=103&expand=venue&token=' + APIkeys.eventBriteKey
    })
    .then(function(res){ // this is a promise that waits for the API to return info
        res.data.events.forEach(function(evnt){
          //NOTE: need to take into account when fields are null. Right now, it errors out if one of these fields is null.

          
          // CLAIRE, ADD NOTES HERE
          var tuple = [ evnt.venue.address.latitude, evnt.venue.address.longitude];
          // Latttttt = evnt.venue.address.latitude;
          // Longggggg = evnt.venue.address.longitude;
          LatLong.push(tuple);


          // Push each event into the events array for the results to access
          events.push(evnt);

        });

        console.log(events)
        return events
         // selectedEventMapMarker
      })
    .catch(function(err){
      console.log(err);
    })
  
  };

  return {
    events: events,
    LatLong: LatLong,
    getEventBriteData: getEventBriteData 
  };

}])

