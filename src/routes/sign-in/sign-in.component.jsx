import SignupForm from '../../components/sign-up-form/sign-up-form.component';


import { 
  
  signInWithGoogle, 
  createUserDocumentFromAuth, 
  
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);

  };

  
  return (
    <>
      <div style={{"margin": "10px"}}>Sign-In Page</div>
      <button onClick={logGoogleUser} style={{"marginLeft": "10px"}}>
        SignIn with Google
      </button>
      <SignupForm />
      
    </>
    
  )
}

export default SignIn