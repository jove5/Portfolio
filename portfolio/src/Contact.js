import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function Contacts() {
  return(
    <div className='skillsDiv' id="skillsDiv">
      <p>Phone: 347-348-9267</p>
      <p>e-mail: jovantechcode@gmail.com</p>
      <a href='https://www.linkedin.com/in/jovan-georgievski/'><span><FontAwesomeIcon icon={['fab', 'linkedin']}/>  </span></a>
      <a href='https://git.generalassemb.ly/Jovan5'><span><FontAwesomeIcon icon={['fab', 'github']}/>  </span></a>
    </div>

    )
}
export default Contacts;
