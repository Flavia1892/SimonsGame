

//Function for the flashing of the game title
let intervalId;
let sound1=$('#sound')[0];
let sound2=$('#sound2')[0];
let sound3=$('#sound3')[0];
let sound4=$('#sound4')[0];
let soundWrong=$('#soundWrong')[0];


$(document).ready(function() {
    intervalId = setInterval(function() {
        $('.gameStart').fadeOut(300).fadeIn(300);
    }, 900); // Adjust the timing as needed

    $(document).keydown(function() {
        clearInterval(intervalId); // Stop the flashing
        $('.gameStart').stop(true, true).fadeIn(); // Ensure text is visible

        $('.gameStart').text("Level 1");

        $(".green").fadeOut(300).fadeIn(300);
       
        sound1.currentTime = 0; // Rewind to the start
        sound1.play(); // 
       
    });
});

$('.title').on("mouseover",()=>{
    $(".title").animate({fontSize:"60px"},1500).css("fontWeight","bold")
    setTimeout(()=>{
        $('.title').animate({fontSize:"30px"},1500)
    },2000)
})


let colorArray=['green'];
let checkColorClick=[];

$('rect').on("click",function(){
    const classAttribute = $(this).attr('class');
    checkColorClick.push(classAttribute);
    checkClickedColor(checkColorClick);
})

function checkClickedColor(colorArr){
  for(let key in  colorArray)
    if(colorArray[key]!=colorArr[key])
        {

            soundWrong.currentTime = 0; // Rewind to the start
            soundWrong.play();
            $('body').css('background-color', 'red'); // Set flash color

            // Use a timeout to revert the color after a short period
            setTimeout(function() {
                $('body').css('background-image',"linear-gradient(to bottom,rgb(6, 6, 145),rgb(9, 9, 189),blue)"); // Reset color
            }, 500); // Flash duration
           
        }

 
}



