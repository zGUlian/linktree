function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatarlight2.png")
  } else {
    img.setAttribute("src", "./assets/avatarg.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      " Gabriel Ulian, usando calça jeans preta com camiseta preta e jaqueta bege, cavanhaque e bigode e foto preta e branca com efeito grafite"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto gabriel ulian, com bigode e cavanhaque, usando camiseta preta e corrente,sem fundo"
    )
  }
}
