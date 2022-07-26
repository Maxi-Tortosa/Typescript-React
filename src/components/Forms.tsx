import React from 'react';
import { Sup } from './../types';
import useNewSupForm from './../hooks/useNewSupForm';

interface FormProps {
	onNewSup: (newSup: Sup) => void;
}

const Form = ({ onNewSup }: FormProps) => {
	const [inputValues, dispatch] = useNewSupForm();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onNewSup(inputValues);
		dispatch({ type: 'clear' });
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		dispatch({
			type: 'change_value',
			payload: { inputName: name, inputValue: value },
		});
	};

	const handleClear = () => {
		dispatch({ type: 'clear' });
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					value={inputValues.nick}
					type='text'
					name='nick'
					placeholder='nick'
					onChange={handleChange}
				/>
				<input
					value={inputValues.supMonths}
					type='number'
					name='supMonths'
					placeholder='supMonths'
					onChange={handleChange}
				/>
				<input
					value={inputValues.avatar}
					type='text'
					name='avatar'
					placeholder='avatar'
					onChange={handleChange}
				/>
				<textarea
					value={inputValues.description}
					name='description'
					placeholder='description'
					onChange={handleChange}
				/>
				<button onClick={handleClear} type='button'>
					Clear form!
				</button>
				<button type='submit'>Save new Sup!</button>
			</form>
		</div>
	);
};

export default Form;
