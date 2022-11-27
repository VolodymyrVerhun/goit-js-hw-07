import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('ul');

const galleryElMarkup = ( preview, original, description ) => 
  `<li class="gallery__link">
  <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
      </a> 
  </li>`;
;

const render = () => {
  const arrayFromListTemplate = galleryItems.map(item => galleryElMarkup(item.preview, item.original, item.description));
  listEl.innerHTML = arrayFromListTemplate.join('');
};
render();


const galleryEl = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});