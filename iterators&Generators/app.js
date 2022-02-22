//iteratornext

function nameIterator(names){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < names.length ? 
            {value: names[nextIndex++], done : false} :
            {done: true}
        }
    }
}

//create an array of names

const namesArr = ['Neelofar', 'Zeenat', 'Noor'];

const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);