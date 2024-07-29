document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#f8eee4'; // لون خلفية الرأس عند التمرير لأسفل
        } else {
            header.style.backgroundColor = 'rgb(255, 255, 255)'; // اللون الأصلي
        }
    });
});
