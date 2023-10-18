let topIcon = document.querySelector(".go-top");
let topBar = document.querySelector(".top-bar-progress");
let skills = document.querySelectorAll(".skills-content div span");
let skillSection = document.querySelector(".skills");
let statisticsSection = document.querySelector(".statistics");
let statistics = document.querySelectorAll(
  ".statistics .container .content div span"
);
let started = true;

window.onscroll = function () {
  // Show and Hide Go Top Icon
  if (window.scrollY > document.documentElement.clientHeight - 400) {
    topIcon.classList.add("show-go-top");
  } else {
    topIcon.classList.remove("show-go-top");
  }

  // Scroll Progress
  let heigth =
    document.documentElement.offsetHeight -
    document.documentElement.clientHeight;
  let width = Math.trunc((window.scrollY / heigth) * 100);
  topBar.style.width = `${width}%`;

  // Our Skills Bars
  if (window.scrollY >= skillSection.offsetTop) {
    skills.forEach((el) => {
      el.style.width = `${el.dataset.set}%`;
    });
  }

  // Statistics
  if (window.scrollY >= statisticsSection.offsetTop - 300) {
    if (started) {
      statistics.forEach((el) => {
        let goal = el.dataset.set;
        let counter = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
            clearInterval(counter);
          }
        }, 2000 / goal);
      });
      started = false;
    }
  }
};

// Go To Top Action

topIcon.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    bahavior: "smooth",
  });
});

// Events Date

let daysBox = document.querySelector(".days");
let hoursBox = document.querySelector(".hours");
let munitesBox = document.querySelector(".munites");
let secondsBox = document.querySelector(".seconds");

eventDay = new Date("dec 30 2024 10:00:00").getTime();

let counterEvent = setInterval(() => {
  now = new Date().getTime();
  let diff = eventDay - now;

  let days = Math.trunc(diff / (1000 * 60 * 60 * 24));
  daysBox.innerHTML = days;
  let hours = Math.trunc((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hoursBox.innerHTML = hours < 10 ? `0${hours}` : hours;
  let munites = Math.trunc((diff % (1000 * 60 * 60)) / (1000 * 60));
  munitesBox.innerHTML = munites < 10 ? `0${munites}` : munites;
  let seconds = Math.trunc((diff % (1000 * 60)) / 1000);
  secondsBox.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (diff <= 1000) {
    clearInterval(counterEvent);
  }
}, 1000);

// videos

let videos = document.querySelectorAll(".videos-list ul li");
let videosTable = Array.from(videos);

let videoTitle = document.querySelector(".preview p");
let videoSource = document.querySelector(".preview video source");
let videoTag = document.querySelector(".preview video");

let videoList = [
  "media/video1.mp4",
  "media/video2.mp4",
  "media/video3.mp4",
  "media/video4.mp4",
  "media/video5.mp4",
  "media/video6.mp4",
  "media/video7.mp4",
];

videosTable.forEach((el) => {
  el.onclick = function (e) {
    videos.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");

    videoTitle.innerHTML = e.target.firstChild.textContent;
    videoSource.setAttribute("src", videoList[videosTable.indexOf(el)]);
    videoTag.load();
  };
});
