
let getquote = document.getElementsByClassName("btn");
let qut = document.getElementById("quote")



function quoteFun(){
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then(res => res.json())
    .then(data =>{ 
        // console.log(data);
        let len = Math.floor(Math.random() * data.length) ;   
        // console.log(len);  
       qut.innerText =`${data[len].quote}`
})
}
