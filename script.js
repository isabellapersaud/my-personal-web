function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';
}
const input = document.getElementById('button');
input.addEventListener('click', function() {
    alert('I was clicked!');
});


