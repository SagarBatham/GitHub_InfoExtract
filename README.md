GitHub_InfoExtract

GitHub_InfoExtract is a simple web project that allows users to enter a GitHub username and fetch important information about that profile. It also displays the top 5 repositories of the user based on popularity.

This project uses the GitHub API to retrieve real-time data and display it in a clean and user-friendly interface.

Features

Enter any GitHub username

Fetch and display:

Profile Picture

Name

Bio

Followers

Following

Public Repositories

Show Top 5 repositories

Direct link to repositories

Real-time data using GitHub API

Technologies Used

HTML

CSS

JavaScript

GitHub REST API

How It Works

User enters a GitHub username in the input field.

JavaScript sends a request to the GitHub API.

The API returns the user's profile information.

The project also fetches the user's repositories.

The top 5 repositories are displayed based on stars or popularity.

Project Structure
GitHub_InfoExtract
│
├── index.html
├── style.css
├── script.js
└── README.md
Installation & Usage

Clone the repository

git clone https://github.com/yourusername/GitHub_InfoExtract.git

Open the project folder

Run the project by opening index.html in your browser

GitHub API Used

This project uses the official GitHub REST API:

https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos
Example

Input:

torvalds

Output:

GitHub Profile Information

Top 5 repositories of the user
