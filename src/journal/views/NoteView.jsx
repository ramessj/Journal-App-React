import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks';


export const NoteView = () => {


	const {active: note} = useSelector(state => state.journal)

	const {date, body, title, onInputChange, formState} = useForm( note );

	const dateString = useMemo( () => {
		const newDate = new Date( date );
		return newDate.toUTCString()
	}, [date] )

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
				<Button color="primary" sx={{ padding: 2 }}>
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
					value={body}
					onChange={onInputChange}


				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};

