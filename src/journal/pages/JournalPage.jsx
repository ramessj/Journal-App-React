import { useDispatch, useSelector } from 'react-redux';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { startNewNote } from '../../redux/store/journal/thunks';

export const JournalPage = () => {
	const { isSaving, active } = useSelector((state) => state.journal);

	const dispatch = useDispatch();

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{!!active ? <NoteView /> : <NothingSelectedView />}

			<IconButton
				onClick={onClickNewNote}
				disabled={isSaving}
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
