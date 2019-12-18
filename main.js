/* import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCnT6uoSdb-e15lWRI_pSky_SzqNTuHEZo",
    authDomain: "sellery-92785.firebaseapp.com",
    databaseURL: "https://sellery-92785.firebaseio.com",
    projectId: "sellery-92785",
    storageBucket: "sellery-92785.appspot.com",
    messagingSenderId: "608603868199",
    appId: "1:608603868199:web:261ab7403af0e4eac01202",
    measurementId: "G-XTXW0HJRJ1"
};
Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); */
import firebase from 'firebase'
require('firebase/auth')
var vm = new Vue({
    el: "#app",
    data: {
        name: "",
        email: "",
        cellphone: "",
        password: "",
        cpassword: ""

    },
    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(this.name, this.email).then(user => {
                    alert(`You are logged in as ${user.user.email}`);
                },
                err => {
                    alert(err.message);
                });
        }
    }
})