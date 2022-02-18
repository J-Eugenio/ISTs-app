import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { 
  Container,
  Main,
  Title,
  Content,
  Divider,
  OpenDrawerButton
} from './styles';
import { FundoPNG } from '../../components/FundoPNG';

export const Contact:React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  return(
    <Container>
      <>
        <OpenDrawerButton
          onPress={() => navigation.openDrawer()}
        >
          <Icon 
            name="bars"
            size={30}
            color="#FFF"
          />
        </OpenDrawerButton>

        <Main>
          <Title>Sobre</Title>
          <Content>
            "O presente trabalho foi realizado com apoio 
            da Coordenação de Aperfeiçoamento de Pessoal
            de Nível Superior - Brasil (CAPES) - Código de Financiamento 001"
          </Content>

          <Divider />

          <Content>
            "This study was financed is parte by the Coordenação 
            de Aperfeiçoamento de Pessoal de Nível Superior
            - Brasil (CAPES) Finance Você 001"
          </Content>
        </Main>
      </>
      <FundoPNG />
    </Container>
  )
}