// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let liked = false
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.querySelector(".like")
  const errorDiv = document.getElementById("modal")

  likeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    debugger
    mimicServerCall()
      .then(() => {
        if (likeBtn.className == "activated-heart") {
          likeBtn.innerHTML = `Like! ${EMPTY_HEART}`
          likeBtn.className = "deactivated-heart"
        } else {
          likeBtn.innerHTML = FULL_HEART
          likeBtn.className = "activated-heart"
        }
      })
      .catch((error) => {
        errorDiv.className = "unhidden"
        errorDiv.innerText = error
        setTimeout(() => {
          errorDiv.className = "hidden"
        }, 5000)
      })

  });
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
