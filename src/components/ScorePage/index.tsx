import React from 'react';
import BG from '../../assets/ui/popup_bg.png';
import CloseBTN from '../../assets/ui/popup_btn_close.png';
import HeaderBG from '../../assets/ui/common_ribbon_green.png';
import StartBG from '../../assets/ui/complete_star_bg.png';
import StartImg from '../../assets/ui/complete_star.png';

interface Props {
  onClose: () => void;
  score: number;
  qt1: boolean;
  qt2: boolean;
  qt3: boolean;
  qt4: boolean;
  qt5: boolean;
  qt6: boolean;
  qt7: boolean;
  qt8: boolean;
  qt9: boolean;
  qt10: boolean;
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
  ScoreContainer,
  ScoreTitle,
  Score,
  QuizAnswerContainer,
  Answer,
  AnswerText
} from './styles';

export function ScorePage({ 
  onClose,
  qt1,
  qt2,
  qt3,
  qt4,
  qt5,
  qt6,
  qt7,
  qt8,
  qt9,
  qt10,
  score
}: Props) {
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
            {
              score > 3 ? (
                <Star source={StartImg} resizeMode='contain'/>
              ) : null
            }
          </StarBG>
          <StarBG source={StartBG} resizeMode='contain'>
            {
              score > 8 ? (
                <Star source={StartImg} resizeMode='contain'/>
              ) : null
            }
          </StarBG>
        </StarsContainer>

        <ScoreContainer>
          <ScoreTitle>ACERTOS</ScoreTitle>
          <Score>{score}</Score>
        </ScoreContainer>

        <QuizAnswerContainer>
          <Answer qt={qt1}>
            <AnswerText qt={qt1}>1</AnswerText>
          </Answer>
          <Answer qt={qt2}>
            <AnswerText qt={qt2}>2</AnswerText>
          </Answer>
          <Answer qt={qt3}>
            <AnswerText qt={qt3}>3</AnswerText>
          </Answer>
          <Answer qt={qt4}>
            <AnswerText qt={qt4}>4</AnswerText>
          </Answer>
          <Answer qt={qt5}>
            <AnswerText qt={qt5}>5</AnswerText>
          </Answer>
          <Answer qt={qt6}>
            <AnswerText qt={qt6}>6</AnswerText>
          </Answer>
          <Answer qt={qt7}>
            <AnswerText qt={qt7}>7</AnswerText>
          </Answer>
          <Answer qt={qt8}>
            <AnswerText qt={qt8}>8</AnswerText>
          </Answer>
          <Answer qt={qt9}>
            <AnswerText qt={qt9}>9</AnswerText>
          </Answer>
          <Answer qt={qt10}>
            <AnswerText qt={qt10}>10</AnswerText>
          </Answer>
        </QuizAnswerContainer>
      </ScoreMainContainer>
    </Container>
  )
}