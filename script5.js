var req=new XMLHttpRequest();
req.open('GET' ,'https://restcountries.eu/rest/v2/all',true);

req.send();

req.onload=function()
{
 
    


    var data=JSON.parse(this.response);

  //flag
    for(var i=0;i<data.length;i++)
   {
    console.log(data[i].flag)
   }
  
  
  //name
    for(var j=0;j<data.length;j++)
    {
        console.log(data[j].name)
    }

//region
    for(var k=0;k<data.length;k++)
    {
        console.log(data[k].region)
    }

//subregion
     for(var p=0;p<data.length;p++)
     {
         console.log(data[p].subregion)
     }


//totalpopulation
     var totalpopulation=0
     for(var q=0;q<data.length;q++)
     {
         totalpopulation+=(data[q].population)
     }
      console.log(totalpopulation)


}

