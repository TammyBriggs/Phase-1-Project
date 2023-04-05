// Get the container element in which the song items will be appended
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

  // Get the HTML element where we want to append the images and titles
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
