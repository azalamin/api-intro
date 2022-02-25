const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data));
}
const displayUser = data => {
    const userList = document.getElementById('user-list');
    console.log(data)
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        userList.appendChild(li)
    }
}

const loadPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPost(posts));
}

const displayPost = posts => {
    const userList = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4>${post.title.toUpperCase()}</h4>
        <p>${post.body}</p>
        `
        userList.appendChild(div)
    }
}

const postData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: "New Post",
                body: "This is new post",
                userId: 01
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadImages() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImage(data))
}

function displayImage(data) {
    const imgContainer = document.getElementById('img-container');
    for (const photo of data) {
        const img = document.createElement('img');
        img.src = photo.url;
        imgContainer.appendChild(img)
    }
}