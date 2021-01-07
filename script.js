// Main goal is just to switch the panel to active class on click

// querySelectorAll selects ALL the matching queries (not just the first one) 
// and puts them into a NodeList array. 
// We can console.log(panels) and see an array of all the selected
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  // We want to add an eventListener to each panel that would listen for a click event 
  // and when that happens, run a function that removes all the current classes
  // then add an active class to the selected panel
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}