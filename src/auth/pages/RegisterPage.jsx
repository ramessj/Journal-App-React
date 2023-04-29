// import { /* useDispatch, */ useSelector } from 'react-redux';
// import { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Grid, TextField, Button, Link, Typography } from '@mui/material';
// import { checkingAuthentication } from '../../redux/store/auth';

const formData = {
	email: '',
	password: '',
	displayName: '',
};

const formValidations = {
	email:    [(value) => value.includes('@'), 'El correo debe tener un @'],
	password: [(value) => value.length >= 6,
		'La contraseña debe tener por lo menos 6 caracteres',
	],
	displayName: [
		(value) => value.length >= 3,
		'El nombre para mostrar debe tener por lo menos 3 caracteres',
	],
};

export const RegisterPage = () => {
	// const dispatch = useDispatch();

	// const { status } = useSelector( state => state.auth)

	// const isAuthenticating = useMemo(()=> status === 'checking', [status])

	const {
		displayName,
		email,
		password,
		onInputChange,
		formState,
		displayNameValid,
		emailValid,
		passwordValid,
		// isFormValid,
	} = useForm(formData, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<AuthLayout title="Crear una Cuenta">
			<form onSubmit={onSubmit}>
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
							error={displayName.length >0 && displayNameValid !== null && displayNameValid !== undefined && displayNameValid !== false}
							helperText={displayNameValid ? formValidations.displayName[1] : "" }></TextField>
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
							error={email.length >0 && emailValid !== null && emailValid !== undefined && emailValid !== false}
							helperText={emailValid ? formValidations.email[1] : "" }></TextField>
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
							error={password.length >0 && passwordValid !== null && passwordValid !== undefined && passwordValid !== false}
							helperText={passwordValid ? formValidations.password[1] : "" }></TextField>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12}>
							<Button
								type="submit"
								variant="contained"
								fullWidth>
								Crear Cuenta
							</Button>
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
