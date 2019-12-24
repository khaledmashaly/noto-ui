import { EntityMetadataMap } from '@ngrx/data';
import { Note } from 'src/app/entities/Note';

const entityMetadata: EntityMetadataMap = {
	Note: {
		selectId: (note: Note) => note._id
	}
};

export const entityConfig = {
	entityMetadata
};
