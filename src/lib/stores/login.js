import { writable } from 'svelte/store';

export const loginStatus = writable(false);
export const userName = writable('');