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

    if( countCol % 4 == 0) {
      row = create('div', {className: 'row'})
      mainList.appendChild(row)
      countCol = 0
    }
  }
}
handleList()

const card =  `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
