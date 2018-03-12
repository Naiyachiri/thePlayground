/*
* /TODO : Implement mouseover coloring of pixels, move dom selectors to top of code, use $variable names, use const, generate a variable which is appended rather than a loop appending directly to DOM elements
* */

//DOM selectors with JQUERY
const $colorPicker = $('#colorPicker');
const $canvasPicker = $('#canvasPicker');
const $borderPicker = $('#borderPicker');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $sizePicker = $('#sizePicker');
const $pixelCanvas = $('#pixelCanvas');
// function declarations
function handleColorPick(event){ // event handler for color well
  $colorPicker.change(function (event){
    var selectedColor = event.target.value;
  console.log(selectedColor);
    $colorPicker.attr("value", selectedColor); // storing our color in the attr for other functions to use// call
  })
}

function handleCanvasPick(event) { // event handler for color well
  $canvasPicker.change(function (event) {
    var selectedColor = event.target.value;
    console.log(selectedColor);
    $canvasPicker.attr("value", selectedColor); // storing our color in the attr for other functions to use// call
  });
}

function handleBorderPick(event){
  $borderPicker.change(function (event) {
    var selectedColor = event.target.value;
    console.log(selectedColor);
    $borderPicker.attr("value", selectedColor); // storing our color in the attr for other functions to use// call
    var borderOutput = "1px solid " + selectedColor;
    setPixelBorder();
  });
}

function handleInputHeight(event) { // event handlers for changes in height
  $inputHeight.change(function (event) {
      var selectedHeight = event.target.value;
    $inputHeight.attr("value", selectedHeight); // sets the value of the dom element to match changes
      console.log(selectedHeight); // debug log
  });
}

function handleInputWidth(event) { // event handler for changes in width
  $inputWidth.change(function (event) {
    var selectedWidth = event.target.value;
    $inputWidth.attr("value", selectedWidth);
    console.log(selectedWidth); // debug log
  });
}

function handlePixelClick(event){
    var targetId = "#"+event.target.id; //create a var to store the current element's ID
    var colorState = event.target.className; // create a variable that holds the current element's classes
    //console.log(event.target.className);
    console.log(colorState.split(' ').indexOf('colorized') !== -1);
    if (colorState.split(' ').indexOf('colorized') !== -1) { // checks if pixel previously colored using class name 'colorized'
      $(targetId).toggleClass('colorized');
      $(targetId).css("background-color", $canvasPicker.attr("value")); // resets pixel selected color
    } else {
      $(targetId).css("background-color", $colorPicker.attr("value"));
      $(targetId).toggleClass('colorized');
    }
  //alert(targetId);
}

// end function handler function declarations

function setPixelBorder(){// function to set the border according to the picked color
  var borderOutput = "1px solid " + $borderPicker.attr("value");
  $('.pixel').css('border', borderOutput); // sets border styles to selected
}

$colorPicker.click(handleColorPick(event)); // setting up listener for colorPicker

$canvasPicker.click(handleCanvasPick(event)); // setting up listener for canvasPicker

$borderPicker.click(handleBorderPick(event));

$inputHeight.click(handleInputHeight(event)); // event listener for height

$inputWidth.click(handleInputWidth(event)); // event listener for width

// When size is submitted by the user, call makeGrid()
$sizePicker.submit(function(event){
  event.preventDefault(); // prevents page from refreshing
  makeGrid(); // calls our function to generate our canvas
  setPixelBorder(); // sets border of the grid (required because make grid wipes previous grid)
});

function makeGrid() {

  var height = $inputHeight.attr("value"); // height determines rows
  var width = $inputWidth.attr("value"); // width determines columns
  var color = $sizePicker.attr("value"); // sets canvas color

  var rowStart = "<tr>"; // opening row tag
  var rowEnd = "</tr>";//closing row tag
    // <td id='pixel[row][column]'></td>
  $pixelCanvas.html(''); // clears canvas
  for (var i = 0; i < height; i++){ // create each pixel on canvas
    $pixelCanvas.append(rowStart);
    for(var x = 0; x < width; x++){
      var id = "r"+i+"c"+x; // determines each pixel's id
      var column = "<td class='pixel' id="+ id +"></td>"; // basic output to create each td element
      $pixelCanvas.append(column);
    }
    $pixelCanvas.append(rowEnd);// end row
    $('td').css('background-color', $canvasPicker.attr("value")); // sets default pixel colors
  }
  $(document).ready(function(){ //makes sure DOMs are loaded before we assign the event listener
    $('.pixel').click(function(event){ // listen to clicks per pixel
      handlePixelClick(event); // handler function
    });
  });
}