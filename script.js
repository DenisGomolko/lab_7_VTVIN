// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Обработка формы подписки
    const subscriptionForm = document.querySelector('.subscription-form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Спасибо за подписку! На ${email} будут приходить новости о новых коллекциях.`);
                this.reset();
            }
        });
    }
    
    // Анимация при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.watch-card, .arrival-card, .brand-card');
        
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Начальные стили для анимации
    const animatedElements = document.querySelectorAll('.watch-card, .arrival-card, .brand-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    // Имитация добавления в корзину
    document.querySelectorAll('.watch-card, .arrival-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                const title = this.querySelector('h3').textContent;
                const price = this.querySelector('.watch-price, .price').textContent;
                
                if (confirm(`Добавить "${title}" за ${price} в корзину?`)) {
                    alert('Товар добавлен в корзину!');
                }
            }
        });
    });
    
    // Обновление года в копирайте
    const yearElement = document.querySelector('.copyright p');
    if (yearElement) {
        yearElement.textContent = yearElement.textContent.replace('2025', new Date().getFullYear());
    }
});