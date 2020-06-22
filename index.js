// Band Baja Baraat

function remove_class() {
    let y = Array.from(document.querySelectorAll('.instruments'));
    y.forEach(cur => cur.classList.remove('playing'));
}
function playSong(url) {
    song.src = url ;
    song.currentTime = 0;
    song.play();
    addRotater();
    song.addEventListener('ended',pauseSong);
}
function pauseSong() {
    song.pause();
    removeRotator();
}
function playAudio(url) {
    var audio = new Audio(url);
    audio.currentTime = 0;
    audio.play();
}
function addRotater() {
    document.getElementById('player').classList.add('playerRotate');
}
function removeRotator() {
    document.getElementById('player').classList.remove('playerRotate');
}
function playSound(e) {
    
    const x = e.keyCode ;
    switch(x)
    {
        case 65 : {
            remove_class();
            document.getElementById('ins-1').classList.add('playing');
            playAudio('sounds/clap.wav');
            break;
        }
        case 83 : {
            remove_class();
            document.getElementById('ins-2').classList.add('playing');
            playAudio('sounds/ride.wav');
            
            break;
        }
        case 68 : {
            remove_class();
            document.getElementById('ins-3').classList.add('playing');
            playAudio('sounds/hihat.wav');
            
            break;
        }
        case 70 : {
            remove_class();
            document.getElementById('ins-4').classList.add('playing');
            playAudio('sounds/openhat.wav');
            
            break;
        }
        case 71 : {
            remove_class();
            document.getElementById('ins-5').classList.add('playing');
            playAudio('sounds/tom.wav');
            
            break;
        }        
        case 72 : {
            remove_class();
            document.getElementById('ins-6').classList.add('playing');
            playAudio('sounds/boom.wav');
            
            break;
        }        
        case 74 : {
            remove_class();
            document.getElementById('ins-7').classList.add('playing');
            playAudio('sounds/snare.wav');
            
            break;
        }        
        case 75 : {
            remove_class();
            document.getElementById('ins-8').classList.add('playing');
            playAudio('sounds/tink.wav');
            
            break;
        }        
        case 76 : {
            remove_class();
            document.getElementById('ins-9').classList.add('playing');
            playAudio('sounds/kick.wav');
            
            break;
        }
        default : {
            remove_class();
        }
    }
    
}

var song = new Audio();
function menuFunction(e){
    if(e !== '') {
        document.querySelector('.dropbtn').textContent = document.getElementById(e).textContent ;
        var url = `sounds/${e}.mp3` ;
        playSong(url);
    }
    else {
        document.querySelector('.dropbtn').textContent = 'Select Song ?' ;
        pauseSong();
    }
}
window.addEventListener('keydown', playSound);

