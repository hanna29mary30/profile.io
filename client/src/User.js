import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
   
    isAuthenticated && ( 
      <div>
        <h1 className='text-center m-4'>USER DETAILS</h1>
        <div className="text-center mt-4">
        <img src={user.picture} alt={user.name} style={{ borderRadius: "50%", width: "150px", height: "150px" }} />
        <h2 className='mt-4'>{user.name}</h2>
        <p>{user.email}</p>
        <p>UserName :{user.nickname}</p> 
        <p>Updated At :{user.updated_at}</p> 
        </div>
        
      </div>
    )
   
  );
}

export default User;
