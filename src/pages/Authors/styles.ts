import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background: #1E88E5;
`;

export const Header = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
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
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const CardAuthor = styled.View`
  display: flex;  
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.2);
  height: 150px;
  padding: 0 10px;
  margin-bottom: 20px;
`;

export const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

`;

export const InfoContainer = styled.View`
  display: flex;
  flex: 1;
  height: 100%;
`;

export const Author = styled.Text`
  text-align: center;
  font-weight: bold;
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Social = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const SocialValue = styled.Text`
  margin: 0 10px;
  color: white;
`;

export const ImageContact = styled.Image`
  display: flex;
  height: 110px;
  width: 120px;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  align-items: flex-end;
  justify-content: flex-end;
`;