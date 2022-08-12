import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  galleryItems.array.forEach(({ preview, original, description }) => {
    return;
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
      </div>`;
  });
}
