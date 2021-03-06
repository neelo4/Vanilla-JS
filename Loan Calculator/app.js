//listen for submit

const loanForm =document.querySelector('#loan-form');

loanForm.addEventListener('submit',function(e){

    document.querySelector('#results').style.display= 'none';
    
    document.querySelector('#loading').style.display= 'block';

    setTimeout(calculateResults,2000);


    
        e.preventDefault();
    });


function calculateResults(){
console.log('calculating....');

//UI vars

const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years =document.querySelector('#years');
const monthlyPayment =document.querySelector('#monthly-payment');
const totalPayment =document.querySelector('#total-payment');
const totalInterest =document.querySelector('#total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value)/100/12;
const calculatedPayments= parseFloat(years.value)/12;


//monthly payemnts

const x = Math.pow(1+calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);


if (isFinite(monthly)){
   
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);


    
    document.querySelector('#results').style.display= 'block';
    
    document.querySelector('#loading').style.display= 'none';
}


else{

showError('Please check your numbers');
    
   
}


}

function showError(error){

    document.querySelector('#results').style.display= 'none';
    
    document.querySelector('#loading').style.display= 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class

    errorDiv.className ='alert alert-danger';

    //create text vnode and append to div

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv,heading);

    setTimeout(clearError, 2000);



}

function clearError(){
    document.querySelector('.alert').remove();
}


//show error

