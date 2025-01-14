const images = [
    "z-image-1.jpg",
    "z-image-2.png",
    "z-image-3.png",
    "z-image-4.png",
    "z-image-5.png"
  ];
  
  let currentIndex = 0;

  function changeImage() {
    const imgElement = document.getElementById("slideshow");
    currentIndex = (currentIndex + 1) % images.length; 
  
    const newSrc = images[currentIndex];
    console.log("Changing image to:", newSrc); 
    imgElement.src = newSrc;
  }
  
  setInterval(changeImage, 3000);
  
