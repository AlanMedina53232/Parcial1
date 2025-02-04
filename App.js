import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Avatar, Appbar} from 'react-native-paper'; 

import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar style={{backgroundColor: '#c2c2c2'}}>
        <Appbar.Content title="NFL GamePass"  />
      </Appbar>
      <Avatar.Image size={150} source={require('./assets/avatar.png')} style={{marginBottom: 20, marginTop: 20}} />
      <Form></Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
