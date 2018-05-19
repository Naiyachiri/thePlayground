//TODO: mouseover coloring


// function declarations
function handleColorPick(event) { // event handler for color well
  $('#colorPicker').change(function (event) {
    let selectedColor = event.target.value;
    console.log(selectedColor);
    $('#colorPicker').attr("value", selectedColor); // storing our color in the attr for other functions to use// call
    resetColorization();
  })
}

//cleaner function for the canvas - resets colorization so that following a color change first click changes to selected color rather than secondary
function resetColorization() {
  console.log('resetting colorization ...');
  // after learning about .querySelector(), I used it here because it requires me to use less to target intended table elements
  const pixelCanvas = document.querySelector('#pixelCanvas'); // setup constant reference for following loop
  for (var i = 0; i < pixelCanvas.childNodes.length; i++) { // iterates through each row of our canvas
    let row = pixelCanvas.childNodes[i]; // sets up constant for following loop
    for (var k = 0; k < row.childNodes.length; k++) { // iterates through each pixel for the row
      let classes = row.childNodes[k]; // save classes per pixel to begin searching for keyword to clear
      if (classes.classList.contains('colorized')) { // if pixel is colorized...
        classes.classList.remove('colorized'); // remove the class colorized
      }
    }
  }
}

function handleCanvasPick(event) { // event handler for color well
  $('#canvasPicker').change(function (event) {
    let selectedColor = event.target.value;
    console.log(selectedColor);
    $('#canvasPicker').attr("value", selectedColor); // storing our color in the attr for other functions to use// call
  });
}

function handleBorderPick(event) {
  $('#borderPicker').change(function (event) {
    let selectedColor = event.target.value;
    console.log(selectedColor);
    $('#borderPicker').attr("value", selectedColor); // storing our color in the attr for other functions to use// call
    let borderOutput = "1px solid " + selectedColor;
    setPixelBorder();
  });
}

function handleInputHeight(event) { // event handlers for changes in height
  $('#inputHeight').change(function (event) {
    let selectedHeight = event.target.value;
    $('#inputHeight').attr("value", selectedHeight); // sets the value of the dom element to match changes
    console.log(selectedHeight); // debug log
  });
}

function handleInputWidth(event) { // event handler for changes in width
  $('#inputWidth').change(function (event) {
    let selectedWidth = event.target.value;
    $('#inputWidth').attr("value", selectedWidth);
    console.log(selectedWidth); // debug log
  });
}

function handlePixelClick() {
  let targetId = "#" + event.target.id; //create a var to store the current element's ID
  let colorState = event.target.className; // create a variable that holds the current element's classes
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
  let borderOutput = "1px solid " + $('#borderPicker').attr("value");
  $('.pixel').css('border', borderOutput); // sets border styles to selected
}

$('#colorPicker').click(handleColorPick(event)); // setting up listener for colorPicker

$('#canvasPicker').click(handleCanvasPick(event)); // setting up listener for canvasPicker

$('#borderPicker').click(handleBorderPick(event)); // setting up listener for borderPicker

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

  const height = $('#inputHeight').attr('value'); // height determines rows
  const width = $('#inputWidth').attr('value'); // width determines columns
  const color = $('#colorPicker').attr('value'); // sets canvas color
  const rowStart = "<tr>"; // opening row tag
  const rowEnd = "</tr>";//closing row tag
  // <td id='pixel[row][column]'></td>
 
  // another way to build the table is to use document.insertAdjacentHTML(position, value)
$('#pixelCanvas').html(''); // clears canvas
let contents = "";
for (let i = 0; i < height; i++) { // create each pixel on canvas
  contents += rowStart; // add the opening tr tags to our content variable
  for (let x = 0; x < width; x++) {
    let id = "r" + i + "c" + x; // determines each pixel's id
    let column = "<td class='pixel' id=" + id + "></td>"; // basic output to create each td element
    contents += column; // add column to the contents
  }
  contents += rowEnd; // enclose the columns in the tr tag
}
$('#pixelCanvas').html(contents); // applies the customized contents to our canvas
$('td').css('background-color', $('#canvasPicker').attr('value')); // sets default pixel colors



$(document).ready(function () { //makes sure DOMs are loaded before we assign the event listener
    $('.pixel').click(function (event) { // listen to clicks per pixel
      handlePixelClick(event); // handler function
    });
  });
}

$(document).ready(function () {
  const element = $("#html-content-holder"); // global variable
  let getCanvas; // global variable
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
    let imgageData = getCanvas.toDataURL("image/png");
    let newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    dwnld.attr("download", "yourPixelArt.png").attr("href", newData);
  });
});