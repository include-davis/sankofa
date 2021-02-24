import './SupportServices.css'


function SupportServices()
{

   return (
    <div className="Support-container">
        <h2>Support Services Resources</h2>


        <div className="SupportServices-body">
        
            <p>
                <h3>Click to jump to section:</h3>
                <li>Website Resources</li>
                <li>Speech/Language Website Resources</li>
                <li>Physical Therapy Website Resources</li>
            </p>


        </div>

        
        <h2>Website Resources</h2>
            <div className="flexrow">
                <a href="https://health.ucdavis.edu/mindinstitute/centers/cedd.html/"> 
                    <button  className='Webbutton'>Center for Excellence in Developmental Disabilities</button>
            
                </a>
           
                <a href="https://thegiftsfoundation.org">
              
                    <button className='Webbutton'>The Gifts Foundation</button>

                    </a>
            </div>

            <div className="flexrow1">
            <a href="http://vistachildtherapy.com">
                
                <button  className='Webbutton'>Occupational Therapy</button>
                
                </a>


                <a href="http://www.warmlinefrc.org">
            
             <button  className='Webbutton'>Warmline</button>
           
           </a>
           
            
        </div>

     

   

   
    
    
        
        
        <div className="flexCol">
            <h2>Speech/Language Website Resources</h2>
            <a href="https://www.asha.org">
                <button  className='Webbutton'>American-Speech-Lanugage-Hearing Association (ASHA)</button>
            </a>
            <a href="http://www.arsgoldriver.com">
                <button  className='Webbutton'>American River Speech Therapy</button>
            </a>
        
            
            
            <a href="https://capitolspeechandrehab.com">
                <button  className='Webbutton'>Capitol Speech & Rehab</button>
            </a>
       
            <a href="http://cookspeechandlanguage.com/">
            <button  className='Webbutton'>Cook Speech and Language</button>
            </a>
       
            <a href="https://www.ssrlc.org/">
            <button  className='Webbutton'>Sacramento Scottish Rite</button>
           </a>
             <a href="https://tlcinctherapies.com/">
             <button  className='Webbutton'>Therapeutic Language Clinic</button>
           </a>


       
  
   

       
            
            
                <h2>Physical Therapy Website Resources</h2>
            
                <a href="http://www.babystepstherapy.com">
                    
                     <button  className='Webbutton'>Baby Steps Therapy</button>

                </a>
                <a href="http://www.burgerrehab.com">
                    
                    <button  className='Webbutton'>Burger Physical Therapy</button>
                    
                </a>
                
                <a href="https://www.ctchelpskids.org">
                   
                    <button  className='Webbutton'>Children's Therapy Center</button>
                   
                    </a>
                <a href="https://www.easterseals.com/superior-ca/">
                   
                    <button  className='Webbutton'>Easterseals Superior California</button>
                   
                    </a>
                    
                <a href="https://www.jabbergym.com/">
                   
                    <button  className='Webbutton'>Jabber Gym</button>
                   
                    </a>
                <a href="https://www.tesidea.com">
                   
                    <button  className='Webbutton'>Total Education Solutions</button>
                   
                    </a>
                <a href="http://www.sierrapediatrics.com">
                    
                    <button  className='Webbutton'>Sierra Pediatric Therapy Clinic</button>
                    
                    </a>

            </div>
       
    </div>

  );
}
export default SupportServices;