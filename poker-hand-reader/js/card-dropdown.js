/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drpdwn() {
  document.getElementById("card-dropdown").classList.toggle("show");
}

function filterCard(event) {
  if (event.key === 'Enter') {
    //submit card
    console.log('enter logged');
  }

  var input, filter, ul, li, a, i;
  input = document.getElementById("card-dropdwn-query");
  filter = input.value.toUpperCase();
  div = document.getElementById("card-dropdown");
  a = div.getElementsByTagName("li");
  for (i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}