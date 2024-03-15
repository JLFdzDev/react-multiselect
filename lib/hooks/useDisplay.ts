import { useState } from 'react'

export function useDisplay () {
	const [open, setOpen] = useState(false)

	const handleDisplay = () => {
		setOpen(!open)
	}

	return {
		open,
		handleDisplay
	}
}
