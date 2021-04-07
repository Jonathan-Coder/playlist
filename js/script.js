function d(str){
  return document.querySelector(str);
}

// Complete Day 1 goals here
var imgs = ["https://i.ytimg.com/vi/GfiJowcJiVw/maxresdefault.jpg", "https://m.media-amazon.com/images/I/61e23dfEOBL._SS500_.jpg", "https://img.youtube.com/vi/uuZE_IRwLNI/hqdefault.jpg"];
var songNames = ["The Hills", "Bad Guy", "Mirrors"];
var songArtists = ["The Weeknd", "Billie Eilish", "Justin Timberlake"];
var songLengths = ["4:02", "3:14", "8:04"];
var links =["https://www.youtube.com/watch?v=yzTuBuRdAyA", "https://youtu.be/DyDfgMOUjCI?t=13", ""];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  imgs.forEach((val, idx) => {
    d(".images").innerHTML += `<img src=${imgs[idx]}>`;
  });
  songNames.forEach((val, idx) => {
    d(".songs").innerHTML += `<p>${songNames[idx]}</p>`;
  });
  songArtists.forEach((val, idx) => {
    d(".artists").innerHTML += `<p>${songArtists[idx]}</p>`;
  });
  songLengths.forEach((val, idx) => {
    d(".lengths").innerHTML += `<p>${songLengths[idx]}</p>`;
  });
  links.forEach((val, idx) => {
    d(".links").innerHTML += `<a href="${links[idx]}" target="_blank">Listen Now</a>`;
  });
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();