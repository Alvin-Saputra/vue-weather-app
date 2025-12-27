class WeatherModel {
    constructor(apiData) {
        this.temp = Math.round(apiData.main?.temp || 0);
        
        const weatherInfo = apiData.weather && apiData.weather.length > 0 ? apiData.weather[0] : {};
        this.description = weatherInfo.description || '';
    }

}

export default WeatherModel;