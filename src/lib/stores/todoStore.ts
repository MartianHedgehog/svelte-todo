import { writable } from 'svelte/store';
import { testTodos } from './constants';

export const todoStore = writable(testTodos);

export const filterStore = writable('all');
