// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textArea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
newTitle = document.cookie || 0
var newTitle = nameSpan.textContent


textArea.value = localStorage.getItem('textarea')



formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
    localStorage.setItem('textarea', textArea.value)
    document.cookie = newTitle.textContent

  
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  textArea.innerHTML = ""
  localStorage.clear()
  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp