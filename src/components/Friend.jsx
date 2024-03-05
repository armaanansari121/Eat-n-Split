import React from 'react'
import Button from './Button';

function Friend({ selectedFriend, onSelection, friend }) {
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 &&
        <p className='red'>You owe {friend.name} ${-1 * friend.balance} </p>}
      {friend.balance > 0 &&
        <p className='green'>{friend.name} owes you ${friend.balance} </p>}
      {friend.balance === 0 &&
        <p>You and {friend.name} are even </p>}
      <Button onClick={() => onSelection(friend)}>
        {selectedFriend === friend ? "Close" : "Select"}
      </Button>
    </li>
  )
}

export default Friend