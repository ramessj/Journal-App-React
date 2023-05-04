import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../../helpers/loadNotes";

export const startNewNote = () => {
	return async (dispatch, getState) => {

		const { uid } = getState().auth;

		dispatch( savingNewNote() )

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
			
		};

		const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );

		await setDoc( newDoc, newNote );

		newNote.id = newDoc.id


		dispatch( addNewEmptyNote( newNote ) );
		//dispatch(newNote)
		dispatch(setActiveNote( newNote ))
	};
};

export const startLoadingNotes = () => {
	return async(dispatch, getState) =>{

		const { uid } = getState().auth;

		if( !uid ) throw new Error('El uid del usuarrio no existe');

		const notes = await loadNotes( uid );

		dispatch(setNotes ( notes ))
		
		
	}
}