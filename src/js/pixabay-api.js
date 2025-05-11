const API_KEY = '50174992-a37a037319a3aab3105cbedec';  
const BASE_URL = 'https://pixabay.com/api/';


export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    if (!response.ok) {
      throw new Error('Error fetching images');
    }
    return await response.json();  
  } catch (error) {
    console.error(error);
    throw error;  
  }
}

