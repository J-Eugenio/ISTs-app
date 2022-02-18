import React from 'react';

import {
  Fundo as FPNG,
  Container
} from './styles';

import FundoP from '../../assets/fundo.png';

interface props {
  type?: number;
}

export function FundoPNG({ type }: props){
  return(
    <Container type={type}>
      <FPNG source={FundoP}resizeMode='contain'/>
    </Container>
  )
}