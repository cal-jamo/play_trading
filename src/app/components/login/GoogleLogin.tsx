"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    gapi?: any;
  }
}

const GoogleSignIn = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    // Load the Google API platform.js library
    const loadGoogleScript = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        // Initialize Google Sign-In when the script is loaded
        window.gapi?.load('auth2', () => {
          window.gapi?.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // Replace with your actual client ID
          });
        });
      };
    };

    loadGoogleScript();
  }, []);

  const onSignIn = (googleUser: any) => {
    const profile = googleUser.getBasicProfile();
    const userImage = profile.getImageUrl();
    const userName = profile.getName();
    const userEmail = profile.getEmail();

    console.log('ID: ' + profile.getId());
    console.log('Name: ' + userName);
    console.log('Image URL: ' + userImage);
    console.log('Email: ' + userEmail);

    // Navigate to another route
    handleClick('/'); // replace with the actual path to your HomePageContainer
  };

  const signOut = () => {
    const auth2 = window.gapi?.auth2.getAuthInstance();
    auth2?.signOut().then(() => {
      const userInfoElement = document.getElementById('user-info');
      const signoutButton = document.getElementById('signout-button');

      if (userInfoElement && signoutButton) {
        userInfoElement.style.display = 'none';
        signoutButton.style.display = 'none';
      }
      console.log('User signed out.');
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Google Sign-In</h1>
      <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
      <div id="user-info" style={{ display: 'none', marginTop: '20px' }}>
        <img id="user-image" alt="User" style={{ borderRadius: '50%', width: '100px' }} />
        <h3 id="user-name"></h3>
        <p id="user-email"></p>
      </div>
      <button id="signout-button" onClick={signOut} style={{ display: 'none', marginTop: '20px' }}>
        Sign Out
      </button>
    </div>
  );
};

export default GoogleSignIn;
