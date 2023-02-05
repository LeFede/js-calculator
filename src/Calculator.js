
export class Calculator {
  constructor($previous, $current) {
    this.$previous       = $previous
    this.$current        = $current
    this.previousOperand = ''
    this.currentOperand  = ''
    this.operation       = ''
    this.clear()
  }

  clear = () => {
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = ''
    this.update()
  }

  delete = () => {
    this.currentOperand = this.currentOperand.slice(0, -1)
    this.update()
  }

  appendNumber = (n) => {
    if (n === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = `${this.currentOperand}${n}`
    this.update()
  }

  chooseOperation = (o) => {
    if (this.currentOperand === '') return
    if (this.previousOperand != '') this.compute()
    this.operation = o
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
    this.update()
  }

  compute = () => {
    let computation
    const prev = parseFloat(this.previousOperand)
    const curr = parseFloat(this.currentOperand)
    switch (this.operation) {
      case '+':
        computation = prev + curr
        break
      case '-':
        computation = prev - curr
        break
      case '/':
        computation = prev / curr
        break
      case '*':
        computation = prev * curr
        break
      default:
        return
    }

    this.currentOperand = computation.toString()
    this.previousOperand = ''
    this.operation = ''

    this.update()
  }

  getDisplayNumber = (n) => {
    let [integer, decimal] = n.split('.')
    if (/0000000/g.test(n))
      decimal = decimal.slice(0, 3)
    const canLocale = !isNaN(parseFloat(integer))

    return `${canLocale ? parseFloat(integer).toLocaleString('en') : ''}${n.includes('.') ? '.' : ''}${decimal ? decimal : ''}`
  }

  update = () => {
    this.$previous.innerText = `${this.getDisplayNumber(this.previousOperand)}${this.operation !== '' ? ' '+this.operation : ''}`
    // this.$current.innerText = this.currentOperand
    this.$current.innerText = this.getDisplayNumber(this.currentOperand)
  }

}