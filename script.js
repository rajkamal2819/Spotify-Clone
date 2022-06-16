console.log("Welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("/mp3/eastside.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gifImg = document.getElementById("gifImg");
let songItems = Array.from(document.getElementsByClassName("songItems"));

let songs = [
  {
    songName: "Lovely",
    filePath: "/mp3/lovely.mp3",
    coverPath: "/images/cover.jpg",
  },
  {
    songName: "EastSide",
    filePath: "/mp3/eastside.mp3",
    coverPath: "/images/cover.jpg",
  },
  {
    songName: "Make you mine",
    filePath: "/mp3/makeyoumine.mp3",
    coverPath: "/images/cover.jpg",
  },
  {
    songName: "Harleys in hawai",
    filePath: "/mp3/harleysinhawai.mp3",
    coverPath: "/images/cover.jpg",
  },
  {
    songName: "Watermellon sugar",
    filePath: "/mp3/watermellonsugar.mp3",
    coverPath: "/images/cover.jpg",
  },
];
// let audioElement = new Audio("/mp3/eastside.mp3");
// audioElement.play();

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play / pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gifImg.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gifImg.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    myProgressBar.value * (audioElement.duration / 100);
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.target.classList.add("fa-circle-pause");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
    });
  }
);
