(function(){
    'use strict';
    console.log('reading js');

    // this element will hole the madlib
    const madlib = document.querySelector('#madlib');
    // this is the form for submission
    const form = document.querySelector('form');
    // this is the overlay element
    const madlibOverlay = document.querySelector('#madlib-overlay');
    // this is the close button in the overlay
    const closeBtn = document.querySelector('#close');
    // this is the div that holds the error messages
    const errorMessage = document.querySelector('#error');

    /* Here I am capturing the submission of the form. I noticed
    that some students in class are using a button to trigger the 
    script rather that form submission. That is ok, but the event
    listener will have to be updated to capture the click of the 
    button instead of the submission of the form. */
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // Make sure you update everything to reflect the fields you have on YOUR form.
          const week = document.querySelector('#weekday').value;
          const ending = document.querySelector('#endinging').value;
          const subject = document.querySelector('#subject').value;
          const noun = document.querySelector('#noun').value;
          const adverb = document.querySelector('#adverb').value;
          const color = document.querySelector('#color').value;
          const room = document.querySelector('#room').value;
          const e1 = document.querySelector('#emotion').value;
          const again = document.querySelector('#again').value;
          const game = document.querySelector('#verb').value;
          const flavor = document.querySelector('#flavor').value;
          const adj = document.querySelector('#adjective').value;

        // Create this empty variable
        let myText;

             if( week == ''){
               alert('Please fill in the blank');
               document.querySelector('#weekday').focus();
          }else  if( ending == ''){
               alert("Please fill in the blank");
               document.querySelector('#endinging').focus();
          }else  if( subject == ''){
               alert("Please fill in the blank");
               document.querySelector('#subject').focus();
          }else  if( noun == ''){
               alert("Please fill in the blank");
               document.querySelector('#noun').focus();
          }else  if( subject == ''){
               alert("Please fill in the blank");
               document.querySelector('#subject').focus();
          }else  if( noun == ''){
               alert("Please fill in the blank");
               document.querySelector('#noun').focus();
          }else  if( adverb == ''){
               alert("Please fill in the blank");
               document.querySelector('#adverb').focus();
          }else  if( color == ''){
               alert("Please fill in the blank");
               document.querySelector('#color').focus();
          }else  if( room == ''){
               alert("Please fill in the blank");
               document.querySelector('#room').focus();
          }else  if( e1 == ''){
               alert("Please fill in the blank");
               document.querySelector('#emotion').focus();
          }else  if( again == ''){
               alert("Please fill in the blank");
               document.querySelector('#again').focus();
          }else  if( game == ''){
               alert("Please fill in the blank");
               document.querySelector('#game').focus();
          }else  if( flavor == ''){
               alert("Please fill in the blank");
               document.querySelector('#flavor').focus();
          }else  if( adj == ''){
               alert("Please fill in the blank");
               document.querySelector('#adjective').focus();
        } else {
            /* Notice this is just a copy/paste of what's in the
            MadLib HTML. It will get placed on the page and styled
            by the styles on the stylesheet. The variables from above
            have been added. */
                myText = `<h2>Happy Half Birthday!</h2>
               <p>It was a strange a <span>${week}</span>. I woke up, did some <span>${ending}</span>, and when I was eating breakfast, I noticed my housemates whispering as if I couldn’t see them. I went to my <span>${subject}</span> class but couldn’t focus on the lecture about <span>${noun}</span> because of what happened this morning.
               As I biked  back home, I wondered what my housemates possibly could’ve been talking about without me. As I <span>${adverb}</span> opened the door to the apartment, I hear “SURPRISE!”. My housemate put a <span>${color}</span> party hat on me, and I saw a “Happy Half Birthday” banner hung behind them in the <span>${room}</span>. 
               I was <span>${e1}</span>, how could I have forgotten my half birthday! My housemates made half of my favorite food, <span>${again}</span>, and we ate and played half of my favorite game <span>${game}</span>, We finished off my eating half of a <span>${flavor}</span> cake! I’m so glad my housemates went halfway to make the day so <span>${adj}</span>. Now, as long as they don’t forget my actual birthday…</p>`;


            // clear out the form
            document.querySelector('#weekday').value = '';
            document.querySelector('#endinging').value = '';
            document.querySelector('#subject').value = '';
            document.querySelector('#noun').value = '';
            document.querySelector('#adverb').value = '';
            document.querySelector('#color').value = '';
            document.querySelector('#room').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#again').value = '';
            document.querySelector('#verb').value = '';
            document.querySelector('#flavor').value = '';
            document.querySelector('#adjective').value = '';


            // put the MadLib on the page
            madlib.innerHTML = myText;
            madlibOverlay.style.display = "block";
          }
    });

    //I added an eventlistener for closing the form.
    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        madlibOverlay.style.display = "none";
    });

    /* for best practice, I added an event listener for closing
    the MadLib with the escape key.*/
    
    
    /*document.addEventListener('keydown', function (event){ 
        if (event.key === 'Escape') {
            madlibOverlay.style.display = "none";
        }
    });*/
     })();