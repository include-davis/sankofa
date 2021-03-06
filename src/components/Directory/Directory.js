//import logo from './logo.svg';
//import dispHeader from './edu-rsc.js';
import {Helmet} from 'react-helmet'
import './Directory.css';

function Direct() {
  return (
    <div className = "direct">
      <Helmet>
        <title>Sankofa | Directory</title>
        <style>{'body { background-color: #FFFCF8; }'}</style>
      </Helmet>

      <div className ="direct-container-title">
      <h1>Sankofa National Family Response Directory</h1>
      </div>

      <div className ="direct-container1">
      <p>
        The Sankofa Parent Support Group at UC Davis is a social network for parents and caregivers of Black children with disabilities. 
        Our goal is to empower parents to become strong advocates for the needs of their child. We are putting together a national Black provider directory for 
        families raising children with Developmental Disabilities.
      </p>
      </div>
      
      <div className ="direct-container2">
        <p>
        If you are a Black provider or a non-Black provider that has extensive training in supporting Black families of 
        children with disabilities we want your information. Please fill out the following form to enter your information into our directory. 
        For additional information and/or if you have any questions or concerns, please contact Dr. Jazmin Burns at jlsheppard@ucdavis.edu. 
      </p>
      </div>
      
        <button className = "direct-button">
        <a href="https://forms.gle/qYXbL3BdFATwwG6y8">
          <button className="direct-button-text"> Join Us </button>
        </a> 
      </button>
    </div>

  );
}

export default Direct;