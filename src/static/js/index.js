const mainList = document.getElementById('main-list')
import { Card } from './Card.js'
import { create } from './create.js'
import { example } from './example.js'

const handleList = (products = example) => {
  let countCol = 0

  let row = create('div', {className: 'row'})
  mainList.appendChild(row)

  for(let product of products) {
    countCol++
    row.appendChild(Card(product))

    if( countCol % 4 == 0 ) {
      row = create('div', {className: 'row'})
      mainList.appendChild(row)
      countCol = 0
    }
  }
}
handleList()
