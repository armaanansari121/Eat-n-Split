import React, { useState } from 'react'
import Button from './Button';

function FormSplitBill({ selectedFriend, setSelectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [paidBy, setPaidBy] = useState("user");
  const friendExpense = bill ? bill - userExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;
    onSplitBill(paidBy === "user" ?
      friendExpense :
      -userExpense
    )

    setSelectedFriend(null);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your Expenses</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) => setUserExpense(Number(e.target.value) > bill ? userExpense : Number(e.target.value))}
      />
      <label>{selectedFriend.name}'s Expenses</label>
      <input
        type="text"
        disabled
        value={friendExpense}
      />
      <label>Who's paying?</label>
      <select
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill;
