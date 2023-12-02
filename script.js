var displayValue;
displayValue='';

function appendToDisplay(Value){
      displayValue = displayValue + Value; 
    document.getElementById('display').value = displayValue;
}

function clearDisplay(){
      displayValue = '';
      document.getElementById('display').value = displayValue;
}

function calculateResult(){
      try{
                const result = eval(displayValue);
                document.getElementById('display').value= result;
                displayValue=result.toString();
      }
      catch(error){
                document.getElementById('display').value = result;
                displayValue='';
      }
}

