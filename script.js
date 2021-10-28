 var request=new XMLHttpRequest();//step one 
request.open('GET' ,'https://restcountries.eu/rest/v2/all',true);//step two
//sending connection
request.send();
//step 4 onces the server respond succesfuly then we have to process the data
request.onload=function()
{
   
    var data=JSON.parse(this.response);
    for(var i=0;i<250;i++)
    {
  var cname=data[i].name;
  var lang=data[i].latlng;
  weatherdata(cname,...lang)
    }
}
//dc3107ff9e1f271017248bd42c9a208b

function weatherdata(name,lat,lang )
{
    var req=new XMLHttpRequest();//step one 
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=dc3107ff9e1f271017248bd42c9a208b';
    req.open('GET',url,true);
    req.send();
    req.onload=function()
    {
        var data= JSON.parse(this.response);
        //console.log(`${name} : ${data.main.temp}`);
        
    
    
    }
    
}


