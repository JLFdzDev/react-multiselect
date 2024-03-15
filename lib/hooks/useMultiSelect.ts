import { type Option } from '../types'

import { useState } from 'react'

export function useMultiSelect (initialState: Option[]) {
	const [options, setOptions] = useState(initialState)

	const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setOrToggleCheck(e.target.value, true)
		} else {
			setOrToggleCheck(e.target.value, false)
		}
	}

	const setOrToggleCheck = (optionValue: string, isChecked?: boolean) => {
		const newOptions = [...options]
		const index = newOptions.findIndex((option) => option.value === optionValue)

		if (index === -1) return

		newOptions[index].isSelected = isChecked ?? !newOptions[index].isSelected

		setOptions(newOptions)
	}

	return {
		options,
		handleCheck,
		setOrToggleCheck
	}
}
