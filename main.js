(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyCnT6uoSdb-e15lWRI_pSky_SzqNTuHEZo",
        authDomain: "sellery-92785.firebaseapp.com",
        databaseURL: "https://sellery-92785.firebaseio.com",
        projectId: "sellery-92785",
        storageBucket: "sellery-92785.appspot.com",
        messagingSenderId: "608603868199",
        appId: "1:608603868199:web:261ab7403af0e4eac01202",
        measurementId: "G-XTXW0HJRJ1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    let mensajeFormulario = firebase.database().ref('mensajes');



    var vm = new Vue({
            el: "#app",
            data: {
                registro: {
                    name: "",
                    email: "",
                    cellphone: "",
                    password: "",
                    cpassword: ""
                },
                contacto: {
                    name: "",
                    cellphone: "",
                    email: "",
                    website: "",
                    company: "",
                }

            },
            methods: {
                signUp() {
                    const auth = firebase.auth();
                    auth.createUserWithEmailAndPassword(this.registro.email, this.registro.password).then(user => {
                            alert('Cuenta creada con éxito');
                        },
                        err => {
                            alert(err.message);
                        });
                },
                login() {
                    // e.preventDefault();
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(this.registro.email, this.registro.password)
                        .then(
                            user => {
                                alert("Welcome");
                                //this.$router.push("/");
                            },
                            err => {
                                alert(err.message);
                            }
                        );

                },

                saveMessage(name, cellphone, email, website, company) {
                    let newMessageRef = mensajeFormulario.push();
                    newMessageRef.set({
                        name: name,
                        cellphone: cellphone,
                        email: email,
                        website: website,
                        company: company,
                    })
                },
                submitForm() {
                    //e.preventDefault();
                    let name = this.contacto.name;
                    let cellphone = this.contacto.cellphone;
                    let email = this.contacto.email;
                    let website = this.contacto.website;
                    let company = this.contacto.company;
                    this.saveMessage(name, cellphone, email, website, company);
                    document.getElementById("modal").style.visibility = "visible";
                    document.getElementById("overlay").style.visibility = "visible";
                    let aceptar = document.getElementById("aceptar").addEventListener('click', function() {
                        document.getElementById("modal").style.visibility = "hidden";
                        document.getElementById("overlay").style.visibility = "hidden";
                    });
                    this.contacto.name = "";
                    this.contacto.cellphone = "";
                    this.contacto.email = "";
                    this.contacto.website = "";
                    this.contacto.company = "";
                },

            }
        })
        //document.getElementById("submitForm").addEventListener('submit', vm.submitForm);
        //document.getElementById("login").addEventListener('submit', vm.login);
}())