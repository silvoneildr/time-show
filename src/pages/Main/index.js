import React from 'react';

import {
  Container,
} from './styles';

import Header from '../../components/Header';
import SidebarMenu from '../../components/Sidemenu';

export default function Main() {
  return (
    <>
      <Header />
      <SidebarMenu />
    </>
  );
}