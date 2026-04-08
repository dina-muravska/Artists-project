import instance from './axios-instance';

const fetchArtists = params =>
  instance.get('/artists', { params }).then(({ data }) => data);

export const getArtistsInfo = async params => {
  const response = await fetchArtists(params);
  return response.artists || [];
};

export const fetchArtistById = async id => {
  const response = await instance.get(`/artists/${id}`);
  return response.data || null;
};

// export const fetchArtistAlbums = async id => {
//   const response = await instance.get(`/artists/${artistId}/albums`);
//   return response.data || [];
// }
export const fetchArtistAlbums = async id => {
  const { data } = await instance.get(`/artists/${id}/albums`);

  return data.albumsList || data || [];
};
