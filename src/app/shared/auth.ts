export interface TokenResponse {
	token: string;
}

export interface UserDetails {
	_id: string;
	email: string;
	exp: number;
	iat: number;
}
