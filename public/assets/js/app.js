$(document).ready(() => {
    $("#addBurgerForm").on("submit", function (event) {
        //Prevent the screen from being refreshed on submit
        event.preventDefault();

        //Create a new burger object
        var newBurger = {
            burger_name: this.burgerName.value.trim(),
            devoured: 0
        };

        //Send an ajax post request to create the new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Created new burger");
            //Reload the page to get the updated burger list on the screen
            location.reload();
        });
    });

    $(".devourButton").on("click", function () {
        var id = $(this).data("burger-id");

        //Create a new burger object that only contains the devoured set to true
        var newBurgerState = {
            devoured: 1
        };

        //Send the PUT request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newBurgerState
        }).then(function () {
            console.log("Changed devoured to true");
            //Reload the page to get the updated burger list on the screen
            location.reload();
        });
    });
});