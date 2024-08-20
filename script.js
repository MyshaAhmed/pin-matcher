//generate event handler
let generateBtn=document.getElementById('generateBtn');
generateBtn.addEventListener('click',function(){
    let pin=Math.floor(1000 + Math.random() * 9000); // 4 digit random number 
    document.getElementById('generatedPin').value=pin;
})


// button action
let input=document.getElementById('inputPin');
let buttons=document.getElementsByClassName('button');
let arr=Array.from(buttons);
let string="";
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML=='C')
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML == "<")
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else
        {
            string +=e.target.innerHTML;
            input.value=string; 
        }
        
    })
})

//submit button event handler
let submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener('click',function(){
    const inputPin=document.getElementById('inputPin').value;
    const generatedPin=document.getElementById('generatedPin').value;
    if(inputPin==generatedPin)
    {
        document.getElementById('pinMatched').style.display='block';
        document.getElementById('wrongPin').style.display='none';
    }
    else
    {
        document.getElementById('wrongPin').style.display='block';
        document.getElementById('pinMatched').style.display='none';
        let tryValue=document.getElementById('tryLeft').innerHTML;
        let tryNumber=parseInt(tryValue);
        document.getElementById('tryLeft').innerHTML=tryNumber-1;
        if (tryNumber<=1) {
            submitBtn.disabled = true;
            document.getElementById('tryLeft').innerHTML='No'
            document.getElementById('submitBtn').style.backgroundColor='gray';
        }

    }
})