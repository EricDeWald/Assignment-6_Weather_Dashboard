var search_data = document.querySelector('#city_search')
var search_button = document.querySelector('#search_button')

search_button.onclick= function(){
    console.log('click')
    console.log(search_data.value.trim())
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search_data.value.trim()+'&appid=32f08ff1a5bc34c151e7de01ec1cf139').then(function(response){
       return response.json()
    }).then(function(daily_weather_json){
        console.log(daily_weather_json)
        search_data.value = ''
        console.log(new Date().toLocaleDateString())
        display_daily_weather(daily_weather_json)
    })
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+search_data.value.trim()+'&appid=32f08ff1a5bc34c151e7de01ec1cf139').then(function(response){
       return response.json()
    }).then(function(five_day_json){
        console.log(five_day_json)
        display_five_Day_weather(five_day_json)
    })
    
};
var display_daily_weather = function(weather_info){
    var city_date = document.createElement("p")
    city_date.textContent = weather_info.name + "("+new Date().toLocaleDateString() +")"
    document.querySelector(".current_weather").appendChild(city_date) 
};
var display_five_Day_weather = function(weather_info){
    var city_five_day = document.createElement("p")
    city_five_day.textContent = weather_info.name + "("+new Date().toLocaleDateString() +")"
    document.querySelector(".forecast").appendChild(city_five_day) 
};

var total_number=0
var average = function(list_of_nums){
    for(i=0;i<list_of_nums.length;i++){
        total_number+=list_of_nums[i]
        
    }
    return total_number/list_of_nums.length
};
console.log(average([2,4]))
console.log(total_number)