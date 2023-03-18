const container = document.querySelector('.container');
const gambarbesar = document.querySelector('.gambarbesar');

container.addEventListener('click', function (e) {
    if (e.target.className == ('.gambarbesar')) {
        gambarbesar.src = e.target.src;
    }
});
