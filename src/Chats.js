import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <div className='chats'>
     <Chat 
        name="Jhakku"
        message="Hola, how you doin, woof"
        timestamp="1hr ago"
        profilePic='https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg'
     />
     <Chat 
        name="Pluto"
        message="Hey Sarthak, pluto's owner this side🐕👧"
        timestamp="2 hr ago"
        profilePic='http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRqMbXvdztEAKJMI7MtP0RuM6rYlOQ1TmLL8vBIGj_PLM0hgE_4ua7_Tw9rtFaBQSAEPXcZEyuYrniOmuA'
     />
     <Chat 
        name="Shera"
        message="Hey, big man👨!!"
        timestamp="3 days ago"
        profilePic='https://media-be.chewy.com/wp-content/uploads/2021/05/11162926/German-Shepherd-1358309706-1024x591.jpg'
     />
     <Chat 
        name="Bob"
        message="Hola, woof woof🐶🗣️"
        timestamp="5 days ago"
        profilePic='https://cdn.britannica.com/07/234207-050-0037B589/English-bulldog-dog.jpg'
     />
     <Chat 
        name="Flurry"
        message="🐕🐶🐕‍🦺🦴🦴"
        timestamp="6 days ago"
        profilePic='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F09%2Fchihuahua-laying-down-wooden-floor-1675701502-2000.jpg'
     />
     <Chat 
        name="Robson"
        message="Hola, how you doin, woof"
        timestamp="10 days ago"
        profilePic='https://image.petmd.com/files/styles/863x625/public/2022-10/iStock-1397267365.jpg'
     />
    </div>
  )
}

export default Chats