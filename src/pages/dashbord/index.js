import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React from 'react';

const Dashboard = props => {
  return (
    <View style={styles.container}>
      <Text>Selamat datang di dashboard</Text>
      <Text>Silahkan pilih menu pilihanmu !!!</Text>
      <View style={styles.tombol1}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Login'); // ini memanggil navigasi ke login
          }}>
          <Text style={styles.text1}>LOGIN 1</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tombol2}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('splashScreen'); // ini memanggil navigasi ke splasscreen
          }}>
          <Text style={styles.text1}>LOGIN 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffe0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 30,
  },
  tombol1: {
    width: '80%',
    backgroundColor: '#87ceeb',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tombol2: {
    width: '80%',
    backgroundColor: '#87ceeb',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
