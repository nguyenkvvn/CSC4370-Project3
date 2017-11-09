var gameStarted = 0;
//Nomatteus GameOfLifeObject, unintialized for now.
var game;
var interval;

function startGame()
{
  gameStarted = 1;
  stepOne();
}
function resetGame()
{
  gameStarted = 0;
  makeTable();
  clearInterval(interval);
}
// stepOne() can be called by the user or from another method. It takes a step in the generation.
function stepOne()
{
  //game logic should go here
  game.step();
}
// stepGen() is called when the user submits the generation step form
function stepGen()
{
  //get the number of steps desired from the "generations" number entry
  var step = $(".generations").attr("value");
  //step forward that many generations
  for (i = 0; i <= step; i+= 1)
  {
    stepOne();
  }
}

// makeTable() is called when the user submits the table size form.
function makeTable()
{
  alert("Function is working.");
  //replace the "gameTable" with a script to create the desired rows and elements
  //I recommend using nested for loops to create the HTML table script.
  //I leave this for you to do in case the libary we import requires special tagging to the table cells.
  var table = document.getElementById("gameTable");
  var rowNum = document.getElementById("tableRowIn");
  var colNum = document.getElementById("tableColIn");

  //make the game table array
  var gameArray = makeTableArray(rowNum, colNum);
  initializeGame(gameArray);

  //make the html array
  makeTableHTML(table);
}

function initializeGame(inArray)
{
  var params =
  {
    canvas_id: "life",
    cell_width: 10,
    cell_height: 10,
    init_cells: inArray
  };
  game = new GameOfLife(params);
  alert("Function is working.");
}

function makeTableHTML(target)
{
  //TO-DO html replacement logic

}

function makeTableArray(rowN, colN)
{
  //make the array to return
  var madeArray = [];

  for (r = 0; r < rowN; r+= 1)
  {
    rowArray = [];
    for (c = 0; c < colN; c+= 1)
    {
      rowArray.push(0);
    }
    madeArray.push(rowArray);
  }

  //actually return the array
  return madeArray;
}

alert("Script is working.");

//Table Click Script
//code sourced from: https://stackoverflow.com/questions/21033368/javascript-onclick-event-html-table
/*var table = document.getElementById("gameTable");
if (table != null) {
    for (i = 0; i < table.rows.length; i+= 1) {
        for (j = 0; j < table.rows[i].cells.length; j+= 1)
        table.rows[i].cells[j].onclick = function ()
        {
            //INSERT CELL "clicked on" LOGIC HERE
            //Andrew, I recommend
        };
    }
}*/
