/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./src/scripts/vanilla.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_normalize_css__ = __webpack_require__(/*! ../styles/normalize.css */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_normalize_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_scss__ = __webpack_require__(/*! ../styles/main.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_main_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_media_scss__ = __webpack_require__(/*! ../styles/media.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_media_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_media_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_projects_js__ = __webpack_require__(/*! ../data/projects.js */ 4);\n\n\n\n\n\n\n(() => {\n    let projectImages;\n    const modalCloseBtn = document.getElementsByClassName('close')[0],\n          mdWindow = document.getElementById('myModal'),\n          navLinks = document.getElementsByClassName('scroll-link'),\n          submitBtn = document.getElementById('submit-btn');\n\n    function assignEventListeners(collection, fun) {\n        Array.from(collection).forEach(item => {\n            item.addEventListener('click', fun);\n        });\n    }\n    function moveTo(e) {\n        e.preventDefault();\n\n        function currentYPosition() {\n            if (self.pageYOffset) return self.pageYOffset;\n            // Internet Explorer 6 - standards mode\n            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;\n            // Internet Explorer 6, 7 and 8\n            if (document.body.scrollTop) return document.body.scrollTop;\n            return 0;\n        }\n        function elmYPosition(eID) {\n            const elm = document.getElementById(eID);\n            let y = elm.offsetTop,\n                node = elm;\n            while (node.offsetParent && node.offsetParent != document.body) {\n                node = node.offsetParent;\n                y += node.offsetTop;\n            }return y;\n        }\n        function smoothScroll(eID) {\n            let startY = currentYPosition(),\n                stopY = elmYPosition(eID),\n                distance = stopY > startY ? stopY - startY : startY - stopY;\n            if (distance < 100) {\n                scrollTo(0, stopY);return;\n            }\n            let speed = Math.round(distance / 100);\n            if (speed >= 20) speed = 20;\n            let step = Math.round(distance / 25),\n                leapY = stopY > startY ? startY + step : startY - step,\n                timer = 0;\n            if (stopY > startY) {\n                for (let i = startY; i < stopY; i += step) {\n                    setTimeout(\"window.scrollTo(0, \" + leapY + \")\", timer * speed);\n                    leapY += step;if (leapY > stopY) leapY = stopY;timer++;\n                }return;\n            }\n            for (let i = startY; i > stopY; i -= step) {\n                setTimeout(\"window.scrollTo(0, \" + leapY + \")\", timer * speed);\n                leapY -= step;if (leapY < stopY) leapY = stopY;timer++;\n            }\n        }\n        console.log(this.getAttribute(\"href\"));\n        smoothScroll(this.getAttribute(\"href\").substr(1));\n    }\n\n    function toggleModal(e) {\n        const mdWindow = document.getElementById('myModal'),\n              liveBtn = document.getElementsByClassName('live')[0],\n              codeBtn = document.getElementsByClassName('code')[0];\n\n        //console.log(e.target.parentNode.dataset.technologies[0]);\n        if (mdWindow.style.opacity == 0) {\n            mdWindow.style.opacity = 1;\n            mdWindow.style.display = 'block';\n\n            const projectData = e.target.parentNode.dataset;\n            liveBtn.setAttribute('href', projectData.liveLink);\n\n            if (projectData.codeLink !== 'nolink') {\n                codeBtn.setAttribute('href', projectData.codeLink);\n                codeBtn.style.display = \"inline-block\";\n            } else {\n                codeBtn.style.display = \"none\";\n            }\n\n            const technologiesList = document.getElementsByClassName('technologies-list')[0];\n            technologiesList.innerHTML = '';\n\n            const technologies = projectData.technologies.indexOf(',') >= 0 ? projectData.technologies.split(',') : [projectData.technologies];\n\n            technologies.forEach(item => {\n                const li = document.createElement('li');\n                li.classList.add('technology');\n                li.innerHTML = item;\n\n                technologiesList.appendChild(li);\n            });\n\n            console.log(technologies);\n        } else {\n            mdWindow.style.opacity = 0;\n            mdWindow.style.display = 'none';\n        }\n    }\n\n    function validateForm(e) {\n        e.preventDefault();\n        const textarea = document.getElementsByClassName('form-textarea')[0],\n              contactForm = document.getElementsByClassName('contact-form')[0],\n              validationBox = document.getElementsByClassName('validation-here')[0],\n              validationMessage = document.getElementsByClassName('validation-text')[0];\n\n        function trimfield(str) {\n            return str.replace(/^\\s+|\\s+$/g, '');\n        }\n\n        if (trimfield(textarea.value) == '') {\n            validationBox.style.display = 'block';\n            validationMessage.innerHTML = 'You need to provide message';\n            textarea.focus();\n            return false;\n        } else if (textarea.value.length <= 10) {\n            validationBox.style.display = 'block';\n            validationMessage.innerHTML = 'Message have to be at least 10 characters long';\n            textarea.focus();\n            return false;\n        } else {\n            validationBox.style.display = 'none';\n            contactForm.submit();\n        }\n    }\n\n    function generateProjects() {\n        const projectsArea = document.getElementsByClassName('projects-here')[0];\n\n        __WEBPACK_IMPORTED_MODULE_3__data_projects_js__[\"a\" /* projects */].forEach(item => {\n            const projectElem = document.createElement('div'),\n                  overlay = document.createElement('div'),\n                  projectName = document.createElement('p'),\n                  projectImg = document.createElement('img');\n\n            projectElem.classList.add('project-elem');\n            overlay.classList.add('overlay');\n            projectName.classList.add('project-name');\n            projectImg.classList.add('project-image');\n\n            projectElem.dataset.liveLink = item.liveLink;\n            projectElem.dataset.codeLink = item.codeLink;\n            projectElem.dataset.technologies = item.technologies;\n\n            projectName.innerHTML = item.name;\n            projectImg.setAttribute('src', item.imgPath);\n            projectImg.setAttribute('alt', item.name);\n\n            projectElem.appendChild(overlay);\n            projectElem.appendChild(projectName);\n            projectElem.appendChild(projectImg);\n\n            projectsArea.appendChild(projectElem);\n        });\n        projectImages = document.querySelectorAll('.project-elem');\n    }\n\n    generateProjects();\n    assignEventListeners(navLinks, moveTo);\n    assignEventListeners(projectImages, toggleModal);\n    modalCloseBtn.addEventListener('click', toggleModal);\n    submitBtn.addEventListener('click', validateForm);\n    window.addEventListener('click', e => {\n        e.target == mdWindow ? toggleModal() : null;\n    });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2NyaXB0cy92YW5pbGxhLmpzPzgyNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vcm1hbGl6ZSBmcm9tICcuLi9zdHlsZXMvbm9ybWFsaXplLmNzcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuaW1wb3J0IG1lZGlhIGZyb20gJy4uL3N0eWxlcy9tZWRpYS5zY3NzJ1xyXG5cclxuaW1wb3J0IHtwcm9qZWN0c30gZnJvbSAnLi4vZGF0YS9wcm9qZWN0cy5qcyc7XHJcblxyXG5cclxuXHJcbigoKT0+IHtcclxuICAgIGxldCBwcm9qZWN0SW1hZ2VzO1xyXG4gICAgY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF0sXHJcbiAgICAgICAgICBtZFdpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyksXHJcbiAgICAgICAgICBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Njcm9sbC1saW5rJyksXHJcbiAgICAgICAgICBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFzc2lnbkV2ZW50TGlzdGVuZXJzKGNvbGxlY3Rpb24sZnVuKXtcclxuICAgICAgICBBcnJheS5mcm9tKGNvbGxlY3Rpb24pLmZvckVhY2goKGl0ZW0pID0+e1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vdmVUbyhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjdXJyZW50WVBvc2l0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5wYWdlWU9mZnNldCkgcmV0dXJuIHNlbGYucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcclxuICAgICAgICAgICAgbGV0IHkgPSBlbG0ub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICAgICAgbm9kZSA9IGVsbTtcclxuICAgICAgICAgICAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcclxuICAgICAgICAgICAgICAgIHkgKz0gbm9kZS5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH0gcmV0dXJuIHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlSUQpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0WSA9IGN1cnJlbnRZUG9zaXRpb24oKSxcclxuICAgICAgICAgICAgICAgIHN0b3BZID0gZWxtWVBvc2l0aW9uKGVJRCksXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUbygwLCBzdG9wWSk7IHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHNwZWVkID49IDIwKSBzcGVlZCA9IDIwO1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAyNSksXHJcbiAgICAgICAgICAgICAgICBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXAsXHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IDA7XHJcbiAgICAgICAgICAgIGlmIChzdG9wWSA+IHN0YXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT1zdGFydFk7IGk8c3RvcFk7IGkrPXN0ZXAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcIndpbmRvdy5zY3JvbGxUbygwLCBcIitsZWFwWStcIilcIiwgdGltZXIgKiBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVhcFkgKz0gc3RlcDsgaWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XHJcbiAgICAgICAgICAgICAgICB9IHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpPXN0YXJ0WTsgaT5zdG9wWTsgaS09c3RlcCApIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXCJ3aW5kb3cuc2Nyb2xsVG8oMCwgXCIrbGVhcFkrXCIpXCIsIHRpbWVyICogc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgbGVhcFkgLT0gc3RlcDsgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuICAgICAgICBzbW9vdGhTY3JvbGwodGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cigxKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKGUpIHtcclxuICAgICAgICAgY29uc3QgbWRXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpLFxyXG4gICAgICAgICAgICAgICAgbGl2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpdmUnKVswXSxcclxuICAgICAgICAgICAgICAgIGNvZGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb2RlJylbMF07XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQudGVjaG5vbG9naWVzWzBdKTtcclxuICAgICAgICAgaWYobWRXaW5kb3cuc3R5bGUub3BhY2l0eSA9PSAwKXtcclxuICAgICAgICAgICAgIG1kV2luZG93LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICAgbWRXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldDtcclxuICAgICAgICAgICAgIGxpdmVCdG4uc2V0QXR0cmlidXRlKCdocmVmJyxwcm9qZWN0RGF0YS5saXZlTGluayk7XHJcblxyXG4gICAgICAgICAgICAgaWYocHJvamVjdERhdGEuY29kZUxpbmsgIT09ICdub2xpbmsnKXtcclxuICAgICAgICAgICAgICAgIGNvZGVCdG4uc2V0QXR0cmlidXRlKCdocmVmJyxwcm9qZWN0RGF0YS5jb2RlTGluayk7XHJcbiAgICAgICAgICAgICAgICBjb2RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb2RlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBjb25zdCB0ZWNobm9sb2dpZXNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVjaG5vbG9naWVzLWxpc3QnKVswXTtcclxuICAgICAgICAgICAgIHRlY2hub2xvZ2llc0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgY29uc3QgdGVjaG5vbG9naWVzID0gcHJvamVjdERhdGEudGVjaG5vbG9naWVzLmluZGV4T2YoJywnKSA+PSAwID8gIHByb2plY3REYXRhLnRlY2hub2xvZ2llcy5zcGxpdCgnLCcpIDogW3Byb2plY3REYXRhLnRlY2hub2xvZ2llc107XHJcblxyXG4gICAgICAgICAgICAgdGVjaG5vbG9naWVzLmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndGVjaG5vbG9neScpO1xyXG4gICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgIHRlY2hub2xvZ2llc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZWNobm9sb2dpZXMpO1xyXG4gICAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgICAgIG1kV2luZG93LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgIG1kV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShlKSB7XHJcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLXRleHRhcmVhJylbMF0sXHJcbiAgICAgICAgICAgICAgIGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFjdC1mb3JtJylbMF0sXHJcbiAgICAgICAgICAgICAgIHZhbGlkYXRpb25Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2YWxpZGF0aW9uLWhlcmUnKVswXSxcclxuICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd2YWxpZGF0aW9uLXRleHQnKVswXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdHJpbWZpZWxkKHN0cikgeyBcclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCcnKTsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYodHJpbWZpZWxkKHRleHRhcmVhLnZhbHVlKSA9PSAnJyl7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25Cb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25NZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgbmVlZCB0byBwcm92aWRlIG1lc3NhZ2UnXHJcbiAgICAgICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgfWVsc2UgaWYodGV4dGFyZWEudmFsdWUubGVuZ3RoIDw9IDEwKXtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gJ01lc3NhZ2UgaGF2ZSB0byBiZSBhdCBsZWFzdCAxMCBjaGFyYWN0ZXJzIGxvbmcnXHJcbiAgICAgICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb25Cb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgIGNvbnRhY3RGb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RzKCl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNBcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHMtaGVyZScpWzBdO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgICAgIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWUgPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLCBcclxuICAgICAgICAgICAgICAgICAgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcHJvamVjdEVsZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lbGVtJyk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcclxuICAgICAgICAgICAgcHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWltYWdlJyk7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0RWxlbS5kYXRhc2V0LmxpdmVMaW5rID0gaXRlbS5saXZlTGluaztcclxuICAgICAgICAgICAgcHJvamVjdEVsZW0uZGF0YXNldC5jb2RlTGluayA9IGl0ZW0uY29kZUxpbms7XHJcbiAgICAgICAgICAgIHByb2plY3RFbGVtLmRhdGFzZXQudGVjaG5vbG9naWVzID0gaXRlbS50ZWNobm9sb2dpZXM7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAgIHByb2plY3RJbWcuc2V0QXR0cmlidXRlKCdzcmMnLGl0ZW0uaW1nUGF0aCk7XHJcbiAgICAgICAgICAgIHByb2plY3RJbWcuc2V0QXR0cmlidXRlKCdhbHQnLGl0ZW0ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0RWxlbS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgICAgICAgICAgcHJvamVjdEVsZW0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RWxlbS5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3RzQXJlYS5hcHBlbmRDaGlsZChwcm9qZWN0RWxlbSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBwcm9qZWN0SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZWxlbScpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgZ2VuZXJhdGVQcm9qZWN0cygpO1xyXG4gICAgIGFzc2lnbkV2ZW50TGlzdGVuZXJzKG5hdkxpbmtzLG1vdmVUbyk7XHJcbiAgICAgYXNzaWduRXZlbnRMaXN0ZW5lcnMocHJvamVjdEltYWdlcyx0b2dnbGVNb2RhbCk7XHJcbiAgICAgbW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTW9kYWwpO1xyXG4gICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdmFsaWRhdGVGb3JtKTtcclxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e2UudGFyZ2V0ID09IG1kV2luZG93ID8gdG9nZ2xlTW9kYWwoKSA6IG51bGx9KVxyXG5cclxufSkoKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2NyaXB0cy92YW5pbGxhLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbm9ybWFsaXplLmNzcz9mYzIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzc5ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/styles/media.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWVkaWEuc2Nzcz85ZDExIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL21lZGlhLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!******************************!*\
  !*** ./src/data/projects.js ***!
  \******************************/
/*! exports provided: projects */
/*! exports used: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png__ = __webpack_require__(/*! ../img/projects/project1.png */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png__ = __webpack_require__(/*! ../img/projects/project2.png */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png__ = __webpack_require__(/*! ../img/projects/project3.png */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png__ = __webpack_require__(/*! ../img/projects/project4.png */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png__ = __webpack_require__(/*! ../img/projects/project5.png */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png__ = __webpack_require__(/*! ../img/projects/project6.png */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png__ = __webpack_require__(/*! ../img/projects/project7.png */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png__);\n\n\n\n\n\n\n\n\nconst projects = [{\n    name: \"Todo app\",\n    technologies: ['react.js', 'webpack', 'Sass'],\n    imgPath: __WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png___default.a,\n    liveLink: 'https://jake-j.github.io/TODO-APP/',\n    codeLink: 'https://github.com/Jake-J/TODO-APP'\n}, {\n    name: \"Weather app\",\n    imgPath: __WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png___default.a,\n    technologies: ['react.js', 'superagent', 'webpack', 'Sass'],\n    liveLink: 'https://jake-j.github.io/weatherAPP/',\n    codeLink: 'https://github.com/Jake-J/weatherAPP'\n}, {\n    name: \"Bud-dev\",\n    imgPath: __WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png___default.a,\n    technologies: ['Wordpress'],\n    liveLink: 'https://webdevacc11.000webhostapp.com/',\n    codeLink: 'nolink'\n}, {\n    name: \"web dev challenge 01\",\n    imgPath: __WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png___default.a,\n    technologies: ['pure HTML&CSS'],\n    liveLink: 'https://jake-j.github.io/weekly-web-dev-challange-1/',\n    codeLink: 'https://github.com/Jake-J/weekly-web-dev-challange-1'\n}, {\n    name: \"Applover task\",\n    imgPath: __WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png___default.a,\n    technologies: ['bootstrap4', 'jQuery', 'slicker.js'],\n    liveLink: 'https://jake-j.github.io/applover-task/',\n    codeLink: 'https://github.com/Jake-J/applover-task'\n}, {\n    name: \"web dev challenge 02\",\n    imgPath: __WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png___default.a,\n    technologies: ['bootstrap4', 'jQuery'],\n    liveLink: 'https://jake-j.github.io/weekly-web-dev-challange-2/',\n    codeLink: 'https://github.com/Jake-J/weekly-web-dev-challange-2'\n}, {\n    name: \"Currency Converter\",\n    imgPath: __WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png___default.a,\n    technologies: ['react.js', 'webpack', 'Sass'],\n    liveLink: 'https://jake-j.github.io/currencyAPP/',\n    codeLink: 'https://github.com/Jake-J/currencyAPP'\n}];\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = projects;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZGF0YS9wcm9qZWN0cy5qcz9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvaW1nIGZyb20gJy4uL2ltZy9wcm9qZWN0cy9wcm9qZWN0MS5wbmcnXHJcbmltcG9ydCB3ZWF0aGVyaW1nIGZyb20gJy4uL2ltZy9wcm9qZWN0cy9wcm9qZWN0Mi5wbmcnXHJcbmltcG9ydCBkZXZjaDAxIGZyb20gJy4uL2ltZy9wcm9qZWN0cy9wcm9qZWN0My5wbmcnXHJcbmltcG9ydCB3cHNpdGUwMSBmcm9tICcuLi9pbWcvcHJvamVjdHMvcHJvamVjdDQucG5nJ1xyXG5pbXBvcnQgYXBwbG92ZXIgZnJvbSAnLi4vaW1nL3Byb2plY3RzL3Byb2plY3Q1LnBuZydcclxuaW1wb3J0IGRldmNoMDIgZnJvbSAnLi4vaW1nL3Byb2plY3RzL3Byb2plY3Q2LnBuZydcclxuaW1wb3J0IGN1cnJlbmN5SW1nIGZyb20gJy4uL2ltZy9wcm9qZWN0cy9wcm9qZWN0Ny5wbmcnIFxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiVG9kbyBhcHBcIixcclxuICAgICAgICB0ZWNobm9sb2dpZXM6WydyZWFjdC5qcycsJ3dlYnBhY2snLCdTYXNzJ10sXHJcbiAgICAgICAgaW1nUGF0aDp0b2RvaW1nLFxyXG4gICAgICAgIGxpdmVMaW5rOiAnaHR0cHM6Ly9qYWtlLWouZ2l0aHViLmlvL1RPRE8tQVBQLycsXHJcbiAgICAgICAgY29kZUxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vSmFrZS1KL1RPRE8tQVBQJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlYXRoZXIgYXBwXCIsXHJcbiAgICAgICAgaW1nUGF0aDp3ZWF0aGVyaW1nLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczpbJ3JlYWN0LmpzJywnc3VwZXJhZ2VudCcsJ3dlYnBhY2snLCdTYXNzJ10sXHJcbiAgICAgICAgbGl2ZUxpbms6ICdodHRwczovL2pha2Utai5naXRodWIuaW8vd2VhdGhlckFQUC8nLFxyXG4gICAgICAgIGNvZGVMaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0pha2UtSi93ZWF0aGVyQVBQJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJ1ZC1kZXZcIixcclxuICAgICAgICBpbWdQYXRoOndwc2l0ZTAxLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczpbJ1dvcmRwcmVzcyddLFxyXG4gICAgICAgIGxpdmVMaW5rOidodHRwczovL3dlYmRldmFjYzExLjAwMHdlYmhvc3RhcHAuY29tLycsXHJcbiAgICAgICAgY29kZUxpbms6J25vbGluaydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJ3ZWIgZGV2IGNoYWxsZW5nZSAwMVwiLFxyXG4gICAgICAgIGltZ1BhdGg6ZGV2Y2gwMSxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6WydwdXJlIEhUTUwmQ1NTJ10sXHJcbiAgICAgICAgbGl2ZUxpbms6J2h0dHBzOi8vamFrZS1qLmdpdGh1Yi5pby93ZWVrbHktd2ViLWRldi1jaGFsbGFuZ2UtMS8nLFxyXG4gICAgICAgIGNvZGVMaW5rOidodHRwczovL2dpdGh1Yi5jb20vSmFrZS1KL3dlZWtseS13ZWItZGV2LWNoYWxsYW5nZS0xJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkFwcGxvdmVyIHRhc2tcIixcclxuICAgICAgICBpbWdQYXRoOmFwcGxvdmVyLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczpbJ2Jvb3RzdHJhcDQnLCdqUXVlcnknLCdzbGlja2VyLmpzJ10sXHJcbiAgICAgICAgbGl2ZUxpbms6J2h0dHBzOi8vamFrZS1qLmdpdGh1Yi5pby9hcHBsb3Zlci10YXNrLycsXHJcbiAgICAgICAgY29kZUxpbms6J2h0dHBzOi8vZ2l0aHViLmNvbS9KYWtlLUovYXBwbG92ZXItdGFzaydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJ3ZWIgZGV2IGNoYWxsZW5nZSAwMlwiLFxyXG4gICAgICAgIGltZ1BhdGg6ZGV2Y2gwMixcclxuICAgICAgICB0ZWNobm9sb2dpZXM6Wydib290c3RyYXA0JywnalF1ZXJ5J10sXHJcbiAgICAgICAgbGl2ZUxpbms6J2h0dHBzOi8vamFrZS1qLmdpdGh1Yi5pby93ZWVrbHktd2ViLWRldi1jaGFsbGFuZ2UtMi8nLFxyXG4gICAgICAgIGNvZGVMaW5rOidodHRwczovL2dpdGh1Yi5jb20vSmFrZS1KL3dlZWtseS13ZWItZGV2LWNoYWxsYW5nZS0yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkN1cnJlbmN5IENvbnZlcnRlclwiLFxyXG4gICAgICAgIGltZ1BhdGg6Y3VycmVuY3lJbWcsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOlsncmVhY3QuanMnLCd3ZWJwYWNrJywnU2FzcyddLFxyXG4gICAgICAgIGxpdmVMaW5rOidodHRwczovL2pha2Utai5naXRodWIuaW8vY3VycmVuY3lBUFAvJyxcclxuICAgICAgICBjb2RlTGluazonaHR0cHM6Ly9naXRodWIuY29tL0pha2UtSi9jdXJyZW5jeUFQUCdcclxuICAgIH1cclxuXVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZGF0YS9wcm9qZWN0cy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./src/img/projects/project1.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project1.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDEucG5nPzNkMDUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Byb2plY3QxLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9wcm9qZWN0cy9wcm9qZWN0MS5wbmdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************!*\
  !*** ./src/img/projects/project2.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project2.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDIucG5nP2M3NGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Byb2plY3QyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9wcm9qZWN0cy9wcm9qZWN0Mi5wbmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************************!*\
  !*** ./src/img/projects/project3.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project3.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDMucG5nPzQ4ZGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Byb2plY3QzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9wcm9qZWN0cy9wcm9qZWN0My5wbmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***************************************!*\
  !*** ./src/img/projects/project4.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project4.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDQucG5nPzFkNTIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Byb2plY3Q0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9wcm9qZWN0cy9wcm9qZWN0NC5wbmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***************************************!*\
  !*** ./src/img/projects/project5.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project5.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDUucG5nPzcwNWEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Byb2plY3Q1LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9wcm9qZWN0cy9wcm9qZWN0NS5wbmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***************************************!*\
  !*** ./src/img/projects/project6.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project6.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3Byb2plY3RzL3Byb2plY3Q2LnBuZz9kZjQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wcm9qZWN0Ni5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDYucG5nXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***************************************!*\
  !*** ./src/img/projects/project7.png ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/project7.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3Byb2plY3RzL3Byb2plY3Q3LnBuZz9lNWNiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9wcm9qZWN0Ny5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvcHJvamVjdHMvcHJvamVjdDcucG5nXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ })
/******/ ]);