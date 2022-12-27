var itemNo=1;
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
if(myNodelist.length===0){
	document.getElementById("btns").style.display="none";
}
var i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].id=itemNo;
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.setAttribute("onclick","remove("+itemNo+")");
  myNodelist[i].appendChild(span);
  itemNo++;
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  document.getElementById("btns").style.display="flex";
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.id=itemNo;
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.setAttribute("onclick","remove("+itemNo+")");
  span.appendChild(txt);
  li.appendChild(span);
  itemNo++;
} 
function remove(id){
  document.getElementById(id).remove();
  if(document.getElementsByTagName("LI").length===0){
  	document.getElementById("btns").style.display="none";
  }
}
function done(){
  var val=document.getElementById('check');
  console.log(val);
}

function sortListAsc() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
function sortListDesc() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list items:
    for (i = 0; i < (b.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
