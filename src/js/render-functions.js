import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('#gallery'); 
const loader = document.querySelector('#loader'); 


export function renderGallery(images) {
  const markup = images.slice(0, 9).map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${likes}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${views}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${comments}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${downloads}</p>
          </div>
        </div>
      </li>
    `;
  }).join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    closeText: '✖',  
    close: true,    
    showCounter: false 
  });

  
  lightbox.on('open', () => {
    const lightboxOverlay = document.querySelector('.sl-overlay');
    
    if (lightboxOverlay && !document.querySelector('.sl-close')) {
      const closeButton = document.createElement('button');
      closeButton.classList.add('sl-close');
      closeButton.innerHTML = '✖'; 
      closeButton.addEventListener('click', () => {
        lightbox.close(); 
      });
      lightboxOverlay.appendChild(closeButton); 
    }
  });

  lightbox.refresh(); 
}


export function clearGallery() {
  if (gallery) {
    gallery.innerHTML = '';
  }
}


export function showLoader() {
  if (loader) loader.classList.remove('hidden');
}


export function hideLoader() {
  if (loader) loader.classList.add('hidden');
}
