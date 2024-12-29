const firstPage = document.querySelector('.first-page');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; 

    const zoomScale = 1 + scrollY * -0.001; 
    const translateY = scrollY * -0.5; 

    firstPage.style.transform = `scale(${zoomScale}) translateY(${translateY}px)`;
});

document.querySelectorAll('.bottom-section img').forEach(img => {
    img.addEventListener('click', () => {
        const title = img.getAttribute('data-title');
        const description = img.getAttribute('data-description');
        const src = img.getAttribute('src');

        document.getElementById('book-title').textContent = title;
        document.getElementById('book-title').style.fontSize = "clamp(1.5rem, 1vw, 2.5rem)";
        document.getElementById('book-description').textContent = description;
        document.getElementById('image').setAttribute('src', src);

        document.getElementById('image').style.width = "100%";
        document.getElementById('image').style.height = "15%";
        document.getElementById('book-description').style.marginTop = "30%";
        document.getElementById('book-description').style.fontSize = "20px";
        document.getElementById('book-description').style.display = "flex";
        document.getElementById('book-description').style.textAlign = "justify";
        document.getElementById('book-description').style.maxWidth = "45ch";
    });
});


