


const tempInput = document.getElementById('temp-input')

const tempInputUnits = document.getElementById('input-options')

const tempOutput = document.getElementById('temp-output')

const tempOutputUnits = document.getElementById('output-options')


document.getElementById('loading').style.display = 'none';

document.getElementById('conversion-form').addEventListener('submit', function(e){

    //hide results
    document.getElementById('temp-output').style.display = 'none'
    document.getElementById('output-options').style.display = 'none'

    //show loader 
    document.getElementById('loading').style.display = 'block';

    setTimeout(convertTemp, 2000)

    e.preventDefault()


})





function convertTemp(){

    console.log('calculating')

    const tempInput = document.getElementById('temp-input')
    const tempInputUnits = document.getElementById('input-options')
    const tempOutput = document.getElementById('temp-output')
    const tempOutputUnits = document.getElementById('output-options');

    const input = parseFloat(tempInput.value);
    const Units = tempInputUnits.value;
    let OutputUnits = tempOutputUnits.nodeValue;

    const Output1 = (input - 32) * (5/9);
    const Output2 = (input * 9/5) + 32;
    
    

        if (isFinite(input) && Units === '℉'){
            (tempOutput.value) = Output1.toFixed(2);
     
            OutputUnits ='℃'
            tempOutputUnits.value = OutputUnits
            //show results
            document.getElementById('temp-output').style.display = 'inline-grid'
            document.getElementById('output-options').style.display = 'inline-grid'
            document.getElementById('loading').style.display = 'none'
     
           
            
     
         }else if (isFinite(input) && Units === '℃') {
         
         (tempOutput.value) = Output2.toFixed(2);
     
             OutputUnits = '℉'
             tempOutputUnits.value = OutputUnits
             //show results 
             document.getElementById('temp-output').style.display = 'inline-grid'
             document.getElementById('output-options').style.display = 'inline-grid'
             document.getElementById('loading').style.display = 'none'
             console.log(input)
         }

    

   else{
        showError('please enter your temperature as a number')

        

    }

 

}

function showError(error){
    //hide result 
    document.getElementById('temp-output').style.display = 'none';
    document.getElementById('output-options').style.display = 'none';
    //hide the loader
    document.getElementById('loading').style.display = 'none';
    //create a div 

    //const errorDiv = document.createElement('div');
    //add class
    //errorDiv.className = 'alert';



    var tag = document.createElement('p');
    //tag.setAttribute('id', 'paragraph')
    var text = document.createTextNode(error);
    tag.appendChild(text);
    var element = document.querySelector('.container');
    element.appendChild(text);


    //get elements
    //const container = document.querySelector('#outside-border')
    //const heading = document.querySelector('.heading')

    //create text node and append to div 
    //errorDiv.appendChild(document.createTextNode(error))

    //insert error before heading 
    //container.insertBefore(errorDiv, heading)
    
    

    
    setTimeout(clearError, 2000)
    

    //console.log(error)
}




function clearError(){
    let val = document.querySelector('.container').childNodes[9]
   // var myobj = document.getElementById("paragraph");
   // myobj.remove()
   
    //addEventListener('DOMContentLoaded', element2.remove());
    val.remove()
}



