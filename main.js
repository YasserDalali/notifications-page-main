// AJAX REQUEST TO FETCH DB FROM JSON FILES
var messages;
var users;

var mrq = new XMLHttpRequest();
mrq.open('GET', 'messages.json')
mrq.onload = function () { 
  messages = JSON.parse(mrq.responseText)
  console.log(messages)
 }
 mrq.send();

 var urq = new XMLHttpRequest();
urq.open('GET', 'users.json')
urq.onload = function () { 
  users = JSON.parse(urq.responseText)
  console.log(users)
 }
 urq.send();



  

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
      var phone = document.getElementById('phone')
      phone.appendChild(notification);
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
          unread_msgs[i].style.display = 'none'
      }
  }
  