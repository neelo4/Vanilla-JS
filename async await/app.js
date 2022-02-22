async function myFunc(){
    return 'hello world';

const promise = new Promise( (resolve, reject) =>{

    setTimeout( () => resolve('hello world'), 9000);
    

    });

    const error = true;

    const res = await promise;//wait unit promise is resolved
    return res;

}
myFunc().then(res => console.log(res));