const btnMobile =  document.getElementById('btn-mobile');

function toggleMenu(){
    const nav =  document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
