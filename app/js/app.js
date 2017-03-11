if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () { console.log('Service Worker Registered'); });
}

import { menu } from './menu';
console.warn('menu imported:', menu);
menu();