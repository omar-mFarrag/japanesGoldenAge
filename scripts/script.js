var landingBackdround = document.getElementById("landing");
var landingBackdroundCounter = 1;
var landingCarName = document.getElementById("landingCarName");
var landingCarP = document.getElementById("landingCarP");
var landingText = document.getElementById("landing-text");
var ring = document.getElementById("ring");
var canChange = true;

// Start of landing script for desktop
function carInfoChange(){
    if(landingBackdroundCounter === 1){
        if(landingBackdround.offsetWidth <= 600){
            landingCarName.innerHTML = `Japanese Golden Age`;
        }else{
            landingCarName.innerHTML = `Japanese <br> Golden <br> Age`;
        }
        landingCarP.innerHTML = `
            The 1990s was considered the golden age for Japanese 
            car manufacturers as their designs and engineering 
            prowess went full throttle at the models they turned 
            out from 1990 to 1999. This bold step into making cars 
            that were more powerful, tech laden and styled to impress 
            was a reflection at the confidence that Japanese carmakers 
            felt at the time.`;
    }else if(landingBackdroundCounter === 2){
        if(landingBackdround.offsetWidth <= 600){
            landingCarName.innerHTML = `Nissan  Skyline GT-R`;
        }else{
            landingCarName.innerHTML = `Nissan <br> Skyline <br> GT-R`;
        }
        landingCarP.innerHTML = `
            The Nissan Skyline GT-R (Japanese: 日産・スカイラインGT-R) is a sports car based on the Nissan Skyline range. 
            The first cars named "Skyline GT-R" were produced between 1969 and 1972 under 
            the model code KPGC10, and were successful in Japanese touring car racing events. 
            This model was followed by a brief production run of second-generation cars, 
            under model code KPGC110, in 1973.`;
    }else if(landingBackdroundCounter === 3){
        if(landingBackdround.offsetWidth <= 600){
            landingCarName.innerHTML = `Honda  NSX`;
        }else{
            landingCarName.innerHTML = `Honda <br> NSX`;
        }
        landingCarP.innerHTML = `
        The NSX was designed by a team led by Chief Designer Masahito Nakano and 
        Executive Chief Engineer Shigeru Uehara. It benefited from advanced aerodynamics 
        and styling inspired by an F-16 fighter jet cockpit[5] and input from the late 
        Formula One World Champion Ayrton Senna during the final development stages.`;
    }else if(landingBackdroundCounter === 4){
        if(landingBackdround.offsetWidth <= 600){
            landingCarName.innerHTML = `Toyota Supra`;
        }else{
            landingCarName.innerHTML = `Toyota <br> Supra`;
        }
        landingCarP.innerHTML = `
        The Toyota Supra (Japanese: トヨタ・スープラ) 
        is a sports car and grand tourer manufactured by the Toyota Motor Corporation 
        beginning in 1978. The name "supra" is derived from the Latin prefix, meaning "above", 
        "to surpass" or "go beyond".`;
    }
}


function addAnimationLeft(){
    landingText.style.animation = "infoTransitionLeft 1s linear";
    setTimeout(() => { landingText.style.animation = ""; }, 1000);
}
function addAnimationRight(){
    landingText.style.animation = "infoTransitionRight 1s linear";
    setTimeout(() => { landingText.style.animation = ""; }, 1000);
}



function infoPointTransition(){
    if (landingBackdroundCounter === 1) {
        ring.style.transform = "translate(-10px, -50%)";
    }else if( landingBackdroundCounter === 2 ){
        ring.style.transform = "translate(17px, -50%)";
    }else if( landingBackdroundCounter === 3 ){
        ring.style.transform = "translate(44px, -50%)";
    }else if( landingBackdroundCounter === 4 ){
        ring.style.transform = "translate(71px, -50%)";
    }
}

function landingBackgroundChanger(){
    if(landingBackdround.offsetWidth <= 600){
        landingBackdround.style.backgroundImage = `url(./images/landingBackgrounds/phone/background${landingBackdroundCounter}.jpg)`;
    }else{
        landingBackdround.style.backgroundImage = `url(./images/landingBackgrounds/background${landingBackdroundCounter}.jpg)`;
    }
}

function landingBgChagePlus(){
    
    if( canChange === true ){
        canChange = false;
        landingBackdroundCounter++;
        if(landingBackdroundCounter > 4){
            landingBackdroundCounter = 1;
        }
        landingBackgroundChanger();
        setTimeout( carInfoChange, 500 );
        addAnimationRight();
        infoPointTransition();
        bgChangerReset();
    }
    setTimeout(() => {
        canChange = true;
    }, 1100);
}
function landingBgChageMinus(){
    if( canChange === true ){
        canChange = false;
        landingBackdroundCounter--;
        if(landingBackdroundCounter < 1){
            landingBackdroundCounter = 4;
        }
        landingBackgroundChanger();
        setTimeout( carInfoChange, 500 );
        addAnimationLeft();
        infoPointTransition();
        bgChangerReset();
    }

    setTimeout(() => {
        canChange = true;
    }, 1100);
}
function autoChangeBg(){
    landingBackdroundCounter++;
    if(landingBackdroundCounter > 4){
        landingBackdroundCounter = 1;
    }
    landingBackgroundChanger();
    setTimeout( carInfoChange, 500);
    addAnimationRight();
    infoPointTransition();
}
var bgChangeTimer = setInterval( autoChangeBg, 10000);
function bgChangerReset(){
    clearInterval(bgChangeTimer);
    bgChangeTimer = setInterval( autoChangeBg, 10000);
}
// End of landing script for desktop

// for change wallpaper with swipe right and left ♥
var startingX , startingY , movingX, movingY;
function touchstart(evt){
    startingX = evt.touches[0].clientX ;
    startingY = evt.touches[0].clientY ;
}
function touchmove(evt){
    movingX = evt.touches[0].clientX ;
    movingY = evt.touches[0].clientY ;
}
function touchend(){
    if(startingX+100 < movingX){
        landingBgChagePlus();
    }else if(startingX-100 > movingX){
        landingBgChageMinus();
    }
}
// End of landing script   <3 