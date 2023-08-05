import { Link, useLocation } from "react-router-dom";



export default function Home(){
  

    return(
      <div className="kid">
          <div class="cover-container d-flex h-100 p-0.5 m-100 mx-auto flex-column">
    
            <main role="main" class="inner cover ">
              
              <h1 class="cover-heading">Get a Good SecondProducts </h1>
              <p class="lead" style={{fontSize:"30px",font:"weight-900;"}}>Share your listings on social media or with friends and family to increase their visibility........</p>
              <p class="lead">
                <button href="#" class="btn btn-outline-secondary btn-lg"><Link to="/Bikes">Sing Up Now</Link></button>
              </p>
            </main>      
            
          </div>
          </div>
      )
}