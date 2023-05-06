import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { setActiveNote } from "../../redux/store/journal";

export const SideBarItem = ({title = '', body, id, date, photosUrls = []}) => {
	
	const dispatch = useDispatch();

	
	const newTitle = useMemo( ()=> {
		return title.length > 17 ? title.substring(0, 17) + '...' : title
	}, [title] )
	
	const onNoteClick = () => {
		dispatch( setActiveNote( {date, title, body, photosUrls, id} ) )
	}

	return (
		<ListItem disablePadding onClick={onNoteClick}>
			<ListItemButton>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={newTitle} />
					<ListItemText
						secondary={body}
					/>
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
