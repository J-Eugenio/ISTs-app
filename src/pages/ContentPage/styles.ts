import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  height: 100%;
  padding: 15px 20px;
  background: #1E88E5;
`;

export const Header = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const OpenDrawerButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 32px;
`;

export const Main = styled.View`
  border-left-width: 1px;
  border-left-color: white;

  margin-top: 20%;
  height: 59%;
`;

export const TitleContainer = styled.View`
  left: -10px;
  background: white;
  height: 50px;
  width: 120px;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const TitleMain = styled.Text`
  color: #6E6680;
`;

export const ButtonGroup = styled.View`
  display: flex;
  height: 100%;
  align-items: flex-start;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 250px;

  margin-bottom: 15px;
`;

export const Line = styled.View`
  border: 0.5px solid #FFF;
  width: 50px;
  height: 0.5px;
  
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 288px;
  background: #FFF;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ButtonTitle = styled.Text`
  color: #6E6680;
  font-weight: 500;
`;
