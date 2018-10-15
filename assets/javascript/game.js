
  var wins=0;
  var loses=0;
  var score = 0;
  // JavaScript function that wraps everything
 $(document).ready(function() { 
  initialize();
//Function to add numbers to current score
function initialize()
{   
  console.log("Entering initialize function:");
  //var winCount = $("#Count").text();
  
   //Sets a random number between 1 and 100
   var rnum = Math.floor(Math.random() * 102+19);
   $("#randNum").text(rnum);
   //Sets a random value between 1 and 50 for pink Crystal
       var pCrysVal =  Math.floor(Math.random() * 12+1);
       $("#PCrys").val(pCrysVal);
       //Sets a random value between 1 and 50 for Green Crystal
       var gCrysVal =  Math.floor(Math.random() * 12+1);
       $("#GCrys").val(gCrysVal);
       //Sets a random value between 1 and 50 for Blue Crystal
       var bCrysVal =  Math.floor(Math.random() * 12+1);
       $("#BCrys").val(bCrysVal);
       //Sets a random value between 1 and 50 for Yellow Crystal
       var yCrysVal =  Math.floor(Math.random() * 12+1);
       $("#YCrys").val(yCrysVal);
       $("#Count").text(0);
       $("#winCount").text(wins);
       $("#lossCount").text(loses);
       
}
       //functions to add the total score
      function scoreCalc(val)
      {
        score =  $("#Count").text();
        console.log("the score is "+score);
        var calcScore = parseInt(score)+ parseInt(val);
        var rnum = $("#randNum").text();
        console.log("The value of rnum is "+rnum);
        console.log("the value of calcScore is :"+calcScore);
        $("#Count").text(calcScore);
        if (parseInt(calcScore) > parseInt(rnum))
        {
           loses = parseInt(loses) + 1;
          $("#lossCount").text(loses);
          console.log("You lost:");
          initialize();
        }
        if(parseInt(calcScore) === parseInt(rnum))
        {
          wins = parseInt(wins) + 1;
          $("#winCount").text(wins);
          console.log("You won:");
          initialize();
        }
      }
        
      
      $("#PCrys").on("click", function() {
        var pScore = $("#PCrys").val();
        scoreCalc(pScore);
        
        
      });

      $("#BCrys").on("click", function() {
        var bScore = $("#BCrys").val();
        scoreCalc(bScore);
        
        
      });

      $("#GCrys").on("click", function() {
        var gScore = $("#GCrys").val();
        scoreCalc(gScore);
      
      });

      $("#YCrys").on("click", function() {
        var yScore = $("#YCrys").val();
        scoreCalc(yScore);
        
       
      });

 });

  
