document.addEventListener("DOMContentLoaded", () => {
  const titulos = document.querySelectorAll(".titulo-categoria");
  const imgPreview = document.getElementById("img-preview");
  const nombreSabor = document.getElementById("nombre-sabor");

  // --- Acordeón de categorías ---
  titulos.forEach(titulo => {
    titulo.addEventListener("click", () => {
      const lista = titulo.nextElementSibling;

      document.querySelectorAll(".sabores-lista").forEach(l => {
        if (l !== lista) l.classList.remove("active");
      });

      lista.classList.toggle("active");
    });
  });

  // --- Mostrar imagen al pasar el mouse ---
  const sabores = document.querySelectorAll(".sabores-lista li");
  sabores.forEach(sabor => {
    sabor.addEventListener("mouseenter", () => {
      const imgSrc = sabor.getAttribute("data-img");
      const nombre = sabor.textContent;

      imgPreview.src = imgSrc;
      nombreSabor.textContent = nombre;
    });
  });
});

// Menú Productos: Hover en PC, click en móvil
document.addEventListener("DOMContentLoaded", () => {

  const boton = document.getElementById("btn-productos");
  const menu = document.querySelector(".menu-productos-desplegable");

  // Click SOLO en pantallas chicas
  boton.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      menu.classList.toggle("activo");
    }
  });

  // Cerrar al tocar fuera (solo móvil)
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 &&
        !menu.contains(e.target) &&
        !boton.contains(e.target)) {
      menu.classList.remove("activo");
    }
  });
});
