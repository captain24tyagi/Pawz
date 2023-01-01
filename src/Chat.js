import React from 'react'
import './Chat.css'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
      <Avatar
        className='chat-img'
        src={profilePic}
        alt={name}
      />
      <div className='chat-details'>
      <h2>{name}</h2>
      <p>{message}</p>
      </div>
      <p className='chat-time'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat