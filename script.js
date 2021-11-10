var numbers = document.getElementsByClassName("button-num");

var equalbtn = document.getElementById("equals");
var addbtn = document.getElementById("add");
var subtractbtn = document.getElementById("subtract");
var multiplybtn = document.getElementById("multiply");
var dividebtn = document.getElementById("divide");
var clearbtn = document.getElementById("clear");
var textBox = document.getElementById("textbox");

console.log(numbers);
console.log(equalbtn)

class Calc{
    constructor(){
        this.result = 0;
        this.entry = 0;
        this.operation = '';
        this.num1 = '';
        this.num2 = '';
    }
        clear(){
            this.result = 0
            this.entry = 0
            this.operation = ''
            this.display();
            
        }
        numberEntry(number) {
            this.entry = this.entry * 10 + parseInt(number);
            this.display();
            if(num1 !== ''){
                num1 = this.entry;
            }else{
                num2 = this.entry;
           }
        };
        add(){
            this.operation = '+';
            this.display();
        };

        subtract(){
            this.operation = '-';
            this.display();
        };

        multipy(){
            this.operation = "*";
            this.display();
        };

        divide(){
            this.operation = '/';
            this.display();
        };
        
        display(){
            result.innerText = this.entry;
            console.log(this.entry);
        };
        
        equal(){
            this.result = this.doTheMath()
        };
        doTheMath(){
            var calculate
             switch (calculate) {
            case '+':
                calculate = this.num1 + this.num2
            break;
            case '-':
                calculate = this.num1 - this.num2
            break;
            case '*':
                calculate = this.num1 * this.num2
            break;
            case '/':
                calculate = this.num1 / this.num2
            break;
        
            default:
            break;
        };
        
}
    }
    var calc = new Calc()

    for (var i = 0 ; i < numbers.length ; i++)
    {
        numbers[i].addEventListener('click', function() {
            calc.numberEntry(this.innerText);
        });
    }
    equalbtn.addEventListener('click', () => {
        calc.equal();
    });

    clearbtn.addEventListener('click', function () {
            calc.clear();
        });
    
    addbtn.addEventListener('click', () => {
        calc.add()
    });

    subtractbtn.addEventListener('click', () => {
        calc.subtract()
    });

    multiplybtn.addEventListener('click', () => {
        calc.multipy()
    });

    dividebtn.addEventListener('click', () => {
        calc.divide()
    });
