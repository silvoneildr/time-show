import React, { useState, useEffect } from 'react';

import { ContainerTask, TaskLeft, TaskRight, Icon, StartStop } from './styles';
import Start from '../../../assets/img/icon_play.svg';
import Stop from '../../../assets/img/icon_stop.svg';

const Timer = ({ task }) => {
	const [ seconds, setSeconds ] = useState(0);
	const [ isActive, setIsActive ] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	useEffect(
		() => {
			let interval = null;
			if (isActive) {
				interval = setInterval(() => {
					setSeconds((seconds) => seconds + 1);
				}, 1000);
			} else if (!isActive && seconds !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[ isActive, seconds ]
	);

	return (
		<div className="app">
			<ContainerTask>
				<TaskLeft>
					<span>{task.name}</span>
				</TaskLeft>
				<TaskRight>
					<span>{seconds}</span>
					<StartStop onClick={toggle}>
						<Icon width="35px" src={isActive ? Stop : Start} alt="startStop" />
					</StartStop>
				</TaskRight>
			</ContainerTask>
		</div>
	);
};

export default Timer;
