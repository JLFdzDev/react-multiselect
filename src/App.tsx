import MultiSelect from '../lib/components/multiselect'
import { getTheme } from '../lib/const'
import { type Theme } from '../lib/types'

const options = [
	{
		value: 'banana',
		label: 'Banana',
		isSelected: false
	},
	{
		value: 'apple',
		label: 'Apple',
		isSelected: false
	},
	{
		value: 'orange',
		label: 'Orange',
		isSelected: false
	},
	{
		value: 'grape',
		label: 'Grape',
		isSelected: false
	},
	{
		value: 'pear',
		label: 'Pear',
		isSelected: false
	}
]

const App = () => {
	const customTheme: Theme = {
		...getTheme({})
	}
	return (
		<div className="min-h-screen">
			<div className="w-full max-w-[300px] mx-auto py-10">
				<MultiSelect name="frutas" options={options} label="Pruebas" theme={customTheme} />
			</div>
		</div>
	)
}

export default App
