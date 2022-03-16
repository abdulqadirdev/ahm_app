const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdown = document.querySelector('#dropdown1');
dropdownBtn.addEventListener('click', function(e) {
    e.preventDefault()
    dropdown.classList.toggle('invisible')
})
console.log('working')