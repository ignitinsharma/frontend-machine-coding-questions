document.addEventListener("DOMContentLoaded", () => {
  const mainDiv = document.getElementById("maindiv");

  const imageArray = [
    "https://hips.hearstapps.com/hmg-prod/images/walking-on-the-danxia-landform-royalty-free-image-1623252956.jpg?resize=1200:*",
    "https://media.timeout.com/images/106150176/1920/1440/image.webp",
    "https://vajiramandravi.com/current-affairs/wp-content/uploads/2025/03/the_andes_mountains.jpg",
  ];

  const container = document.createElement("div");
  container.className = "container";

  imageArray.forEach((src) => {
    const img = document.createElement("img");
    img.className = "image";
    img.src = src;
    img.alt = "Image";
    container.appendChild(img);
  });

  mainDiv.appendChild(container);

  let index = 0;

  document.getElementById("next").addEventListener("click", () => {
    if (index < imageArray.length - 1) {
      index++;
      container.style.transform = `translateX(-${index * 200}px)`;
    }
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (index > 0) {
      index--;
      container.style.transform = `translateX(-${index * 200}px)`;
    }
  });
});
