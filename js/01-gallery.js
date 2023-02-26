import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector("div.gallery");
const imageGallery = galleryItems
  .map(
    (image) => `<div class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", imageGallery);

gallery.addEventListener("click", selectImgages);

function selectImgages(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const selectedImgSource = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${selectedImgSource}" width="1400" height="900">`,
      {
        onShow: () => {
          window.addEventListener("keydown", escapeKey);
        },
        onClose: () => {
          window.removeEventListener("keydown", escapeKey);
        },
      }
    );

    const escapeKey = (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    };

    instance.show();
  }
}
