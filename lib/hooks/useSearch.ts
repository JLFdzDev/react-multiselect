import { useEffect, useRef, useState } from 'react'
import { type Option } from '../types'

export function useSearch (isOpen: boolean, options: Option[]) {
	const searchRef = useRef<HTMLInputElement>(null)
	const [filteredOptions, setFilteredOptions] = useState(options)

	useEffect(() => {
		if (isOpen) {
			searchRef.current?.focus()
		}
	}, [isOpen])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(e.target.value.toLowerCase())))
	}

	return {
		searchRef,
		filteredOptions,
		handleSearch
	}
}
