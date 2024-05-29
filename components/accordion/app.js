document.addEventListener("DOMContentLoaded", () => {
  const $blocks = document.querySelectorAll(".accordion .block");
  const $titles = document.querySelectorAll(".accordion .title");

  console.log($blocks);
  console.log($titles);

  // Cuando CLICK en h2,
  // QUITAR la clase activo de TODOS los bloque
  // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

  // Recorrer TODOS los h2
  $titles.forEach((element, i) => {
    // Asignando un CLICK a cada h2
    element.addEventListener("click", () => {
      // Recorrer TODOS los bloque
      if ($blocks[i].className.includes("active")) {
        $blocks[i].classList.remove("active");
        return;
      }
      // Quitamos la clase activo de TODOS los bloques
      // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
      // (Línea número 12)
      $blocks[i].classList.add("active");
    });
  });
});
