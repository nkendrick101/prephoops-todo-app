/*
|--------------------------------------------------------------------------
| The home page.
|--------------------------------------------------------------------------
|
| The home page of your application.
|
*/
import Link from "next/link";
import { H1 } from "./../components/Typography/Headers";
import { LandingNav } from "../components"

export default function Home() {
    return (
      <>
      <div className="wrap">
<section className="container">
  <article className="half">
    <h1>Hoops</h1>
    <div className="tabs">
      <span className="tab signin active"><a href="#signin">Sign in</a></span>
      <span className="tab signup"><a href="#signup">Sign up</a></span>
    </div>
    <div className="content">
      <div className="signin-cont cont">
       
      </div>
      <div className="signup-cont cont">
       
      </div>
    </div>
  </article>
  <div className="half bg">
  </div></section>


    <LandingNav />
 
</div>





        </>
      /*   <>
        <div className="wrap">
    <div className="content">

                    
  
  <div className="landingbox">
    <div className="form-container ">
      <LandingNav />
   </div>
</div>

    </div>
  </div>
  
  
  
  
  
          </>
     */
    );
}
