var toggleButton = document.getElementById('skills-btn');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function (event) {
    console.log(skills.style.display);
    if (skills.style.display == 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
