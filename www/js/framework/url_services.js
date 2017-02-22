utilities.factory('urlServices', [function ($http) {

   var baseUrl = "http://localhost:3000/";
return{
    getLoginUrl : function(){
        //var loginUrl = 'mock_data/user_list.json';
        //return loginUrl;
        return baseUrl + 'auth/login';
    }
};

}]);