$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevouredStatus = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(
            function() {
                console.log("change eaten status:" + newDevour)
                location.reload();
            }
        );
    })
    $(".new-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: "0"//$("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                location.reload()
            }
        )
    })
})