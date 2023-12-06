import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery"
import logo from "./images/79.png"

import idea from "./images/idea.svg"
import discuss from "./images/discuss.svg"
import team from "./images/team.svg"
import done from "./images/done.svg"
import mech from "./images/mech.png"
import numpy from "./images/numpy.png"
import bgimage from "./images/dd.jpg"
import endless1 from "./images/slanted-gradient.png"
import endless from "./images/endless.jpeg";
import diamond from "./images/diamond-sunset.png";
import it1 from "./images/it.svg";
import ai from "./images/AI.svg";
import health from "./images/health.svg";
import physics from "./images/physics.svg";
import chemistry from "./images/chemistry.svg";
import biology from "./images/biology.svg"
import civil from "./images/civil.svg"

const Home = () => {
    useEffect(() => {
   // Select all elements with class 'counter-count'
var counters = document.querySelectorAll('.counter-count');

counters.forEach(function (counter) {
  var currentValue = 0; // Starting value
  var targetValue = parseInt(counter.textContent, 10); // Target value

  var duration = 4000; // Animation duration in milliseconds
  var startTime = null;

  function animateCounter(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    // Calculate time elapsed since the animation started
    var elapsedTime = timestamp - startTime;

    // Calculate the new value for the counter based on time elapsed
    var newValue = Math.min(
      Math.ceil((elapsedTime / duration) * targetValue),
      targetValue
    );

    // Update the counter text content
    counter.textContent = newValue;

    // Continue the animation until the target value is reached
    if (newValue < targetValue) {
      requestAnimationFrame(animateCounter);
    }
  }

  // Start the animation
  requestAnimationFrame(animateCounter);
});


 
     
    }, []);
  



    const itemsData = [
        {
            title: 'IDEATION',
            description: `The project lifecycle begins with brainstorming ideas, exploring concepts, and identifying opportunities.`,
            imageUrl: idea,
        },
        {
          title: 'Discussion',
          description: `Ideas are discussed, refined, and evaluated to determine their feasibility and alignment with project objectives.`,
          imageUrl: discuss,
        },
        {
          title: 'Teamwork',
          description: ` A dedicated team is formed, roles are assigned, and collaboration begins to execute the project plan.`,
          imageUrl: team,
        },
        {
          title: 'Goal achieved',
          description: `Through diligent work, the team works towards achieving project goals, completing tasks, and delivering outcomes.`,
          imageUrl: done,
        },
      ];
    
      const [selectedItemIndex, setSelectedItemIndex] = useState(0); // Initial selected item index
    
      const handleItemClick = (index) => {
  setSelectedItemIndex(index);
  console.log('Selected Item Index:', index);
  // Function to animate a number counting up
      }

  return (
    <>
          <>

 

<nav style={{display:""}}>
<div className="logo-and-text">
  <img src={logo} alt="logo" />
  <h4>National Repository for Projects and Researches by Universities</h4>
</div>



<div className="wrapper" style={{marginBottom:"50px", marginTop:"-55px", marginLeft:"800px"}}>
  <div className="Languages">
  <div className="Language-select"> 
  <select className="Languages-btns" > 
  <option value="en-US">English </option>
  <option value="hi-IN">हिन्दी (Hindi)</option>
  <option value="te-IN">తెలుగు (Telugu)</option>
  <option value="ta-IN">தமிழ் (Tamil)</option>
  <option value="kn-IN">ಕನ್ನಡ (Kannada)</option>
  <option value="mr-IN">मराठी (Marathi)</option>
  <option value="bn-IN">বাংলা (Bengali)</option>
  <option value="gu-IN">ગુજરાતી (Gujarati)</option>
  <option value="ml-IN">മലയാളം (Malayalam)</option>
  <option value="pa-IN">ਪੰਜਾਬੀ (Punjabi)</option>
  <option value="or-IN">ଓଡ଼ିଆ (Odia)</option>
</select>
  </div>
</div>
</div>



<div style={{
    marginTop:"-35px",
    background:"white",
    marginLeft:"-15rem"
}}>
<ul>
<li><a href="#">Home<i className="fas fa-home"></i></a></li>
<li><a href="#">About<i className="fas fa-home"></i></a></li>
    <li><a href="#" className="toggle-dropdown">Explore Projects <i className="fas fa-chevron-down"></i></a>
        <ul className="dropdown-menu">
            <li><a href="#">AI</a></li><hr></hr>
            <li>
               
                <a href="#">ML
                     {/* <i className="fas fa-chevron-right"></i>  */}
                </a>
            </li>   
           
        </ul>   
    </li>
    <li><a href="#" className="toggle-dropdown">Resources <i className="fas fa-chevron-down"></i></a>
    <ul className="dropdown-menu">
            <li><a href="#">Project Toolkit</a></li><hr></hr>
            <li>
               
                <a href="#">Explore More
                     {/* <i className="fas fa-chevron-right"></i>  */}
                </a>
            </li>   
           
        </ul>   
    </li>
    <li><a href="#">Institutions<i className="fas fa-home"></i></a></li>
</ul>

    <ul style={{marginLeft:"88rem",fontSize:"13px",marginTop:"-15px"}}>
    <li><a href="#">Login<i className="fas fa-home"></i></a></li>
    <li><a href="#">Sign up<i className="fas fa-home"></i></a></li>
    </ul>

</div>
</nav>

  </>
      <section className="background" style={{ backgroundImage: `url(${bgimage})` }}>
       
  <form className="search_bar small">
    <div className="search-container">
      
      <input type="text" className="search-bar" placeholder="🔍    What do you want to explore today?" />
    </div>
<div class="counter">
    <div class="counter-container">
        <div class="row">
            <div class="col-12 col-lg-3">
                <div class="count-up">
                    <p class="counter-count">100</p> 
                </div>
                <div class="count-down">
                    <h3>Page Visits</h3>
                </div>
                
            </div>
             <div class="col-12 col-lg-3">
               <div class="count-up">
                    <p class="counter-count">400</p>
                </div>
                <div class="count-down">
                    <h3>Projects Uploaded</h3>
                </div>
                
            </div>
        </div>
    </div>
</div>
  </form>


</section>
{/* <img
  src={bgimage2}
  alt="Idea SVG"
  className="team-image"
  style={{
    width: '1520px',
    height: '700px',
    marginTop: '-800px',
    zIndex: '25000',
    position: 'relative', // Add this line to set position to relative
  }}
/> */}
<section className="svg-container">
  <div className="header-design">
    <div className="listar-map-button">
      <div className="listar-map-button-text" style={{ display: 'inline-block', opacity: 1 }}>
        <span className="icon-map2">Project Journey</span>
      </div>
    </div>
    <div className="footer-wave"></div>
  </div>
  <div className="pset">
    <div className="container">
      <div className="row listar-feature-items">
        <div
          className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
          data-aos="fade-zoom-in"
          data-aos-group="features"
          data-line-height="25.2px"
        >
          <div className="listar-feature-item listar-feature-has-link">
            <a href="#" target="_blank"></a>
            <div className="listar-feature-item-inner">
              <div className="listar-feature-right-border"></div>
              <div className="listar-feature-block-content-wrapper">
                <div className="listar-feature-icon-wrapper">
                  <div className="listar-feature-icon-inner">
                    <div>
                      <img
                        alt="Businesses"
                        className="listar-image-icon"
                        src={idea}
                      />
                    </div>
                  </div>
                </div>
                <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                  <div className="listar-feature-item-title listar-feature-counter-added">
                    <span>
                      <span>01</span> Ideation
                    </span>
                  </div>
                  <div className="listar-feature-item-excerpt">
                 Creativity knows no bounds. It's the birthplace of visionary project ideas, where innovation and imagination converge to solve challenges and inspire meaningful change.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
        </div>


        <div
          className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
          data-aos="fade-zoom-in"
          data-aos-group="features"
          data-line-height="25.2px"
        >
          <div className="listar-feature-item listar-feature-has-link">
            <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank"></a>
            <div className="listar-feature-item-inner">
              <div className="listar-feature-right-border"></div>
              <div className="listar-feature-block-content-wrapper">
                <div className="listar-feature-icon-wrapper">
                  <div className="listar-feature-icon-inner">
                    <div>
                      <img
                        alt="Customers"
                        className="listar-image-icon"
                        src={discuss}
                      />
                    </div>
                  </div>
                </div>
                <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                  <div className="listar-feature-item-title listar-feature-counter-added">
                    <span>
                      <span>02</span> Planning and Discussion
                    </span>
                  </div>
                  <div className="listar-feature-item-excerpt">
                  Collaborate, strategize, and refine project blueprints, ensuring a clear path forward. It's where ideas evolve into actionable plans, setting the stage for project success.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
        </div>



        <div
          className="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
          data-aos="fade-zoom-in"
          data-aos-group="features"
          data-line-height="25.2px"
        >
          <div className="listar-feature-item listar-feature-has-link">
            <a href="https://codepen.io/uiswarup/full/yLzypyY" target="_blank"></a>
            <div className="listar-feature-item-inner">
              <div className="listar-feature-right-border"></div>
              <div className="listar-feature-block-content-wrapper">
                <div className="listar-feature-icon-wrapper">
                  <div className="listar-feature-icon-inner">
                    <div>
                      <img
                        alt="Feedback"
                        className="listar-image-icon"
                        src={team}
                      />
                    </div>
                  </div>
                </div>
                <div className="listar-feature-content-wrapper" style={{ paddingTop: 0 }}>
                  <div className="listar-feature-item-title listar-feature-counter-added">
                    <span>
                      <span>03</span> Implementation and Development
                    </span>
                  </div>
                  <div className="listar-feature-item-excerpt">
                  Implementation and Development is where your project comes to life. With dedication and precision, you turn plans into reality, creating a transformative solution that reflects your vision and expertise.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
        </div>
        
      </div>
    </div>
  </div>
</section>


      <div className="svg-icons">
        {/* <!-- Add your SVG icons here --> */}
        
       <div className="categories">
            <h2 style={{fontFamily:"cursive"}}>Explore wide categories of Projects</h2>
        <div className="categories__bg">

        </div>
        <div className="inner">
            <ul>
                <li>
                    <a href="https://alison.com/courses/it" title="Mech Projects">
                        <img src={mech} width="64" height="66" title="Mech Projects" alt="mech Icon" />
                        <h4>Mechanical</h4>
                        <span className="course-amount arrow-icon"> 1,038 Projects
                                <i className="fas fa-arrow-right"></i>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://alison.com/courses/it" title="IT Projects">
                    <img src={it1} width="34" height="36" title="IT Projects" alt="IT Icon" />
                    <h4>IT</h4>
                    <span className="course-amount arrow-icon"> 1,038 Projects 
                            <i className="fas fa-arrow-right"></i>
                </span>
            </a>
        </li>
        <li>
            <a href="https://alison.com/vertical/english" title="ML Projects">
                <img className="" src={numpy} width="40" height="40" title="" alt="ML Icon" />
                <h4>Machine Learning</h4>
                <span className="course-amount arrow-icon"> 55 Projects 
                    <i className="fas fa-arrow-right"></i>
            </span>
            </a>
            </li>
            <li>
                <a href="https://alison.com/courses/health" title="Health Projects">
                    <img src={health} width="94" height="71" title="Health Projects" alt="Health Icon" /> 
                    <h4>Health</h4>
                    <span className="course-amount arrow-icon"> 711 Projects 
                        <i className="fas fa-arrow-right"></i>
                </span>
                </a>
            </li>
                <li>
                    <a href="https://alison.com/courses/language" title="Language Projects">
                        <img src={ai} width="40" height="40" title="Language Projects" alt="Language Icon" />
                        <h4>Artificial Intelligence</h4>
                        <span className="course-amount arrow-icon"> 298 Projects 
                            <i className="fas fa-arrow-right"></i>
                    </span>
                </a>
            </li>
            <li>
                <a href="https://alison.com/courses/business" title="Business Projects">
                    <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/business.svg" width="40" height="34" title="Business Projects" alt="Business Icon" />
                    <h4>Business</h4>
                    <span className="course-amount arrow-icon"> 1,481 Projects 
                        <i className="fas fa-arrow-right"></i>
                </span>
            </a>
        </li>
        <li>
            <a href="https://alison.com/courses/management" title="Management Projects">
                <img src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/management.svg" width="36" height="36" title="Management Projects" alt="Management Icon" />
                <h4>Management</h4>
                <span className="course-amount arrow-icon"> 879 Projects 
                    <i className="fas fa-arrow-right"></i>
            </span>
        </a>
    </li>
    <li>
        <a href="https://alison.com/courses/personal-development" title="Personal Development Projects">
            <img src={physics} width="126" height="66" title="Management Projects" alt="Management Icon"/>
            <h4>Physics</h4>
            <span className="course-amount arrow-icon"> 1,071 Projects 
                <i className="fas fa-arrow-right"></i>
        </span>
    </a>
</li>
<li>
    <a href="https://alison.com/courses/marketing" title="Sales &amp; Marketing Projects">
                <img src={chemistry} width="72" height="68" title="Sales &amp; Marketing Projects" alt="Sales &amp; Marketing Icon" />
                <h4>Chemistry</h4>
                <span className="course-amount arrow-icon"> 354 Projects 
                    <i className="fas fa-arrow-right"></i>
            </span>
        </a>
    </li>
    <li>
        <a href="https://alison.com/courses/engineering" title="Engineering &amp; Construction Projects">
            <img src={biology} width="60" height="64" title="Engineering &amp; Construction Projects" alt="Engineering &amp; Construction Icon" />
            <h4>Biology</h4>
            <span className="course-amount arrow-icon"> 717 Projects 
                <i className="fas fa-arrow-right"></i>
        </span>
    </a>
</li>
    <li>
        <a href="https://alison.com/courses/education" title="Teaching &amp; Academics Projects">
        <img src={civil} width="84" height="68" title="Teaching &amp; Academics Projects" alt="Teaching &amp; Academics Icon" />
        <h4>Civil</h4>
        <span className="course-amount arrow-icon"> 1,278 Projects 
            <i className="fas fa-arrow-right"></i>
    </span>
    </a>
    </li>
        <li>
            <a href="https://alison.com/vertical/english" title="English Projects">
                <img className="" src="https://cdn01.alison-static.net/public/html/site/img/homepage/categories/english.svg" width="34" height="29" title="" alt="English Icon" />
                <h4>English</h4>
                <span className="course-amount arrow-icon"> 55 Projects 
                    <i className="fas fa-arrow-right"></i>
            </span>
            </a>
            </li>
            </ul>
            </div>
        </div>
               
       </div> 
     
        <div className="main">
            <section className="results-header" style={{marginLeft:"-400px",fontFamily:"cursive",color:"brown",marginTop:"40px",marginBottom:"10px"}}>
            <div class="select">
   <select name="format" id="format">
     
   <option value="pdf">Recommended</option>
      <option value="txt">Sort By Rating</option>
      
      <option value="epub">Sort By Badges</option>
    
   </select>
</div>
<h1>Explore Projects</h1>
              
  
            </section>
            <div className="container">
            <div className="filter-container">
            <div className="filter-section__wrapper">
                <section className="filter-section">
                    <h6>Filters</h6>
                    <div className="filters">
                        <h5 className="filters__title">Categories</h5>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-1" type="checkbox" />
                                <label htmlFor="checkbox-1">AI & ML</label>
                            </div>
                            <span className="badge status-primary">10</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-1" type="checkbox" />
                                <label htmlFor="checkbox-1">Civil</label>
                            </div>
                            <span className="badge status-primary">6</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-1" type="checkbox" />
                                <label htmlFor="checkbox-1">Business</label>
                            </div>
                            <span className="badge status-primary">7</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-2" type="checkbox" />
                                <label htmlFor="checkbox-2">Innovation</label>
                                
                            </div>
                            <span className="badge status-primary">5</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-3" type="checkbox" />
                                <label htmlFor="checkbox-3">Electrical</label>
                                
                            </div>
                            <span className="badge status-primary">20</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-4" type="checkbox" />
                                <label htmlFor="checkbox-4">Mechanics</label>
                                
                            </div>
                            <span className="badge status-primary">8</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-4" type="checkbox" />
                                <label htmlFor="checkbox-4">Physics</label>
                                
                            </div>
                            <span className="badge status-primary">8</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-4" type="checkbox" />
                                <label htmlFor="checkbox-4">Automobile</label>
                                
                            </div>
                            <span className="badge status-primary">8</span>
                        </div>
                    </div>
                    <div className="filters">
                        <h5 className="filters__title">Badge</h5>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-5" type="checkbox" />
                                <label htmlFor="checkbox-5">Bronze</label>
                                
                            </div>
                            <span className="badge status-primary">9</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-6" type="checkbox" />
                                <label htmlFor="checkbox-6">Silver</label>
                                
                            </div>
                            <span className="badge status-primary">12</span>
                        </div>
                        <div className="filters__item">
                            <div className="checkbox">
                                <input id="checkbox-7" type="checkbox" />
                                <label htmlFor="checkbox-7">Gold</label>
                               
                            </div>
                            <span className="badge status-primary">17</span>
                        </div>
                       
                    </div>
                </section>
                </div>
            </div>
            <section className="results-section results--grid">
                {/* <!-- Repeat the following profile section for each item --> */}
                <div className="profile">
                <div className="profile__image">
  <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/Screenshot%202023-09-13%20001323.png?alt=media&token=a29363df-f374-4ae3-ae24-d66956dbfdf7" alt="Doggo" />
  <i className="fas fa-medal"></i>
</div>

                    <div className="profile__info">
                    <h5 className="profile__stats__info temp"><span className="star"> </span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span>
                        </h5>
                        <h3>E-Challan Collection System</h3>
                        
                        <p className="profile__info__extra">E-challan pay by an effective way is a web-portal which will help the government in improving the e- challan collection.</p>
                    </div>
                    
                        
                    
                    <div className="profile__cta">
                        <a className="button" href="#">View Project</a>
                    </div>
                </div>
               
                <div className="profile">
                <div className="profile__image">
                <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/smart%20fridge.jpg?alt=media&token=460bad59-5d3a-4feb-aa7e-36b7c97be332" alt="Doggo" />
                    <i className="fas fa-medal"></i>
</div>

                    <div className="profile__info">
                    <h5 className="profile__stats__info temp"><span className="star"> </span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span>
                        </h5>
                        
                        <h3>Smart Fridge</h3>
                        <p className="profile__info__extra">A Smart Fridge that uses Computer Vision to log in food, keeps user updated by SMS, and provide recommendations..</p>
                    </div>
                    
                        
                    
                    <div className="profile__cta">
                        <a className="button" href="#">View Project</a>
                    </div>
                </div>
                <div className="profile">
                <div className="profile__image">
                <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/dumbell.jpg?alt=media&token=0433e472-fb26-4f17-bd5f-ac9bd4224b51" alt="Doggo" />
                    <i className="fas fa-medal"></i>
</div>
                
                    <div className="profile__info">
                    <h5 className="profile__stats__info temp"><span className="star"> </span><span className="star"></span><span className="star"></span>
                        </h5>
                        <h3>Integrated Dumbbell</h3>
                        <p className="profile__info__extra">The dumbbell that's not dumb! Rep counting has never been easier!</p>
                    </div>
                    
                        
                    
                    <div className="profile__cta">
                        <a className="button" href="#">View Project</a>
                    </div>
                </div>
                <div className="profile">
                <div className="profile__image">
                <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/automobile.jpg?alt=media&token=d73e8271-bbbc-4531-80e3-68db2f6f4e9a" alt="Doggo" />
                  <i className="fas fa-medal"></i>
</div>

                    <div className="profile__info">
                    <h5 className="profile__stats__info temp"><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span>
                        </h5>
                        <h3>Autonomous Airplane Pushback Vehicle</h3>
                        <p className="profile__info__extra">This vehicle is a semi-autonomous airplane pushback vehicle. This only a watcher is required for airplane taxis.</p>
                    </div>
                    
                        
                    
                    <div className="profile__cta">
                        <a className="button" href="#">View Project</a>
                    </div>
                </div>
                <div className="profile">
                <div className="profile__image">
   <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/water%20alarm.jpg?alt=media&token=f4c9be7f-71e4-4c5f-93f0-3c6580a75897" alt="Doggo" />
                    <i className="fas fa-medal"></i>
</div>

                    <div className="profile__info">
                    <h5 className="profile__stats__info temp"><span className="star"> </span><span className="star"></span><span className="star"></span><span className="star"></span>
                        </h5>
                        <h3>Water Alarm Project</h3>
                        <p className="profile__info__extra">The water level alarm circuit is a simple mechanism to detect and indicate the level of water in the overhead tank and also in the other containers</p>
                    </div>
                    
                        
                    
                    <div className="profile__cta">
                        <a className="button" href="#">View Project</a>
                    </div>
                </div>
                <div className="profile">
                <div className="profile__image">
                <img src="https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/superpay.jpg?alt=media&token=071f037c-5690-4400-a624-846e09123ffc" alt="Doggo" />
                    <i className="fas fa-medal"></i>
</div>

                    <div className="profile__info">
                    <h5 className="profile__stats__info temp"><span className="star"></span><span className="star"></span><span className="star"></span>
                        </h5>
                        <h3>SuperPay</h3>
                        <p className="profile__info__extra">SuperPay is an end-to-end platform for real-time digital finance making online payments with Cryptocurrencies mainstream enabling trust-less recurring cryptocurrency payments</p>
                    </div>
                    
                        
                    
                    <div className="profile__cta">
                        <a className="button" href="#">View Project</a>
                    </div>
                </div>
                <div className="pagination">
        <button>
          Previous
        </button>
        <button>
          Next
        </button>
      </div>


                
                {/* <!-- Repeat the profile section end --> */}
            </section>
            </div>
        </div>

        <h1 className="headingpsk">Project Startup Toolkit</h1>
        <div className="toolkit">
 
        <div className="left-panel">
        <ul className="item-list">
        <li
            data-index="0"
            className={selectedItemIndex === 0 ? "selected-item" : ""}
            onClick={() => setSelectedItemIndex(0)}
          >
            {selectedItemIndex === 0 && (
              <i className="selected-icon fas fa-check-circle"></i>
            )}{" "}
            Idea
          </li>
          <li
            data-index="1"
            className={selectedItemIndex === 1 ? "selected-item" : ""}
            onClick={() => setSelectedItemIndex(1)}
          >
            {selectedItemIndex === 1 && (
              <i className="selected-icon fas fa-check-circle"></i>
            )}{" "}
            Discussion
          </li>
          <li
            data-index="2"
            className={selectedItemIndex === 2 ? "selected-item" : ""}
            onClick={() => setSelectedItemIndex(2)}
          >
            {selectedItemIndex === 2 && (
              <i className="selected-icon fas fa-check-circle"></i>
            )}{" "}
            Teamwork
          </li>
          <li
            data-index="3"
            className={selectedItemIndex === 3 ? "selected-item" : ""}
            onClick={() => setSelectedItemIndex(3)}
          >
            {selectedItemIndex === 3 && (
              <i className="selected-icon fas fa-check-circle"></i>
            )}{" "}
            Goal achieved
          </li></ul>
        </div>
        <div className="right-panel" style={{ backgroundImage: `url(${endless1})` }}>
  <div className="item-content">
  <h3 className="title" style={{ fontFamily: "cursive",color:"brown",fontSize:"20px",paddingBottom:"20px" }}>
              {itemsData[selectedItemIndex].title}
            </h3>
    <p style={{ float: "right",textAlign:"left",width:"300px",marginRight:"400px" }}>
              {itemsData[selectedItemIndex].description}
            </p>
    <img
      src={itemsData[selectedItemIndex].imageUrl}
      alt={itemsData[selectedItemIndex].title}
      className={selectedItemIndex === 0 ? "selected-image" : ""}
      // Add more conditions for other images if needed
    />
  </div>
</div>

      </div>
      <footer className="footer-section">
        <div className="footer-container">

            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                        <div className="footer-widget-heading">
                           <h3>Sankalp</h3>
                           </div>
                            <div className="footer-text">
                                <p>Empowering Innovation: Join us in shaping the future with our groundbreaking projects.Together, We Build Tomorrow: Discover our initiatives that are driving change today.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address" />
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </footer>

         </>
  );
};

export default Home;
