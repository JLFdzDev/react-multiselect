import { type Icon } from '../types'

export const Chevron = ({ className, style }: Icon) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path d="m6 15 6-6 6 6"/></svg>

	)
}
