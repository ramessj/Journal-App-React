import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, logout, login } from "./"


export const startGoogleSignIn = (view) =>{
	return async ( dispatch ) => {

		
		const result = await signInWithGoogle();

		

		if(!result.ok){
			dispatch( logout(result.errorMessage) )
		}else{
			dispatch( login(result) )
		}		

		view.setLoading(false);
	}
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) =>{
	return async ( dispatch ) => {

		dispatch( checkingCredentials() );

		const {ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});

		if(!ok) return dispatch( logout( errorMessage ) );

		dispatch( login({ uid, displayName, email, photoURL }) );

	}	
}

export const startLoginWithEmailPassword = ({ email, password }, view) => {
	return async ( dispatch ) => {

		const resp = await loginWithEmailPassword({ email, password });
		
		view.setLoading(false);
		
		if(!resp.ok){	
			dispatch( logout( resp.errorMessage ) );
		}else{
			dispatch( login(resp) );
		}
		
	}
}



export const startLogout = () => {
	return async( dispatch ) => {
		await logoutFirebase();

		dispatch( clearNotesLogout() )

		dispatch( logout() )

	}
}