import React, { useContext, useState } from 'react';
import fbLogo from '../../imges/a.png'
import googleLogo from '../../imges/Group 573.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } } // redirect after login
    const history = useHistory(); // redirect after login
  
    
    const [loggedInuser , setloggedInuser]  = useContext(userContext)
    const [user , setUser] = useState({
        isSignIn :false,
        name : "",
        email:'',
        pssword:'',
        photo:''
    })

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
            const  {displayName , email , photoURL} = result.user
            const signInUser = {
                isSignIn : true,
                name : displayName,
                email:email,
                photo:photoURL
            }
            setUser(signInUser);
            setloggedInuser(signInUser)
            history.replace(from); // redirect after login
        })
        .catch(error =>{
            const errMessage = error.message;
            console.log(errMessage)
        })
    }
    const googleSignInHandler = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const  {displayName , email , photoURL} = result.user
            const signInUser = {
                isSignIn : true,
                name : displayName,
                email:email,
                photo:photoURL
            }
            setUser(signInUser);
            setloggedInuser(signInUser)
            history.replace(from); // redirect after login
        })
        .catch(error =>{
            console.log(error.message)
            
        })
    }
    const logOutHandler = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignIn :false,
                name : "",
                email:'',
                pssword:'',
                photo:''
            }
            setUser(signOutUser)
            setloggedInuser(signOutUser)
        })
        .catch(error => {
            console.log(error)
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
            <div className="text-center mt-1">
                {
                    !loggedInuser.isSignIn ? <div className="row">
                        <div className="col-md-6">
                            <button onClick={facebookSignInHandler} className=" w-100 btn btn-outline-primary">
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
                    </div> : <button onClick={logOutHandler} className="w-100 btn btn-outline-primary">Sign out</button>
                }
            </div>
        </div>
    );
};

export default Login;