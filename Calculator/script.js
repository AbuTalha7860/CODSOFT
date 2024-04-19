let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');// get numbers as nodes
let buttonsArray = Array.from(buttons);// store nodes in array 
let string = '';
buttonsArray.forEach(btn => { // store each element of array in 'e'
    btn.addEventListener('click',(e)=>{

        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{
            string += e.target.innerHTML
            display.value = string;
        }
    });
});