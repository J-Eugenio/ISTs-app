import React from 'react';

import { AnswerProps } from '../../utils/content';

import {
  Container,
  Row,
  Col,
  ID,
  Question,
  AnswerContainer,
  AnswerID,
  Answer,
} from './styles';

interface Props {
  id: number;
  question: string;
  answers: Array<AnswerProps>;
}

export const QuizComponent: React.FC = () => {
  return (
    <Container>
      <Row>
        <ID>x)</ID>
        <Question>question</Question>
      </Row>
      <Col>
        <AnswerContainer>
          <AnswerID>1</AnswerID>
          <Answer>teste</Answer>
        </AnswerContainer>
      </Col>
    </Container>
  )
}