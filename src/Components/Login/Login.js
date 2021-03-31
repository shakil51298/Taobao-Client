import React from 'react';
import fbLogo from '../../imges/a.png'
import googleLogo from '../../imges/Group 573.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app(); // if already initialized, use that one
     }
    
    const faceBookProvider =  new firebase.auth.FacebookAuthProvider();
    const googleProvider =  new firebase.auth.GoogleAuthProvider();
    
    const facebookSignInHandler = () =>{
        firebase.auth().signInWithPopup(faceBookProvider)
        .then(result => {
            const user = result.user
            console.log(user);
        })
        .catch(error =>{
            const errMessage = error.message;
            console.log(errMessage)
        })
    }
    const googleSignInHandler = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="container ">
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input className="form-control" placeholder="disabled" disabled/>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" placeholder="disabled" disabled />
            </div>
            <div className="row text-center mt-1">
                <div className="col-md-6">
                    <button onClick={facebookSignInHandler} className="w-100 btn btn-outline-primary">
                        <div className="row">
                            <div className="col">
                                <img src={fbLogo} style={{width:'25px'}} alt=""/>
                            </div>
                            <div className="col ">
                                Loin with Facebook
                            </div>
                        </div>
                    </button>
                </div>
                <div className="col-md-6">
                    <button onClick={googleSignInHandler} className="w-100 btn btn-outline-primary">
                        <div className="row">
                            <div className="col">
                                <img src={googleLogo} style={{width:'25px'}} alt=""/>
                            </div>
                            <div className="col">
                                Loin with Google
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;