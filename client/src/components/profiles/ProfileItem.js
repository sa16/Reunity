import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar }, 
    company,
    location,
    interests
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {company && <span>Working at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <div>
        <h2>Interests</h2>
        <ul>
          {
          interests.length > 0 ? 

            interests.slice(0, 4).map((interest, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-circle' /> {interest}
            </li>
            )) :

            <li className='text-primary'>N/A</li>
          }
        </ul>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
