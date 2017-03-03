
##Webpack React

````
~ npm install
~ npm start

http://localhost:3000
````

if stuff gets screwed up

````
~ rm -rf node_modules && npm install
````

##Firebase

1. Go Login and create a new testing firebase and a new user.
2. Find the credentials for the testing database
3. Create this file in the project

````
/src/js/config.js

````

4. Copy this into the `config.js`

````
export const firebase = {
  apiKey: '******',
  authDomain: '******',
  databaseURL: '******',
  storageBucket: '******',
  messagingSenderId: '******'
};

export default { firebase };
````

5. Replace credentials with the one from your testing database