import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { NavLink } from "react-router-dom";
export const Hamburger = () => {
  return (<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav mr-auto">
			
			<li class="nav-item dropdown">
				<a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> <span class="navbar-toggler-icon"></span> </a>
			    <ul class="dropdown-menu dropdown-menu-end">
				  <li><a class="dropdown-item" href="/"> Profile</a></li>
				  <li><a class="dropdown-item" href="/todo"> Todo app</a></li>
			    </ul>
			</li>
		</ul>
	
 
</nav>
</div>
  );
}
export default Hamburger;
