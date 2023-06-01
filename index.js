

const inputEl = document.getElementById('input-user')
const imageContainer = document.getElementById('image-container')
const username = document.getElementById('username')
const at = document.getElementById('at')
const joined = document.getElementById('joined')


document.getElementById('search-btn').addEventListener('click', function(){
    fetch(`https://api.github.com/users/${inputEl.value}`, {
      headers: {
        'Authorization': 'Bearer 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',
        'Accept': 'application/vnd.github.v3+json'
      }
    })
      .then(response =>  response.json())
      .then(data => {
        console.log(data)
        let year = data.created_at
        imageContainer.innerHTML = `<img class='profile-img' src="${data.avatar_url}" alt='avatar'/>`
        username.textContent = data.login
        at.textContent = '@' + data.name
        joined.textContent = "Joined " + year.slice(0,4)
      })
})