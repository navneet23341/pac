//1

let UserName = "Navneet"
let Age = 22;
let bio = "hiii its my bio"

console.log(UserName);
console.log(Age);
console.log(bio);

//2

let interestarray = ["football", "sleep", "coding" , "watching anime", "movies"]

for(let i =0 ; i< interestarray.length ; i++){
    console.log(interestarray[i]);
}

//3

let user1_interest = ["anime" ,"movies" , "sleep" , "coffee", "football"];
let user2_interest = ["anime" ,"movies" , "roblox"];

let common = 0;

for(let i=0 ; i<user1_interest.length ;i++){
    for(let j=0 ; j< user2_interest.length; j++){
        if(user1_interest[i] === user2_interest[j]){
            common++;
        }
    }
}

console.log(common);

//4

let user= {
    name : "navneet",
    age: 22,
    bio: "hii its my bio",
    Interest : ["anime", "movies", "sleep"]
}

console.log(user);


