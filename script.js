import * as msal from 'https://cdn.skypack.dev/msal';

const msalConfig = {
  auth: {
    clientId: 'c75726fa-2f09-4a02-b9c5-7683e091bc6e', // Replace with your client ID
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'https://cloud-tech.vercel.app/', // Replace with your redirect URI
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

const myMSALObj = new msal.PublicClientApplication(msalConfig);

const loginRequest = {
  scopes: ['user.read'],
};

function handleResponse(response) {
  // Handle the authentication response
  if (response !== null) {
    console.log(response);
    // You can perform additional tasks here after successful login
  } else {
    console.error('Authentication failed');
  }
}

function signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(handleResponse)
    .catch(error => {
      console.error(error);
    });
}

document.getElementById('signInButton').addEventListener('click', signIn);
