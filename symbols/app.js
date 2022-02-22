const map1 = new Map(); 

const key1 = 'some string';
      key2 = {};//empty object
      key3 = function(){};


//set map values by key

map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3 , 'value of key3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));


// //count values using size property

// console.log(map1.size);

//iterating through maps

//loop using for....of to get keys and valurs
// for(let [key,value] of map1){
//     console.log(`${key} = ${value}`);
// }


//iterate keys only

// for(let key of map1.keys()){
//     console.log(key);
// }

// //iterate values only

// for (let value of map1.values()){
//    console.log(value);
// }


//by using for Each

// map1.forEach(function(value, key){

//     console.log(`${key} = ${value}`)

// });

// //convert to arrays

// const keyValArr = Array.from(map1);

// console.log(keyValArr);


// const valArr = Array.from(map1.values());

// console.log(valArr);

// const keyArr = Array.from(map1.keys());

// console.log(keyArr);


//sets:  new type of object in ES6

//iffy: immidiately innoked function expression

(function(){

    //declre private vars amd functions

    return{
        //declare public var and functions
    }

})();

//standard module pattern

// const UIctrl = (function(){
//     let text = "Hello neelofar welcome to London";

//     const changeText = function(){

//         const element = document.querySelector('h1');
//         element.textContent  = text;

//     }

//     return{
//         callChangeText : function(){
//             changeText();
//             console.log(text);
//         }
//     }
// })();
// UIctrl.callChangeText();


//revealing module pattern

// const ItemCtrl = (function(){

//     let data = [];
    
//     function add(item){
//        data.push(item);
//        console.log('Item added...');
//     }

//     function get(id){
//       return data.find(item =>
//             {
//                 return item.id === id;
//             });

       

//     }


//     return{
//         add: add,
//         get: get
//     }
// })();


// ItemCtrl.add({id:1, name:'neelofar'});
// ItemCtrl.add({id:2, name:'zeenat'});
// console.log(ItemCtrl.get(1));
// console.log(ItemCtrl.get(2));

function MemberFactory(){

    this.createMember = function(name,type){
    let member;
    
    if(type === 'simple'){
    member = new SimpleMembership(name);
    }else if(type === 'standard'){
    
    member = new StandardMembership(name);
    
    }else if(type === 'super'){
    
    member = new SuperMembership(name);
    
    }
    
    member.type=type;
    
    
    member.define = function(){
    
    console.log(`${this.name} (${this.type}):  ${this.cost} `);
    }
    
    return member;
    }
    
    
    
    }
    
    
    
    const SimpleMembership = function(name){
    this.name = name;
    this.cost = '$5';
   
    }
    
    const StandardMembership = function(name){
    this.name = name;
    this.cost = '$35';
    }
    
    const SuperMembership = function(name){
    this.name = name;
    this.cost = '$45';
    }
    
    const members = [];
    const factory = new MemberFactory();
    
    members.push(factory.createMember('Neelofar', 'simple'));
    
    // console.log(members);

//iterating through members

members.forEach(function(member){
    
    member.define();
    
});