const buddiesFriend = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => buddiesFriendList(data.results))
}
buddiesFriend()

const buddiesFriendList = posts => {
    // const buddy = posts.results;
    console.log(posts)
    const buddies = document.getElementById('buddies');
    for (const user of posts) {
        const p = document.createElement('p');
        p.innerText = `
        Gender: ${user.gender}
Name: ${user.name.title} ${user.name.first} ${user.name.last}
Email: ${user.email} 
Image: <img src="${user.picture.thumbnail}>
`
        buddies.appendChild(p)
    }


}

