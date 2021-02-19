
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

function InicioScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/disco.png')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          DISCOS </Text>
      

      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
        <Text style={{color:"#fff"}}>
          Inicio
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

function Menu({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/arimeka.png')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Menu </Text>
      

      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Inicio")}}>
        <Text style={{color:"#fff"}}>
          Volver
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name= "Inicio" component={InicioScreen} />
        <Main.Screen name= "Menu" component={Menu} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:'60%',
    height: undefined,
    flex:1
  },
  titulo:{
    fontSize:20,
    color:'#b5194b',
    fontWeight:'bold',
    marginBottom:20
  },
  boton1:{
    backgroundColor:'#2e5870',
    paddingTop: 10,
    paddingBottom: 10,
    width: 150,
    borderRadius:15,
    alignItems: 'center'
  }

});
