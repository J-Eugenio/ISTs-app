import React from 'react';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { 
  Container,
  GoBackButton,

} from './styles';
//@ts-ignore
export const Suggestions:React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  return(
    <Container>
      <>
        <GoBackButton
          onPress={() => navigation.openDrawer()}
          style={{ width: 25}}
        >
          <Icon 
            name="chevron-left"
            size={30}
            color="#000"
          />
        </GoBackButton>

        
      </>
    </Container>
  )
}