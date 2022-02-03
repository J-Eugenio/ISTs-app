import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background: #1E88E5;
`;

export const Main = styled.View`
  display: flex;
  background-color: #EEE;
  margin: 30px;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.3);
  margin-top: 100px;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const Content = styled.Text`
  margin-bottom: 20px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: rgba(0,0,0,0.1);
  margin-bottom: 20px;
`;

export const OpenDrawerButton = styled.TouchableOpacity`
  margin: 20px 0 0 20px;
`;
