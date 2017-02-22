//Intial value

var userList = [];

var countryList = [ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'Egypt', code: 'EG'}, 
  {name: 'Finland', code: 'FI'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'New Zealand', code: 'NZ'}, 
  {name: 'Poland', code: 'PL'}, 
  {name: 'Portugal', code: 'PT'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'Swaziland', code: 'SZ'}, 
  {name: 'Sweden', code: 'SE'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}, 
  {name: 'Zimbabwe', code: 'ZW'} 
];

var emailDomainList = [ 
  'gmail.com',
  'yahoo.com',
  'xyz.com',
  'xyz.in',
  'abc.co.in'
];
 var assignCountryRandomly = function(){
  var randomNum = Math.floor(Math.random() * 24);
  return countryList[randomNum];
 };

 var assignemailRandomly = function(){
  var randomNum = Math.floor(Math.random() * 4);
  return emailDomainList[randomNum];
 };

var createTempUser = function(idNum){
  var tempUser = {id: idNum, firstName:'', lastName:'',  email:'', country:''};
  tempUser.firstName = 'firstNameOfUser_' + idNum;
  tempUser.lastName = 'lastNameOfUser_' + idNum;
  tempUser.email =  tempUser.firstName + '@' + assignemailRandomly();
  tempUser.country = assignCountryRandomly();
  return tempUser;
};

for(var i=0; i<100; i++){

userList.push(createTempUser(i));

}

/*myModule is AngularJS module to manage the Dashboard for Purchase Orders received*/

var myModule =  angular.module('myModule', ['ui.bootstrap', 'ui.router']);




myModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");
  //
  // Now set up the states
  $stateProvider
      .state('contactList', {
        url: "/contactList",
        templateUrl: "templates/partials/contacts/contactList.html",
        controller:"contactListController"
      })
      .state('createNewContact', {
        url: "/createNewContact",
        templateUrl: "templates/partials/contacts/createNewContact.html",
        controller:"createNewContactController"
      })
      .state('updateContact', {
        url: "/updateContact",
        templateUrl: "templates/partials/contacts/updateContact.html",
        controller:"updateContactController"
      });
}]);







