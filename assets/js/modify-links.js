const hostname = "cheesamm.github.io";
const repositoryName = "html-css-tutorial";

console.log("Hostname: " + window.location.hostname);

function modifyLinks() {
  const hyperlinks = document.querySelectorAll("a");
  console.log("Links count: " + hyperlinks.length);

  hyperlinks.forEach((link) => {
    const href = link.getAttribute("href");
    console.log("Link Href: " + href);

    if (href && href.startsWith("/")) {
      link.href = "/" + repositoryName + href;
      console.log("Replaced link: " + link.href);
    }
  });
}

function modifyImages() {
  const images = document.querySelectorAll("img");
  console.log("Images count: " + images.length);

  images.forEach((img) => {
    const src = img.getAttribute("src");
    console.log("Image src: " + src);

    if (src && src.startsWith("/")) {
      img.src = "/" + repositoryName + src;
      console.log("Replaced image src: " + img.src);
    }
  });
}

function modifyLinksAndImages() {
  modifyLinks();
  modifyImages();
}

if (window.location.hostname === hostname) {
  document.addEventListener("DOMContentLoaded", modifyLinksAndImages);
}
