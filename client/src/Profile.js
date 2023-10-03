import react, { useEffect, useState } from "react";
import { getImage } from "./api";
import { Carousels } from "./Carousels";

import Todo from "./components/Todos";
import Hamburgermenu from "./Hamburgermenu";
const Profile = () => {

  return(
    <div>
          <Hamburgermenu/> 
         <Carousels/> 
    </div>
  );
};

export default Profile;
