import React from 'react';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Container,
  ReferenciaContainer,
  Title,
  Ref,
  RefBold,
  RefButton,
  RefButtonText,
  GoBackButton,

} from './styles';
//@ts-ignore
export const Rate:React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  return(
    <Container>
      <>
        <GoBackButton
          onPress={() => navigation.goBack()}
          style={{ width: 25}}
        >
          <Icon 
            name="chevron-left"
            size={30}
            color="#000"
          />
        </GoBackButton>

        <ReferenciaContainer>
          <Title>Referências Bibliográficas</Title>

          <Ref>
            Amabis, J. M.; Martho, G. R. <RefBold>Biologia dos Organismos.</RefBold> Vol.2. 2.ed. São Paulo: Moderna, 2004, 617p, Ilustrado.
          </Ref>

          <Ref>
            Avelleira JCR, Bottino G. <RefBold>Sífilis: Diagnóstico, tratamento e controle.</RefBold> An Bras Dermatol. 2006;81(2):111-26.
          </Ref>

          <Ref>
            Maciel, G.P., Tasca, T.C., Geraldo A. <RefBold>Aspectos clínicos, patogênese e diagnóstico de Trichomonas vaginalis.</RefBold> Jornal Brasileiro de Patologia e Medicina Laboratorial [online]. 2004, v. 40, n. 3 [Acessado 16 Outubro 2021] , pp. 152-160. Disponível em: {`<https://doi.org/10.1590/S1676-24442004000300005>. Epub 19 Jul 2004. ISSN 1678-4774..`}<RefButton onPress={() => Linking.openURL('https://doi.org/10.1590/S1676-24442004000300005')}><RefButtonText>https://doi.org/10.1590/S1676-24442004000300005</RefButtonText></RefButton>
          </Ref>

          <Ref>Madigan, M. T. et al. <RefBold>Microbiologia de Brock.</RefBold> 14. ed. Porto Alegre: Artmed, 2016.</Ref>

          <Ref>Neves, D. P. <RefBold>Parasitologia humana.</RefBold> 11.ed. São Paulo: Atheneu, 2005.</Ref>

          <Ref>Neville, B.W.; Damm, D.D.; Allen, C.M.; Bouquot, J.E. <RefBold>Patologia Oral e Maxilofacial.</RefBold> Trad. 3a Ed., Rio de Janeiro: Elsevier, 2009, 972p.</Ref>
          
          <Ref>Rey, L. <RefBold>Bases da Parasitologia Médica.</RefBold> 3.ed. Rio de Janeiro: Guanabara Koogan, 2010.</Ref>
          
          <Ref>Rivitti E.A. Belda Jr. W. <RefBold>Doenças sexualmente transmissíveis.</RefBold> São Paulo: Atheneu; 1999.</Ref>

          <Ref>Tortora, G. J.; Funke, B. R.; Case, C. L. <RefBold>Microbiologia.</RefBold> 12. ed. Porto Alegre: Artmed, 2017.</Ref>

          <Ref>Veronesi R., Focaccia R. <RefBold>Tratado de Infectologia.</RefBold> 5. ed. rev. e atual. São Paulo: Ed Atheneu; 2005.</Ref>
          <Ref></Ref>
        </ReferenciaContainer>
      </>
    </Container>
  )
}