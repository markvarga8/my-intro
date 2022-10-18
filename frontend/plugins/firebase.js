import { firebase } from '@firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB0kzSWRXd4-3wd7tzZfbJp4wPQfwrrmj4',
  authDomain: 'auth-a5273.firebaseapp.com',
  projectId: 'auth-a5273',
  storageBucket: 'auth-a5273.appspot.com',
  messagingSenderId: '89962493875',
  appId: '1:89962493875:web:be550d6f687a5958ba7dc6',
  measurementId: 'G-XKF2DRMXD6'
}

let app = null

if (!firebase.apps.length && firebase.apps !== undefined) {
  // eslint-disable-next-line
  app = firebase.initializeApp(firebaseConfig)
}

export default firebase
