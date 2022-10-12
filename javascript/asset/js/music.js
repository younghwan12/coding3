const allMusic = [
    {
        name : "Cottonmouth -",
        artist : "Whole Other",
        img: "img01",
        audio: "music_audio01"
    },
    {
        name : "Down With Your Getup -",
        artist : "Mini Vandals",
        img: "img02",
        audio: "music_audio02"
    },
    {
        name : "Hey There -",
        artist : "half.cool",
        img: "img03",
        audio: "music_audio03"
    },
    {
        name : "Keep On Movin' -",
        artist : "King Canyon",
        img: "img04",
        audio: "music_audio04"
    },
    {
        name : "Kind of a Party -",
        artist : "Mini Vandals",
        img: "img05",
        audio: "music_audio05"
    },
    {
        name : "Love the Messenger -",
        artist : "Freedom Trail Studio",
        img: "img06",
        audio: "music_audio06"
    },
    {
        name : "No Doubt -",
        artist : "Yung Logos",
        img: "img07",
        audio: "music_audio07"
    },
    {
        name : "South Street Strut -",
        artist : "The Great North Sound Society",
        img: "img08",
        audio: "music_audio08"
    },
    {
        name : "The Monuments and Tunnels in Goa and Hampi -",
        artist : "Bail Bonds",
        img: "img09",
        audio: "music_audio09"
    },
    {
        name : "Yes and No at the Same Time -",
        artist : "half.cool",
        img: "img10",
        audio: "music_audio10"
    }
]

const musicWrap = document.querySelector(".music__wrap");
const musicView = document.querySelector(".music__view .img img");
const musicName = document.querySelector(".music__view .title h3"); 
const musicArtist = document.querySelector(".music__view .title p");
const musicAudio = document.querySelector("#main-audio");
const musicPlay = document.querySelector("#control-play");
const musicPrevBtn = document.querySelector("#control-prev");
const musicNextBtn = document.querySelector("#control-next");

let musicIndex = 1;

// 음악 재생
function loadMusic(num){
    musicName.innerText = allMusic[num-1].name;
    musicArtist.innerText = allMusic[num-1].artist;
    musicView.src = `../assets/img/${allMusic[num-1].img}.png`;
    musicView.alt = allMusic[num-1].name;
    musicAudio.src = `../assets/audio/${allMusic[num-1].audio}.mp3`
}

// 재생 버튼
function playMusic(){
    musicAudio.play();
};

// 정지 버튼
function pauseMusic(){

};

// 이전곡 듣기
function prevMusic(){

};

// 다음곡 듣기
function nextMusic(){

};
window.addEventListener("load", ()=> {
    loadMusic(musicIndex);
})

// 플레이 버튼
musicPlay.addEventListener("click", ()=>{
    playMusic();
})