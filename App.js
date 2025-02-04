import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Avatar} from 'react-native-paper'; 

import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar.Image size={100} source={require('./assets/avatar.png')} style={{marginBottom: 20}} />

      <Form></Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
