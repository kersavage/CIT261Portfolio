// JavaScript Document
export function getJSON(url){
    return fetch(url)
        .then((response)=>{
            if(!response.ok){
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        }
              )
        .catch((error)=>{
            console.log(error);
        }
               );
}
        
export function getLocation(options){
    return new Promise(function(resolve,reject){//A promise represents a distant completion of an asynchronous operation in Javascript
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    
};