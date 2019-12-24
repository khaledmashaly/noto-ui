import { DefaultDataServiceConfig } from '@ngrx/data';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
	root: '',
	entityHttpResourceUrls: {
		Note: {
			entityResourceUrl: 'note/',
			collectionResourceUrl: 'note/'
		}
	},
	timeout: 10000,
};
