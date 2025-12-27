import axios from 'axios';

// 1. Buat instance axios dengan konfigurasi dasar
const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5', // URL utama API
  params: {
    appid: import.meta.env.VITE_WEATHER_API_KEY, // Ambil API Key dari .env
    units: 'metric', // Supaya suhu dalam Celcius
  },
});

// 2. Fungsi untuk mengambil cuaca berdasarkan nama kota
export const getWeatherByCity = async (city) => {
  try {
    // Request ke: BASE_URL + '/weather' + query params
    const response = await apiClient.get('/weather', {
      params: { q: city },
    });
    
    // Kelebihan Axios: Data JSON langsung ada di properti .data
    // Tidak perlu response.json() lagi seperti di fetch
    return response.data; 
    
  } catch (error) {
    // Handle error jika kota tidak ditemukan atau internet mati
    throw error;
  }
};