import $ from 'jquery'

//Function to return the page using href link
function getPage(link) {
  if (link === '/') return document.querySelector('.container.home')
  else return document.querySelector('.container.' + link.slice(1))
}

function slideLoader() {
  setTimeout(() => {
    //1. SLide Loader in 0s
    $('.preloader').addClass('slide-in')

    //2. Pausing all the animations of the next page to be loaded
    var next_page = getPage(document.location.pathname)
    next_page.classList.add('pause')
    var children = next_page.querySelectorAll('*')
    children.forEach((child) => {
      child.classList.add('pause')
    })

    //3. Resume the animations of the page before it is loaded
    setTimeout(() => {
      next_page.classList.remove('pause')
      children.forEach((child) => {
        child.classList.remove('pause')
      })
    }, 1000)

    //4 . Remove the loader in 1700ms
    setTimeout(() => {
      $('.preloader').removeClass('slide-in')
    }, 1800)
  }, 0)
}

$(function () {
  var navLinks = document.querySelectorAll(
    '.nav-bar .nav-link, .home .flat-button'
  )

  navLinks.forEach((element) => {
    $(element).on('click', (e) => {
      var current_link = $(e.target).attr('href')
      var location = document.location.pathname

      if (current_link !== location) {
        // 1.Unload the current page in 300ms (Animation not implemented)
        // 2. Slide in the loader and slide out in 1700ms
        // 3. Load the next page (Animation not implemented)

        slideLoader()
      }
    })
  })
})
