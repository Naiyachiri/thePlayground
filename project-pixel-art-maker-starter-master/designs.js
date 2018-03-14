//TODO: mouseover coloring


// function declarations
function handleColorPick(event) { // event handler for color well
  $('#colorPicker').change(function (event) {
    var selectedColor = event.target.value;
    console.log(selectedColor);
    $('#colorPicker').attr("value", selectedColor); // storing our color in the attr for other functions to use// call
  })
}

function handleCanvasPick(event) { // event handler for color well
  $('#canvasPicker').change(function (event) {
    var selectedColor = event.target.value;
    console.log(selectedColor);
    $('#canvasPicker').attr("value", selectedColor); // storing our color in the attr for other functions to use// call
  });
}

function handleBorderPick(event) {
  $('#borderPicker').change(function (event) {
    var selectedColor = event.target.value;
    console.log(selectedColor);
    $('#borderPicker').attr("value", selectedColor); // storing our color in the attr for other functions to use// call
    var borderOutput = "1px solid " + selectedColor;
    setPixelBorder();
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

function handlePixelClick() {
  var targetId = "#" + event.target.id; //create a var to store the current element's ID
  var colorState = event.target.className; // create a variable that holds the current element's classes
  //console.log(event.target.className);
  console.log(colorState.split(' ').indexOf('colorized') !== -1);
  if (colorState.split(' ').indexOf('colorized') !== -1) { // checks if pixel previously colored using class name 'colorized'
    $(targetId).toggleClass('colorized');
    $(targetId).css("background-color", $('#canvasPicker').attr("value")); // resets pixel selected color
  } else {
    $(targetId).css("background-color", $('#colorPicker').attr("value"));
    $(targetId).toggleClass('colorized');
  }
  //alert(targetId);
}
/*
function handleDownload(event) {
  const target = $('#canvas-holder');
  html2canvas(target, { onrendered: function(canvas) {
    prev.append("<h3> Preview: </h3>)";
    prevImg.append(canvas);
    getCanvas = canvas;
    }
  });
}
*/
// end function handler function declarations

function setPixelBorder() {// function to set the border according to the picked color
  var borderOutput = "1px solid " + $('#borderPicker').attr("value");
  $('.pixel').css('border', borderOutput); // sets border styles to selected
}

$('#colorPicker').click(handleColorPick(event)); // setting up listener for colorPicker

$('#canvasPicker').click(handleCanvasPick(event)); // setting up listener for canvasPicker

$('#borderPicker').click(handleBorderPick(event));

$('#inputHeight').click(handleInputHeight(event)); // event listener for height

$('#inputWidth').click(handleInputWidth(event)); // event listener for width


//$('#download').click(handleDownload(event));

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault(); // prevents page from refreshing
  makeGrid(); // calls our function to generate our canvas
  setPixelBorder(); // sets border of the grid (required because make grid wipes previous grid)
});

function makeGrid() {

  var height = $('#inputHeight').attr('value'); // height determines rows
  var width = $('#inputWidth').attr('value'); // width determines columns
  var color = $('#colorPicker').attr('value'); // sets canvas color

  var rowStart = "<tr>"; // opening row tag
  var rowEnd = "</tr>";//closing row tag
  // <td id='pixel[row][column]'></td>
  $('#pixelCanvas').html(''); // clears canvas
  for (var i = 0; i < height; i++) { // create each pixel on canvas
    $('#pixelCanvas').append(rowStart);
    for (var x = 0; x < width; x++) {
      var id = "r" + i + "c" + x; // determines each pixel's id
      var column = "<td class='pixel' id=" + id + "></td>"; // basic output to create each td element
      $('#pixelCanvas').append(column);
    }
    $('#pixelCanvas').append(rowEnd);// end row
    $('td').css('background-color', $('#canvasPicker').attr('value')); // sets default pixel colors
  }
  $(document).ready(function () { //makes sure DOMs are loaded before we assign the event listener
    $('.pixel').click(function (event) { // listen to clicks per pixel
      handlePixelClick(event); // handler function
    });
  });
}

$(document).ready(function () {
  const element = $("#html-content-holder"); // global variable
  var getCanvas; // global variable
  const btnPrev = $("#btnPrev");
  const dwnld = $("#download");
  const prev = $("#prev");
  const prevImg = $("#previewImage");

  btnPrev.on('click', function () {
    //Clear the former grid
    prev.children().remove();
    prevImg.children().remove();
    html2canvas(element, {
      onrendered: function (canvas) {
        prev.append("<h3>Preview :</h3>"); // creates a title
        prevImg.append(canvas);
        getCanvas = canvas;
      }
    });
  });

  dwnld.on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    dwnld.attr("download", "yourPixelArt.png").attr("href", newData);
  });
});