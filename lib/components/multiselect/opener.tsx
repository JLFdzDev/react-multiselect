import { Chevron } from '../../icons/chevron'
import { type Theme } from '../../types'

interface MultiSelectOpenerProps {
	open: boolean
	theme: Theme
	onClick: () => void
}

const MultiSelectOpener = ({ open, theme, onClick }: MultiSelectOpenerProps) => {
	return (
		<span onClick={onClick}>
			<Chevron className={theme.selectDropdownChevron} style={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }} />
		</span>
	)
}

export default MultiSelectOpener
