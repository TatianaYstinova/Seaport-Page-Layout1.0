


const newsCardContainer = document.querySelector('.news-card-container');

for(let i = 0; i < newsCardContainer.children.length; i++){
    const newDiv = document.createElement('div');
    newsCardContainer.appendChild(newDiv);
    newDiv.outerHTML = `
    <div class="newsletter">
    <img  class='img-news' src="./img/новость1.png"/>
    <div class="news-date">
    <div class="text-news">
        <div class="header-news">Semper eu pulvinar eget integer</div>
        <div class="description-news">Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.</div>
        </div>`

}