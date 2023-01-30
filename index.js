//1.compare two JSON 
let obj1={name:"person 1", age:5}

let obj2={age:5, name:"person 1"}


if(obj1.name === obj2.name && obj1.age===obj2.age){
    // console.log("objet 1 and object 2 name and age are same")
}else{
    // console.log("objet 1 and object 2 name and age are not same")
}

//2,3rest countries api url and display and all the country flags

let get=new XMLHttpRequest();

get.open("GET", "https://restcountries.com/v3.1/all")


get.send()

get.onload= function(){    
    const data=JSON.parse(get.response); 
    console.log(data[0])   
   for(let i=0;i<data.length;i++){    
    console.log("Flag:",data[i].flags);    
    console.log("country: "+data[i].name.common)
    console.log("region: "+data[i].region)
    console.log("sub-region: "+data[i].subregion)
    console.log("population: "+data[i].population)
   }
   
}
get.onerror=function(){
    console.log(get.response)
}








