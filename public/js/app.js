(function(){
var app = angular.module('soundGlomerate', []);

app.controller('NavBarController', function(){
  // this initialized the tab to 1. This replaces ng-init in the html file
    this.tab = 1;
    // this replaces the "ng-click="tab = 1"" from the index.html, which assigns valuea or expression to a variable
    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    // This is checking to see if a tab in the nav bar is currently selected
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
})

})();