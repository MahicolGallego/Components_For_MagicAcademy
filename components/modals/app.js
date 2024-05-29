document.addEventListener("DOMContentLoaded", () => {
  const $btnsActiveModal = document.querySelectorAll(".btn_active_modal");
  const $btnsModal = document.querySelectorAll(".btn_modal");
  const $modal = document.getElementById("course_delete_modal");
  console.log($btnsActiveModal);
  console.log($btnsModal);

  $btnsActiveModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      $modal.showModal();
    });
  });

  $btnsModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      $modal.close();
    });
  });
});
