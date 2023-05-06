import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
	return (
		<ImageList sx={{ width: '100%', height: 400, mt: 5 }} gap={25}>
			{images.map((image) => (
				<ImageListItem
					key={image}
					style={{ maxWidth: '200px', height: '200px' }}
					loading="lazy">
					<img
						src={`${image}?w=164&h=164&fit=crop&auto=format`}
						srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						alt="Imagen de la nota"
						loading="lazy"
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};
