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
            },
            mensaje: "¡Por favor llena todos los campos!",
            tituloMensaje: ""
                /* mensajeContacto: "En breve uno de nuestros ejecutivos se comunicará contigo",
                mensajeRegistro: "¡Registro exitoso!" */

        },
        methods: {
            signUp() {
                const auth = firebase.auth();
                if (this.registro.email === "" || this.registro.password === "") {
                    this.tituloMensaje = "";
                    this.mensaje = "¡Por favor llena todos los campos!"
                    this.showModal();
                } else {
                    auth.createUserWithEmailAndPassword(this.registro.email, this.registro.password).then(user => {
                            this.tituloMensaje = "";
                            this.mensaje = "¡Registro exitoso!"
                            this.showModal();
                        },
                        err => {
                            this.mensaje = err.message;
                            this.showModal();
                        });
                }
            },
            login() {
                if (this.registro.email === "" || this.registro.password === "") {
                    this.tituloMensaje = "";
                    this.mensaje = "¡Por favor llena todos los campos!"
                    this.showModal();


                } else {
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(this.registro.email, this.registro.password)
                        .then(
                            user => {
                                alert("Welcome");

                            },
                            err => {
                                alert(err.message);
                            }
                        );
                }

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
                let name = this.contacto.name;
                let cellphone = this.contacto.cellphone;
                let email = this.contacto.email;
                let website = this.contacto.website;
                let company = this.contacto.company;
                if (name === "" || cellphone === "" || email === "" || website === "" || company === "") {
                    this.tituloMensaje = "";
                    this.mensaje = "¡Por favor llena todos los campos!"
                    this.showModal();
                } else {
                    this.saveMessage(name, cellphone, email, website, company);
                    this.tituloMensaje = "¡Hemos recibido tu informacion!"
                    this.mensaje = "En breve uno de nuestros ejecutivos se comunicará contigo"
                    this.showModal();
                    this.contacto.name = "";
                    this.contacto.cellphone = "";
                    this.contacto.email = "";
                    this.contacto.website = "";
                    this.contacto.company = "";
                }

            },
            showModal() {
                document.getElementById("modal").style.transform = "scale(1,1)";
                document.getElementById("overlay").style.opacity = "0.5";
                document.getElementById("overlay").style.zIndex = "100";
                let aceptar = document.getElementById("aceptar").addEventListener('click', function() {

                    document.getElementById("modal").style.transform = "scale(0,0)";
                    document.getElementById("overlay").style.opacity = "0";
                    document.getElementById("overlay").style.zIndex = "0";
                });

            }

        }
    })
}())