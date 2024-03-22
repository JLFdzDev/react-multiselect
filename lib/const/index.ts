import { type Theme } from '../types'

interface Args {
	bgColor?: string
	textColor?: string
	borderColor?: string
	borderSize?: string
	rounded?: string

}

export function getTheme ({
	bgColor = 'bg-white',
	textColor = 'text-neutral-700',
	borderColor = 'border-neutral-300',
	borderSize = 'border',
	rounded = 'rounded-lg'
}: Args): Theme {
	const THEME = {
		selectLabel: 'relative z-20',
		select: `relative flex justify-between w-full py-2 px-4 z-20 ${bgColor} ${textColor} ${borderColor} ${borderSize} ${rounded}`,
		selectedOptionsUl: 'flex gap-2 w-full overflow-hidden',
		selectedOptionLabel: `flex gap-1 justify-center items-center py-0.5 px-2 text-sm bg-sky-500 text-sky-100 cursor-pointer ${rounded}`,
		selectedOptionX: 'size-4',
		selectDropdownOpener: 'flex-1 cursor-pointer',
		selectDropdownChevron: 'size-6 transition-transform duration-300 ease-in-out cursor-pointer',
		dropdown: 'relative',
		dropdownUl: `absolute flex flex-col w-full max-h-52 overflow-y-auto z-20 transition-opacity duration-300 ease-in-out ${bgColor} ${textColor} ${borderColor} ${borderSize} ${rounded}`,
		dropdownSearchWrapper: 'flex-1',
		dropdownSearch: 'w-full bg-transparent border-b p-4 text-sm outline-none',
		dropdownOption: 'flex-1 px-4 py-2 border-b border-slate-100',
		dropdownOptionLabel: 'flex items-center gap-2 w-full cursor-pointer',
		dropdownOptionCheckbox: 'size-4 focus:ring-2',
		dropdownOptionCheckboxCheckedColor: '#E0F2FE',
		dropdownClose: 'absolute inset-0 z-10 cursor-default'
	}
	return THEME
}
