import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
  title: string
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Hello world in React Native!</Text>
      <Button title='Teste'/>
      <Button title='Novo Teste'/>
    </View>
  );
}

const Button = ({title}: ButtonProps)=>{
  return (
    <TouchableOpacity>
      <Text style={styles.titleYellow}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'red',
    fontSize: 22
  },
  titleYellow:{
    padding: 20,
    backgroundColor: 'green',
    color: 'yellow',
    fontSize: 26
  }
});
