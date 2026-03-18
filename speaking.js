//text to speach

window.onload = function () {
    let msg = new SpeechSynthesisUtterance();


    playButtonClick(msg)
    mouseOverAnim(msg)
    enableAnimations(msg)
}

function playAudio(msg){
    //first check if browser uses speech synthesis
    if ('speechSynthesis' in window) {
        // Speech Synthesis supported 🎉
        let speachBox = document.querySelector('#speachBox').value

        msg.text = speachBox;
        window.speechSynthesis.speak(msg);


    }else{
        // Speech Synthesis Not Supported 😣
        alert("Sorry, your browser doesn't support text to speech!");
    }
}


//attach functionality to on click event
function playButtonClick(msg) {
    //get button element by Id
    let playBtn = document.getElementById('play-btn')

    //on click event
    playBtn.onclick = function () {
        //play audio message
        playAudio(msg)
        console.log('playBtn clicked')
    }

}

//on start and on end events for message
//display gif when start and display pic when ended
function enableAnimations (msg) {
    msg.onend = function () {
        console.log("ended speech")
        stopAnimation(document.querySelector('#speakAnimation').innerHTML.img)
    }

    msg.onstart = function () {
        console.log("started speaking")
        startAnimation(document.querySelector('#speakAnimation').innerHTML.img)
    }
}

//set speech for mouseover event
function mouseOverAnim(msg) {
    let img = document.querySelector('#speakAnimation')
    img.onmouseover = function () {
        msg.text = "Don't touch me";
        window.speechSynthesis.speak(msg);
    }
}

//replace picture with gif animation
function startAnimation() {
    let image = document.querySelector('#myImage')
 
    image.src = "Jake.gif"
    image.style.width = '445px'
}

//replace gif animation with picture
function stopAnimation(){
    let image = document.querySelector('#myImage')

    image.src= "Jake.jpg"
    image.style.width = '500px'
}

//text to speach