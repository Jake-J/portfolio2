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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_normalize_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_media_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_media_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_media_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_projects_js__ = __webpack_require__(4);






(() => {
    let projectImages;
    const modalCloseBtn = document.getElementsByClassName('close')[0],
          mdWindow = document.getElementById('myModal'),
          navLinks = document.getElementsByClassName('scroll-link'),
          submitBtn = document.getElementById('submit-btn');

    function assignEventListeners(collection, fun) {
        Array.from(collection).forEach(item => {
            item.addEventListener('click', fun);
        });
    }
    function moveTo(e) {
        e.preventDefault();

        function currentYPosition() {
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
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
            }return y;
        }
        function smoothScroll(eID) {
            let startY = currentYPosition(),
                stopY = elmYPosition(eID),
                distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY);return;
            }
            let speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            let step = Math.round(distance / 25),
                leapY = stopY > startY ? startY + step : startY - step,
                timer = 0;
            if (stopY > startY) {
                for (let i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;if (leapY > stopY) leapY = stopY;timer++;
                }return;
            }
            for (let i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;if (leapY < stopY) leapY = stopY;timer++;
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
        if (mdWindow.style.opacity == 0) {
            mdWindow.style.opacity = 1;
            mdWindow.style.display = 'block';

            const projectData = e.target.parentNode.dataset;
            liveBtn.setAttribute('href', projectData.liveLink);

            if (projectData.codeLink !== 'nolink') {
                codeBtn.setAttribute('href', projectData.codeLink);
                codeBtn.style.display = "inline-block";
            } else {
                codeBtn.style.display = "none";
            }

            const technologiesList = document.getElementsByClassName('technologies-list')[0];
            technologiesList.innerHTML = '';

            const technologies = projectData.technologies.indexOf(',') >= 0 ? projectData.technologies.split(',') : [projectData.technologies];

            technologies.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('technology');
                li.innerHTML = item;

                technologiesList.appendChild(li);
            });

            console.log(technologies);
        } else {
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
            return str.replace(/^\s+|\s+$/g, '');
        }

        if (trimfield(textarea.value) == '') {
            validationBox.style.display = 'block';
            validationMessage.innerHTML = 'You need to provide message';
            textarea.focus();
            return false;
        } else if (textarea.value.length <= 10) {
            validationBox.style.display = 'block';
            validationMessage.innerHTML = 'Message have to be at least 10 characters long';
            textarea.focus();
            return false;
        } else {
            validationBox.style.display = 'none';
            contactForm.submit();
        }
    }

    function generateProjects() {
        const projectsArea = document.getElementsByClassName('projects-here')[0];

        __WEBPACK_IMPORTED_MODULE_3__data_projects_js__["a" /* projects */].forEach(item => {
            const projectElem = document.createElement('div'),
                  overlay = document.createElement('div'),
                  projectName = document.createElement('p'),
                  projectImg = document.createElement('img');

            projectElem.classList.add('project-elem');
            overlay.classList.add('overlay');
            projectName.classList.add('project-name');
            projectImg.classList.add('project-image');

            projectElem.dataset.liveLink = item.liveLink;
            projectElem.dataset.codeLink = item.codeLink;
            projectElem.dataset.technologies = item.technologies;

            projectName.innerHTML = item.name;
            projectImg.setAttribute('src', item.imgPath);
            projectImg.setAttribute('alt', item.name);

            projectElem.appendChild(overlay);
            projectElem.appendChild(projectName);
            projectElem.appendChild(projectImg);

            projectsArea.appendChild(projectElem);
        });
        projectImages = document.querySelectorAll('.project-elem');
    }

    generateProjects();
    assignEventListeners(navLinks, moveTo);
    assignEventListeners(projectImages, toggleModal);
    modalCloseBtn.addEventListener('click', toggleModal);
    submitBtn.addEventListener('click', validateForm);
    window.addEventListener('click', e => {
        e.target == mdWindow ? toggleModal() : null;
    });
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png__);








const projects = [{
    name: "Todo app",
    technologies: ['react.js', 'webpack', 'Sass'],
    imgPath: __WEBPACK_IMPORTED_MODULE_0__img_projects_project1_png___default.a,
    liveLink: 'https://jake-j.github.io/TODO-APP/',
    codeLink: 'https://github.com/Jake-J/TODO-APP'
}, {
    name: "Weather app",
    imgPath: __WEBPACK_IMPORTED_MODULE_1__img_projects_project2_png___default.a,
    technologies: ['react.js', 'superagent', 'webpack', 'Sass'],
    liveLink: 'https://jake-j.github.io/weatherAPP/',
    codeLink: 'https://github.com/Jake-J/weatherAPP'
}, {
    name: "Bud-dev",
    imgPath: __WEBPACK_IMPORTED_MODULE_3__img_projects_project4_png___default.a,
    technologies: ['Wordpress'],
    liveLink: 'https://webdevacc11.000webhostapp.com/',
    codeLink: 'nolink'
}, {
    name: "web dev challenge 01",
    imgPath: __WEBPACK_IMPORTED_MODULE_2__img_projects_project3_png___default.a,
    technologies: ['pure HTML&CSS'],
    liveLink: 'https://jake-j.github.io/weekly-web-dev-challange-1/',
    codeLink: 'https://github.com/Jake-J/weekly-web-dev-challange-1'
}, {
    name: "Applover task",
    imgPath: __WEBPACK_IMPORTED_MODULE_4__img_projects_project5_png___default.a,
    technologies: ['bootstrap4', 'jQuery', 'slicker.js'],
    liveLink: 'https://jake-j.github.io/applover-task/',
    codeLink: 'https://github.com/Jake-J/applover-task'
}, {
    name: "web dev challenge 02",
    imgPath: __WEBPACK_IMPORTED_MODULE_5__img_projects_project6_png___default.a,
    technologies: ['bootstrap4', 'jQuery'],
    liveLink: 'https://jake-j.github.io/weekly-web-dev-challange-2/',
    codeLink: 'https://github.com/Jake-J/weekly-web-dev-challange-2'
}, {
    name: "Currency Converter",
    imgPath: __WEBPACK_IMPORTED_MODULE_6__img_projects_project7_png___default.a,
    technologies: ['react.js', 'webpack', 'Sass'],
    liveLink: 'https://jake-j.github.io/currencyAPP/',
    codeLink: 'https://github.com/Jake-J/currencyAPP'
}];
/* harmony export (immutable) */ __webpack_exports__["a"] = projects;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project1.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project2.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project3.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project4.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project5.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project6.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project7.png";

/***/ })
/******/ ]);