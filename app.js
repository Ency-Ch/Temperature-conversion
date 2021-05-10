


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
    const tempOutputUnits = document.getElementById('output-options')

    const input = parseInt(tempInput.value);
    const Units = tempInputUnits.value;
    let OutputUnits = tempOutputUnits.value;

    const Output1 = (input - 32) * (5/9);
    const Output2 = (input * 9/5) + 32;
    

    if (Units === '℉'){
       (tempOutput.value) = Output1;

       OutputUnits = '℃'

      
       

    }else{(tempOutput.value) = Output2;

        OutputUnits = '℉'
         
        }

       
e.preventDefault()

}