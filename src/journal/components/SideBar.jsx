import { useSelector } from "react-redux"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({drawerWidth}) => {

	const state = useSelector( state => state.auth  );

	return (

		<Box
			component={'nav'}
			sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>

			<Drawer
				variant="permanent" //temporary para expandible
				open
				sx={{
					display: {xs: 'block'},
					'& .MuiDrawer-paper' : {boxSizing: 'border-box', width: drawerWidth}
				}}
				>

					<Toolbar sx={{justifyContent: 'center'}}>
						<Typography variant="h6" noWrap component={'div'}>{state.displayName}</Typography>
					</Toolbar>
					<Divider />

					<List>
						{
							['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											<TurnedInNot />
										</ListItemIcon>
										<Grid container>
											<ListItemText primary={text} />
											<ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
										</Grid>
									</ListItemButton>
								</ListItem>
							) )
						}
					</List>

			</Drawer>
		</Box>

	)
}
