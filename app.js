


const tempInput = document.getElementById('temp-input')
const tempInputUnits = document.getElementById('input-options')
const tempOutput = document.getElementById('temp-output')
const tempOutputUnits = document.getElementById('output-options')



//console.log(tempInput)
//alert(tempInput)

document.getElementById('conversion-form').addEventListener('submit', convertTemp)


function convertTemp(e){
    console.log('calculating')
    


    const tempInput = document.getElementById('temp-input')
    const tempInputUnits = document.getElementById('input-options')
    const tempOutput = document.getElementById('temp-output')
    const tempOutputUnits = document.getElementById('output-options');

    const input = parseInt(tempInput.value);
    const Units = tempInputUnits.value;
    let OutputUnits = tempOutputUnits.nodeValue;

    const Output1 = (input - 32) * (5/9);
    const Output2 = (input * 9/5) + 32;
    

    if (Units === '℉'){
       (tempOutput.value) = Output1.toFixed(2);

       OutputUnits ='℃'
       tempOutputUnits.value = OutputUnits

      
       

    }else{(tempOutput.value) = Output2.toFixed(2);

        OutputUnits = '℉'
        tempOutputUnits.value = OutputUnits

         
        }

      

e.preventDefault()

}