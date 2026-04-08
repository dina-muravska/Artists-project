import iconArrow from '../../img/icon-right-arrow.png';
import { getArtistsInfo } from '../api/artists-api';
const list = document.querySelector('.artists__list');

export const initArtists = async ({ limit, page }) => {
  return getArtistsInfo({ limit, page });
};

const loadMoreBtn = document.querySelector('.artists__button');
let page = 1;
let params = { limit: 8, page: 1 };

loadMoreBtn.addEventListener('click', () => {
  page += 1;
  params = { limit: 8, page };
  loadArtists();
});

async function loadArtists() {
  const artists = await initArtists(params);
  renderArtists(artists);

  // Скрываем кнопку "Load More", если загружено меньше артистов, чем лимит
  if (artists.length < params.limit) {
    loadMoreBtn.style.display = 'none';
  }
}

loadArtists();

function createArtistCard(artist) {
  const { _id, strArtist, strBiographyEN, strArtistThumb, genres } = artist;
  const genresMarkup =
    Array.isArray(genres) && genres.length
      ? genres.map(genre => `<li class="artists__genre">${genre}</li>`).join('')
      : '';

  return `<li class="artists__item">
        <img class="artists__img" src="${strArtistThumb}" alt="${strArtist}" />
        <div class="artists__info">
          <ul class="artists__genres">
            ${genresMarkup}
          </ul>
          <h3 class="artists__name">${strArtist}</h3>
          <p class="artists__desc">${strBiographyEN}</p>
        </div>
       <button class="artists__learn-more" data-id="${_id}">
          Learn More <img class="artists__learn-more-icon" src="${iconArrow}" width="8" height="14" alt="icon right arrow"></img>
        </button>
      </li>
`;
}
function createArtistsMurkup(artists) {
  return artists.map(createArtistCard).join('');
}

export function renderArtists(artists) {
  const markup = createArtistsMurkup(artists);
  list.insertAdjacentHTML('beforeend', markup);
}
