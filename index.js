document.querySelector(".box").addEventListener("mousemove",()=>{
    document.querySelector(".play-button").style.opacity="1";
    document.querySelector(".play-button").style.bottom="100px";
})
document.querySelector(".box").addEventListener("mouseout",()=>{
    document.querySelector(".play-button").style.opacity="0";
    document.querySelector(".play-button").style.bottom="90px";
})
document.querySelector(".box2").addEventListener("mousemove",()=>{
    document.querySelector(".play-button2").style.opacity="1";
    document.querySelector(".play-button2").style.bottom="100px";
})
document.querySelector(".box2").addEventListener("mouseout",()=>{
    document.querySelector(".play-button2").style.opacity="0";
    document.querySelector(".play-button2").style.bottom="90px";
})
document.querySelector(".box4").addEventListener("mousemove",()=>{
    document.querySelector(".play-button4").style.opacity="1";
    document.querySelector(".play-button4").style.bottom="100px";
})
document.querySelector(".box4").addEventListener("mouseout",()=>{
    document.querySelector(".play-button4").style.opacity="0";
    document.querySelector(".play-button4").style.bottom="90px";
})
document.querySelector(".box3").addEventListener("mousemove",()=>{
    document.querySelector(".play-button3").style.opacity="1";
    document.querySelector(".play-button3").style.bottom="100px";
})
document.querySelector(".box3").addEventListener("mouseout",()=>{
    document.querySelector(".play-button3").style.opacity="0";
    document.querySelector(".play-button3").style.bottom="90px";
})
document.querySelector(".box5").addEventListener("mousemove",()=>{
    document.querySelector(".play-button5").style.opacity="1";
    document.querySelector(".play-button5").style.bottom="100px";
})
document.querySelector(".box5").addEventListener("mouseout",()=>{
    document.querySelector(".play-button5").style.opacity="0";
    document.querySelector(".play-button5").style.bottom="90px";
})
document.querySelector(".box6").addEventListener("mousemove",()=>{
    document.querySelector(".play-button6").style.opacity="1";
    document.querySelector(".play-button6").style.bottom="100px";
})
document.querySelector(".box6").addEventListener("mouseout",()=>{
    document.querySelector(".play-button6").style.opacity="0";
    document.querySelector(".play-button6").style.bottom="90px";
})
document.querySelector(".box7").addEventListener("mousemove",()=>{
    document.querySelector(".play-button7").style.opacity="1";
    document.querySelector(".play-button7").style.bottom="100px";
})
document.querySelector(".box7").addEventListener("mouseout",()=>{
    document.querySelector(".play-button7").style.opacity="0";
    document.querySelector(".play-button7").style.bottom="90px";
})
document.querySelector(".box8").addEventListener("mousemove",()=>{
    document.querySelector(".play-button8").style.opacity="1";
    document.querySelector(".play-button8").style.bottom="100px";
})
document.querySelector(".box8").addEventListener("mouseout",()=>{
    document.querySelector(".play-button8").style.opacity="0";
    document.querySelector(".play-button8").style.bottom="90px";
})
document.querySelector(".box9").addEventListener("mousemove",()=>{
    document.querySelector(".play-button9").style.opacity="1";
    document.querySelector(".play-button9").style.bottom="100px";
})
document.querySelector(".box9").addEventListener("mouseout",()=>{
    document.querySelector(".play-button9").style.opacity="0";
    document.querySelector(".play-button9").style.bottom="90px";
})
document.querySelector(".box10").addEventListener("mousemove",()=>{
    document.querySelector(".play-button10").style.opacity="1";
    document.querySelector(".play-button10").style.bottom="100px";
})
document.querySelector(".box10").addEventListener("mouseout",()=>{
    document.querySelector(".play-button10").style.opacity="0";
    document.querySelector(".play-button10").style.bottom="90px";
})

let current=new Audio();
let songs;
async function getsongs() {
    let a=await fetch("http://127.0.0.1:5500/songs/");
    let response=await a.text();
    let div=document.createElement("div");
    div.innerHTML=response;
    let tds=div.getElementsByTagName("a");
    console.log(tds)
    let songs=[];
    for (let index = 0; index < tds.length; index++) {
        const element = tds[index];
        if (element.href.endsWith(".m4a")) {
            songs.push(element.href.split("/songs/")[1]);
        }
        
    }
    return songs;
}
function secondsToMinutes(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return "Invalid input";
    }
  
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = parseInt(seconds % 60);
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
const  playmusic = (song,pause=false)=>{
    current.src=`/songs/${song}`;
    if (!pause) {
        current.play();
        play.src="img/pause.svg"
    }
  
    document.querySelector(".name1").innerHTML=decodeURI(song)
}
async function main(){
 songs= await getsongs();
 playmusic(songs[0],true)
 let songul=document.querySelector(".songslist").getElementsByTagName("ul")[0];
 for (const song of songs) {
    songul.innerHTML=songul.innerHTML+`<li class="deeki" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#e6dddd" stroke-width="2"/>
    <path d="M10 15.5C10 16.3284 9.32843 17 8.5 17C7.67157 17 7 16.3284 7 15.5C7 14.6716 7.67157 14 8.5 14C9.32843 14 10 14.6716 10 15.5ZM10 15.5V11C10 10.1062 10 9.65932 10.2262 9.38299C10.4524 9.10667 10.9638 9.00361 11.9865 8.7975C13.8531 8.42135 15.3586 7.59867 16 7V13.5M16 13.75C16 14.4404 15.4404 15 14.75 15C14.0596 15 13.5 14.4404 13.5 13.75C13.5 13.0596 14.0596 12.5 14.75 12.5C15.4404 12.5 16 13.0596 16 13.75Z" stroke="#e6dddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg><div class="name"><div class="songname">${song.replaceAll("%20"," ").replaceAll("%"," ")}</div><div class="songsinger">${song.replaceAll("%20","").replaceAll("%","").replaceAll(".m4a","").split("-")[1]}</div></div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#e6dddd" stroke-width="2"/>
    <path d="M15.4531 12.3948C15.3016 13.0215 14.5857 13.4644 13.1539 14.3502C11.7697 15.2064 11.0777 15.6346 10.5199 15.4625C10.2893 15.3913 10.0793 15.2562 9.90982 15.07C9.5 14.6198 9.5 13.7465 9.5 12C9.5 10.2535 9.5 9.38018 9.90982 8.92995C10.0793 8.74381 10.2893 8.60868 10.5199 8.53753C11.0777 8.36544 11.7697 8.79357 13.1539 9.64983C14.5857 10.5356 15.3016 10.9785 15.4531 11.6052C15.5156 11.8639 15.5156 12.1361 15.4531 12.3948Z" stroke="#e6dddd" stroke-width="2" stroke-linejoin="round"/>
    </svg></li>`;
 }
Array.from(document.querySelector(".songslist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click",element=>{
        console.log(e.querySelector(".songname").innerHTML)
        playmusic(e.querySelector(".songname").innerHTML);
    })
    
})
play.addEventListener("click",()=>{
    if (current.paused) {
        current.play();
        play.src="img/pause.svg"
    }
    else{
        current.pause();
        play.src="img/play.svg"
    }
})
current.addEventListener("timeupdate",()=>{
    document.querySelector(".time").innerHTML=`${secondsToMinutes(current.currentTime)}/${secondsToMinutes(current.duration)}`
    document.querySelector(".circle").style.left=(current.currentTime/current.duration)*100+"%";
    if (secondsToMinutes(current.currentTime)==secondsToMinutes(current.duration)) {
        let index=songs.indexOf(current.src.split("/").slice(-1)[0])
        if (index+1< songs.length) {
            playmusic(songs[index+1])
        }
    }
})
document.querySelector(".seekbar").addEventListener("click",e=>{
    let persentage=(e.offsetX/e.target.getBoundingClientRect().width)*100;
    document.querySelector(".circle").style.left=persentage+"%";
    current.currentTime=(current.duration)*persentage/100;
})
document.querySelector(".more").addEventListener("click",()=>{
    document.querySelector(".left").style.left="0";
    document.querySelector(".left").style.backgroundColor="black";

})
document.querySelector(".beda").addEventListener("click",()=>{
    document.querySelector(".left").style.left="-100%";
})

back.addEventListener("click",()=>{
    console.log("you clicked back")
    let index=songs.indexOf(current.src.split("/").slice(-1)[0])
    console.log(songs,index)
    if (index-1>=0) {
        playmusic(songs[index-1])
    }

})
next.addEventListener("click",()=>{
    console.log("you clicked next")
    let index=songs.indexOf(current.src.split("/").slice(-1)[0])
    console.log(songs,index)
    if (index+1< songs.length) {
        playmusic(songs[index+1])
    }

})
var box = document.getElementById('box');
  box.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/album/78ehCcxMT4kUZZH96RYl7W';

})
var box2 = document.getElementById('box2');
  box2.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/track/2dqjk8AmosqLig5qsZB9k3';

})
var box3 = document.getElementById('box3');
  box3.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/track/0RTVRaERt3R26SIJrLAhwN';

})
var box4 = document.getElementById('box4');
  box4.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/playlist/4vSTV61efRmetmaoz95Vet';

})
var box5 = document.getElementById('box5');
  box5.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/track/3aN9oCHWb1mWfhkioM7I5m';

})
var box6 = document.getElementById('box6');
  box6.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/artist/2wQP7peRciPJyvzDDmroBV';

})
var box7 = document.getElementById('box7');
  box7.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/track/5s4E1EyFZbPSyfuRMVGcNT';

})
var box8 = document.getElementById('box8');
  box8.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/playlist/4jl3Ovvi8mlToKYiB7o6py';

})
var box9 = document.getElementById('box9');
  box9.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/playlist/4QS86QjXsaB6Hwr6erxaBO';

})
var box10 = document.getElementById('box10');
  box10.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM';

})
var search = document.getElementById('search');
  search.addEventListener('click', function() {
    window.location.href = 'https://open.spotify.com/search';

})
}
main()