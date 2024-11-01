
let colorsByNumber=['green','red','yellow','blue'];
let levelnumber=1;

let colorArrayOfGenerated=[];
let checkColorClick=[];

let proceedToNextlevel=false;


//Function for the flashing of the game title
let intervalId;
let sound0=$('#sound')[0];
let sound1=$('#sound2')[0];
let sound2=$('#sound3')[0];
let sound3=$('#sound4')[0];
let soundWrong=$('#soundWrong')[0];


$(document).ready(function() {
    intervalId = setInterval(function() {
        $('.gameStart').fadeOut(300).fadeIn(300);
    }, 900); // Adjust the timing as needed

    $(document).keydown(function() {
        clearInterval(intervalId); // Stop the flashing
        $('.gameStart').stop(true, true).fadeIn(); // Ensure text is visible

        $('.gameStart').text("Level 1");

         SimonGameColors();
           
       
    });
});

$('.title').on("mouseover",()=>{
    $(".title").animate({fontSize:"60px"},1500).css("fontWeight","bold")
    setTimeout(()=>{
        $('.title').animate({fontSize:"30px"},1500)
    },2000)
})

function SimonGameColors(){
    let randomNumber = Math.floor(Math.random() * 4)
    let className=colorsByNumber[randomNumber];
    colorArrayOfGenerated.push(String(className));
    checkColorClick=[];

    $(`.${className}`).fadeOut(300).fadeIn(300);
    switch(randomNumber){

        case 0: 
        sound0.currentTime = 0; // Rewind to the start
         sound0.play(); 
         break;

         case 1: 
         sound1.currentTime = 0; // Rewind to the start
          sound1.play(); 
          break;

          case 2: 
          sound2.currentTime = 0; // Rewind to the start
           sound2.play(); 
           break;

           case 3: 
           sound3.currentTime = 0; // Rewind to the start
            sound3.play(); 
            break;


    }
        

}



$('rect').on("click",function(){
    const classAttribute = $(this).attr('class');
    checkColorClick.push(classAttribute);
    checkClickedColor(checkColorClick);
})

function checkClickedColor(colorArr){
    console.log(colorArr);
    console.log("this is the generator:"+colorArrayOfGenerated);
  for(let key in  colorArr)
    if(colorArrayOfGenerated[key]!=colorArr[key])
        {
            soundWrong.currentTime = 0; // Rewind to the start
            soundWrong.play();

            proceedToNextlevel=false;

            $(".gameStart").text("You got it wrong!");
            $('body').css("background-image","linear-gradient(to bottom,red,red)");
            setTimeout(()=>{
                $('body').css("background-image","linear-gradient(to bottom,rgb(6, 6, 145),rgb(9, 9, 189),blue)");
            },500);

            levelnumber=1;

            setTimeout(()=>{
            location.reload();
        },1700);

        return;
        }


proceedToNextlevel=true;

if(proceedToNextlevel&&colorArrayOfGenerated.length===colorArr.length) {
    levelnumber++;
    SimonGameColors();
    $('.gameStart').text(`Level ${levelnumber}`);

}

 
}





