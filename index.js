
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50){
     navbar.classList.add('scrolled');
  }else{
    navbar.classList.remove("scrolled");
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click',()=>{

   hamburger.classList.toggle('open');
   navLinks.classList.toggle('open');

});
navLinks.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click',()=>{
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});


// ===== ACTIVE NAV LINK =====

  // Get all sections and all nav links
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {

    // Check each section
    sections.forEach(section => {
      const top    = section.offsetTop - 120;   // section start
      const bottom = top + section.offsetHeight; // section end

      if (window.scrollY >= top && window.scrollY < bottom) {

        navItems.forEach(l => l.classList.remove('active'));

        const id = section.getAttribute('id'); 
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');

      }
    });

  });

const roles = [
  'MCA Student at BHU, Varanasi 🎓',
  'MERN Stack Developer 🌐',
  'JavaScript Enthusiast ⚡',
  'Java & C++ Programmer 💻',
  'Problem Solver 🧩',
  'AI/ML Explorer 🤖',
  'Open to Internships 💼',
  'Book Lover 📚',
  'Dancer 🎶'
];

  let roleIndex=0;
  let charIndex=0;
  let isDeleting=false;

  const typingE1=document.getElementById("typingText");
  function type(){
    const currentRole = roles[roleIndex];
    if(!isDeleting){
        typingE1.textContent =currentRole.substring(0,charIndex+1);
        charIndex++;

        if(charIndex === currentRole.length){
            setTimeout(()=>{
                isDeleting=true;
            },1800);
        }
    }else{
        typingE1.textContent = currentRole.substring(0,charIndex-1);
        charIndex--;

    if (charIndex===0){
        isDeleting = false;
        roleIndex=(roleIndex+1)%roles.length;
    }
    }

    const speed = isDeleting?60:110;
    setTimeout(type,speed);
  }
  setTimeout(type,1000);


 const revealElements = document.querySelectorAll('.reveal');

// const revealObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry, index) => {
//       if (entry.isIntersecting) {
//         setTimeout(() => {
//           entry.target.classList.add('visible');
//         }, index * 100);
//         revealObserver.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.1
//   }
// );

//  revealElements.forEach((el) => revealObserver.observe(el));

function animateSkillbar(skillItem){
    const level=skillItem.getAttribute('data-level');
    const fill = skillItem.querySelector('.skill-fill');

    if(fill){
        fill.style.width =level+'%';
    }
}

const revealObserver = new IntersectionObserver(
    (entries)=>{
        entries.forEach((entry,index)=>{
            if(entry.isIntersecting){
                setTimeout(()=>{
                    entry.target.classList.add('visible');
                    if(entry.target.classList.contains('skill-item')){
                        animateSkillbar(entry.target);
                    }
                },index*100);
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {threshold:0.1}
);
revealElements.forEach(e1 => revealObserver.observe(e1));


const form= document.getElementById('contactForm');
const statusE1 = document.getElementById('formStatus');

const submitBtn= document.getElementById('submitBtn');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name =document.getElementById('fname').value.trim();
    const email =document.getElementById('femail').value.trim();
    const message =document.getElementById('fmsg').value.trim();

if(!name||!email||!message){
    showStatus('Please fill in all fields!','error');
    return;
}
submitBtn.disabled=true;
submitBtn.textContent = 'Sending...';

emailjs.send(
    'service_8a6voob',   
    'template_run2rdx',           
    {
      from_name:  name,
      from_email: email,
      message:    message
    }
  )
  .then(()=>{
    showStatus(' Message sent successfully.','success');
    form.reset();
    submitBtn.disabled=false;
    submitBtn.textContent='Send Message';
})
.catch((error)=>{
     showStatus(' Something went wrong.Try again!','error');
    submitBtn.disabled=false;
    submitBtn.textContent='Send Message';
    console.log('Error',error);
});
});

 function showStatus(message,type){
      statusE1.textContent=message;
      statusE1.className="form-status "+type;
      setTimeout(()=>{
        statusE1.textContent='';
        statusE1.className='form-status';
      },5000);
 }

 const topBtn = document.getElementById('scrollToTop');
 window.addEventListener('scroll',()=>{
    if(window.scrollY>400){
        topBtn.classList.add('visible');
    }else{
        topBt .classList.remove('visible');
    }
 });

 topBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
 });

