import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

galleryEl.addEventListener('click', onGalleryClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
      </div>`;
    })
    .join('');
}

function onGalleryClick(evt) {
  evt.preventDefault();
  const imageEl = evt.target.classList.contains('gallery__image');
  if (!imageEl) {
    return;
  }

  const imgSource = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imgSource}" width="1280" height="720">`,
    {
      closable: false,
    },
  );

  instance.show();

  document.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}
