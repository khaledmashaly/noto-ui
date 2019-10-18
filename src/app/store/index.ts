import { RootStoreConfig } from '@ngrx/store';

export const storeConfig: RootStoreConfig<any, any> = {
	runtimeChecks: {
		strictStateSerializability: true,
		strictActionSerializability: true,
		strictStateImmutability: true,
		strictActionImmutability: true
	}
};
