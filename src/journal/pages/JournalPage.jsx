import { JournalLayout } from '../layout/JournalLayout';
import { /* NoteView, */ NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const JournalPage = () => {
	return (
		<JournalLayout>
			<NothingSelectedView />

			{/* <NoteView /> */}


			<IconButton
				size="large"
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					opacity: 0.9,
					':hover': { backgroundColor: 'error.main', opacity: 1 },
					position: 'fixed',
					right: 40,
					bottom: 40,
				}}>
				<AddOutlined />
			</IconButton>
		</JournalLayout>
	);
};