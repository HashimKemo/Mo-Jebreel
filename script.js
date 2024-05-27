document.addEventListener('DOMContentLoaded', () => {
    const ham = document.querySelector('.ham')
    const nav = document.querySelector('.nav');
    const a = document.querySelectorAll('.nav a');
    
    function toggleNav() {
        nav.classList.toggle('active');
        nav.style.display = nav.classList.contains('active') ? 'flex' : 'none';
        ham.classList.toggle('secondC');
    }

    ham.addEventListener('click', toggleNav);
    a.forEach(e => {
        e.addEventListener('click', toggleNav)
    });
})


