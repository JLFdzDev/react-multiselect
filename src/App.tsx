import MultiSelect from './components/multiselect'
import { getTheme } from './const'
import { type Theme } from './types'

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
		...getTheme({
			bgColor: 'bg-slate-500'
		})
	}
	return (
		<div className="min-h-screen">
			<div className="w-full max-w-screen-2xl mx-auto py-10">
				<MultiSelect name="frutas" options={options} label="Pruebas" theme={customTheme} />
			</div>
		</div>
	)
}

export default App
