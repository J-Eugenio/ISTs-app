import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  height: 100%;
  background: #1E88E5;
`;

export const ReferenciaContainer = styled.ScrollView`
  display: flex;
  flex: 1;
  border: 1px solid #FFF;
  margin: 30px 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #FFF;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Ref = styled.Text`
  font-style: italic;
  color: #555555;
  text-align: justify;
  margin-bottom: 15px;
`;

export const RefBold = styled.Text`
  font-style: italic;
  font-weight: bold;
  color: #555555;
  text-align: center;
`;

export const RefButton = styled.TouchableOpacity`
  width: 350px;
  height: 20px;
`;

export const RefButtonText = styled.Text`
  color: #00F;
  font-size: 12px;
`;

export const GoBackButton = styled.TouchableOpacity`
  position: absolute;
  top: 25px;
  left: 10px;;
  z-index: 10;
`;