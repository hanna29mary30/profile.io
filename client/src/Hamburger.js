import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export const Hamburger = () => {
  return (<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul class="navbar-nav ml-auto">
			<a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-placement="bottom" data-bs-offset="10,10"> <span class="navbar-toggler-icon "></span> </a>
			    <ul class="dropdown-menu dropdown-menu">
				  <li><a class="dropdown-item" href="/"> Profile</a></li>
				  <li><a class="dropdown-item" href="/todo"> Todo app</a></li>
			    </ul>
			
		</ul>
	
 
</nav>
</div>
  );
}
export default Hamburger;
