console.log("Hostname: " + window.location.hostname);

// Detect if the site is hosted on GitHub Pages
if (window.location.hostname === "cheesamm.github.io") {
  const repositoryName = "html-css-tutorial"; // Replace with your repository name
  const links = document.querySelectorAll("a");
  console.log("Links count: " + links.length);
  links.forEach((link) => {
    if (link.href.startsWith("/")) {
      link.href = "/" + repositoryName + link.getAttribute("href");
      console.log("Replaced links: " + link.href);
    } else {
      console.log("Links that doesn't starts with / :" + link.href);
    }
  });
} else {
  console.log("Hostname different, no need to check");
}
