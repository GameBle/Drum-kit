let currentPlayer;
        window.addEventListener('keydown',function(e){
            // console.log(e);
            let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            //console.log(audio);
            if(!audio) return; //stop the function from running all together
            if(currentPlayer && currentPlayer!=audio){
                currentPlayer.pause();
            }
            if(audio.paused)
                audio.play();
            else
                audio.pause();

            audio.currentTime = 0;
            currentPlayer = audio;
            function removeTransition(e){
                if(e.propertyName != 'transform'){
                    return;
                }
                this.classList.remove('playing');
            }
            let keys = document.querySelectorAll('.key');
            keys.forEach(key => key.addEventListener('transitionend',removeTransition));
            //audio.play();
            key.classList.add('playing');
        });