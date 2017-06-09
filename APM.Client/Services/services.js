(function () {
    "use strict";

    var app = angular.module("services",
                            ["ngResource"])
                    .constant("appSettings",
        {
            serverPath: "http://localhost:58586"
        });
                    

}());