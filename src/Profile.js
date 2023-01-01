import React from 'react'
import './Profile.css'
import PetsIcon from '@mui/icons-material/Pets';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import StraightenIcon from '@mui/icons-material/Straighten';
import TransgenderIcon from '@mui/icons-material/Transgender';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Profile() {
  return (
    <div className='person-whole'>
      <div className='personcard-container'> 
         <div>
         <div className='person-tcard'>
          <h3>Virat, 33</h3>
         </div>

         <div className='features-person'>
                <h4>About me</h4>
                  <p className='about-person'>Heyyyaa!!, I think i don't need to show them🐶🐶 bones🦴🐶🦴they automatically get attracted to me by my looks.</p>
                <h4>My Basics</h4>
                <div className='features-deepperson'>
                  <p className='features-ind'><PetsIcon/>Beagle</p>
                  <p className='features-ind'><PunchClockIcon/>Flexible</p>
                  <p className='features-ind'><StraightenIcon/>20-40in</p>
                  <p className='features-ind'><TransgenderIcon/>Male</p>
                  <p className='features-ind'><WorkIcon/>Cricketer</p>
                </div>
                <div className='features-contperson'>
                  <p className='features-ind1'><FitnessCenterIcon/>Active</p>
                  <p className='features-ind'><FavoriteIcon/>Single</p>
                </div>
                <h4>I get way to excited about...</h4>
                <p className='about-person'>By thinking that, when i will enter my house and my doggo🐕🐕🐕will come running straight at me!!!💖💖💖😍😍</p>
                <h4>Description</h4>
                <p className='about-person'>Looking for a small, cute beagle doggo🐕🐕🐕 whom i can cuddle with, play with and offcourse enjoy with!!!</p>
                <h4>Location</h4>
                <div className='location'>
                  <LocationOnIcon className='licon' fontSize='large'/>
                  <div>
                  <h5>Paschim Vihar, West Delhi</h5>
                  <p>6kms away</p>
                  </div>
                
                </div>
                
                
              </div>
        </div>
     
      </div>
    </div>
  )
}

export default Profile