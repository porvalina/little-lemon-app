import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable} from 'react-native';

export default function WelcomeScreen({ navigation }) { 

  return (
    <ScrollView indicatorStyle={'white'} 
    style={styles.welcome}
    contentContainerStyle={{flex: 1, justifyContent: 'space-between', marginBottom: 30}}>
      <View style={styles.headerWrapper} >
        <Image 
          style={styles.logo} 
          source={require('../img/little-lemon-logo.png')
        }/>
        <Text 
          style={styles.welcomeText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <Pressable
      style={styles.button}
      onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>
          Newsletter
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    borderRadius: 15,
    resizeMode: 'contain',
    margin: 100, 
  },
  headerWrapper: {
    flexDirection: 'vertical',
    justifyContent: 'center',
  },
  welcome: {
  }, 
  welcomeText: {
      textAlign: 'center',
      padding: 16,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginVertical: 8,
  },
    button: {
      backgroundColor: 'darkgreen',
      borderColor: 'green',
      borderRadius: 10,
      padding: 10,
      marginVertical: 8,
      margin: 12,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 15,
    },
});
