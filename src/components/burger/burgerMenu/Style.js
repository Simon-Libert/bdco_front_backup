import styled from 'styled-components';
import { device } from '../../../styles/Devices';
import { colors } from '../../../styles/Colors';

export const BurgerMenuWrapper = styled.div`
	height: 4.8vw;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin: 1vw;
`;

export const BurgerLine = styled.div`
	background-color: ${colors.COLOR_BLACK};
	display: flex;
	height: 0.5vw;
	width: 6vw;
	align-self: center;
	transition: all linear;

	&:first-child {
		transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};
		transform-origin: top left;
	}

	&:nth-child(2) {
		opacity: ${(props) => (props.open ? '0' : '1')};
	}

	&:last-of-type {
		transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
		transform-origin: bottom left;
	}
`;
