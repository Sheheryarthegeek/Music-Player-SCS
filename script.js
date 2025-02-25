let song_array = [
    {
        name: 'Mand',
        cover: './Images/Mand.jpg',
        url: './songs/Mand.mp3',
        duration: '03:06'
    },
    {
        name: 'Humsafar',
        cover: './Images/Humsafar.jpg',
        url: './songs/Humsafar.mp3',
        duration: '03:31'
    },
    {
        name: 'Meherban',
        cover: './Images/Lucid.jpg',
        url: './songs/Meherban.mp3',
        duration: '03:32'
    },
    {
        name: 'Jani x Savage',
        cover: './Images/iCant.jpg',
        url: './songs/Jani x Savage.mp3',
        duration: '02:46'
    },
    {
        name: 'Jani x Savage',
        cover: './Images/iCant.jpg',
        url: './songs/Jani x Savage.mp3',
        duration: '02:46'
    }
];



let audio = new Audio();
let selectedSong = 0

let mainCover = document.querySelector("#left")
let allSong = document.querySelector("#all-songs")

let playBtn = document.querySelector("#play")
let backBtn = document.querySelector("#back")
let forwardBtn = document.querySelector("#forward")


mainFunction = () => {

    let clutter = '';

    song_array.forEach((e, i) => {

        clutter += ` <div class="song-card" id="${i}">
        <div class="part-1">
        <img src="${e.cover}"
        alt="">
        <h2>${e.name}</h2>
        </div>
        <h6>${e.duration}</h6>
        </div>`
    })

    allSong.innerHTML = clutter
    audio.src = song_array[selectedSong].url
    mainCover.style.backgroundImage = `url(${song_array[selectedSong].cover})`

}

mainFunction()

// Now let's write the fucntion to play the songs from the list


allSong.addEventListener("click", (dets) => {
    selectedSong = dets.target.id
    let coverImage = song_array[dets.target.id].cover

    console.log(coverImage);

    mainFunction()
    audio.play()
    playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`


})


playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`
    } else {
        audio.pause();
        playBtn.innerHTML = `<i class="ri-play-large-fill"></i>`
    }
});


backBtn.addEventListener('click', () => {
    if (selectedSong == 0) {
        selectedSong = song_array.length - 1
    } else {
        selectedSong -= 1
    }
    mainFunction()

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`
    } else {
        audio.pause();
        playBtn.innerHTML = `<i class="ri-play-large-fill"></i>`
    }
})


forwardBtn.addEventListener('click', () => {
    if (selectedSong == song_array.length - 1) {
        selectedSong = 0
    } else {
        selectedSong += 1
    }

    mainFunction()

    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = `<i class="ri-pause-large-line"></i>`
    } else {
        audio.pause();
        playBtn.innerHTML = `<i class="ri-play-large-fill"></i>`
    }
})