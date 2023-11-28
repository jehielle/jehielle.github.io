const button = document.getElementById('no');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});

const popup = document.getElementById('yes');
popup.addEventListener('click', function () {
    alert('Yay! <3')
})
