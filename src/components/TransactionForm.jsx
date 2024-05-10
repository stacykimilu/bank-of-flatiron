import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  //  for form fields
  const initialState = {
    description: '',
    category: '',
    amount: '',
    date: ''
  };

  // Handle form fields
  const [transaction, setTransaction] = useState(initialState);

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  // Function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddTransaction 
    onAddTransaction(transaction);
    setTransaction(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Description input */}
      <input
        type="text"
        name="description"
        value={transaction.description}
        onChange={handleChange}
        placeholder="Description"
      />
      {/* Category input */}
      <input
        type="text"
        name="category"
        value={transaction.category}
        onChange={handleChange}
        placeholder="Category"
      />
      {/* Amount input */}
      <input
        type="text"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      {/* Date input */}
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        placeholder="Date"
      />
      {/* Submit button */}
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
