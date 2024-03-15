export interface Icon {
	className?: string
	style?: React.CSSProperties
}

export interface Option {
	value: string
	label: string
	isSelected: boolean
}

export interface Theme {
	select?: string
	selectedOptionsUl?: string
	selectedOptionButton?: string
	selectedOptionRemoveButton?: string
	selectDropdownButton?: string
	dropdown?: string
	dropdownUl?: string
	dropdownSearchWrapper?: string
	dropdownSearch?: string
	dropdownOption?: string
	dropdownOptionLabel?: string
	dropdownOptionCheckbox?: string
	dropdownOptionCheckboxCheckedColor?: string
}
