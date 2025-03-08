let api = "https://api.github.com/users/";

let searchInput = document.getElementById("search-input");
let searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
    let userData = api + searchInput.value;
    fetch(userData)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayProfile(data);
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
        <div class="user-info">
            <h2>${data.name || data.login}</h2>
            <p>${data.bio || 'No bio available'}</p>
            <div class="stats">
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Repositories: ${data.public_repos}</p>
            </div>
            <a href="${data.html_url}" target="_blank">View Profile</a>
        </div>
    </div>
    `;
}


