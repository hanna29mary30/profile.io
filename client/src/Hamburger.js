import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const Hamburger = () => {
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav ml-auto">
			<a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-placement="bottom" data-bs-offset="10,10"> <span className="navbar-toggler-icon "></span> </a>
			    <ul className="dropdown-menu dropdown-menu">
				  <li><a className="dropdown-item" href="/"> Profile</a></li>
				  <li><a className="dropdown-item" href="/todo"> Todo app</a></li>
			    </ul>
			
		</ul>
	
 
</nav>
</div>
  );
}
export default Hamburger;
