import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  height: 100%;
  background: #1E88E5;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 10px;;
  z-index: 10;
`;