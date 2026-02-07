// Firebase Configuration
// Replace with your own Firebase config from console.firebase.google.com
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Check auth state
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('User signed in:', user.email);
    } else {
        console.log('No user signed in');
        if (!window.location.pathname.includes('login') && 
            !window.location.pathname.includes('register') &&
            !window.location.pathname.includes('index')) {
            window.location.href = 'login.html';
        }
    }
});
