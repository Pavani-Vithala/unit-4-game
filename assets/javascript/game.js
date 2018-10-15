
  var wins=0;
  var loses=0;
 // JavaScript function that wraps everything
 $(document).ready(function() { 
  initialize();
//Function to add numbers to current score
function initialize()
{   
  console.log("Entering initialize function:");
$("#Count").text(0);
  
   //Sets a random number between 1 and 100
   var rnum = (Math.floor(Math.random() * 50))+50;
   console.log("The random number generated is :"+rnum);
   $("#randNum").text(rnum);
   //Sets a random value between 1 and 50 for pink Crystal
       var pCrysVal =  Math.floor(Math.random() * 50);
       console.log("The random number generated for PinkCrystal :"+pCrysVal);
       $("#PCrys").val(pCrysVal);
       //Sets a random value between 1 and 50 for Green Crystal
       var gCrysVal =  Math.floor(Math.random() * 50);
       console.log("The random number generated for GreenCrystal :"+gCrysVal);
       $("#GCrys").val(pCrysVal);
       //Sets a random value between 1 and 50 for Blue Crystal
       var bCrysVal =  Math.floor(Math.random() * 50);
       console.log("The random number generated for BlueCrystal :"+bCrysVal);
       $("#BCrys").val(bCrysVal);
       //Sets a random value between 1 and 50 for Yellow Crystal
       var yCrysVal =  Math.floor(Math.random() * 50);
       console.log("The random number generated for YelloCrystal :"+yCrysVal);
       $("#YCrys").val(yCrysVal);
      var pClicked = 0;
      var gClicked = 0;
      var bClicked = 0;
      var yClicked = 0;
} 
//call function initialize



      //functions to add the total score
      function scoreCalc(val)
      {
        var Score =  $("#Count").text();
        var calcScore = parseInt(Score)+ parseInt(val);
        $("#Count").text(calcScore);
      }
      function winLoss()
      {
        var rnum = $("#randNum").val();
        var Count = $("#Count").text();
        
        if (Count > rnum)
        {
          loses = loses + 1;
          $("#Loses").text(loses);
          console.log("You lost:");
          initialize();
        }
        if(Count == rnum)
        {
          wins = wins + 1;
          $("#wins").text(wins);
          console.log("You won:");
          initialize();
        }
      }      

      $("#PCrys").on("click", function() {
        pClicked = 1;
        var pScore = $("#PCrys").val();
        winLoss();
        scoreCalc(pScore);
        
      });

      $("#BCrys").on("click", function() {
        bClicked = 1;
        var bScore = $("#BCrys").val();
        winLoss();
        scoreCalc(bScore);
        
      });

      $("#GCrys").on("click", function() {
        gClicked = 1;
        var gScore = $("#GCrys").val();
        winLoss();
        scoreCalc(gScore);
        
      });

      $("#YCrys").on("click", function() {
        yClicked = 1;
        var yScore = $("#YCrys").val();
        winLoss();
        scoreCalc(yScore);
       
      });

      
     


      });

  
