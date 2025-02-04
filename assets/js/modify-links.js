// Function to modify the links on GitHub Pages
function modifyLinksOnGithubPages() {
  console.log("Hostname: " + window.location.hostname);

  // Detect if the site is hosted on GitHub Pages
  if (window.location.hostname === "cheesamm.github.io") {
    const repositoryName = "html-css-tutorial"; // Replace with your repository name
    const hyperlinks = document.querySelectorAll("a");
    const images = document.querySelectorAll("img");
    console.log("Links count: " + hyperlinks.length);
    console.log("Images count: " + images.length);

    hyperlinks.forEach((link) => {
      const href = link.getAttribute("href"); // Get the relative href
      console.log("Links Href: " + href);

      if (href.startsWith("/")) {
        link.href = "/" + repositoryName + href;
        console.log("Replaced links: " + link.href);
      }
      // else {
      //   console.log("Links that doesn't starts with / :" + href);
      // }
    });

    images.forEach((img) => {
      const src = img.getAttribute("src"); // Get the relative href
      console.log("Links Href: " + src);

      if (src.startsWith("/")) {
        img.src = "/" + repositoryName + href;
        console.log("Replaced iamge links: " + img.src);
      }
      // else {
      //   console.log("Links that doesn't starts with / :" + href);
      // }
    });
  }
  // else {
  //   console.log("Hostname different, no need to check");
  // }
}

// Ensure the DOM is loaded before running the function
document.addEventListener("DOMContentLoaded", modifyLinksOnGithubPages);
