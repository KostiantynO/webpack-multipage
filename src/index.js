// @ts-check
import './scss/main.scss';
// import './html/users.html';
// import './html/goods.html';
// import './html/orders.html';
// import './html/contacts.html';
// import './html/about.html';

class Game {
  name = 'Violin Charades';
}
const myGame = new Game();
const p = `I like ${myGame.name}`;

import jpeg from './images/photos/project-1-mobile-450x294.jpg';
import webp from './images/photos/project-1-mobile-450x294.webp';
import avif from './images/photos/activity-1.avif';

const images = [
  { src: jpeg, alt: 'jpeg' },
  { src: webp, alt: 'webp' },
  { src: avif, alt: 'avif' },
];

const genImgs = arr =>
  arr.map(i => `<img src="${i.src}" alt"${i.alt}">`).join('');
const imagesMarkup = genImgs(images);

const heading = `<h1 class="section__title">Interesting! Webpack Basics - this is our HTML</h1>`;

const app = document.querySelector('#root');
import sprite from './images/svg/sprite.svg';

const svgPath = `${sprite}#icon-search`;

const svg = `<svg fill="red" width="100" height="100"><use href="${svgPath}"></use></svg>`;

// app.append(heading, p, imagesMarkup, svg);
app.insertAdjacentHTML('beforeend', [heading, p, imagesMarkup, svg].join(''));
