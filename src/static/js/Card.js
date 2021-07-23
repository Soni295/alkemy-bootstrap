import { create } from './create.js'
import { handleProduct } from './Modal.js'

const BtnBuy = (title, price) => {
  const btnBuy = create('input', {
    className: 'btn btn-success btn-lg my-2 mx-3',
    type: 'button',
    value: 'Comprar',
    onclick: () => handleProduct(title, price)
  })

  btnBuy.setAttribute("data-bs-toggle", 'modal');
  btnBuy.setAttribute("data-bs-target", '#question');
  return btnBuy
}

const exampleImg = 'https://theblackdetour.com/wp-content/uploads/2020/06/rs_1024x759-200608095330-1024-Terry-Crews-LT-060820-NUP_190050_0014.jpg'

export const Card = ({title='example', img=exampleImg, price='$100'}) => {
  const titleCard = create('h3', {className: 'card-title mx-3', innerHTML:title })
  const priceCard = create('p', {className: 'card-text h5 my-3 mx-3', innerHTML: price})
  const imgCard = create('img', {className: 'card-img-top card-img', src: img})
  const btnBuy = BtnBuy(title)
  const cardBody = create('div', {className: 'card-body'}, [titleCard, priceCard, btnBuy])
  const card = create('div', {className: 'card my-3'}, [imgCard, cardBody])
  const col = create('div', {className: 'col-lg-3 col-sm-6'}, [card])
  return col
}
