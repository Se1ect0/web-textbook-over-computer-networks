document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.querySelector(".animated-text");
    setTimeout(function() {
        animatedText.classList.add("show"); 
    }, 100);
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollDown = document.querySelector('.scroll-down');
    
    scrollDown.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal-feedback");
    const btnForm = document.getElementById("open-modal-feedback");
    

    btnForm.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.add("show-feedback");
        setTimeout(() => {
            modal.classList.remove("show-feedback");
        }, 3000);
    });
});