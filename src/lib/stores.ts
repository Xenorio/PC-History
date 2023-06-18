import { writable } from 'svelte/store'

type Theme = "dark" | "light"

export const page = writable(0)

export const theme = writable(<Theme> "dark")