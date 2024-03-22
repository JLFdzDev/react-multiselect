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
	selectLabel?: string
	select?: string
	selectedOptionsUl?: string
	selectedOptionLabel?: string
	selectedOptionX?: string
	selectDropdownChevron?: string
	selectDropdownOpener?: string
	dropdown?: string
	dropdownUl?: string
	dropdownSearchWrapper?: string
	dropdownSearch?: string
	dropdownOption?: string
	dropdownOptionLabel?: string
	dropdownOptionCheckbox?: string
	dropdownOptionCheckboxCheckedColor?: string
	dropdownClose?: string
}
