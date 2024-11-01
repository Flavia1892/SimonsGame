

//Function for the flashing of the game title
let intervalId;

$(document).ready(function() {
    intervalId = setInterval(function() {
        $('.gameStart').fadeOut(300).fadeIn(300);
    }, 900); // Adjust the timing as needed

    $(document).keydown(function() {
        clearInterval(intervalId); // Stop the flashing
        $('.gameStart').stop(true, true).fadeIn(); // Ensure text is visible

        $('.gameStart').text("Level 1");
    });
});

$('.title').on("mouseover",()=>{
    $(".title").animate({fontSize:"60px"},1500).css("fontWeight","bold")
    setTimeout(()=>{
        $('.title').animate({fontSize:"30px"},1500)
    },2000)
})



