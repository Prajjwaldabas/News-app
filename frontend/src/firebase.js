
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, get, remove, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAguNfLc4IQjUWYiHvD3zFtKNdMZ3_PC7g",
  authDomain: "news-app-18c81.firebaseapp.com",
  projectId: "news-app-18c81",
  storageBucket: "news-app-18c81.appspot.com",
  messagingSenderId: "140866303585",
  appId: "1:140866303585:web:f9910dee350fd31bb15c20",
  measurementId: "G-9PK3PPEVSM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export const firebaseAuth = getAuth(app);

// Save an article in Firebase
export const saveArticleInFirebase = async (index) => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    const articleRef = ref(db, `users/${userId}/savedArticles/${index}`);
    await set(articleRef, true);
  }
};

// Check if an article is saved in Firebase
export const checkIfArticleIsSaved = async (index) => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    const articleRef = ref(db, `users/${userId}/savedArticles/${index}`);
    const snapshot = await get(articleRef);
    return snapshot.exists();
  }
  return false;
};

// Remove an article from Firebase
export const removeArticleFromFirebase = async (index) => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    const articleRef = ref(db, `users/${userId}/savedArticles/${index}`);
    await remove(articleRef);
  }
};

// Get saved articles from Firebase
export const getSavedArticlesFromFirebase = (callback) => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    const articlesRef = ref(db, `users/${userId}/savedArticles`);

    // Listen for changes in the saved articles
    onValue(articlesRef, (snapshot) => {
      const savedArticles = [];
      snapshot.forEach((childSnapshot) => {
        savedArticles.push({
          id: childSnapshot.key,
          // You might need to fetch the detailed article information from your original API here.
          // Currently, this only provides the ID of the saved article.
        });
      });
      // Execute the provided callback with the updated saved articles
      callback(savedArticles);
    });
  }
};

// Listen for changes in authentication state
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
