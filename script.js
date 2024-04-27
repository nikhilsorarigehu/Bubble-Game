var timer = 60;
var score = 0;

function makeBubble() {
    var bub = "";

    for (var i = 0; i <= 209; i++) {
        var ran = Math.floor(Math.random() * 10
        )
        bub += `<div class="bubble">${ran}</div>`
        document.querySelector(".panel-bottom").innerHTML = bub;
    }
};


function runTimer(){
    var timerin = setInterval(function(){
        if(timer>0)
        {
            timer--;
        }
        else
        {
            clearInterval(timerin);
        }
        document.querySelector(".tim").textContent = timer;
    },1000)
    

};

function hitCount(){
    var rn = Math.floor(Math.random() *10);
    document.querySelector(".hitvalue").textContent = rn;
};

// function clickBubble(){
//     document.querySelector(".panel-bottom").
// };

function scoreUpdate(){
    score += 10;
    document.querySelector(".scoreval").textContent = score;
};

// document.querySelector(".panel-bottom").addEventListener("click", function(e){
//     console.log(e.target.textContent)
//     console.log("yo")
//     // alert(e.target.textContent)
// })

hitCount();
runTimer();
makeBubble();
scoreUpdate();