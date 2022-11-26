let string="";
console.log("hehehe")
let buttons=document.querySelectorAll('.digit');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let x=e.target.innerHTML
        if(x=='=')
        {
            document.querySelector('input').value=eval(string);
            string=eval(string)
        }
        else if(x=='CLEAR ALL')
        {
            string='';
            document.querySelector("input").value=string;
        }
        else
        {
        string=string+x;
        document.querySelector("input").value=string;
        }
    })
})