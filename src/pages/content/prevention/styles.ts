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
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 15%;
  
`;

export const TitleConcept = styled.Text`
  color: #6E6680;
  font-weight: 600;
`;

export const ConceptName = styled.Text`
  color: #6E6680;
  font-weight: 600;
  font-size: 20px;
`;

export const Content = styled.Text`
  color: #FFF;
`;

export const TitleConceptContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  margin-bottom: 20px;
`;

export const ConceptNameContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const ContentImage = styled.Image`
  display: flex;
  max-width: 190px;
  height: 190px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ContentImageDescription = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  text-align: justify;
  font-style: italic;
  
`;
