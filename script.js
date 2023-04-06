// Get the container element in which the song items in the menu bar will be appended
const songList = document.querySelector('.menu_song');

// Fetch the data from the JSON file
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // Loop through the first 6 tracks and create a new song item for each track
    data.tracks.slice(0, 6).forEach(track => {
      // Create a new li element for the song item
      const songItem = document.createElement('li');
      songItem.classList.add('songItem');

      // Create the HTML for the song item using the track data
      songItem.innerHTML = `
        <span>${track.id}</span>
        <img src="${track.poster}" alt="Poster of ${track.songName} track">
        <h5>
          ${track.songName}
          <div class="subtitle">${track.artist}</div>
        </h5>
        <i class="bi playListPlay bi-play" id="${track.id}"></i>
      `;

      // Append the new song item to the container
      songList.appendChild(songItem);
    });
  });

// Get the parent element to which we will append the song items to the popular songs div.
const popSongDiv = document.querySelector('.pop_song');

// Fetch the data from db.json
fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // Iterate over the "pop-tracks" array and create a new list item for each track
    data["pop-tracks"].forEach(track => {
      // Create the new list item element
      const newSongItem = document.createElement('li');
      newSongItem.classList.add('songItem');

      // Create the HTML markup for the song item
      newSongItem.innerHTML = `
        <div class="img_play">
          <img src="${track.poster}" alt="">
          <i class="bi playListPlay bi-play" id="${track.id}"></i>
        </div>
        <h5>${track.songName}<br>
          <div class="subtitle">${track.artist}</div>
        </h5>
        `;

      // Append the new song item to the parent element
      popSongDiv.appendChild(newSongItem);
    });
  })
  .catch(error => console.error(error));


  // Get the HTML element where we want to append the images and titles to the popular artists div
const artistList = document.getElementById('artist-list');

// Fetch the data from the JSON file
fetch('db.json')
  .then(response => response.json()) // Convert the data into a JavaScript object
  .then(data => {
    // Loop through the object and append the images and titles to the HTML elements
    data.artists.forEach(artist => {
      const listItem = document.createElement('li');
      const image = document.createElement('img');
      image.src = artist.image;
      image.alt = `Image of ${artist.title}`;
      image.title = artist.title;
      listItem.appendChild(image);
      artistList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));

const music = new Audio('the-summoning.mp3');  
let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play');
        masterPlay.classList.add('bi-pause');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play');
        masterPlay.classList.remove('bi-pause');
    }
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})
