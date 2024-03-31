// Array of notification messages
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
  
  // Array of users with usernames and profile image paths
  users = [
    { username: "Angela Gray", profile: "images/avatar-angela-gray.webp" },
    { username: "Anna Kim", profile: "images/avatar-anna-kim.webp" },
    { username: "Jacob Thompson", profile: "images/avatar-jacob-thompson.webp" },
    { username: "Kimberly Smith", profile: "images/avatar-kimberly-smith.webp" },
    { username: "Mark Webber", profile: "images/avatar-mark-webber.webp" },
    { username: "Nathan Peterson", profile: "images/avatar-nathan-peterson.webp" },
    { username: "Rizky Hasanuddin", profile: "images/avatar-rizky-hasanuddin.webp" },
  ];
  
  
  // Function to create a new notification
  function createNewNot() {
      // Play notification sound
      let audio = document.getElementsByTagName('audio')[0]
      audio.play()
      // Generate a random index for the user array
      let rx = Number(Math.floor(Math.random() * 7));
  
      // Create elements for username and profile image
      let username = document.createElement('span')
      username.innerHTML = users[rx].username
  
      let profile = document.createElement('img')
      profile.src = users[rx].profile
      profile.height = 55
      profile.width = 55
  
      // Generate a random index for the messages array
      rx = Number(Math.floor(Math.random() * 3));
  
      // Create elements for message and timestamp
      let message = document.createElement('p')
      message.innerHTML = messages[rx].message
      let timestamp = document.createElement('p')
      timestamp.style.display = 'block'
      timestamp.innerHTML = messages[rx].timestamp
  
      // Create notification and unread dot elements
      let notification = document.createElement('div')
      let unreaddot = document.createElement('i')
      unreaddot.classList.add('fa', 'fa-circle')
  
      // Add classes to elements
      notification.classList.add('notification', 'unread')
      timestamp.classList.add('date')
  
      // Append username and unread dot to message
      message.appendChild(username)
      message.appendChild(unreaddot)
  
      // Create text element containing message and timestamp
      let text = document.createElement('div')
      text.innerHTML = message.outerHTML + timestamp.outerHTML
      text.classList.add('message')
  
      // Combine profile image and text in notification
      notification.innerHTML = `${profile.outerHTML} ${text.outerHTML}`
  
      // Append notification to the body
      document.body.appendChild(notification);
  }
  
  // Function to mark all notifications as read
  function readAll() {
      var unread_msgs = []
      unread_msgs = document.getElementsByClassName("notification")
      for (let i = 0; i < unread_msgs.length; i++) {
          unread_msgs[i].classList.remove('unread')
      }
  }
  
  // Function to delete all notifications
  function Delete() {
      var unread_msgs = []
      unread_msgs = document.getElementsByClassName("notification")
      for (let i = 0; i < unread_msgs.length; i++) {
          document.removeChild(unread_msgs[i])
      }
  }
  