import { type Theme, type Option } from '../../types'

import { Close } from '../../icons/x'

interface MultiselectSelectedOptionProps {
	option: Option
	theme: Theme
	onClick: () => void
}

const MultiSelectSelectedOption = ({ option, theme, onClick }: MultiselectSelectedOptionProps) => {
	return (
		<li>
			<button className={theme.selectedOptionButton} onClick={onClick}>
				{option.label}
				<Close className={theme.selectedOptionRemoveButton} />
			</button>
		</li>
	)
}

export default MultiSelectSelectedOption
