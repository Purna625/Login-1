import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Login = props => {
  const [email, setemail] = useState();
  const [pasword, setpasword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MyApp</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email.."
          placeholderTextColor={'gray'}
          onChangeText={text => {
            setemail(text);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Pasword.."
          placeholderTextColor={'gray'}
          onChangeText={text => {
            setpasword(text);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Forget pasword');
        }}>
        <Text style={styles.forget}>Forget pasword</Text>
      </TouchableOpacity>
      <View style={styles.loginBtn}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home'); // ini memanggil navigasi ke home
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Singup');
        }}>
        <Text style={styles.singup}>Singup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008b8b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 100,
    color: '#ff7f50',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#00ffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#ff7f50',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#00ffff',
    fontWeight: 'bold',
  },
});
