function d(str, all){
  if(all){
    return document.querySelectorAll(str);
  } else {
    return document.querySelector(str);
  }
}

// Complete Day 1 goals here
var song = [
  {
    title: "The Hills",
    name: "The Weeknd",
    length: "4:02",
    img: "https://i.ytimg.com/vi/GfiJowcJiVw/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=yzTuBuRdAyA"
  },
  {
    title: "Bad Guy",
    name: "Billie Eilish",
    length: "3:14",
    img: "https://m.media-amazon.com/images/I/61e23dfEOBL._SS500_.jpg",
    link: "https://youtu.be/DyDfgMOUjCI?t=13"
  },
  {
    title: "Mirrors",
    name: "Justin Timberlake",
    length: "8:04",
    img: "https://img.youtube.com/vi/uuZE_IRwLNI/hqdefault.jpg",
    link: "https://youtu.be/uuZE_IRwLNI?t=5"
  }
];
var songs = [];
/*
var albums = [];
var album = [
  {
    title: "The Hills",
    img: "https://i.ytimg.com/vi/GfiJowcJiVw/maxresdefault.jpg",
    song: {
      name: "The Hills",
      artist: "The Weeknd",
      length: "4:02",
      links: "https://www.youtube.com/watch?v=yzTuBuRdAyA"
    }
  }
];
*/
/*
var song = {
  songs: [{
    imgs: ["https://i.ytimg.com/vi/GfiJowcJiVw/maxresdefault.jpg", "https://m.media-amazon.com/images/I/61e23dfEOBL._SS500_.jpg", "https://img.youtube.com/vi/uuZE_IRwLNI/hqdefault.jpg"],
    songNames: ["The Hills", "Bad Guy", "Mirrors"],
    songArtists: ["The Weeknd", "Billie Eilish", "Justin Timberlake"],
    songLengths: ["4:02", "3:14", "8:04"],
    links: ["https://www.youtube.com/watch?v=yzTuBuRdAyA", "https://youtu.be/DyDfgMOUjCI?t=13", "https://youtu.be/uuZE_IRwLNI?t=5"]
  }]
};
var sls = [];
var song = {
  songs: [{
    imgs: ["https://i.ytimg.com/vi/GfiJowcJiVw/maxresdefault.jpg", "https://m.media-amazon.com/images/I/61e23dfEOBL._SS500_.jpg", "https://img.youtube.com/vi/uuZE_IRwLNI/hqdefault.jpg"],
    songNames: ["The Hills", "Bad Guy", "Mirrors"],
    songArtists: ["The Weeknd", "Billie Eilish", "Justin Timberlake"],
    songLengths: ["4:02", "3:14", "8:04"],
    links: ["https://www.youtube.com/watch?v=yzTuBuRdAyA", "https://youtu.be/DyDfgMOUjCI?t=13", "https://youtu.be/uuZE_IRwLNI?t=5"]
  }]
};
*/
var count = 0;
var ls = "music";
var retrieve = [];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  count = 0;
  emptySongInfo();
  
  var html = "";
  
  var info = localStorage.getItem(ls);
  
  if(info === "[]" || info === null){
    d(".total").innerHTML = "<p>Total Songs: 0</p>";
    clearInpt();
  }
  
  var parsed = JSON.parse(info);
  
  songs = parsed;
  song = songs.slice();
  
  for(var i = 0; i < song.length; i++){
    count++;
    d(".numbers").innerHTML += `<p>#${count}</p>`;
    d(".total").innerHTML = `<p>Total Songs: ${count}</p>`;
  }
  for(var b = 0; b < count; b++){
    d(".images").innerHTML += `<img src=${song[b].img}>`;
    d(".songs").innerHTML += `<p>${song[b].title}</p>`;
    d(".artists").innerHTML += `<p>${song[b].name}</p>`;
    d(".lengths").innerHTML += `<p>${song[b].length}</p>`;
    d(".links").innerHTML += `<a href="${song[b].link}" target="_blank">Listen Now</a>`;
    d(".deletes").innerHTML += `<button class="btn btn-danger" onclick="del(${b})">Delete</button>`;
  }
  clearInpt();
  /*
  song.forEach((val, idx) => {
    d(".images").innerHTML += `<img src=${song[idx].imgs}>`;
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
  */
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".numbers").empty();
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
  $(".deletes").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
  var inpts = d("input", true);
  var valid;
  var valCheck = 0;
  var track = {};
  
  inpts.forEach( (vl) => {
    if(vl.value.trim() !== "" && vl.value.length > 0){
      valCheck++;
    }
  });
  
  if(valCheck === 5){
    valid = true;
  }
  
  if(valid){
    track = {
      title: inpts[0].value,
      name: inpts[1].value,
      length: inpts[2].value,
      img: inpts[3].value,
      link: inpts[4].value
    };
    //new
    song.push(track);
    var string = JSON.stringify(song);
    
    localStorage.setItem(ls, string);
    displaySongInfo();
  } else {
    alert("Please fill in all the boxes.");
    clearInpt();
  }
    //new
    /*
    for(var s in song){
      console.log(s);
      song[s].forEach( (vl, i) => {
        song[s][i].songNames.push(songInpt);
        song[s][i].songArtists.push(artistInpt);
        song[s][i].songLengths.push(lengthInpt);
        song[s][i].imgs.push(imgInpt);
        song[s][i].links.push(linkInpt);
      });
    }
    */
    
  /*
  arrays.forEach((val, idx) => {
    var arr = arrays[idx];
    var add = inpts[idx];
    var sting = JSON.stringify(val);
    console.log(sting);
    //val.push(add);
  });
  */
}

function clearInpt(){
  d(".song").value = "";
  d(".artist").value = "";
  d(".length").value = "";
  d(".image").value = "";
  d(".link").value = "";
}

function del(ind){
  song.splice(ind, 1);
  localStorage.setItem(ls, JSON.stringify(song));
  displaySongInfo();
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  localStorage.setItem(ls, JSON.stringify(array));
}

$("#add").click(function () {
  addSongInfo();
});

d("#delete").addEventListener("click", () => {
  localStorage.clear();
  song = [];
  d(".total").innerHTML = "<p>Total Songs: 0</p>";
  displaySongInfo();
});

d("#reset").addEventListener("click", () => {
  song = [
    {
      title: "The Hills",
      name: "The Weeknd",
      length: "4:02",
      img: "https://i.ytimg.com/vi/GfiJowcJiVw/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=yzTuBuRdAyA"
    },
    {
      title: "Bad Guy",
      name: "Billie Eilish",
      length: "3:14",
      img: "https://m.media-amazon.com/images/I/61e23dfEOBL._SS500_.jpg",
      link: "https://youtu.be/DyDfgMOUjCI?t=13"
    },
    {
      title: "Mirrors",
      name: "Justin Timberlake",
      length: "8:04",
      img: "https://img.youtube.com/vi/uuZE_IRwLNI/hqdefault.jpg",
      link: "https://youtu.be/uuZE_IRwLNI?t=5"
    }
  ];
  localStorage.setItem(ls, JSON.stringify(song));
  displaySongInfo();
});

d("#shuffle").addEventListener("click", () => {
  shuffleArray(song);
  displaySongInfo();
});

displaySongInfo();