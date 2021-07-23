import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { Container } from './styles';

export function Home() {
  return (
    <View style={{backgroundColor:"#F00"}}>
      <Container>
        <Text>a</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </Container>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});