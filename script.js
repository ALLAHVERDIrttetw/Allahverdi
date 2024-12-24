document.addEventListener("DOMContentLoaded", function() {
    // Sayt tam yükləndikdən sonra çalışacaq
    console.log("Kraker - Texnologiya və İdeyalar platformasına xoş gəlmisiniz!");

    // Hava kabarcıkları üçün dinamik əlavə
    const bubbleContainer = document.createElement('div');
    bubbleContainer.classList.add('bubbles');
    document.body.appendChild(bubbleContainer);

    // Kabarcıkları dinamik olaraq əlavə et
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('span');
        const size = Math.random() * 50 + 10; // Kabarcıq ölçüsü (10px-60px)
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`; // Ekran boyunca random yerləşim
        bubble.style.animationDelay = `${Math.random() * 5}s`; // Rastgele animasiya gecikməsi
        bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Rastgele animasiya müddəti
        bubbleContainer.appendChild(bubble);
    }
});
