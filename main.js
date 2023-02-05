import './style.css'

import { Calculator } from './src/Calculator'
import { 
  $$numbers, $$operations, $ac, $current, $del, $equals, $previous
} from './src/dom'

const calculator = new Calculator($previous, $current)

$$numbers.forEach(n => {
  n.onclick = () => {
    calculator.appendNumber(n.innerText)
    // calculator.update()
  }
})

$$operations.forEach(o => {
  o.onclick = () => {
    calculator.chooseOperation(o.innerText)
    // calculator.update()
  }
})

$equals.onclick = button => {
  calculator.compute()
  // calculator.update()
}

$ac.onclick = button => {
  calculator.clear()
  // calculator.update()
}

$del.onclick = button => {
  calculator.delete()
  // calculator.update()
}