//Book constructor

function Book(title, author, isbn){

        this.title = title;
        this.author = author;
        this.isbn = isbn;
}

//UI constructor

function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');

    //insert cols
    row.innerHTML= 
   `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>`;

    list.appendChild(row);

    console.log(row);
}


UI.prototype.showAlert = function(message, className){
     //create div

     const div = document.createElement('div');
     //add classes
     div.className = `alert ${className}`;

     //add text

     div.appendChild(document.createTextNode(message));
     //get parent

     const container = document.querySelector('.container');
//gte form
     const form = document.querySelector('#book-form');

        //insert alert
        container.insertBefore(div, form);
//disappera aftet 3 sec

setTimeout(function(){
    document.querySelector('.alert').remove();
}, 3000)



}

UI.prototype.deleteBook = function(target){

    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

}
}


UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value= '';
    document.getElementById('isbn').value= '';

}

//Event Listeners


UI.prototype.delete

document.getElementById('book-form').addEventListener('submit', function(e){
   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value;   
    console.log(title, author, isbn);

    //Instantiate book
    const book = new Book (title,author,isbn);
   

    //Instantiate UI

    const ui =new UI();
//valuidate

if (title === '' || author ==='' || isbn === '')
{
ui.showAlert('Please fill in all the fields', 'error');
}else{
    //aDD book to list
ui.addBookToList(book);


ui.showAlert('Book Added!', 'success');
//cler fields


ui.clearFields();

    e.preventDefault();

}



})



//Event listener for delete button
document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();

    ui.deleteBook(e.target);
    
    ui.showAlert('Book Removed', 'success');
    e.preventDefault();
})
    





