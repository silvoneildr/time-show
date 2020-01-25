import React, { useState, useEffect } from 'react';

import { ContainerTask, TaskColumn, Icon, StartStop } from './styles';
import Start from '../../../assets/img/icon_start.svg';
import Stop from '../../../assets/img/icon_stop.svg';
import { formatTime } from '../helper';

const Timer = ({ task, totalTime, setTotalTime }) => {
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
					setTotalTime((setTotalTime) => setTotalTime + 1);
				}, 1000);
			} else if (!isActive && seconds !== 0) {
				clearInterval(interval);
			}
			return () => clearInterval(interval);
		},
		[isActive, seconds, setTotalTime]
	);

	return (
		<div className="app">
			<ContainerTask>
				<TaskColumn>
					<span>{task}</span>
				</TaskColumn>
				<TaskColumn>
					<span>{formatTime(seconds)}</span>
					<StartStop onClick={toggle}>
						<Icon width="35px" src={isActive ? Stop : Start} alt="startStop" />
					</StartStop>
				</TaskColumn>
			</ContainerTask>
		</div>
	);
};

export default Timer;
