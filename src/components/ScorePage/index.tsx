import React from 'react';
import BG from '../../assets/ui/popup_bg.png';
import CloseBTN from '../../assets/ui/popup_btn_close.png';
import HeaderBG from '../../assets/ui/common_ribbon_green.png';
import StartBG from '../../assets/ui/complete_star_bg.png';
import StartImg from '../../assets/ui/complete_star.png';

import {
  Text
} from 'react-native';

interface Props {
  onClose: () => void;
}

import {
  Container,
  ScoreMainContainer,
  CloseButton,
  CloseBtnImage,
  Header,
  HeaderText,
  StarsContainer,
  StarBG,
  Star,
} from './styles';

export function ScorePage({ onClose }: Props) {
  return (
    <Container>
      <ScoreMainContainer source={BG} resizeMode='stretch'>
        <CloseButton
          onPress={() => onClose()}
        >
          <CloseBtnImage source={CloseBTN} resizeMode='contain' />
        </CloseButton>
        
        <Header source={HeaderBG} resizeMode='stretch'>
          <HeaderText>Parabens!!</HeaderText>
        </Header>

        <StarsContainer>
          <StarBG source={StartBG} resizeMode='contain'>
            <Star source={StartImg} resizeMode='contain'/>
          </StarBG>
          <StarBG center source={StartBG} resizeMode='contain'>
            <Star source={StartImg} resizeMode='contain'/>
          </StarBG>
          <StarBG source={StartBG} resizeMode='contain'>
            <Star source={StartImg} resizeMode='contain'/>
          </StarBG>
        </StarsContainer>

      </ScoreMainContainer>
    </Container>
  )
}