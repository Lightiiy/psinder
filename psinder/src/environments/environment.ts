import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyB3yhjxUYKoAWrwnt3nQXP3gfPJ-_0zd4Q",
  authDomain: "psinder-3386d.firebaseapp.com",
  projectId: "psinder-3386d",
  storageBucket: "psinder-3386d.appspot.com",
  messagingSenderId: "432759439613",
  appId: "1:432759439613:web:f489c41c2a38acaff77e94",
  measurementId: "G-S9LQBLLKBH"
};

export const environment = {
  production: false,
  firebase: {
    projectId: 'psinder-app',
    appId: '1:674808940680:web:576d1eaf5a8de25f80b73d',
    storageBucket: 'psinder-app.appspot.com',
    apiKey: 'AIzaSyA0DxmPL0akUwYWDaluPV0QHYNWZN1HBBU',
    authDomain: 'psinder-app.firebaseapp.com',
    messagingSenderId: '674808940680',
  }
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
