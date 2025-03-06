// script.js
document.addEventListener("DOMContentLoaded", () => {
    // إضافة تأثير عند تمرير الماوس على الأفلام
    const movieItems = document.querySelectorAll('.movie-item');

    movieItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = "scale(1)";
        });
    });
});