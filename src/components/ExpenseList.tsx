import React from 'react';
import { Expense } from '../types';

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDeleteExpense }) => {
  if (!expenses || expenses.length === 0) {
    return <p className="text-gray-700">No expenses recorded yet.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>
      <ul className="list-none">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex items-center justify-between py-2 border-b border-gray-200">
            <div>
              <span className="font-semibold">{expense.category}</span> - {expense.description}
            </div>
            <div>
              <span className="text-green-600">${expense.amount.toFixed(2)}</span>
              <button
                className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                onClick={() => onDeleteExpense(expense.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;