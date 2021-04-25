const heartEmpty = document.querySelector('.heart-empty')
const heartFull = document.querySelector('.heart-full')


heartEmpty.addEventListener('click', function() {
    heartEmpty.style.display = 'none';
    heartFull.style.display = 'block'
})

heartFull.addEventListener('click', function() {
    heartEmpty.style.display = 'block';
    heartFull.style.display = 'none'
})