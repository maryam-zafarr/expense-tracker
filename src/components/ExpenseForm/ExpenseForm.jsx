import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [form, setForm] = useState(false)

  const formChangeHandler = () => {
    setForm(!form)
  }

  if (form === false) {
    return <button onClick={formChangeHandler}>Add New Expense</button>
  }

  const titleChangeHandler = e => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = e => {
    setAmount(e.target.value)
  }

  const dateChangeHandler = e => {
    setDate(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()

    const expenseData = {
      title,
      amount: Number(amount),
      date: new Date(date)
    }
    props.onFormSubmit(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
    setForm(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='1'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={formChangeHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
