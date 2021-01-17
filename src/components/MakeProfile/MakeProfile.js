import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { EditLabelAndInput, ContactInput } from '../../Styles.js';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

const MakeProfile = (props) => {
	const [thisUser, setThisUser] = useState({});

	useEffect(() => {
		setThisUser(props.profiles.find((profile) => profile.id === Number(props.match.params.id)) || {});

		// eslint-disable-next-line
	}, [props.match.params.id]);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setThisUser((prevVersion) => {
			return { ...prevVersion, [name]: value };
		});
	};

	const handleContactChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setThisUser((prevVersion) => {
			return { ...prevVersion, contact: { [name]: value } };
		});
	};

	return (
		<div className='makeProfile'>
			<section className='makeProfileHero'>
				<h1>MY PORTFOLIO</h1>
				<img src={thisUser.image} alt='avatar' />
				<br />
				<button>UPLOAD IMAGE</button>
			</section>
			<section className='formSection'>
				<form>
					<EditLabelAndInput for='role'>
						ROLE <br />
						<div className='shadow'>
							<TextField
								type='text'
								id='role'
								name='role'
								value={thisUser.role}
								onChange={handleChange}
								fullWidth
								margin='dense'
								InputProps={{
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position='start'>
											<EditRoundedIcon />
										</InputAdornment>
									),
								}}
							></TextField>
						</div>
					</EditLabelAndInput>
					<br />
					<br />
					<br />
					<EditLabelAndInput for='about'>
						ABOUT <br />
						<div className='shadow'>
							<TextField
								type='text'
								id='about'
								name='about'
								value={thisUser.about}
								onChange={handleChange}
								fullWidth
								margin='dense'
								InputProps={{
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position='start'>
											<EditRoundedIcon />
										</InputAdornment>
									),
								}}
							></TextField>
						</div>
					</EditLabelAndInput>
					<br />
					<br />
					<br />
					<EditLabelAndInput for='highlights'>
						HIGHLIGHTS <br />
						<div className='shadow'>
							<TextField
								type='text'
								id='highlights'
								name='highlights'
								value={thisUser.highlights}
								onChange={handleChange}
								fullWidth
								margin='dense'
								InputProps={{
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position='start'>
											<EditRoundedIcon />
										</InputAdornment>
									),
								}}
							></TextField>
						</div>
					</EditLabelAndInput>
					<br />
					<br />
					<br />
					<EditLabelAndInput for='skills'>
						SKILLS <br />
						<div className='shadow'>
							<TextField
								type='text'
								id='skills'
								name='skills'
								value={thisUser.skills}
								onChange={handleChange}
								fullWidth
								margin='dense'
								helperText='Separate each skill with commas'
								InputProps={{
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position='start'>
											<EditRoundedIcon />
										</InputAdornment>
									),
								}}
							></TextField>
						</div>
					</EditLabelAndInput>
				</form>
			</section>
			<section className='formContactSection'>
				<h3>Contact</h3>
				<div className='colorContainer'>
					<form>
						<ContactInput for='phone'>
							PHONE <br />
							<TextField
								type='text'
								id='phone'
								name='phone'
								value={thisUser.contact && thisUser.contact.phone}
								onChange={handleContactChange}
								fullWidth
								margin='dense'
								InputProps={{
									disableUnderline: true,
								}}
							></TextField>
						</ContactInput>
						<br />
						<br />
						<br />
						<ContactInput for='email'>
							EMAIL <br />
							<TextField
								type='text'
								id='email'
								name='email'
								value={thisUser.contact && thisUser.contact.email}
								onChange={handleContactChange}
								fullWidth
								margin='dense'
								InputProps={{
									disableUnderline: true,
								}}
							></TextField>
						</ContactInput>
						<br />
						<br />
						<br />
						<ContactInput for='website'>
							WEBSITE <br />
							<TextField
								type='text'
								id='website'
								name='website'
								value={thisUser.contact && thisUser.contact.website}
								onChange={handleContactChange}
								fullWidth
								margin='dense'
								InputProps={{
									disableUnderline: true,
								}}
							></TextField>
						</ContactInput>
						<br />
						<br />
						<br />
						<button type='button'>
							<AddCircleOutlineRoundedIcon />
							&nbsp; Social Media Account &nbsp;
							<KeyboardArrowDownRoundedIcon />
						</button>
						<Link to={`/profile/${thisUser.id}`}>
							<button type='button'>SUBMIT</button>
						</Link>
					</form>
				</div>
			</section>
		</div>
	);
};

export default withRouter(MakeProfile);
