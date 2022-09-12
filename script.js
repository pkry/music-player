
// initialize the variables

let songIndex=1;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongNmae=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Ajnabi mujhko itna bata" ,  filePath:"songs/1.mp3" ,coverPath: "covers/1.jpg"},
    {songName:"Bholi si surata" ,  filePath:"songs/2.mp3" ,coverPath: "covers/2.jpg"},
    {songName:"Chand chupa badal me" ,  filePath:"songs/3.mp3" ,coverPath: "covers/3.jpg"},
    {songName:"Dil laga liya tumse pyar karke" ,  filePath:"songs/4.mp3" ,coverPath: "covers/4.jpg"},
    {songName:"Ho gaya hai tujhko to pyar" ,  filePath:"songs/5.mp3" ,coverPath: "covers/5.jpg"},
    {songName:"Hum unse mohbbat karke" ,  filePath:"songs/6.mp3" ,coverPath: "covers/6.jpg"},
    {songName:"Jugni Jugni" ,  filePath:"songs/7.mp3" ,coverPath: "covers/7.jpg"},
    {songName:"Kyunki itna pyar tumko" ,  filePath:"songs/8.mp3" ,coverPath: "covers/8.jpg"},
    {songName:"Mai yaha hu yaha hu yaha" ,  filePath:"songs/9.mp3" ,coverPath: "covers/9.jpg"},
    {songName:"Mohabbat dil ka sukun" ,  filePath:"songs/10.mp3" ,coverPath: "covers/10.jpg"},
    {songName:"Rab karen tujhko bhi pyar ho jaye" ,  filePath:"songs/11.mp3" ,coverPath: "covers/11.jpg"},
    {songName:"Raja ki rani" ,  filePath:"songs/12.mp3" ,coverPath: "covers/12.jpg"},
    {songName:"Tu dharti pe chahe jaha bhi rahegi" ,  filePath:"songs/13.mp3" ,coverPath: "covers/13.jpg"}
]

songItem.forEach((element ,i)=> {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100 ; 
})

const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
    
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            makeallplays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = "songs/" + songIndex +".mp3";
            masterSongNmae.innerText=songs[songIndex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>12){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = "songs/" + songIndex +".mp3";
    masterSongNmae.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<2){
        songIndex=13;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = "songs/" + songIndex +".mp3";
    masterSongNmae.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})