var search_data = document.querySelector('#city_search')
var search_button = document.querySelector('#search_button')

var latitude = ''
var longitude = ''

openweatherapi = '32f08ff1a5bc34c151e7de01ec1cf139'

search_button.onclick= function(){
    console.log('click')
    console.log(search_data.value.trim())
    var key=
    localStorage.setItem(key,search_data.value.trim())

    if (search_data.value.trim()===""){
        alert("enter city")
        
    }
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+search_data.value.trim()+'&units=imperial&appid=32f08ff1a5bc34c151e7de01ec1cf139').then(function(response){
       return response.json()
    }).then(function(daily_weather_json){
        console.log(daily_weather_json)
        search_data.value = ''
        console.log(new Date().toLocaleDateString())
        display_daily_weather(daily_weather_json)

        latitude = daily_weather_json.coord.lat
        longitude = daily_weather_json.coord.lon

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=imperial&appid=32f08ff1a5bc34c151e7de01ec1cf139').then(function(response){
        return response.json()
        }).then(function(uv_info){
        console.log(uv_info)
        display_daily_uvi(uv_info)
    })
        
    
    })
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+search_data.value.trim()+'&units=imperial&appid=32f08ff1a5bc34c151e7de01ec1cf139').then(function(response){
       return response.json()
    }).then(function(five_day_json){
        console.log(five_day_json)
        display_five_Day_weather(five_day_json)
    })
    

   
};

var display_daily_weather = function(weather_info){
    var city_today = document.createElement("h2")
    city_today.textContent = weather_info.name + " ("+new Date().toLocaleDateString() +")"
    document.querySelector("#city_weather").append(city_today)

    var city_today_temp = document.createElement("h4")
    city_today_temp.textContent = "Temp: " + weather_info.main.temp +" ℉"
    document.querySelector("#today_temp").append(city_today_temp)

    var city_today_wind = document.createElement("h4")
    city_today_wind.textContent = "Wind: " + weather_info.wind.speed + " MPH"
    document.querySelector("#today_wind").append(city_today_wind)

    var city_today_humidity = document.createElement("h4")
    city_today_humidity.textContent = "Humidity: " + weather_info.main.humidity + " %"
    document.querySelector("#today_humidity").append(city_today_humidity)
   
};
var display_daily_uvi = function(uv_info){
    console.log("uv running")
    var city_today_UV = document.createElement("h4")
    city_today_UV.textContent = "UV Index: " + uv_info.current.uvi
    document.querySelector("#today_UV").append(city_today_UV)
    
    var city_five_day_temp1 = document.createElement("p")
    city_five_day_temp1.textContent = "Temp: " + uv_info.daily[1].temp.day +" ℉" 
    document.querySelector("#day_1_temp").appendChild(city_five_day_temp1)

    var city_five_day_temp2 = document.createElement("p")
    city_five_day_temp2.textContent = "Temp: " + uv_info.daily[2].temp.day +" ℉" 
    document.querySelector("#day_2_temp").appendChild(city_five_day_temp2)

    var city_five_day_temp3 = document.createElement("p")
    city_five_day_temp3.textContent = "Temp: " + uv_info.daily[3].temp.day +" ℉" 
    document.querySelector("#day_3_temp").appendChild(city_five_day_temp3)

    var city_five_day_temp4 = document.createElement("p")
    city_five_day_temp4.textContent = "Temp: " + uv_info.daily[4].temp.day +" ℉" 
    document.querySelector("#day_4_temp").appendChild(city_five_day_temp4)

    var city_five_day_temp5 = document.createElement("p")
    city_five_day_temp5.textContent = "Temp: " + uv_info.daily[5].temp.day +" ℉" 
    document.querySelector("#day_5_temp").appendChild(city_five_day_temp5)

    var city_five_day_wind1 = document.createElement("p")
    city_five_day_wind1.textContent = "Wind: " + uv_info.daily[1].wind_speed+" MPH" 
    document.querySelector("#day_1_wind").appendChild(city_five_day_wind1)

    var city_five_day_wind2 = document.createElement("p")
    city_five_day_wind2.textContent = "Wind: " + uv_info.daily[2].wind_speed+" MPH" 
    document.querySelector("#day_2_wind").appendChild(city_five_day_wind2)
    
    var city_five_day_wind3 = document.createElement("p")
    city_five_day_wind3.textContent = "Wind: " + uv_info.daily[3].wind_speed+" MPH" 
    document.querySelector("#day_3_wind").appendChild(city_five_day_wind3)
    
    var city_five_day_wind4 = document.createElement("p")
    city_five_day_wind4.textContent = "Wind: " + uv_info.daily[4].wind_speed+" MPH" 
    document.querySelector("#day_4_wind").appendChild(city_five_day_wind4)
    
    var city_five_day_wind5 = document.createElement("p")
    city_five_day_wind5.textContent = "Wind: " + uv_info.daily[5].wind_speed+" MPH" 
    document.querySelector("#day_5_wind").appendChild(city_five_day_wind5)

    var city_five_day_humidity1 = document.createElement("p")
    city_five_day_humidity1.textContent = "Humidity: " + uv_info.daily[1].humidity+" %"
    document.querySelector("#day_1_wind").appendChild(city_five_day_humidity1) 
    var city_five_day_humidity2 = document.createElement("p")
    city_five_day_humidity2.textContent = "Humidity: " + uv_info.daily[2].humidity+" %"
    document.querySelector("#day_2_wind").appendChild(city_five_day_humidity2) 
    var city_five_day_humidity3 = document.createElement("p")
    city_five_day_humidity3.textContent = "Humidity: " + uv_info.daily[3].humidity+" %"
    document.querySelector("#day_3_wind").appendChild(city_five_day_humidity3) 
    var city_five_day_humidity4 = document.createElement("p")
    city_five_day_humidity4.textContent = "Humidity: " + uv_info.daily[4].humidity+" %"
    document.querySelector("#day_4_wind").appendChild(city_five_day_humidity4) 
    var city_five_day_humidity5 = document.createElement("p")
    city_five_day_humidity5.textContent = "Humidity: " + uv_info.daily[5].humidity+" %"
    document.querySelector("#day_5_wind").appendChild(city_five_day_humidity5) 

    
    $("#day_1_icon").attr("src", "https://openweathermap.org/img/w/" + uv_info.daily[1].weather[0].icon + ".png")
    $("#day_2_icon").attr("src", "https://openweathermap.org/img/w/" + uv_info.daily[2].weather[0].icon + ".png")
    $("#day_3_icon").attr("src", "https://openweathermap.org/img/w/" + uv_info.daily[3].weather[0].icon + ".png")
    $("#day_4_icon").attr("src", "https://openweathermap.org/img/w/" + uv_info.daily[4].weather[0].icon + ".png")
    $("#day_5_icon").attr("src", "https://openweathermap.org/img/w/" + uv_info.daily[5].weather[0].icon + ".png")
    $("#today_icon").attr("src", "https://openweathermap.org/img/w/" + uv_info.daily[0].weather[0].icon + ".png")


    
};
var display_five_Day_weather = function(weather_info,uv_info){

    var city_five_day = document.createElement("p")
    var day_one_date_list= city_five_day.textContent = weather_info.list[0].dt_txt.split(' ')
    var five_day_date_list = day_one_date_list[0].split('-')
    var five_day_date = document.createElement("p")
    five_day_date.textContent = five_day_date_list[1]+'/'+five_day_date_list[2]+'/'+five_day_date_list[0]
    document.querySelector("#day_1_date").appendChild(five_day_date) 
    
    var city_five_day_two = document.createElement("p")
    var day_one_date_list_two= city_five_day_two.textContent = weather_info.list[8].dt_txt.split(' ')
    console.log()
    var five_day_date_list_two = day_one_date_list_two[0].split('-')
    var five_day_date_two = document.createElement("p")
    five_day_date_two.textContent = five_day_date_list_two[1]+'/'+five_day_date_list_two[2]+'/'+five_day_date_list_two[0]
    document.querySelector("#day_2_date").appendChild(five_day_date_two) 
    
    var city_five_day_three = document.createElement("p")
    var day_one_date_list_three= city_five_day_three.textContent = weather_info.list[16].dt_txt.split(' ')
    console.log()
    var five_day_date_list_three = day_one_date_list_three[0].split('-')
    var five_day_date_three = document.createElement("p")
    five_day_date_three.textContent = five_day_date_list_three[1]+'/'+five_day_date_list_three[2]+'/'+five_day_date_list_three[0]
    document.querySelector("#day_3_date").appendChild(five_day_date_three)
    
    var city_five_day_four = document.createElement("p")
    var day_one_date_list_four= city_five_day_four.textContent = weather_info.list[16].dt_txt.split(' ')
    console.log()
    var five_day_date_list_four = day_one_date_list_four[0].split('-')
    var five_day_date_four = document.createElement("p")
    five_day_date_four.textContent = five_day_date_list_four[1]+'/'+five_day_date_list_four[2]+'/'+five_day_date_list_four[0]
    document.querySelector("#day_4_date").appendChild(five_day_date_four)
    
    var city_five_day_five = document.createElement("p")
    var day_one_date_list_five= city_five_day_five.textContent = weather_info.list[16].dt_txt.split(' ')
    console.log()
    var five_day_date_list_five = day_one_date_list_five[0].split('-')
    var five_day_date_five = document.createElement("p")
    five_day_date_five.textContent = five_day_date_list_five[1]+'/'+five_day_date_list_five[2]+'/'+five_day_date_list_five[0]
    document.querySelector("#day_5_date").appendChild(five_day_date_five)

    

};


if (uv_info.current.uvi < 3) {
        $("#today_UV").attr("class", "good");
    } else if (data.current.uvi >= 2 && data.current.uvi <6 ) {
        $("#today_UV").attr("class", "moderate");
    } else {
        $("#today_UV").attr("class", "bad");
}

function(){
    localStorage.getItem();
    var history = document.createElement("<button></button>")
}

var total_number=0
var get_average = function(list_of_nums){
    for(i=0;i<list_of_nums.length;i++){total_number+=list_of_nums[i]}
    return total_number/list_of_nums.length
};
console.log(get_average([2,4]))
console.log(total_number)