var NumberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<NumberofDrumButtons; i++)

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
        
    {}
    document.addEventListener('keypress',function(event){
        makeSound(event.key)
    });
    
    function makeSound (key){
        switch (key) {
            case "w":
                var Siren = new Audio('https://github.com/cstallworth3/clapout/blob/main/808Siren.wav?raw=true');
                Siren.play();
                break;
    
                case "a":
                    var Kick = new Audio();
                    Kick.play();
                    break;
                    
                    case 's':
                        var Snare = new Audio ();
                        Snare.play();
                        break;
    
                        case 'd':
                    var Clap = new Audio();
                    Clap.play();
                    break;
    
                    case 'j':
                    var HiHat = new Audio();
                    HiHat.play();
                    break;
    
                    case 'k':
                    var Southside808 = new Audio();
                    Southside808.play();
                    break; 
    
                    case 'l':
                    var Cymbol = new Audio();
                    Cymbol.play();
                    break;
    }}