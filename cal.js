  
let buttons = document.querySelectorAll('button');

let input =  document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click', function(event){ 
       let btntext = event.target.innerText ;

       if(btntext === 'C'){
           input.value ='';
        }
        else if(btntext === '='){
            try{
                input.value = eval(input.value); 
            }
            catch(err){
                input.value = 'uudi baba';
            }
        }
        else {
           input.value +=  btntext; 
           }
       
    }
)} ; 

