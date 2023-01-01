import React from 'react'
import { useState } from 'react'
import './Chatscreen.css'
import Avatar from '@mui/material/Avatar';

function Chatscreen() {
    const [input, setInput] = useState([])
    const [messages, setMessages] = useState([
        {
          name: 'Jhakku',
          message: 'Hey, myself Alen, owner of Jhakku',
          image: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg'
        },
        {
          name: 'Jhakku',
          message: 'I hope you have went through his profile',
          image: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg'
        },
        {
          message: 'Hey, yeah i went through it'
        },
        {
          name: 'Jhakku',
          message: 'I can share with you , his more pics if you are interested',
          image: 'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg'
        }
    ]);

    const handleClick = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }
    
  return (
    <div className='chatscreen'>
      <p className='chatscreen-time'>YOU MATCHED WITH JHAKKU ON 12/12/2022</p>
       
       {messages.map((message) => (
          message.name ? (
            <div className='chatscreen-sender'>
            <Avatar
            alt={message.name}
            src={message.image}
            />
            <p className='chatmessage-text'>{message.message}</p>
            </div>
          ) : (
            <div className='chatscreen-sender'>
            <p className='chatmessage-usertext'>{message.message}</p>
            </div>
          )
       ))}
        <form className='chatscreen-form'>
            <input
                className='chatscreen-input'
                value={input}
                onChange={e => setInput(e.target.value)}
                type='text'
                placeholder='Enter the message...'
            >
            </input>
            <button type='submit' onClick={handleClick} className='chatbutton'>SEND</button>
        </form>
       
    </div>
  )
}

export default Chatscreen