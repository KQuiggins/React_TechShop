import SignupForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';


// import { 
  
//   signInWithGoogle, 
//   createUserDocumentFromAuth, 

  
// } from '../../utils/firebase/firebase.utils'

const Authentication = () => {
  
  

  

  
  return (
    <>
      <div style={{"margin": "10px"}}>Sign-In Page</div>
      <SignInForm />
      <SignupForm />
      
    </>
    
  )
}

export default Authentication