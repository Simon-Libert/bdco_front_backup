import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../../styles/Colors';
import { fontSizes } from '../../../styles/Typography';

export const StyledAccordionSection = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vw;
	overflow: auto;
	margin: auto;
`;

export const AccordionWrapper = styled.div`
	display: block;
	height: auto;
	background-color: ${colors.COLOR_WHITE};
	transition: all linear;
`;

export const AccordionTitle = styled.button`
	display: flex;
	text-align: left;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	padding: 1vw;
	text-transform: uppercase;
	font-size: auto;
	position: relative;
	letter-spacing: 0.15em;
	background-color: ${colors.COLOR_WHITE};
	border: none;
	border-bottom: 1px solid ${colors.COLOR_LIGHT_GREY};
	border-top: 1px solid ${colors.COLOR_LIGHT_GREY};
`;

export const AccordionItems = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: ${({ open }) => (open ? `4vw 12vw` : `0px`)};
	text-transform: uppercase;
	font-size: ${fontSizes.fontM};
	fonr-weight: bold;
	margin: 0;
	position: relative;
	letter-spacing: 0.1em;
`;

export const AccordionItem = styled.li`
	display: ${({ open }) => (open ? 'block' : 'none')};
	background-color: ${colors.COLOR_WHITE};
	padding: 1vw;
	width: 100%;
	font-size: ${fontSizes.fontS};
`;

export const AccordionIcon = styled(FontAwesomeIcon)`
	font-size: 3vw;
	transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
