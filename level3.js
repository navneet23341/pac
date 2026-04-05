let user1 = {
    name : "test1",
    age: 22,
    bio: "hii"
}
let user2 = {
    name : "test2",
    age: 20,
    bio: "hii"
}
let user3 = {
    name : "test3",
    age: 27,
    bio: "hii"
}
let user4 = {
    name : "test4",
    age: 29,
    bio: "hii"
}
let user5 = {
    name : "test5",
    age: 30,
    bio: "hii"
}

let userList =[user1, user2, user3, user4 , user5];

document.addEventListener("DOMContentLoaded", ()=>{
    let usercounter=0;
    
        document.getElementById("name").innerHTML = userList[usercounter].name;
        document.getElementById("age").innerHTML = userList[usercounter].age;
        document.getElementById("bio").innerHTML = userList[usercounter].bio;

        document.getElementById("like").onclick = () => {
            usercounter++;
                let card = document.getElementById("block");
                card.classList.add("moveright");

                setTimeout(() => {
                card.classList.remove("moveright")   
                }, 300);

                if(usercounter >= userList.length){
                    usercounter=0;
                }

                document.getElementById("name").innerHTML = userList[usercounter].name;
                document.getElementById("age").innerHTML = userList[usercounter].age;
                document.getElementById("bio").innerHTML = userList[usercounter].bio;
        }

        document.getElementById("pass").onclick =() =>{
            usercounter++;
                let card = document.getElementById("block");
                card.classList.add("moveleft");

                setTimeout(() => {
                    card.classList.remove("moveleft")
                }, 300);

                if(usercounter >= userList.length){
                    usercounter=0;
                }

                document.getElementById("name").innerHTML = userList[usercounter].name;
                document.getElementById("age").innerHTML = userList[usercounter].age;
                document.getElementById("bio").innerHTML = userList[usercounter].bio;
        }   
});