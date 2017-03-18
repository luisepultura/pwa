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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

(function (window) {
    'use strict';

    //Push notification button
    var fabPushElement = document.querySelector('.fab__push');
    var fabPushImgElement = document.querySelector('.fab__image');

    //To check `push notification` is supported or not
    function isPushSupported() {
        //To check `push notification` permission is denied by user
        if (Notification.permission === 'denied') {
            alert('User has blocked push notification.');
            return;
        }

        //Check `push notification` is supported or not
        if (!('PushManager' in window)) {
            alert('Sorry, Push notification isn\'t supported in your browser.');
            return;
        }

        //Get `push notification` subscription
        //If `serviceWorker` is registered and ready
        navigator.serviceWorker.ready
            .then(function (registration) {
                registration.pushManager.getSubscription()
                    .then(function (subscription) {
                        //If already access granted, enable push button status
                        if (subscription) {
                            changePushStatus(true);
                        }
                        else {
                            changePushStatus(false);
                        }
                    })
                    .catch(function (error) {
                        console.error('Error occurred while enabling push ', error);
                    });
            });
    }

    // Ask User if he/she wants to subscribe to push notifications and then 
    // ..subscribe and send push notification
    function subscribePush() {
        navigator.serviceWorker.ready.then(function (registration) {
            if (!registration.pushManager) {
                alert('Your browser doesn\'t support push notification.');
                return false;
            }

            //To subscribe `push notification` from push manager
            registration.pushManager.subscribe({
                userVisibleOnly: true //Always show notification when received
            })
                .then(function (subscription) {
                    toast('Subscribed successfully.');
                    console.info('Push notification subscribed.');
                    console.log(subscription);
                    saveSubscriptionID(subscription);
                    changePushStatus(true);
                })
                .catch(function (error) {
                    changePushStatus(false);
                    console.error('Push notification subscription error: ', error);
                });
        })
    }

    // Unsubscribe the user from push notifications
    function unsubscribePush() {
        navigator.serviceWorker.ready
            .then(function (registration) {
                //Get `push subscription`
                registration.pushManager.getSubscription()
                    .then(function (subscription) {
                        //If no `push subscription`, then return
                        if (!subscription) {
                            alert('Unable to unregister push notification.');
                            return;
                        }

                        //Unsubscribe `push notification`
                        subscription.unsubscribe()
                            .then(function () {
                                toast('Unsubscribed successfully.');
                                console.info('Push notification unsubscribed.');
                                console.log(subscription);
                                deleteSubscriptionID(subscription);
                                changePushStatus(false);
                            })
                            .catch(function (error) {
                                console.error(error);
                            });
                    })
                    .catch(function (error) {
                        console.error('Failed to unsubscribe push notification.');
                    });
            })
    }

    //To change status
    function changePushStatus(status) {
        fabPushElement.dataset.checked = status;
        fabPushElement.checked = status;
        if (status) {
            fabPushElement.classList.add('active');
            fabPushImgElement.src = '../images/push-on.png';
        }
        else {
            fabPushElement.classList.remove('active');
            fabPushImgElement.src = '../images/push-off.png';
        }
    }

    function saveSubscriptionID(subscription) {
        var subscription_id = subscription.endpoint.split('gcm/send/')[1];

        console.log("Subscription ID", subscription_id);

        fetch('http://localhost:3333/api/users', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: subscription_id })
        });
    }

    function deleteSubscriptionID(subscription) {
        var subscription_id = subscription.endpoint.split('gcm/send/')[1];

        fetch('http://localhost:3333/api/user/' + subscription_id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    //Click event for subscribe push
    fabPushElement.addEventListener('click', function () {
        var isSubscribed = (fabPushElement.dataset.checked === 'true');
        if (isSubscribed) {
            unsubscribePush();
        }
        else {
            subscribePush();
        }
    });

    isPushSupported(); //Check for push notification support
})(window);

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(0);
__webpack_require__(5);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);