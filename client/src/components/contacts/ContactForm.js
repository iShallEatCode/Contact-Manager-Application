import React, { useContext, useEffect, useState } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, updateContact, clearCurrent, current } = contactContext;

	useEffect(() => {
		current !== null ? setContact(current) : clearSetContact();
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const { name, email, phone, type } = contact;

	const clearSetContact = () => {
		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	const clearAll = () => {
		clearCurrent();
	};

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		current === null ? addContact(contact) : updateContact(contact);
		clearAll();
	};

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-primary'>
				{current ? 'Update Contact' : 'Add Contact'}
			</h2>
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={onChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={onChange}
			/>
			<input
				type='text'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={onChange}
			/>
			<h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				value='personal'
				checked={type === 'personal'}
				onChange={onChange}
			/>{' '}
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				checked={type === 'professional'}
				onChange={onChange}
			/>{' '}
			Professional{' '}
			<div>
				<input
					type='submit'
					value='Add Contact'
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
