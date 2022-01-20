import styled from 'styled-components';
import { colors } from '../../../styles/Colors';

export const StyledSideMenu = styled.aside`
	box-sizing: border-box;
	height: auto;
	width: 100vw;
	position: fixed;
	top: 14.1vw;
	z-index: 99;
	overflow: hidden auto;
	padding: 4vw;

	display: ${({ open }) => (open ? 'block' : 'none')};
	background: ${colors.COLOR_WHITE};
`;
