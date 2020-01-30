import React from 'react';
import { Container, Title, Icon, RightContent, LeftContent } from './styles';
import IconPerfil from '../../assets/img/icon_perfil.svg';
import Logo from '../../assets/img/logo-clock.svg';

export default function Header() {
	return (
		<Container>
			<LeftContent>
				<Icon width="50px" src={Logo} alt="Configuração" />
				<Title>Time Show</Title>
			</LeftContent>
			<RightContent>
				<Icon width="45px" src={IconPerfil} alt="Foto" />
			</RightContent>
		</Container>
	);
}
