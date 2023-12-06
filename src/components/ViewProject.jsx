import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery"
import "./viewproject.css"


const ViewProject = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const chatButton = document.getElementById("chat-button");
        const chatContainer = document.getElementById("chatContainer");
        const minimizeButton = document.getElementById("minimize-button");
        const chatInput = document.getElementById("chat-input");
        const chatMessages = document.getElementById("conversation-group");
        const sendButton = document.getElementById("SentButton");
      
        if (chatButton) {
          chatButton.addEventListener("click", function () {
            if (chatContainer) {
              chatContainer.classList.add("open");
              chatButton.classList.add("clicked");
            }
          });
        }
      
        if (minimizeButton) {
          minimizeButton.addEventListener("click", function () {
            if (chatContainer) {
              chatContainer.classList.remove("open");
              chatButton.classList.remove("clicked");
            }
          });
        }
  
      function createMessage(message, isUser = true) {
        const newMessage = document.createElement('div');
        newMessage.classList.add(isUser ? 'sentText' : 'botText');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        return newMessage;
      }

      function chatbotResponse() {
        const messages = [
          "An E-Challan, short for Electronic Challan, is a digital or electronic system...",
          "How can I assist you?",
          "Let me know if you have any further questions"
        ];

        let currentIndex = 0;

        // Check if there are more messages to send
        if (currentIndex < messages.length) {
          const message = messages[currentIndex];
          currentIndex++; // Increment the index for the next message
  
          const botMessage = createMessage(message, false);
          botMessage.scrollIntoView();
        }
      }


      chatInput.addEventListener("input", function (event) {
        if (event.target.value) {
          sendButton.classList.add("svgsent");
        } else {
          sendButton.classList.remove("svgsent");
        }
      });
  
      chatInput.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
          const message = chatInput.value;
          chatInput.value = "";
          const userMessage = createMessage(message);
          userMessage.scrollIntoView();
          setTimeout(chatbotResponse, 1000);
          sendButton.classList.add("svgsent");
        }
      });
  
      if (sendButton) {
        sendButton.addEventListener("click", function () {
          const message = chatInput.value;
          chatInput.value = "";
          const userMessage = createMessage(message);
          userMessage.scrollIntoView();
          setTimeout(chatbotResponse, 1000);
          sendButton.classList.add("svgsent");
        });
      }

    });

    useEffect(() => {
        $(document).ready(function() {
            $(".Click-here").on('click', function() {
                $(".custom-model-main").addClass('model-open');
            });
         
            $(".close-btn, .bg-overlay").click(function(event) {
                if (!$(event.target).closest(".custom-model-main").length) {
                    $(".custom-model-main").removeClass('model-open');
                }
            });
         });
    }, []);
     
    useEffect(() => {
        printStringByLetter("paragraph_id1","my_chatgpt_style_div_1");

    }, []);
  
        var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide() {
    if (!slides || !dots) {
      console.error("Slides or dots are not initialized.");
      return;
    }
  
    if (index > slides.length - 1) index = 0;
    if (index < 0) index = slides.length - 1;
  
    // Check if slides[index] and dots[index] are defined before accessing their properties
    if (slides[index] && slides[index].style) {
      slides[index].style.display = "block";
    }
  
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  
    for (let i = 0; i < slides.length; i++) {
      if (i !== index && slides[i] && slides[i].style) {
        slides[i].style.display = "none";
      }
  
      if (dots[i] && i !== index) {
        dots[i].classList.remove("active");
      }
    }
  }
  
  



 
        function printStringByLetter(paragraph_id, myDiv_id) {
            var myDiv = document.getElementById(myDiv_id);
           
            myDiv.style.display = "block";
           
            var paragraph = document.getElementById(paragraph_id);
            var text = paragraph.innerHTML;
            var lines = text.split('<br>');
           
            var index = 0;
            var lineIndex = 0;
            var intervalId = setInterval(function () {
                if (index < lines[lineIndex].length) {
                    myDiv.innerHTML += lines[lineIndex].charAt(index);
                    index++;
                } else if (lineIndex < lines.length - 1) {
                    myDiv.innerHTML += '<br>'; 
                    lineIndex++;
                    index = 0;
                } else {
                    clearInterval(intervalId);
                }
            }, 50);
           }
 
  



   

  return (
    

 
<>
<section class="watch-video">

   <div class="video-container">
      <div class="picgrid">
      <div class="profile"><img src="images\pic-1.jpg" class="image " alt=""/></div>
      <div class="profile"><img src="images\pic-2.jpg" class="image " alt=""/></div>
      <div class="profile"><img src="images\pic-3.jpg" class="image " alt=""/></div>
      <div class="profile"><img src="images\pic-4.jpg" class="image " alt=""/></div>
   </div>
<div id="slider">  
<div className="slide" style={{ background: 'dodgerBlue' }}>
  <img src="images/1.png" alt="Slide 1" />
</div>

<div className="slide" style={{ background: 'coral' }}>
  <img src="images/2.png" alt="Slide 2" />
</div>

<div className="slide" style={{ background: '#6edf10' }}>
  <img src="images/4.png" alt="Slide 3" />
</div>

<div className="slide" style={{ background: '#6edf10' }}>
  <iframe
    width="900"
    height="500"
    src="https://www.youtube.com/embed/DFTcb2DXvHE?si=xKb7gzWveyTjP9e-"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

  
  <span class="controls" onclick="prevSlide(-1)" id="left-arrow"><i class="fa fa-arrow-left" aria-hidden="true"></i>
</span>
  <span class="controls" id="right-arrow" onclick="nextSlide(1)"><i class="fa fa-arrow-right" aria-hidden="true"></i>
</span>
</div>
  <div id="dots-con">
 <span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>
 </div>

      <h3 class="title">E-Challan Collection System</h3>
      <div class="info">
         <p class="date"><i class="fas fa-calendar"></i><span>22-10-2023</span></p>
         <p class="date"><i class="fas fa-heart"></i><span>31 likes</span></p>
         <div class="popup-link">
            <a href="#popup1">Sumarize</a>
           
            </div>
 
            <div id="popup1" class="popup-container">
              <div class="popup-content">
                <a href="#" class="close">&times;</a>
                <h3 style={{ fontSize: '2rem' }}>Sumarize Points</h3>
                <div id="my_chatgpt_style_div_1" class="my_chatgpt_div_style" style={{ display: 'none' }}></div>  
            
              </div>
            </div>
      </div>
    
      <p className="typography" id="paragraph_id1" style={{ display: 'none' }}> • The e-challan collection system is a new way of collecting the penalty of e-challan from the
         traffic violators. <br/><br/>
         • The e-challan system is a technology-based solution which will assist government with a
         reduction in the manpower requirement and automated collection.<br/><br/>
         • The system will be integrating the e-challan payment system with a cyclic bill that the citizens
         pay (here Electricity bill).<br/><br/>
         • We reduce the manual work by digitizing the payment of challan online.<br/><br/>
         • If one fails to pay challan within the certain time period of 60 days then the challan amount
         will pass to the Electricity bill and one has to pay the original amount with 30% increment in
         fine.<br/><br/>
         • The system will help the Government to simplify the process of e-challan payment. <br/><br/>
         • Linking of e-challan fines with a cyclic bill (like electricity bill) will restrain the citizens
         from ignoring it, shall facilitate the fine collection for traffic police department and shall
         bring in awareness amongst the citizens leading to lesser traffic violations. <br/><br/>
         • We plan to provide the user their e-challan with a video proof (future prospect). <br/><br/></p>
     
      <p class="description">
         E-challan pay by effective way is a web-portal which will help the government in improving
         the e-challan collection. This system shall provide an alternative way of linking the e-challan
         issued to a citizen with a fixed cyclic bill that the citizen pays without fail such as their
         electricity bill. Linking of e-challan fines with a cyclic bill like electricity bill will restrain
         the citizens from ignoring it, shall facilitate the fine collection for traffic police department
         and shall bring in awareness amongst the citizens leading to lesser traffic violations.
      </p>
   </div>

</section>

<section class="comments">

   <h1 class="heading">Existing System</h1>
   <form action="" class="add-comment">
   <h3>• The government of India has introduced Traffic e-Challan, which is an application and is
      combined with web portal &nbsp;&nbsp;&nbsp;applications which are namely Vahan and Sarathi.<br/>
      • These two applications offer many benefits and features which cover all the main aspects of
      the Administration &nbsp;&nbsp;&nbsp;System. The traffic e-challan can be paid both online as well as offline by
      the traffic violators.<br/>
      • A message will be sent to the offender’s registered cell number. The fine amount is calculated
      automatically as per the &nbsp;&nbsp;&nbsp;offence and the Enforcement Officer then takes a print out of the
      traffic e-challan with all the necessary details and &nbsp;&nbsp;&nbsp;gives the same to the offender.<br/>
      • The defaulter is allowed to pay online by scanning the QR code received or can make cash
      payment at the RTO office &nbsp;&nbsp;&nbsp;or can deposit cash at onsite.<br/>
      • The traffic rules are very strict nowadays. There are legal consequences if you are not paying
      the e-challan penalty &nbsp;&nbsp;&nbsp;within the timeline. If you do not pay the same because of any reason, a
      summon is sent to your residential address as &nbsp;&nbsp;&nbsp;a license holder from the court where you will
      be called and questioned to clarify in front of the judge upon violation &nbsp;&nbsp;&nbsp;of the traffic rules. If
      you do not visit even after you have been called by the court and do not pay the traffic echallan, &nbsp;&nbsp;&nbsp;then your driving license will be suspended.</h3>      
   </form>

   <h1 class="heading">Approach</h1>
   <form action="" class="add-comment">
   <h3>• The e-challan collection system is a new way of collecting the penalty of e-challan from the
      traffic violators. <br/>
      • The e-challan system is a technology-based solution which will assist government with a
      reduction in the manpower &nbsp;&nbsp;&nbsp;requirement and automated collection.<br/>
      • The system will be integrating the e-challan payment system with a cyclic bill that the citizens
      pay (here Electricity &nbsp;&nbsp;&nbsp;bill).<br/>
      • We reduce the manual work by digitizing the payment of challan online.<br/>
      • If one fails to pay challan within the certain time period of 60 days then the challan amount
      will pass to the Electricity &nbsp;&nbsp;&nbsp;bill and one has to pay the original amount with 30% increment in
      fine.<br/>
      • The system will help the Government to simplify the process of e-challan payment. <br/>
      • Linking of e-challan fines with a cyclic bill (like electricity bill) will restrain the citizens
      from ignoring it, shall facilitate &nbsp;&nbsp;&nbsp;the fine collection for traffic police department and shall
      bring in awareness amongst the citizens leading to lesser &nbsp;&nbsp;&nbsp;traffic violations.<br/>
      • We plan to provide the user their e-challan with a video proof (future prospect).<br/></h3>      
   </form>

   <h1 class="heading">Technology</h1>
   <form action="" class="add-comment">
   <h3>• Backend : Node JS<br/>
      • Frontend : CSS, JavaScript<br/>
      • Database : MY-SQL<br/>
      • Markup Language : HTML<br/>
      • IDE : VS CODE</h3>      
   </form>

   <h1 class="heading">Challenges and Limitations</h1>
   <form action="" class="add-comment">
   <h3>• Main challenge in our e-challan collection system is the collaboration of government with
      private sector.
<br/>      • Managing large databases and servers of Government of Gujarat, Torrent Power and GEB and
      their database &nbsp;&nbsp;&nbsp;management is a big problem for developers. <br/>
      • Outdated information provided by the RTO will be a barrier in our system.<br/>
      • Outdated information provided by the user in Aadhar Card will be a barrier in our system.<br/>
      • Currently, our system is applicable for limited scope. i.e., RTO’s in Gujarat.<br/></h3>      
   </form>

      <h1 class="heading">review now</h1>



      <div class="box-container">
      <form action="" className="add-comment" >

        <textarea
          name="feedback_box"
          placeholder="Enter your review"
          required
          maxLength="1000"
          cols="150"
          rows="10"></textarea>

        <div class="stars starcenter ">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         
        </div>

        <form action="" class="flex-btn">
            <input type="submit" value="Submit" name="delete_comment" class="inline-delete-btn"/>
         </form> 
      </form>
</div>

   

   <h1 class="heading">user comments</h1>

   <div class="box-container">

      
      <div class="box">
         <div class="user">
            <img src="./components/images/pic-9.jpg" alt=""/>
            <div>
               <h3>Harsh Sonaiya</h3>
               <span>29-10-2022</span>
            </div>
         </div>
         <div class="comment-box">Top Notch Innovation
            keep going!</div>
         </div>

         <div class="box">
            <div class="user">
            <img src="images/pic-3.jpg" alt=""/>
            <div>
               <h3>Mayank Yadav</h3>
               <span>6-11-2022</span>
            </div>
         </div>
         <div class="comment-box">Amazing Project!
         </div>
      </div>

      <div class="box">
         <div class="user">
            <img src="images/pic-6.jpg" alt=""/>
            <div>
               <h3>Darshit Sojitra</h3>
               <span>15-11-2022</span>
            </div>
         </div>
         <div class="comment-box">Thanks for the explanation.</div>
      </div>

      <div class="box">
         <div class="user">
            <img src="images/pic-4.jpg" alt=""/>
            <div>
               <h3>Vihar Talaviya</h3>
               <span>23-11-2022</span>
            </div>
         </div>
         <div class="comment-box">This is what I have been looking for! Thank you so much!</div>
      </div>
      
      <div class="box">
         <div class="user">
            <img src="images/pic-2.jpg" alt=""/>
            <div>
               <h3>Divya Kaurani</h3>
               <span>30-11-2022</span>
            </div>
         </div>
         <div class="comment-box">Can you provide the source code.</div>
      </div>
      <div class="box">
         <div class="user">
            <img src="images/pic-7.jpg" alt=""/>
            <div>
               <h3>Aastha Suthar</h3>
               <span>22-10-2022</span>
            </div>
         </div>
         <div class="comment-box">Nice Project !!</div>
        
      </div>
      
   </div>
   



 <div class="chat-board chatbot chat new trending"></div>
 <div class="frame-content">
     <div class="widget-position-right sidebar-position-right onlyBubble" id="chatContainer">

         <div class="chat no-clip-path chrome moveFromRight-enter-done">
         <div className="chat-header project-online" style={{ color: '#fff', background: 'linear-gradient(28deg, rgba(255, 69, 0, 0.8) 0%, rgba(49, 0, 252, 0.8) 100%)' }}>
                 <h2 class="oneline"><span>Hi there !</span></h2>
                 <button
  className="material-icons exit-chat ripple tidio-1s5t5ku"
  id="minimize-button"
  type="button"
  aria-label="Minimize"
  style={{ color: 'rgb(255, 255, 255)' }}
>
                     <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" id="ic-minimize">
                         <path d="M0 0h24v24H0z" fill="none"></path>
                         <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
                     </svg>
                     <span>Minimize</span>
                 </button>
                 <div className="offline-message" style={{ backgroundImage: 'linear-gradient(298deg, rgba(168, 0, 255, 0.8) 0%, rgba(247, 78, 15, 0.8) 100%)' }}>
                     <span class="online"><span>Ask me anything</span></span>
                 </div>
             </div>
             <div id="conversation-group"  role="log">
                 <div id="messages" aria-live="polite" aria-atomic="false" data-testid="messagesLog">
                     <div class="message message-operator  ">
                         <span class="message-content">Hi there , How can I assist you?</span>
                     </div>
                     <div class="message message-operator bots-quick-replies">
                         <div class="button-wrapper">
                          
                         </div>
                     </div>
                 </div><div id="conversation-scroll">
                 <div style={{ top: '0px', height: '55.8952px' }}></div>
                 </div>
             </div>
             <div class="input-group ">
                 <hr/>
                 <div class="drag-active-wrapper footer-input-wrapper">
                     <textarea id="chat-input" rows="1" placeholder="Hit the buttons to respond" aria-label="New message" data-testid="newMessageTextarea"></textarea>
                   
                     <button id="SentButton" class="send-icon" title="SentButton" type="button">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                         <path fill="#d7d7d7" d="M22,11.7V12h-0.1c-0.1,1-17.7,9.5-18.8,9.1c-1.1-0.4,2.4-6.7,3-7.5C6.8,12.9,17.1,12,17.1,12H17c0,0,0-0.2,0-0.2c0,0,0,0,0,0c0-0.4-10.2-1-10.8-1.7c-0.6-0.7-4-7.1-3-7.5C4.3,2.1,22,10.5,22,11.7z"></path>
                         </svg>
                     </button>
                    
                 </div>
             </div>
         </div>

     </div>
     <div id="chat-button" data-testid="widgetButton" class="chat-closed mobile-size__medium">
         <div class="buttonWave"></div>
         <button
  type="button"
  id="button-body"
  data-testid="widgetButtonBody"
  className="chrome"
  tabIndex="0"
  aria-label="Open chat widget"
  style={{
    background: 'linear-gradient(273deg, rgb(0 16 239 / 80%), rgb(255 69 0 / 91%))',
    boxShadow: 'rgb(234 111 48 / 86%) 0px 4px 24px',
  }}
>
<i
  className="material-icons type1 for-closed active"
  style={{ color: 'rgb(255, 255, 255)' }}
>
                 <svg id="ic_bubble" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
                     <path d="M0 0h24v24H0z" fill="none"></path>
                 </svg>
             </i>
            
         </button>
     </div>
 </div>

</section>

</>

     
     
   
              
  
    
  );
};

export default ViewProject;
