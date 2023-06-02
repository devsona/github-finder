const inputEl = document.getElementById('input-user');
const imageContainer = document.getElementById('image-container');
const username = document.getElementById('username');
const at = document.getElementById('at');
const joined = document.getElementById('joined');
const userBio = document.getElementById('user-bio');
const repos = document.getElementById('repos');
const UserFollower = document.getElementById('follower');
const userFollowing = document.getElementById('following');
const location = document.getElementById('location');
const website = document.getElementById('website');
const twitter = document.getElementById('twitter');
const company = document.getElementById('company');
const darkLight = document.getElementById('nav-dark')
const navLogo = document.getElementById('nav-logo')
const iconLogo = document.getElementById('icon-logo')

document.getElementById('search-btn').addEventListener('click', function(){
    fetch(`https://api.github.com/users/${inputEl.value}`, {
        headers: {
            'Authorization': 'Bearer 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',
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        imageContainer.innerHTML = `<img class='profile-img' src="${data.avatar_url}" alt='avatar'/>`;
        username.textContent = data.name;
        at.textContent = '@' + data.login;
        joined.textContent = 'Joined ' + data.created_at.slice(0, 4);
        data.bio ? userBio.textContent = data.bio : userBio.textContent = 'No bio found?!';
        data.public_repos ? repos.textContent = data.public_repos : repos.textContent = '?';
        data.followers ? UserFollower.textContent = data.followers : UserFollower.textContent = "?";
        data.following ? userFollowing.textContent = data.following : userFollowing.textContent = '?';
        data.location ? location.innerHTML = data.location : location.textContent = 'Not found';
        website.innerHTML = `<a href='${data.html_url}'>${data.html_url}</a>`;
        data.twitter_username ? twitter.innerHTML = `<a href='https://twitter.com/${data.twitter_username}'>${data.twitter_username}</a>` : twitter.textContent = 'Not found';
        data.company ? company.innerHTML = `<a href='${data.company}'>${data.company}</a>` : company.textContent = 'Not found';
    });
});

const darkMode = () => {
    darkLight.textContent = 'LIGHT'
    document.body.style.backgroundColor = '#141D2F'
    navLogo.style.color = '#FFFFFF'
    iconLogo.setAttribute('src', 'icon.sun.svg')
}
const lightMode = () => {
    darkLight.textContent = 'DARK'
    document.body.style.backgroundColor = '#F2F2F2'
    navLogo.style.color = '#222731'
}

document.getElementById('dark-container').addEventListener('click', function() {
    if (darkLight.textContent === 'DARK') {
      darkMode()
    } else if (darkLight.textContent === 'LIGHT') {
      lightMode()
    }
})
