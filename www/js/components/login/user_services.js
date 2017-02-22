login.factory('userServices', [function () {

   var createAuthorisedUser =  function(response) {
        UnAuthorisedUser();
        user.username = response.username;
        user.credential = btoa(response.username + response.password);
        user.authenticated = response.authenticated;
        user.userId = response.userId;
    };

    var getAuthorisedUser = function () {
        return user;
    };

    var UnAuthorisedUser = function(){
        user = {};
        return user;
    };

    return {
        createAuthorisedUser: createAuthorisedUser,
        getAuthorisedUser:getAuthorisedUser,
        UnAuthorisedUser:UnAuthorisedUser

    };

}]);