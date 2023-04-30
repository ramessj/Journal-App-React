import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../../firebase/providers";
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = (email, password) =>{
	return async ( dispatch ) => {
		dispatch (checkingCredentials());
	}

}

export const startGoogleSignIn = () =>{
	return async ( dispatch ) => {

		dispatch( checkingCredentials() );

		const result = await signInWithGoogle();

		if(!result.ok){
			dispatch( logout(result.errorMessage) )
		}

		

		dispatch( login(result) )
	}
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) =>{
	return async ( dispatch ) => {

		dispatch( checkingCredentials() );

		const {ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});

		if(!ok) return dispatch( logout( errorMessage ) )

		dispatch( login({ uid, displayName, email, photoURL }) );

	}	
}

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async ( dispatch ) => {

		dispatch( checkingCredentials() );

		const resp = await loginWithEmailPassword({ email, password });

		
		if(!resp.ok){
			return dispatch( logout(resp) )
		}

		dispatch( login( resp ) )

		
	}
}

export const startLogout = () => {
	return async( dispatch ) => {
		await logoutFirebase();

		dispatch( logout() )

	}
}