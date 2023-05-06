import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useEffect } from 'react';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
// import { ImageGallery } from '../components';
import { useForm } from '../../hooks';
import { setActiveNote, startSavingNote } from '../../redux/store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


export const NoteView = () => {

	const dispatch = useDispatch();

	const {active: note, messageSaved, isSaving} = useSelector(state => state.journal)

	const {date, body, title, onInputChange, formState} = useForm( note );

	const dateString = useMemo(() => {
		const newDate = new Date(date)
		const formatDate = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' }).format(newDate)
		return formatDate.charAt(0).toUpperCase() + formatDate.slice(1)
	}, [date]);

	useEffect(() => {
		dispatch( setActiveNote( formState ) )
	}, [dispatch, formState])

	useEffect(() => {
		if ( messageSaved.length > 0 ){
			Swal.fire('Nota actualizada', messageSaved, 'success');
		}
	}, [messageSaved])
	
	
	const onSaveNote = () => {
		dispatch( startSavingNote() )
	}

	return (
		<Grid
			container
			direction={'row'}
			justifyContent={'space-between'}
			sx={{ mb: 1 }}>
			<Grid item alignItems="center" justifyContent={'center'}>
				<Typography fontSize={30} fontWeight="light">			
					{dateString}
				</Typography>
				
			</Grid>
			<Grid item>
				<Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote} disabled={isSaving}>
					<SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un titulo"
					label="Título"
					sx={{ border: 'none', mt: 2, mb: 1 }}
					name='title'
					value={title}
					onChange={onInputChange}
				/>

				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Qué sucedió hoy?"
					minRows="4"
					name='body'
					value={body}
					onChange={onInputChange}


				/>
			</Grid>

			{/* <ImageGallery /> */}
		</Grid>
	);
};

