document.addEventListener("DOMContentLoaded", () => {
  const $linksTabs = document.querySelectorAll("ul.tabs_links>li");
  const $contentTabs = document.querySelectorAll(
    "div.container_tabs_content>div.tabs_content"
  );
  //   console.log($linksTabs);
  //   console.log($contentTabs);

  $linksTabs.forEach((link, index) => {
    link.addEventListener("click", () => {
      $linksTabs.forEach((link) => {
        link.classList.remove("active");
      });
      $contentTabs.forEach((content) => {
        content.classList.remove("active");
      });
      link.classList.add("active");
      $contentTabs[index].classList.add("active");
    });
  });
});
