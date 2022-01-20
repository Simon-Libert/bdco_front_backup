import React, { useState } from 'react';
import {
	StyledAccordionSection,
	AccordionWrapper,
	AccordionTitle,
	AccordionItems,
	AccordionItem,
	AccordionIcon,
} from './Style.js';
import { Link } from './../link/Link';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const Accordion = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<AccordionWrapper open={open} onClick={() => setOpen(!open)}>
			<AccordionTitle>
				{props.accordionTitle}
				<AccordionIcon open={open} onClick={() => setOpen(!open)} icon={faChevronDown} />
			</AccordionTitle>
			<AccordionItems open={open}>
				{props.subcategories.map((subcategory) => (
					<AccordionItem open={open}>
						<Link to={subcategory.url}>{subcategory.name}</Link>
					</AccordionItem>
				))}
			</AccordionItems>
		</AccordionWrapper>
	);
};

export const AccordionSection = (props) => {
	return <StyledAccordionSection>{props.children}</StyledAccordionSection>;
};
