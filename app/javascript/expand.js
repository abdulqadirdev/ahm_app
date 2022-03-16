const expandArea = document.querySelector('#expand-area')
expandArea.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.matches('.expend-btn')){
        e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('active')
        e.target.classList.toggle('active')
        if(e.target.classList.contains('active')){
            e.target.innerText = "-"
        }else {
            e.target.innerText = "+"
        }
    }
})