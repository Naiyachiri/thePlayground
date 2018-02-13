// function declarations
function handleColorPick(event){ // event handler for color well
  $('#colorPicker').change(function (event){
    var selectedColor = event.target.value;
  console.log(selectedColor);
  $('#colorPicker').attr("currentColor", selectedColor); // storing our color in the attr for other functions to use// call
  })
}

function handleCanvasPick(event) { // event handler for color well
  $('#canvasPicker').change(function (event) {
    var selectedColor = event.target.value;
    console.log(selectedColor);
    $('#canvasPicker').attr("canvasColor", selectedColor); // storing our color in the attr for other functions to use// call
  });
}

function handleInputHeight(event) { // event handlers for changes in height
  $('#inputHeight').change(function (event) {
      var selectedHeight = event.target.value;
      $('#inputHeight').attr("value", selectedHeight); // sets the value of the dom element to match changes
      console.log(selectedHeight); // debug log
  });
}

function handleInputWidth(event) { // event handler for changes in width
  $('#inputWidth').change(function (event) {
    var selectedWidth = event.target.value;
    $('#inputWidth').attr("value", selectedWidth);
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
      $(targetId).css("background-color", $('#canvasPicker').attr("canvasColor")); // resets pixel selected color
    } else {
      $(targetId).css("background-color", $('#colorPicker').attr("currentColor"));
      $(targetId).toggleClass('colorized');
    }
  //alert(targetId);
}

function handleSubmit(event){
  if($('#colorPicker').attr("currentColor") == undefined){
    alert('Please choose a color first!');
    return;
  }
  event.preventDefault();
}

// end function declarations

$('#colorPicker').click(handleColorPick(event)); // setting up listener for colorPicker

$('#canvasPicker').click(handleCanvasPick(event)); // setting up listener for canvasPicker

$('#inputHeight').click(handleInputHeight(event)); // event listener for height

$('#inputWidth').click(handleInputWidth(event)); // event listener for width

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  event.preventDefault(); // prevents page from refreshing
  makeGrid(); // calls our function to generate our canvas
});

function makeGrid() {
  var height = $('#inputHeight').attr("value"); // height determines rows
  var width = $('#inputWidth').attr("value"); // width determines columns
  var color = $('#colorPicker').attr("value"); // sets canvas color

  var rowStart = "<tr>"; // opening row tag
  var rowEnd = "</tr>";//closing row tag
// <td id='pixel[row][column]'></td>

  $('#pixelCanvas').html(''); // clears canvas
  for (var i = 0; i < height; i++){ // create each pixel on canvas
    $('#pixelCanvas').append(rowStart);
    for(var x = 0; x < width; x++){
      var id = "r"+i+"c"+x; // determines each pixel's id
      var column = "<td class='pixel' id="+ id +"></td>"; // basic output to create each td element
      $('#pixelCanvas').append(column);
    }
    $('#pixelCanvas').append(rowEnd);// end row
    $('td').css('background-color', $('#canvasPicker').attr("canvasColor")); // sets default pixel colors
  }
  $(document).ready(function(){ //makes sure DOMs are loaded before we assign the event listener
    $('.pixel').click(function(event){ // listen to clicks per pixel
      handlePixelClick(event); // handler function
    });
  });


}
