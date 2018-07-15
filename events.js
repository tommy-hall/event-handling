// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one()
  two()
  three()
  four()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION two HERE
function two () {
  // First, we have to find the element:
  var two = document.getElementById('two')

  // Next, we add an event listener to it:
  two.addEventListener('mouseenter', makeGreen)

  // Finally, we add one to make the colour white again
  two.addEventListener('mouseleave', makeWhite)
}



// CREATE FUNCTION three HERE
function three () {
  // First, we have to find the element:
  var three = document.getElementById('three')

  // Next, we add an event listener to it:
  three.addEventListener('mouseenter', makeOrange)

  // Finally, we add one to make the colour white again
  three.addEventListener('mouseleave', makeWhite)
}

// CREATE FUNCTION four HERE
function four () {
  // First, we have to find the element:
  var four = document.getElementById('four')

  // Next, we add an event listener to it:
  four.addEventListener('click', makeRed)

  // Finally, we add one to make the colour white again
  four.addEventListener('mouseleave', makeWhite)
}

// Changes the background color of event's target
function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange'
}

function makeRed (evt) {
  evt.target.style.backgroundColor = 'red'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
