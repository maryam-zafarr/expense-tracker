import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const saveExpenseData = data => {
    const expenseData = {
      ...data,
      id: Math.random().toString
    }

    props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onFormSubmit={saveExpenseData} />
    </div>
  )
}

export default NewExpense
