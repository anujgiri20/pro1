var temp =fetch('https://restcountries.eu/rest/v2/all')
.then((data)=> return JSON(data)).then((ele)=>console.log(ele))
console.log(temp)