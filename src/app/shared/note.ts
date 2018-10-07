import { HttpHeaders } from '@angular/common/http';

export interface Note {
	_id?: string;
	title: string;
	body: string;
}

export interface HttpOptions {
	headers?: HttpHeaders;
}
