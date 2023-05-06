import {  useSelector } from "react-redux"
import { Avatar, Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { SideBarItem } from "./";

export const SideBar = ({drawerWidth}) => {

	const { displayName, photoURL } = useSelector( state => state.auth  );
	const { notes } = useSelector( state => state.journal  );


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

					<Toolbar sx={{justifyContent: 'center', gap: '1rem' }}>
						<Typography variant="h6" noWrap component={'div'}>{displayName}</Typography>
						<Avatar alt={displayName} src={photoURL } />
					</Toolbar>
					<Divider />

					<List sx={{mt: 4}}>
						{
							notes.map( note => (
								<SideBarItem key={note.id} {...note} />
							) )
						}
					</List>

			</Drawer>
		</Box>

	)
}
