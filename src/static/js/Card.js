import { create } from './create.js'

const exampleImg = 'https://theblackdetour.com/wp-content/uploads/2020/06/rs_1024x759-200608095330-1024-Terry-Crews-LT-060820-NUP_190050_0014.jpg'

export const Card = ({title='example', img=exampleImg, price='$100'})=>{

  const imgCard = create('img', {className: 'card-img-top', src: img})
  const titleCard = create('h5', {className: 'card-title', innerHTML:title })
  const cardBody = create('div', {className: 'card-body'}, [titleCard])
  const priceCard = create('p', {className: 'card-text', innerHTML: price})

  const card = create('div', {className: 'card'}, [imgCard, cardBody, priceCard])
  const col = create('div', {className: 'col-lg-3 col-sm-6'}, [card])

  return col
}
