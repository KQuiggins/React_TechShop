import { signInWithGoogle, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);

  };

  return (
    <>
      <div>SignIn Page</div>
      <button onClick={logGoogleUser}>
        SignIn with Google
      </button>
    </>
    
  )
}

export default SignIn