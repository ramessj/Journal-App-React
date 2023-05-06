import { useDispatch, useSelector } from 'react-redux';
import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { startCreatingUserWithEmailPassword } from '../../redux/store/auth';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { Grid, TextField, Button, Link, Typography, Alert } from '@mui/material';

const formData = {
	email: '',
	password: '',
	displayName: '',
};

const formValidations = {
	email: [
		(value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value), 
		'Debe ser un mail correcto'],
	password: [
		(value) => value.length >= 6,
		'Debe tener por lo menos 6 caracteres',
	],
	displayName: [
		(value) => value.length >= 3,
		'Debe tener por lo menos 3 caracteres',
	],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();

	const [formSubmitted, setFormSubmitted] = useState(false);

	const {status, errorMessage} = useSelector( state => state.auth )

	const isCheckingAuthentication = useMemo(()=> status === 'checking', [status])

	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		displayNameValid,
		emailValid,
		passwordValid,
		isFormValid,
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();

		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return (
		<AuthLayout title="Crear una Cuenta">
			<form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Nombre Completo"
							type="text"
							placeholder="Juan Pérez"
							fullWidth
							name="displayName"
							value={displayName}
							onChange={onInputChange}
							error={!!displayNameValid && formSubmitted}
							helperText={
								formSubmitted
									? displayNameValid
									: displayName.length >= 1
									? displayNameValid
									: ''
							}></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							placeholder="correo@google.com"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={
								formSubmitted
									? emailValid
									: email.length >= 1
									? emailValid
									: ''
							}></TextField>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							autoComplete="true"
							label="Contraseña"
							type="password"
							placeholder="Contraseña"
							fullWidth
							name="password"
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSubmitted}
							helperText={
								formSubmitted
									? passwordValid
									: password.length >= 1
									? passwordValid
									: ''
							}></TextField>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12}>
							<Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth>
								Crear Cuenta
							</Button>
						</Grid>
						<Grid item xs={12} display={ !!errorMessage ? '' : 'none' }>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>
							¿Ya tienes una cuenta?
						</Typography>
						<Link
							component={RouterLink}
							color="inherit"
							to="/auth/login">
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
