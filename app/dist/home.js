/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports) {

const numbers = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const family = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const greetings = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const colours = [
    { character: '一', pinyin: 'yī', svg: '', english: 'One' },
    { character: '二', pinyin: 'èr', svg: '', english: 'Two' },
    { character: '三', pinyin: 'sān', svg: '', english: 'Three' },
    { character: '四', pinyin: 'sì', svg: '', english: 'Four' },
    { character: '五', pinyin: 'wǔ', svg: '', english: 'Five' },
];

const library = {
    numbers,
    family,
    greetings,
    colours
};

const lessons = [
    { code: 'numbers', title: 'Numbers' },
    { code: 'family', title: 'Family' },
    { code: 'greetings', title: 'Greetings' },
    { code: 'colours', title: 'Colours' }
];



const dropdownLiTemplate = ({ code, title }) =>
    `<li>
        <span class="code" data-code="${code}">${title}</span>
    </li>`;


const lessonItemTemplate = ({ english, character, pinyin }) =>
    `<section class="lesson">
        <h4>${english}</h4>
        <h4>${character}</h4>
        <h4>${pinyin}</h4>        
    </section>`;

const dropdownLessonsTemplate = lessons.map(dropdownLiTemplate).join('');
const numbersTemplate = numbers.map(lessonItemTemplate).join('');

(console.log(dropdownLessonsTemplate));



const dropdown = document.querySelector('.dropdown');
const lessonContainer = document.querySelector('.lesson_container');
const triggers = document.querySelectorAll('.content > li');
const background = document.querySelector('.dropdownBackground');
const contenTitle = document.querySelector('.content__title');
const nav = document.querySelector('.navigation');

dropdown.innerHTML = dropdownLessonsTemplate;
lessonContainer.innerHTML = numbersTemplate;

const codes = document.querySelectorAll('.code');


function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 400);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const contenTitleCoords = contenTitle.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: navCoords.bottom,
        left: dropdownCoords.left - navCoords.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

const handleCodeClick = e => {
    const { code } = e.target.dataset;
    codes.forEach(c => c.removeEventListener('click', handleCodeClick));
    dropdown.innerHTML = lessons.filter(lesson => lesson.code !== code).map(dropdownLiTemplate).join('');
    document.querySelectorAll('.code').forEach(c => c.addEventListener('click', handleCodeClick));
    console.log(code);
};

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
codes.forEach(code => code.addEventListener('click', handleCodeClick));

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })

/******/ });