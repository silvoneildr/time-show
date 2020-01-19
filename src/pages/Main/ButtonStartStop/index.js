import React from 'react';
import Start from '../../../assets/img/icon_play.svg';
import Stop from '../../../assets/img/icon_stop.svg';
import { Container, Icon } from './styles';

export default function ButtonStartStop() {
	const [ start, setStart ] = React.useState(false);

	return (
		<Container onClick={() => setStart(!start)}>
			<Icon width="35px" src={start ? Start : Stop} alt="startStop" />
		</Container>
	);
}
