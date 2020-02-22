import React from 'react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionButton from './SectionButton';
import './HeroSection.scss';

import logo from '../assets/spoof_doctor.png';

function HeroSection(props) {
	return (
		<div className="container hero-background">
			<div className="columns is-vcentered is-desktop">
				<div className="column is-5-desktop has-text-centered-touch">
					<img src={logo} className="center clear" />
					{props.subtitle}
					<SectionButton parentColor={props.color} size="medium" onClick={props.buttonOnClick}>
						{props.buttonText}
					</SectionButton>
				</div>
				<div className="column is-1" />
				<div className="column">
					{props.image && (
						<figure className="HeroSection__image image">
							<img src={props.image} alt="Illustration" />
						</figure>
					)}
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
