import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map(
      item => `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a></li>`
    )
    .join('');
}
gallery.innerHTML = createGallery(galleryItems);
//gallery.style.listStyle = 'none';
//Vanilla JavaScript Plugin
const lightbox = new SimpleLightbox('.gallery a', {
  //Options
  captionsData: 'alt',
  captionDelay: 250,
});
