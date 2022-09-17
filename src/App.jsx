import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 1000,
    date: new Date(2022, 7, 14)
  },
  { id: 'e2', title: 'New TV', amount: 9990, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 9900,
    date: new Date(2020, 11, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 2500,
    date: new Date(2022, 2, 28)
  }
]
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseItem = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseItem} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
