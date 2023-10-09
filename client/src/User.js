import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && ( 
      <div>
        <h1 className='text-center'>User Details</h1>
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} />
          <h2>{user.name}</h2>
        </div>
        <p>{user.email}</p>
        <JSONPretty data={user} />
      </div>
    )
  );
}

export default User;
