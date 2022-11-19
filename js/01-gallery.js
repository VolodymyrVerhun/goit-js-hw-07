import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('div');
galleryEl.addEventListener('click', onClick);

 const galleryMarkup = galleryItems.map(galleryElMarkup).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function galleryElMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a> 
  </div>`;
}

function onClick(event) {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG')
    return;

    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`, {
    onShow: instance => { window.addEventListener('keydown', onCloseModel);
    instance.element().querySelector('img').onclick = instance.close;
},
    onClose: instance => {window.removeEventListener('keydown', onCloseModel);},
    });
    

    function onCloseModel(e) {
        if(e.code === 'Escape') {instance.close();
        }
    }
    instance.show();
};
