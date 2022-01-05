var search_data = document.querySelector('#city_search')
var search_button = document.querySelector('#search_button')

search_button.onclick= function(){
    console.log('click')
    console.log(search_data.value.trim())
    if (search_data.value.trim()===""){
        alert("enter city")
        
    }
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
    var city_today = document.createElement("p")
    city_today.textContent = weather_info.name + " ("+new Date().toLocaleDateString() +")"
    document.querySelector("#city_weather").appendChild(city_today)

    var city_today_temp = document.createElement("p")
    city_today.textContent = "Temp: " + weather_info.main.temp
    document.querySelector("#today_temp").appendChild(city_today_temp)

    var city_today_wind = document.createElement("p")
    city_today.textContent = "Wind: " + weather_info.main.wind.speed
    document.querySelector("#today_wind").appendChild(city_today_wind)

    var city_today_humidity = document.createElement("p")
    city_today.textContent = "Humidity: " + weather_info.main.humidity
    document.querySelector("#today_humidity").appendChild(city_today_humidity)

    var city_today_UV = document.createElement("p")
    city_today.textContent = "UV Index: " + weather_info.main.temp
    document.querySelector("#today_UV").appendChild(city_today_UV)

    
};

var display_five_Day_weather = function(weather_info){

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




var total_number=0
var get_average = function(list_of_nums){
    for(i=0;i<list_of_nums.length;i++){total_number+=list_of_nums[i]}
    return total_number/list_of_nums.length
};
console.log(get_average([2,4]))
console.log(total_number)