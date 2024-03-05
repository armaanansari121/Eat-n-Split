import { useState } from 'react'
import './App.css'
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(newFriend) {
    setFriendsList((friendsList) => [...friendsList, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(selectedFriend?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriendsList(friendsList
      .map((friend) =>
        friend.id === selectedFriend?.id ?
          { ...friend, balance: friend.balance + value } :
          friend))
  }

  return (
    <div className='app'>
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend &&
          <FormAddFriend
            friendsList={friendsList}
            onAddFriend={handleAddFriend}
          />}
        <Button
          onClick={() => setShowAddFriend(!showAddFriend)}
        >
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend &&
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          setSelectedFriend={setSelectedFriend}
        />}
    </div>
  )
}

export default App
