import { useState } from 'react'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesList from '../ExpensesList/ExpensesList'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'

const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2022')

  const saveSelectedYear = year => {
    setSelectedYear(year)
  }

  const filteredExpenses = props.expenses.filter(
    el => el.date.getFullYear() === Number(selectedYear)
  )

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYear} onYearChange={saveSelectedYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
