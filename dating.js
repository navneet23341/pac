document.addEventListener('DOMContentLoaded', () =>{
    let clickcounter= 0;
    document.getElementById("like").onclick= ()=> {
        clickcounter++;
        document.querySelector("body").style.backgroundColor = "red";
        document.getElementById("counter").innerHTML = clickcounter;
    }

    let passcounter=0;
    document.getElementById("pass").onclick =() =>{
        if(passcounter ===0){
            let card =document.getElementById("block");
            card.classList.add("shake");

            setTimeout(()=> {
                card.classList.remove("shake");
            }, 300)
        }
        else{
            document.getElementById("block").style.visibility= "hidden";
        }
        passcounter++;
        
    }
});