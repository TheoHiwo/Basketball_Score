let countScoreHome = 0
let countScoreGuest = 0

let scoreHome = document.getElementById("score-home")
scoreHome.textContent=countScoreHome
let scoreGuest = document.getElementById("score-guest")
scoreGuest.textContent=countScoreGuest

function add(team,inc) {
    if(team===1){
        countScoreHome+=inc
        scoreHome.textContent=countScoreHome
    } else {
        countScoreGuest+=inc
        scoreGuest.textContent=countScoreGuest
    }
}

function reset() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
}
