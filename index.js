$(document).ready(function(){

  $("#stopButton").click(function(){
          $("#stopLight").toggleClass("stop");
      });
  $("#slowButton").click(function(){
          $("#slowLight").toggleClass("slow");
      });
  $("#goButton").click(function(){
          $("#goLight").toggleClass("go");
      });



//  ***** STOP BUTTON LOG ******
  $("#stopButton").on('mouseenter',function(){
          console.log('entered STOP button');
  })
  $("#stopButton").on('mouseout',function(){
          console.log('left STOP button');
  })

//  ***** SLOW BUTTON LOG ******
  $("#slowButton").on('mouseenter',function(){
          console.log('entered SLOW button');
  })
  $("#slowButton").on('mouseout',function(){
          console.log('left SLOW button');
  })

//  ***** GO BUTTON LOG ******
  $("#goButton").on('mouseenter',function(){
          console.log('entered GO button');
  })
  $("#goButton").on('mouseout',function(){
          console.log('left GO button');
  })




});
