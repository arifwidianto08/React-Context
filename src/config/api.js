export const publicUrl = 'https://jsonplaceholder.typicode.com/users';

export const specificIdUrl = id => {
	let specificUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
	return specificUrl;
};
