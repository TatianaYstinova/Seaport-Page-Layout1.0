/* let previousButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let newsCardContainer = document.querySelector('.news-card-container');

let currentIndex = 0;

// Функция для обновления слайдера
function updateSlider() {

    for (let i = 0; i < newsCardContainer.children.length; i++) {
        newsCardContainer.children[i].classList.remove('active');
    }

    // Показываю текущую новость
    if (currentIndex === -1) {
        currentIndex = 0; // Если мы достигли конца, возвращаемся к первой новости
    } else if (currentIndex >= newsCardContainer.children.length) {
        currentIndex = newsCardContainer.children.length - 1; // Если мы достигли начала, переходим к последней новости
    }
    newsCardContainer.children[currentIndex].classList.add('active');
}
function backToTheBeginning() {
    currentIndex--;
    updateSlider();
}
function backToTheBeginning1() {
    currentIndex++;
    updateSlider();
}

// Обработчик клика на кнопку "Предыдущая"
previousButton.addEventListener('click', backToTheBeginning);

// Обработчик клика на кнопку "Следующая"
nextButton.addEventListener('click', backToTheBeginning1); */



const burgerMenu = document.querySelector('#burger-menu-button');
const menuNavigationEnumeration = document.querySelector('.menu-navigation')

function openMenu() {
    menuNavigationEnumeration.classList.toggle('opend');
}
function closeMenu() {
    if (menuNavigationEnumeration.classList.contains('opend')) {
        menuNavigationEnumeration.classList.remove('opend')
    }
}
document.addEventListener('click', function (event) {
    if (!event.target.closest('#burger-menu-button')) {
        closeMenu();
    }
})
