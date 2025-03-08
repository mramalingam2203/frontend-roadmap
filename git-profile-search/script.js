
let api = "https://api.github.com/users/";

let searchInput = document.getElementById("search-input");
let searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
    let userData = api + searchInput.value;
    fetch(userData)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
})

searchInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
        searchButton.click();
    }
})

searchInput.addEventListener("keyup", () => {
    searchButton.click();
})

searchInput.addEventListener("focus", () => {
    searchInput.style.border = "2px solid #000";
})

searchInput.addEventListener("blur", () => {
    searchInput.style.border = "2px solid #000";
})

displayProfile = (data) => {
    let profileContainer = document.querySelector(".profile-container");
    profileContainer.innerHTML = `
    <div class="profile">  
    <img src="${data.avatar_url}" alt="Profile Picture">
    <h2>${data.name}</h2>
    <h3>${data.bio}</h3>
    <h3>${data.location}</h3>
    <h3>${data.followers}</h3>
    </div>
    `
}

