

const newCards = [
    {
        picture: 'https://i.1.creatium.io/14/59/2d/7a1c484a5de50e5c436b26554e2ad9cb70/nastol.com_.ua-223487.jpg',
        data: '01/03/2024',
        headerNews: 'Semper eu pulvinar eget integer',
        descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

    },
    {
        picture: 'https://flagman-news.ru/news/2022050411_cover.jpg',
        data: '25/06/2024',
        headerNews: 'Semper eu pulvinar eget integer',
        descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

    },
    {
        picture: 'https://www.infranews.ru/wp-content/uploads/2016/04/port.jpg',
        data: '25/03/2023',
        headerNews: 'Semper eu pulvinar eget integer',
        descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

    },
    {
        picture: 'https://prognosist.ru/wp-content/uploads/2023/05/nmtp-4.jpg',
        data: '25/03/2023',
        headerNews: 'Semper eu pulvinar eget integer',
        descriptionNews: 'Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.',

    }
];


var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true
});

const newsCardContainer = document.querySelector('.news-card-container');
for (let i=0;i<newCards.length;i++) {
    const newDiv = document.createElement('div');
    newsCardContainer.appendChild(newDiv);
    newDiv.outerHTML = `
        <div class="news-card">
        <img  class='img-news' src="${newCards[i].picture}"/>
        <div class="news-date">${newCards[i].data}</div>
        <div class="header-news">${newCards[i].headerNews}</div>
        <div class="description-news">${newCards[i].descriptionNews}</div>
        </div>
        `
    
}    

