import react, { useEffect, useState } from "react";
import { getImage } from "./api";
import { Carousels } from "./Carousels";

import Todo from "./components/Todos";
import Hamburger from "./Hamburger";
const Profile = () => {

  return(
    <div>
        <Hamburger/>
         <Carousels/>
    </div>
  );
};

export default Profile;
