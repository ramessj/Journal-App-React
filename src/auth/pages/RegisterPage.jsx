import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Grid, TextField, Button, Link, Typography } from '@mui/material';

export const RegisterPage = () => {
	return (
		<AuthLayout title='Crear una Cuenta'>
			
			<form>
				<Grid container>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>

						<TextField
							label='Nombre Completo'
							type="text"
							placeholder="Juan Pérez"
							fullWidth>
						</TextField>

					</Grid>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>

						<TextField
							label='Correo'
							type="email"
							placeholder="correo@google.com"
							fullWidth>
						</TextField>

					</Grid>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>

						<TextField
							autoComplete='true'
							label='Contraseña'
							type="password"
							placeholder="Contraseña"
							fullWidth>
						</TextField>

					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

						<Grid item xs={ 12 }>

							<Button variant="contained" fullWidth>
								Crear Cuenta
							</Button>

						</Grid>

					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
						<Link component={ RouterLink } color='inherit' to='/auth/login' >
							Ingresar
						</Link>
						
					</Grid>

				</Grid>

			</form>
		</AuthLayout>
	)
}
