import { create } from './create.js'

const exampleImg = 'https://theblackdetour.com/wp-content/uploads/2020/06/rs_1024x759-200608095330-1024-Terry-Crews-LT-060820-NUP_190050_0014.jpg'

const handleProduct = (title, price) => {
  console.log(title, price)
}

const descExample = 'example Desc'

export const Card = ({title='example', img=exampleImg, price='$100', desc=descExample}) => {
  const titleCard = create('h3', {className: 'card-title', innerHTML:title })
  const descCard = create('p', {className: 'card-text px-2 h6', innerHTML: desc})
  const priceCard = create('p', {className: 'card-text h5', innerHTML: price})
  const imgCard = create('img', {className: 'card-img-top', src: img})

  const btnBuy = create('input', {
    className: 'btn btn-primary',
    type: 'button',
    value: 'Comprar',
    onclick: () => handleProduct(title, price)
  })

  const cardBody = create('div', {className: 'card-body'}, [titleCard, descCard, priceCard, btnBuy])
  const card = create('div', {className: 'card my-3'}, [imgCard, cardBody])
  const col = create('div', {className: 'col-lg-3 col-sm-6'}, [card])

  return col
}
