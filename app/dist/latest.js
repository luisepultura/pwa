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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const menu = () => {

  const menuIconElement = document.querySelector('.header__icon');
  const menuElement = document.querySelector('.menu');
  const menuOverlayElement = document.querySelector('.menu__overlay');

  //Menu click event
  menuIconElement.addEventListener('click', showMenu, false);
  menuOverlayElement.addEventListener('click', hideMenu, false);
  menuElement.addEventListener('transitionend', onTransitionEnd, false);

  //To show menu
  function showMenu() {
    menuElement.style.transform = "translateX(0)";
    menuElement.classList.add('menu--show');
    menuOverlayElement.classList.add('menu__overlay--show');
  }

  //To hide menu
  function hideMenu() {
    menuElement.style.transform = "translateX(-110%)";
    menuElement.classList.remove('menu--show');
    menuOverlayElement.classList.remove('menu__overlay--show');
    menuElement.addEventListener('transitionend', onTransitionEnd, false);
  }

  let touchStartPoint, touchMovePoint;

  /*Swipe from edge to open menu*/

  //`TouchStart` event to find where user start the touch
  document.body.addEventListener('touchstart', function (event) {
    touchStartPoint = event.changedTouches[0].pageX;
    touchMovePoint = touchStartPoint;
  }, false);

  //`TouchMove` event to determine user touch movement
  document.body.addEventListener('touchmove', function (event) {
    touchMovePoint = event.touches[0].pageX;
    if (touchStartPoint < 10 && touchMovePoint > 30) {
      menuElement.style.transform = "translateX(0)";
    }
  }, false);

  function onTransitionEnd() {
    if (touchStartPoint < 10) {
      menuElement.style.transform = "translateX(0)";
      menuOverlayElement.classList.add('menu__overlay--show');
      menuElement.removeEventListener('transitionend', onTransitionEnd, false);
    }
  }
};
/* harmony export (immutable) */ __webpack_exports__["menu"] = menu;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(0);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () { console.log('Service Worker Registered'); });
}


console.warn('menu imported:', __WEBPACK_IMPORTED_MODULE_0__menu__["menu"]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__menu__["menu"])();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var header = document.querySelector('header');
  var menuHeader = document.querySelector('.menu__header');

  //After DOM Loaded
  document.addEventListener('DOMContentLoaded', function(event) {
    //On initial load to check connectivity
    if (!navigator.onLine) {
      updateNetworkStatus();
    }

    window.addEventListener('online', updateNetworkStatus, false);
    window.addEventListener('offline', updateNetworkStatus, false);
  });

  //To update network status
  function updateNetworkStatus() {
    if (navigator.onLine) {
      header.classList.remove('app__offline');
      menuHeader.style.background = '#1E88E5'; 
    }
    else {
      toast('You are now offline..');
      header.classList.add('app__offline');
      menuHeader.style.background = '#9E9E9E';
    }
  }
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function (exports) {
  'use strict';

  var toastContainer = document.querySelector('.toast__container');

  //To show notification
  function toast(msg, options) {
    if (!msg) return;

    options = options || 3000;

    var toastMsg = document.createElement('div');

    toastMsg.className = 'toast__msg';
    toastMsg.textContent = msg;

    toastContainer.appendChild(toastMsg);

    //Show toast for 3secs and hide it
    setTimeout(function () {
      toastMsg.classList.add('toast__msg--hide');
    }, options);

    //Remove the element after hiding
    toastMsg.addEventListener('transitionend', function (event) {
      event.target.parentNode.removeChild(event.target);
    });
  }

  exports.toast = toast; //Make this method available in global
})(typeof window === 'undefined' ? module.exports : window);

/***/ }),
/* 4 */
/***/ (function(module, exports) {




(function () {
  'use strict';

  var app = {
    spinner: document.querySelector('.loader')
  };


  document.getElementById('butRefresh').addEventListener('click', function () {
    // Get fresh, updated data from GitHub whenever you are clicked
    toast('Fetching latest data...');
    fetchCommits();
    console.log("Getting fresh data!!!");
  });
  
  var container = document.querySelector('.container');
  var commitContainer = ['.first', '.second', '.third', '.fourth', '.fifth'];
  var posData = ['first', 'second', 'third', 'fourth', 'fifth'];

  // Check that localStorage is both supported and available
  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch (e) {
      return false;
    }
  }

  // Get Commit Data from Github API
  function fetchCommits() {
    var url = 'https://api.github.com/repos/unicodeveloper/resources-i-like/commits';

    fetch(url)
      .then(function (fetchResponse) {
        return fetchResponse.json();
      })
      .then(function (response) {
        console.log("Response from Github", response);

        var commitData = {};

        for (var i = 0; i < posData.length; i++) {
          commitData[posData[i]] = {
            message: response[i].commit.message,
            author: response[i].commit.author.name,
            time: response[i].commit.author.date,
            link: response[i].html_url
          };
        }

        localStorage.setItem('commitData', JSON.stringify(commitData));

        for (var i = 0; i < commitContainer.length; i++) {

          container.querySelector("" + commitContainer[i]).innerHTML =
            "<h4> Message: " + response[i].commit.message + "</h4>" +
            "<h4> Author: " + response[i].commit.author.name + "</h4>" +
            "<h4> Time committed: " + (new Date(response[i].commit.author.date)).toUTCString() + "</h4>" +
            "<h4>" + "<a href='" + response[i].html_url + "'>Click me to see more!</a>" + "</h4>";

        }

        app.spinner.setAttribute('hidden', true); // hide spinner
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // Get the commits Data from the Web Storage
  function fetchCommitsFromLocalStorage(data) {
    var localData = JSON.parse(data);

    app.spinner.setAttribute('hidden', true); //hide spinner

    for (var i = 0; i < commitContainer.length; i++) {

      container.querySelector("" + commitContainer[i]).innerHTML =
        "<h4> Message: " + localData[posData[i]].message + "</h4>" +
        "<h4> Author: " + localData[posData[i]].author + "</h4>" +
        "<h4> Time committed: " + (new Date(localData[posData[i]].time)).toUTCString() + "</h4>" +
        "<h4>" + "<a href='" + localData[posData[i]].link + "'>Click me to see more!</a>" + "</h4>";

    }
  }

  if (storageAvailable('localStorage')) {
    if (localStorage.getItem('commitData') === null) {
      /* The user is using the app for the first time, or the user has not
       * saved any commit data, so show the user some fake data.
       */
      fetchCommits();
      console.log("Fetch from API");
    } else {
      fetchCommitsFromLocalStorage(localStorage.getItem('commitData'));
      console.log("Fetch from Local Storage");
    }
  }
  else {
    toast("We can't cache your app data yet..");
  }
})();

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);