// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

window.addEventListener('load' , () => {
const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdown = document.querySelector('#dropdown1');
dropdownBtn.addEventListener('click', function(e) {
    e.preventDefault()
    dropdown.classList.toggle('invisible')
})
})