import { type Icon } from '../types'

export const Close = ({ className }: Icon) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={className} viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12"/></svg>
	)
}
