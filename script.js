//your JS code here. If required.



const btn=document.getElementById("btn");

async function check(inpt,dly){
	let pr=await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(inpt);
		},dly);
	})

    return pr;
}

//btn.addEventListener("click",check1//);

function check1(){
    let inputvalue=document.getElementById("text").value;
    let delayvalue=document.getElementById("delay").value;

    check(inputvalue,delayvalue).then((data)=>{
        console.log(data)
        document.getElementById("output").innerText=data;
    })
}



