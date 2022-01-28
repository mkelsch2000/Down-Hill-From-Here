$(document).ready(function () {

    // activate search button for zip code
    $(".btn").on("click", function () {

        //set local storage or save zip code to local storage
        var zip = $(this).parent().attr("id");
        var text = $(this).siblings(".form-input").val();

        localStorage.setItem(zip, text)
    })
});