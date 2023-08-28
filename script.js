async function check(inpt,dly){
    let promise= await new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(inpt);
        }, dly);
    })
   return promise;
}

function practise(){
    var inputvalue = document.getElementById("text").value;
    var delayvalue = document.getElementById("delay").value;

    let x = check(inputvalue, delayvalue);

    x.then((data)=>{
        document.getElementById("output").innerText=data;
    })
}

document.getElementById("btn").addEventListener("click",practise);