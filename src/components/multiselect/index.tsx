import { type Option, type Theme } from '../../types'

import { MultiselectOption } from './option'
import MultiSelectSelectedOption from './selected-option'
import MultiSelectOpener from './opener'

import { useMultiSelect } from '../../hooks/useMultiSelect'
import { useSearch } from '../../hooks/useSearch'
import { useDisplay } from '../../hooks/useDisplay'

import { getTheme } from '../../const'

interface MultiSelectProps {
	label?: string
	name: string
	options: Option[]
	placeholder?: string
	theme?: Theme
}

const MultiSelect = ({ theme = getTheme(), label, name, options: opts, placeholder }: MultiSelectProps) => {
	const { options, handleCheck, setOrToggleCheck } = useMultiSelect(opts)
	const { open, handleDisplay } = useDisplay()
	const { searchRef, filteredOptions, handleSearch } = useSearch(open, options)

	return (
		<div>
			<span>{label}</span>
			<div className={theme.select}>
				<ul className={theme.selectedOptionsUl}>
					{options.every((o) => !o.isSelected) && (<li>{placeholder ?? 'Selecciona una opción...'}</li>)}
					{options.filter((o) => o.isSelected).map((o) => (
						<MultiSelectSelectedOption key={o.value} theme={theme} option={o} onClick={() => { setOrToggleCheck(o.value, false) } } />
					))}
				</ul>
				<MultiSelectOpener open={open} theme={theme} onClick={handleDisplay} />
			</div>
			<div className="relative">
				<ul className={theme.dropdownUl} style={{
					opacity: open ? 1 : 0
				}}>
					<li className={theme.dropdownSearchWrapper}>
						<input ref={searchRef} onChange={handleSearch} type="text" className={theme.dropdownSearch} />
					</li>
					{filteredOptions.map((option) => (
						<MultiselectOption key={option.value} theme={theme} name={name} option={option} onChange={handleCheck} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MultiSelect
