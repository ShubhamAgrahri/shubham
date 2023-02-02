

let url ="https://api.github.com/users";





async function  getUserInfo(){
    let response =  await fetch('https://api.github.com/users')
    console.log(response);

    let responseObject = await response.json();
    let displayCards =''
    responseObject.map((values)=>{
        displayCards+=`<div class="profileCard">
        <img src="${values.avatar_url}" alt =${values.login} class="cardProfileImg" alt="" srcset="">
        <div class="cardProfileName">
            <h2>${values.login}</h2>
        </div>
    </div>` 
    });
    document.getElementById("root").innerHTML = displayCards;
   console.log(document.getElementsByClassName('profileContainer'));
}

getUserInfo()