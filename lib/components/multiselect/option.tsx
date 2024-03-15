import { type Theme, type Option } from '../../types'

interface MultiselectOptionProps {
	name: string
	option: Option
	theme: Theme
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const MultiselectOption = ({ name, option, theme, onChange }: MultiselectOptionProps) => {
	return (
		<li className={theme.dropdownOption} style={{ backgroundColor: option.isSelected ? theme.dropdownOptionCheckboxCheckedColor : '' }}>
			<label className={theme.dropdownOptionLabel}>
				<input className={theme.dropdownOptionCheckbox} type="checkbox" name={`${name}[]`} value={option.value} checked={option.isSelected} onChange={onChange} />
				<span>{option.label}</span>
			</label>
		</li>
	)
}
