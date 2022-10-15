class calculator {
    constructor (previoustext,currenttext){
        this.previoustext = previoustext;
        this.currenttext = currenttext;
        this.clear();

    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }

    addNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation){
        this.operation = operation;
        this.previousOperand = this.currentOperand.toString() + this.operation.toString();
        this.currentOperand = '';

        
    }

    calculate(){
        let screevalue;
        var prev = parseFloat(this.previousOperand);
        var current = parseFloat(this.currentOperand);

        switch(this.operation){
            case '+' :
                screevalue = prev + current;
                break;
            case '-' :
                screevalue = prev - current;
                break;
            case '*' :
                screevalue = prev * current;
                break;
            case '/' :
                screevalue = prev / current;
                break;
        }
        this.currentOperand = screevalue;
        this.previousOperand = '';
        this.operation = undefined;

    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
        
    }

    update(){
        this.currenttext.innerText = this.previousOperand;
        this.previoustext.innerText = this.currentOperand;
     

    }

   
}



const numbersbutton = document.querySelectorAll('.numbers');
const operationsbutton = document.querySelectorAll('.operations');
const clearallbutton = document.querySelector('.clearall');
const  deletebutton = document.querySelector('.delete');
const equalsbutton =  document.querySelector('.equals');
const previoustext = document.getElementById('previous');
const currenttext = document.getElementById('current');


const calc = new calculator(currenttext,previoustext);

numbersbutton.forEach( button =>{
    button.addEventListener('click', () =>{
        calc.addNumber(button.innerText);
        calc.update();
    })
})

operationsbutton.forEach( button =>{
    button.addEventListener('click', () =>{
        calc.chooseOperation(button.innerText);
        calc.update();
    })
})


equalsbutton.addEventListener('click', () => {
    calc.calculate();
    calc.update();
})


clearallbutton.addEventListener('click', () => {
    calc.clear();
    calc.update();
})

deletebutton.addEventListener('click', () => {
    calc.delete();
    calc.update();
})