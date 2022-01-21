import styled from 'styled-components';
import { device } from '../../../styles/devices';
import { fonts } from '../../../styles/typography';

export const HeaderWrapper = styled.header`
	position: relative;
	height: 13.0667vw;
	width: 100%;
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	border-bottom: 1px solid rgb(229, 229, 229);
	font-family: ${fonts.fontPrimary};

	@media ${device.laptop} {
		height: 6.9vw;
	}
`;
