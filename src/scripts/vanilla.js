import normalize from '../styles/normalize.css'
import styles from '../styles/main.scss';
import media from '../styles/media.scss'

import {projects} from '../data/projects.js';



(()=> {
    let projectImages;
    const modalCloseBtn = document.getElementsByClassName('close')[0],
          mdWindow = document.getElementById('myModal'),
          navLinks = document.getElementsByClassName('scroll-link'),
          submitBtn = document.getElementById('submit-btn');

    function assignEventListeners(collection,fun){
        Array.from(collection).forEach((item) =>{
            item.addEventListener('click', fun);
        });
    }
    function moveTo(e) {
        e.preventDefault();

        function currentYPosition() {
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        function elmYPosition(eID) {
            const elm = document.getElementById(eID);
            let y = elm.offsetTop,
                node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
        function smoothScroll(eID) {
            let startY = currentYPosition(),
                stopY = elmYPosition(eID),
                distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY); return;
            }
            let speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            let step = Math.round(distance / 25),
                leapY = stopY > startY ? startY + step : startY - step,
                timer = 0;
            if (stopY > startY) {
                for (let i=startY; i<stopY; i+=step ) {
                    setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                    leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                } return;
            }
            for (let i=startY; i>stopY; i-=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
            }
        }
        console.log(this.getAttribute("href"));
        smoothScroll(this.getAttribute("href").substr(1));

    }

    function toggleModal(e) {
         const mdWindow = document.getElementById('myModal'),
                liveBtn = document.getElementsByClassName('live')[0],
                codeBtn = document.getElementsByClassName('code')[0];
        
        //console.log(e.target.parentNode.dataset.technologies[0]);
         if(mdWindow.style.opacity == 0){
             mdWindow.style.opacity = 1;
             mdWindow.style.display = 'block';
            
            const projectData = e.target.parentNode.dataset;
             liveBtn.setAttribute('href',projectData.liveLink);

             if(projectData.codeLink !== 'nolink'){
                codeBtn.setAttribute('href',projectData.codeLink);
                codeBtn.style.display = "inline-block";
             }else{
                codeBtn.style.display = "none";
             }
             if(projectData.liveLink !== 'nolink'){
                liveBtn.setAttribute('href',projectData.liveLink);
                liveBtn.style.display = "inline-block";
             }else{
                liveBtn.style.display = "none";
             }
            
             const technologiesList = document.getElementsByClassName('technologies-list')[0];
             technologiesList.innerHTML = '';

             const technologies = projectData.technologies.indexOf(',') >= 0 ?  projectData.technologies.split(',') : [projectData.technologies];

             technologies.forEach(item =>{
                 const li = document.createElement('li');
                 li.classList.add('technology');
                 li.innerHTML = item;

                 technologiesList.appendChild(li);
             })

             console.log(technologies);
          }else{ 
              mdWindow.style.opacity = 0;
              mdWindow.style.display = 'none';
         }
     }

     function validateForm(e) {
         e.preventDefault();
         const textarea = document.getElementsByClassName('form-textarea')[0],
               contactForm = document.getElementsByClassName('contact-form')[0],
               validationBox = document.getElementsByClassName('validation-here')[0],
               validationMessage = document.getElementsByClassName('validation-text')[0];

        function trimfield(str) { 
            return str.replace(/^\s+|\s+$/g,''); 
        }

         if(trimfield(textarea.value) == ''){
            validationBox.style.display = 'block';
            validationMessage.innerHTML = 'You need to provide message'
            textarea.focus();
            return false;
         }else if(textarea.value.length <= 10){
            validationBox.style.display = 'block';
            validationMessage.innerHTML = 'Message have to be at least 10 characters long'
            textarea.focus();
            return false;
         }else{
            validationBox.style.display = 'none';
             contactForm.submit();
         }
     }

     function generateProjects(){
        const projectsArea = document.getElementsByClassName('projects-here')[0];

        projects.forEach(item =>{
            const projectElem = document.createElement('div'),
                  overlay = document.createElement('div'),
                  projectName =  document.createElement('p'), 
                  projectImg = document.createElement('img');
            
            projectElem.classList.add('project-elem');
            overlay.classList.add('overlay');
            projectName.classList.add('project-name');
            projectImg.classList.add('project-image');

            projectElem.dataset.liveLink = item.liveLink;
            projectElem.dataset.codeLink = item.codeLink;
            projectElem.dataset.technologies = item.technologies;

            projectName.innerHTML = item.name;
            projectImg.setAttribute('src',item.imgPath);
            projectImg.setAttribute('alt',item.name);

            projectElem.appendChild(overlay);
            projectElem.appendChild(projectName);
            projectElem.appendChild(projectImg);

            projectsArea.appendChild(projectElem);
        })
        projectImages = document.querySelectorAll('.project-elem');
     }

     generateProjects();
     assignEventListeners(navLinks,moveTo);
     assignEventListeners(projectImages,toggleModal);
     modalCloseBtn.addEventListener('click',toggleModal);
     submitBtn.addEventListener('click',validateForm);
     window.addEventListener('click',(e)=>{e.target == mdWindow ? toggleModal() : null})

})()