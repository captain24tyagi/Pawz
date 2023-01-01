import React from 'react';
import './Card.css';
import TinderCard from 'react-tinder-card'
import { useState, useEffect } from 'react';
import db from './Firebase'
import Swipecard from './Swipecard';
import PetsIcon from '@mui/icons-material/Pets';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import StraightenIcon from '@mui/icons-material/Straighten';
import TransgenderIcon from '@mui/icons-material/Transgender';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


function Card() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('dogs').onSnapshot((snapshot) => {
      setDogs(snapshot.docs.map(doc => doc.data()))
    })
  
    return () => {
      unsubscribe();
    }
  }, [])
  

  return (
    <div className='whole'>
      <div className='card-container'>
       {dogs.map((dog) => 
         <TinderCard
          className='swipe'
          key={dog.name}
          preventSwipe={['up', 'down']}
        >
         <div className='tcard' style={{backgroundImage: `url(${dog.url})`}}>
          <h2>{dog.name}, {dog.age}</h2>
         </div>

         <div className='features'>
                <h4>About me</h4>
                  <p className='about'>{dog.about}</p>
                <h4>My Basics</h4>
                <div className='features-deep'>
                  <p className='features-ind'><PetsIcon/>{dog.breed}</p>
                  <p className='features-ind'><VaccinesIcon/>{dog.vaccine}</p>
                  <p className='features-ind'><StraightenIcon/>{dog.height}</p>
                  <p className='features-ind'><TransgenderIcon/>{dog.gender}</p>
                  <p className='features-ind'><RemoveRedEyeIcon/>{dog.eye}</p>
                </div>
                <div className='features-cont'>
                  <p className='features-ind1'><SportsSoccerIcon/>{dog.sports}</p>
                  <p className='features-ind'><MonitorHeartIcon/>{dog.heart}</p>
                </div>
                <h4>I get way to excited about...</h4>
                <p className='about'>{dog.excited}</p>
              </div>
        </TinderCard>
       )}
     
      </div>
      <Swipecard/>
    </div>
  )
}

export default Card