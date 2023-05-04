import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { logout, login } from "../redux/store/auth"
import { startLoadingNotes } from "../redux/store/journal/thunks";

export const useCheckAuth = () => {
	const {status, errorMessage} = useSelector( state => state.auth );
	
	const dispatch = useDispatch();

	useEffect(() => {

		onAuthStateChanged( FirebaseAuth, async(user)=>{
			
			if(!user) {
				dispatch(logout(errorMessage));
			} else {
				const {uid, email, displayName, photoURL} = user;
				dispatch(login({uid, email, displayName, photoURL}))
				dispatch(startLoadingNotes())

			}
			
		} )	
		
	}, );

	return status
}