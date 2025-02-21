const input = document.querySelector(".inputs input");
const prev = document.getElementById("previous");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const next = document.getElementById("next");


const songs = [
    { title: "Skyfall By ADELE", src: "ADELE - Skyfall (lyrics).mp3"},
    { title: "Electric Timer", src: "Epic Electric Timer - 30 Seconds Countdown.mp3"},
    { title: "Not Alone By Alan Walker", src: "Short Song (English Song) [W Lyrics] 30 seconds.mp3"}
];

let CurrentSong = 0;
let audio = new Audio(songs[CurrentSong].src);

function updatetitle(){
    input.value = songs[CurrentSong].title;
}

function playsong(){
    audio.play();
}

function pausesong(){
    audio.pause();
}

function nextsong(){
    CurrentSong = (CurrentSong+1) % songs.length;
    audio.src = songs[CurrentSong].src;
    updatetitle();
    audio.play();
}

function prevsong(){
    CurrentSong = (CurrentSong -1 + songs.length) % songs.length;
    audio.src = songs[CurrentSong].src;
    updatetitle();
    audio.play();
}

play.addEventListener('click',playsong);
pause.addEventListener('click',pausesong);
next.addEventListener('click',nextsong);
prev.addEventListener('click',prevsong);

updatetitle();