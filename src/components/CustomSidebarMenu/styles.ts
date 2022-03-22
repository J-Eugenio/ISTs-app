import styled from 'styled-components/native';

export const SharedContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SharedButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 15px;
`;

export const SharedText = styled.Text`
  margin-left: 35px;
  color: #FFF;
  font-weight: bold;
`;

export const Fundo = styled.Image`
position: absolute;
bottom: 0px;
left: -35px;
height: 500px;
width: 350px;
border-radius: 25px;
overflow: hidden;
`;