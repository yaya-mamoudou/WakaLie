import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function Card({time,message,name}) {
  /* const [showOptions, setShowOptions] = useState(false);

  const handleOptions = (e) => {
    if(!showOptions) {
      e.className.add('me')
      setShowOptions(true);
    }
  } */

  "Hello".slice()
  return (
    <div className="personal-card">
      <img src="https://avatars.githubusercontent.com/u/80322163?v=4" alt="" />
      <div className="name-time-message">
        <p className="user-name">{name}</p>
        <p className="time">{time.split('T')[0]} {time.split('T')[1].slice(0,5)}</p>
        <p className="message">
          {message}
        </p>
      </div>
      <FontAwesomeIcon className="ellipsis" icon={faEllipsisVertical} />
    </div>
  );
}

export default Card