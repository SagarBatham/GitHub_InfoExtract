function getUser() {

    var username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter username");
        return;
    }

    fetch("https://api.github.com/users/" + username)
        .then(function(response) {
            return response.json();
        })
        .then(function(userData) {

            if (userData.message === "Not Found") {
                alert("User not found");
                return;
            }

            var profileDiv = document.getElementById("profile");

            profileDiv.innerHTML =
                "<img src='" + userData.avatar_url + "'>" +
                "<h2>" + (userData.name || "No Name") + "</h2>" +
                "<p>@" + userData.login + "</p>" +
                "<p>Followers: " + userData.followers + "</p>" +
                "<p>Following: " + userData.following + "</p>" +
                "<p>Public Repos: " + userData.public_repos + "</p>";

            return fetch(userData.repos_url);
        })
        .then(function(repoResponse) {
            return repoResponse.json();
        })
        .then(function(repoData) {

            var reposDiv = document.getElementById("repos");
            reposDiv.innerHTML = "<h3>Repositories</h3>";

            repoData.slice(0, 5).forEach(function(repo) {
                reposDiv.innerHTML +=
                    "<div class='repo'>" + repo.name + "</div>";
            });

        })
        .catch(function(error) {
            console.log("Error:", error);
        });
}