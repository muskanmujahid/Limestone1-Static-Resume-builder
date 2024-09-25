const toggleButton = document.getElementById('skills-btn') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', (event) => {
    console.log(skills.style.display);
    
    if (skills.style.display == 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
})

