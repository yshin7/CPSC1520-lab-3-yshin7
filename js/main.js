const resources = document.querySelector('#resources');
const showResourceBtn = document.querySelector('#show-resources');

showResourceBtn.addEventListener('click', showResources);
resources.addEventListener('mouseover', makeBold)
resources.addEventListener('mouseout', removeBold)
resources.addEventListener('click', makeItalicized)
resources.addEventListener('mouseout', removeItalicized)

function showResources() {
    resources.classList.remove('d-none');
}

function makeBold(e) {
    console.log(e.target);
    e.target.classList.add('fw-bold');
}

function removeBold(e) {
    console.log(e.target);
    e.target.classList.remove('fw-bold');
}

function makeItalicized(e) {
    console.log(e.target);
    e.target.classList.add('fst-italic');
}

function removeItalicized(e) {
    console.log(e.target);
    e.target.classList.remove('fst-italic');
}