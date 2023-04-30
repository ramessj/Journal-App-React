import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../redux/store/auth';
import { useForm } from '../../hooks';
import { Grid, TextField, Typography, Button, Link, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

	const { status, errorMessage } = useSelector( state => state.auth );

	const dispatch = useDispatch();


	const { email, password, onInputChange } = useForm({
		email: '',
		password: ''
	})

	const isAuthenticating = useMemo(()=> status === 'checking', [status])


	const onSubmit = (event) => {
		event.preventDefault();

		dispatch( startLoginWithEmailPassword({email, password}) )

	}

	const onGoogleSignIn = () => {

		dispatch( checkingAuthentication() )
		dispatch( startGoogleSignIn() )
	}

	return (
		<AuthLayout title='Login'>

			<form onSubmit={onSubmit}>
				<Grid container>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>

						<TextField
							name='email'
							onChange={onInputChange}
							value={email}
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
							fullWidth
							name='password'
							onChange={onInputChange}
							value={password}>
						</TextField>

					</Grid>
					<Grid container sx={{ mt: 3}}>

						<Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } >
						<Alert severity='error'>{errorMessage}</Alert>

						</Grid>
						

					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>

						
						<Grid item xs={ 12 } sm={ 6 } >

							<Button disabled={isAuthenticating} variant="contained" fullWidth type='submit'>
								Login
							</Button>

						</Grid>

						<Grid item xs={ 12 } sm={ 6 } >

							<Button onClick={onGoogleSignIn} disabled={isAuthenticating} variant="contained" fullWidth >
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>

									
							</Button>

						</Grid>

					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Link component={ RouterLink } color='inherit' to='/auth/register' >
							Crear una cuenta
						</Link>
						
					</Grid>

				</Grid>

			</form>

		</AuthLayout>

	)
}
