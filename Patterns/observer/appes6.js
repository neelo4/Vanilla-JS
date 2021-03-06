//constructor function

class EventObserver{
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
      }

      unsubscribe(fn){
        this.observers = this.observers.filter(function(item){
            if(item != fn){
  
              return item;
  
            }
        });
  
        console.log(`You are ow unsubscribed from ${fn.name}`);
  
    }

    fire(){
        this.observers.forEach(
            function(item){
                item.call();
            }
        );
    }
    
    
}

// EventObserver.prototype = {
//     subscribe: function(fn){
//       this.observers.push(fn);
//       console.log(`You are now subscribed to ${fn.name}`);
//     },

//   unsubscribe  : function(fn){
//       this.observers = this.observers.filter(function(item){
//           if(item != fn){

//             return item;

//           }
//       });

//       console.log(`You are ow unsubscribed from ${fn.name}`);

//   }, 

//   fire: function(){
//       this.observers.forEach(
//           function(item){
//               item.call();
//           }
//       );
//   }
// }

const click = new EventObserver();

//event listeners


document.querySelector('.sub-ms').addEventListener('click',function(){
      click.subscribe(getCurMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function(){
    click.unsubscribe(getCurMiliseconds);
});


document.querySelector('.sub-s').addEventListener('click',function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click',function(){
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click',function(){
    click.fire();
});




//click handler
const getCurMiliseconds =  function(){
    console.log(`Current Miliseconds: ${new Date().getMilliseconds()}`);
}



const getCurSeconds =  function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}