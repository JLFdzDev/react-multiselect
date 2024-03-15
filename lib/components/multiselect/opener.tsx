import { Chevron } from '../../icons/chevron'
import { type Theme } from '../../types'

interface MultiSelectOpenerProps {
	open: boolean
	theme: Theme
	onClick: () => void
}

const MultiSelectOpener = ({ open, theme, onClick }: MultiSelectOpenerProps) => {
	return (
		<button onClick={onClick}>
			<Chevron className={theme.selectDropdownButton} style={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }} />
		</button>
	)
}

export default MultiSelectOpener
