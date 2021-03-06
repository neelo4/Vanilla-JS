

/** 
 * Easy HTTP Library
 * @version 3.0.0
 * @authorName: Neelofar Khan
 * @license: MIT
 *    
 */

class EasyHTTP{
    //make an HTTP GET Request

    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;



      
     }


    //make http post request

    async post(url,data){
      

            const response =await fetch(url,{
                method :'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)

            })
            const resData = await response.json();
            return resData;
    

       
     }

//make and put request

async put(url,data){
   const response  = await fetch(url,{

        
            method :'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })


        const resData = await response.json();
        return resData;

 }
//delete request


async delete(url){
    const response  = await fetch(url,{

    
            method :'DELETE',
            headers:{
                'Content-type': 'application/json'
            }
           

        });

        const resData = await 'Resource deleted';
        return resData;

   
 }


    
}











