// creates obj with 2 keys pairs that also have obj
var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(239)444-4444",
        address: ["3222 sw 6th pl", "Cape Coral", "FL", "33914"]
    },
    steve: {
        firstName: "Steve",
        lastName: "Adams",
        number: "(239)444-4444",
        address: ["3222 sw 6th pl", "Cape Coral", "FL", "33914"]
    }
};

// uses the for in loop to print each friends key to the console...bill, steve.
// if obj friends had more keys such as xavier it would print xavier as well
var list = function(friend) {
    for (var friend in friends) {
        console.log(friend);
    }    
};

// searches the friends obj using the for in loop to loop through each name and then when 
// found prints their contact info to the screen

// uses parameter name to look for
var search = function(name) {
// iterates through the friends object
    for (var key in friends) {
    // if it comes across friends object key value "firstName"( Bill or Steve in this case ) 
    // and its equal to the name parameter print to the console that friends key and values
    // then return the friends objects keys.
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }    
};