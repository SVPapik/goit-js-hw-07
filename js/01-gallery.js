import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
      </div>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup());

galleryEl.addEventListener('click', onGalery);

function onGalery(evt) {
  evt.PreventDefault();
  if (evt.target.classList !== 'gallery__image') {
    return;
  }
}
