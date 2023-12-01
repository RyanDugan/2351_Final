let photoIndex = 1;
showPhotos(photoIndex);

function plusPhotos(n) {
  showPhotos((photoIndex += n));
}

function currentPhoto(n) {
  showPhotos((photoIndex = n));
}

function showPhotos(n) {
  let i;
  let photos = document.getElementsByClassName("photo");
  if (n > photos.length) {
    photoIndex = 1;
  }
  if (n < 1) {
    photoIndex = photos.length;
  }
  for (i = 0; i < photos.length; i++) {
    photos[i].style.display = "none";
  }
  photos[photoIndex - 1].style.display = "block";
}

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}
