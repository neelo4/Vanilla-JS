class Weather{
    constructor(city, state){
        this.apiKey="50b3f9f6e22d496cb3f9f6e22d496c93";
        this.city = city;
        this.state = state;
    }

    //fetch weather form api

    async getWeather(){
        
        
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();
        return responseData.current_observation;
    }

    changeLocation(city,state){
        this.city=city;
        this.state=state;
    }
  
}