
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

makeGallery();

function makeGallery() {
  const images = galleryItems
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`
    )
    .join("");
  gallery.insertAdjacentHTML("afterbegin", images);
}

let lightbox = new SimpleLightbox(`.gallery a`, {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});