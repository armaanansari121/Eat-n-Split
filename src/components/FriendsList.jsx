import React from 'react'
import Friend from './Friend';

function FriendsList({ selectedFriend, onSelection, friendsList }) {
  // const friends = friendsList;

  return (
    <ul>
      {friendsList
        .map((friend) =>
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            onSelection={onSelection}
            key={friend.id}
          />)}
    </ul>
  )
}

export default FriendsList
