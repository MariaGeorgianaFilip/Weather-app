const key = '2hEdG8d0PjDLKUXCmiVRjGY37MWBUXMw'

const getWeather = async(id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;
    const request = await fetch(base + query);
    const data = await Response.json();

    return data[0];

};

const getCity = async (city) => {
const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
const query = `?apikey=${key}&q=${city}`;
const request = await fetch(base + query);
const data = await Response.json();

return data[0];
};

getCity('')
.then(data => {
    return getWeather(data.Key)
}).then(data =>{
    console.log(data);
})
.catch(err => console.log(err));