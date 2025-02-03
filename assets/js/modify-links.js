// Function to modify the links on GitHub Pages
function modifyLinksOnGithubPages() {
  console.log("Hostname: " + window.location.hostname);

  // Detect if the site is hosted on GitHub Pages
  if (window.location.hostname === "cheesamm.github.io") {
    const repositoryName = "html-css-tutorial"; // Replace with your repository name
    const links = document.querySelectorAll("a");
    console.log("Links count: " + links.length);

    links.forEach((link) => {
      const href = link.getAttribute("href"); // Get the relative href
      console.log("Links Href: " + href);

      if (href.startsWith("/")) {
        link.href = "/" + repositoryName + href;
        console.log("Replaced links: " + link.href);
      } else {
        console.log("Links that doesn't starts with / :" + href);
      }
    });
  } else {
    console.log("Hostname different, no need to check");
  }
}

// Ensure the DOM is loaded before running the function
document.addEventListener("DOMContentLoaded", modifyLinksOnGithubPages);
