const producto = document.getElementById('pregunta-producto')

export const handleProduct = title => {
  producto.innerHTML = `Enserio desea comprar ${title}`
}
