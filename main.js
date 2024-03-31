messages = [
  {
    id: 1,
    message: "You have a new friend request from ",
    timestamp: "5min ago",
  },
  {
    id: 2,
    message: "Your post has been liked by ",
    timestamp: "3min ago",
  },
  {
    id: 3,
    message: "You have a new message from ",
    timestamp: "1h ago",
  },
];

users = [
  { username: "Angela Gray", profile: "images/avatar-angela-gray.webp" },
  { username: "Anna Kim", profile: "images/avatar-anna-kim.webp" },
  { username: "Jacob Thompson", profile: "images/avatar-jacob-thompson.webp" },
  { username: "Kimberly Smith", profile: "images/avatar-kimberly-smith.webp" },
  { username: "Mark Webber", profile: "images/avatar-mark-webber.webp" },
  { username: "Nathan Peterson",profile: "images/avatar-nathan-peterson.webp"},
  { username: "Rizky Hasanuddin",profile: "images/avatar-rizky-hasanuddin.webp"},
];


function createNewNot() {
    let audio = document.getElementsByTagName('audio')[0]
    audio.play()
    let rx = Number(Math.floor(Math.random()*7));

    let username = document.createElement('span')
    username.innerHTML= users[rx].username

    let profile = document.createElement('img')
    profile.src = users[rx].profile
    profile.height = 55
    profile.width = 55

    
    rx = Number(Math.floor(Math.random()*3));
    
    let message = document.createElement('p')
    message.innerHTML = messages[rx].message
    let timestamp = document.createElement('p')
    timestamp.style.display = 'block'
    timestamp.innerHTML = messages[rx].timestamp

    let notification = document.createElement('div')
    let unreaddot = document.createElement('i')
    unreaddot.classList.add('fa', 'fa-circle')


    notification.classList.add('notification', 'unread')
    timestamp.classList.add('date')
    
        message.appendChild(username)

        message.appendChild(unreaddot)

    let text = document.createElement('div')
    text.innerHTML = message.outerHTML+timestamp.outerHTML
    text.classList.add('message')
    
    notification.innerHTML = `${profile.outerHTML} ${text.outerHTML}`


    document.body.appendChild(notification);
}

function readAll() {
    var unread_msgs = []
    unread_msgs = document.getElementsByClassName("notification")
    for (let i=0; i < unread_msgs.length; i++) {
        unread_msgs[i].classList.remove('unread')
    }
}

function Delete() {
    var unread_msgs = []
    unread_msgs = document.getElementsByClassName("notification")
    for (let i=0; i < unread_msgs.length; i++) {
        document.removeChild(unread_msgs[i])
        
    }
}