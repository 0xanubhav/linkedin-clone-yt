import React from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";



function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [name,setName] = useState("");
  const [profilePic,setProfilePic] = useState("");
  const dispatch = useDispatch();
  
   const register=() => {
 
   if(!name){
     return alert("Please enter a full name !!");
   }
 
   
   auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
     userAuth.user.updateProfile({
       displayName:name,
       photoUrl:profilePic,
     })
     .then(() => {
        dispatch(
         login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic
        })
        )
     })
   }).catch((error) => alert(error));
  }
   
 const loginToApp= (e) => {
   e.preventDefault();
 
   auth.signInWithEmailAndPassword(email,password).then(
     (userAuth) => { 
      console.log(userAuth)
     dispatch(login({
       email:userAuth.user.email,
       uid: userAuth.user.uid,
       displayName: userAuth.user.displayName,
       photoUrl: userAuth.user.photoURL,
     }))
   }).catch((error) => alert(error));
 };

   return (
     <div className="login">
 
 <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="662" viewBox="1.786 1.783 287.865 76.248" id="linkedin"><path fill="#069" d="M213.882 7.245c0-3.015 2.508-5.462 5.6-5.462h64.568c3.093 0 5.6 2.447 5.6 5.462V72.57c0 3.016-2.507 5.461-5.6 5.461h-64.568c-3.092 0-5.6-2.445-5.6-5.46V7.244z"></path><path d="M1.785 65.652h31.62V55.27H13.23V15.665H1.785v49.987zM49.414 65.652v-34.43H37.97v34.43h11.444zm-5.721-39.13c3.99 0 6.474-2.644 6.474-5.95-.074-3.378-2.484-5.947-6.398-5.947-3.915 0-6.475 2.57-6.475 5.947 0 3.306 2.484 5.95 6.324 5.95h.075zM54.727 65.652h11.444V46.424c0-1.029.074-2.058.377-2.791.826-2.056 2.709-4.186 5.871-4.186 4.142 0 5.799 3.158 5.799 7.784v18.42H89.66V45.91c0-10.576-5.646-15.497-13.176-15.497-6.173 0-8.884 3.451-10.39 5.802h.077v-4.993H54.727c.151 3.231 0 34.43 0 34.43zM105.805 15.665H94.361v49.987h11.444V54.489l2.86-3.601 8.96 14.764h14.078l-15.056-21.373 13.174-14.54h-13.776s-9.411 13.008-10.24 14.552V15.665z"></path><path d="M162.306 51.29c.151-.884.377-2.58.377-4.498 0-8.9-4.518-17.936-16.413-17.936-12.724 0-18.597 10.063-18.597 19.19 0 11.288 7.153 18.337 19.65 18.337 4.97 0 9.561-.732 13.327-2.275l-1.506-7.558c-3.088 1.024-6.25 1.537-10.164 1.537-5.345 0-10.012-2.195-10.389-6.871l23.715.072v.002zm-23.79-7.742c.301-2.938 2.26-7.273 7.153-7.273 5.194 0 6.4 4.628 6.4 7.273h-13.552zM190.93 15.665v17.304h-.151c-1.657-2.422-5.12-4.038-9.71-4.038-8.81 0-16.564 7.05-16.49 19.094 0 11.164 7.003 18.435 15.735 18.435 4.744 0 9.26-2.058 11.52-6.024h.225l.453 5.216h10.163c-.15-2.424-.302-6.61-.302-10.723V15.664h-11.444zm0 34.05c0 .88-.075 1.763-.227 2.495-.675 3.16-3.386 5.361-6.699 5.361-4.742 0-7.83-3.818-7.83-9.84 0-5.654 2.637-10.208 7.906-10.208 3.538 0 6.022 2.423 6.7 5.433.15.663.15 1.398.15 2.058v4.7z"></path><path fill="#fff" d="M236.85 65.61V31.18h-11.444v34.43h11.445zm-5.72-39.13c3.99 0 6.474-2.644 6.474-5.948-.075-3.379-2.484-5.949-6.398-5.949-3.917 0-6.475 2.57-6.475 5.949 0 3.304 2.483 5.948 6.324 5.948h.074zM243.184 65.61h11.443V46.385c0-1.028.075-2.058.377-2.792.827-2.057 2.71-4.186 5.872-4.186 4.14 0 5.797 3.157 5.797 7.786V65.61h11.443V45.869c0-10.575-5.645-15.496-13.174-15.496-6.173 0-8.884 3.45-10.39 5.8h.076v-4.992h-11.443c.149 3.23-.001 34.43-.001 34.43z"></path></svg>
        <form>
            <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="Full name(required)" 
            type="text" 
            />
 
 
            <input 
            value={profilePic} 
            onChange={e => setProfilePic(e.target.value)} 
            placeholder="Profile Pic URL" 
            type="text" 
            />
 
 
            <input 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email" 
            type="email" 
            />
            
            
            <input
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            type="password" 
            />
            
            
            <button type="submit" onClick={loginToApp}  >Sign In</button>
        </form>
 
        <p>Not a member?{" "}
            <span className="login__register" onClick={register}>Register Now</span>
            </p>
     </div>
   );
 };
 
 export default Login;