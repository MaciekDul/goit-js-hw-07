import { galleryItems } from "./gallery-items.js";
// Change code below this line

const SimpleLight = document.querySelector("ul.gallery");

const SimpleLightGallery = galleryItems
  .map(
    (image) =>
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
  )
  .join("");

SimpleLight.insertAdjacentHTML("afterbegin", SimpleLightGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captiondelay: 250,
});
