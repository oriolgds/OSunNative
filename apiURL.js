import * as Location from 'expo-location';

function changeApiURL(latitude, longitude) {
    apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain,weathercode,surface_pressure,visibility,windspeed_10m,winddirection_10m,is_day&current_weather=true&timezone=auto`;
    console.log(apiURL);
}

export let apiURL = changeApiURL(41, 2);






export const getLocation = async () => {
    return new Promise(async (resolve, reject) => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            reject(false); r
            return(false); 
        }
    
        let location = await Location.getCurrentPositionAsync({});

        changeApiURL(location.coords.latitude, location.coords.longitude);
        resolve(true);
        return(true);
    }
    );
    
};


// https://open-meteo.com/en/docs#latitude=41.3141&longitude=2.0143&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,weathercode,surface_pressure,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=auto