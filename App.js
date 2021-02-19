
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
          DIVAS POP </Text>

          
      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
        <Text style={{color:"#fff"}}>
          Inicio
        </Text>
      </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity  onPress={() => alert
        ("Producto 1 - Aarón Hernández Bueno")} style={styles.boton2}>
          <Text style={{color:"#fff"}}>
            ?
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
      paddingTop:5, paddingBottom:-5}}>
      <Image source={require('./assets/images/arianas.png')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:1, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Menu </Text>
      

      <TouchableOpacity style={styles.boton3} onPress={()=>{
        navigation.navigate("Katy Perry")}}>
        <Text style={{color:"#fff"}}>
          Katy Perry
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton3} onPress={()=>{
        navigation.navigate("Ariana Grande")}}>
        <Text style={{color:"#fff"}}>
          Ariana Grande
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton3} onPress={()=>{
        navigation.navigate("Marina")}}>
        <Text style={{color:"#fff"}}>
          Marina
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton3} onPress={()=>{
        navigation.navigate("Dua Lipa")}}>
        <Text style={{color:"#fff"}}>
          Dua Lipa
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton3} onPress={()=>{
        navigation.navigate("Paty Cantú")}}>
        <Text style={{color:"#fff"}}>
          Paty Cantú
        </Text>
      </TouchableOpacity>
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

function Katy_Perry({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/katy.jpg')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Katy Perry </Text>
<View>
  <Text>
  Katheryn Elizabeth Hudson, conocida profesionalmente como Katy Perry, es una cantante, compositora y jueza de televisión estadounidense. Después de cantar en la iglesia durante su infancia, siguió una carrera en la música gospel cuando era adolescente. 
  </Text>
</View>
          
      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
        <Text style={{color:"#fff"}}>
          Volver
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

function Ariana_Grande({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/aripedo.jpg')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Ariana Grande </Text>

          <View>
  <Text>
  Ariana Grande-Butera es una cantante y actriz estadounidense. Nacida en Boca Raton, Florida, Grande comenzó su carrera a los 15 años en el musical de Broadway de 2008 13. Saltó a la fama por su papel de Cat Valentine en la serie de televisión de Nickelodeon Victorious y Sam y Cat.
  </Text>
</View>

          
      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
        <Text style={{color:"#fff"}}>
          Volver
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

function Marina({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/marina.jpg')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Marina </Text>

          <View>
  <Text>
  Marina Lambrini Diamandis, conocida como Marina y anteriormente con el nombre artístico de Marina and the Diamonds, es una cantante, compositora y productora de discos galesa. Diamandis nació en Brynmawr y se crió en Abergavenny. 
  </Text>
</View>
          
      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
        <Text style={{color:"#fff"}}>
          Volver
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

function Dua_Lipa({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/dua.jpg')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Dua Lipa </Text>

          <View>
  <Text>
  Dua Lipa es una cantante y compositora inglesa. Después de trabajar como modelo, firmó con Warner Bros. Records en 2014 y lanzó su álbum debut homónimo en 2017.
  </Text>
</View>
          
      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
        <Text style={{color:"#fff"}}>
          Volver
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

function Paty_Cantú({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", flex:0.7, alignItems:"center",
      paddingTop:100, paddingBottom:30}}>
      <Image source={require('./assets/images/cantu.jpg')}
      style={styles.logo} resizeMode="contain"/>
      </View>
      <View style={{flex:0.8, alignItems: "center"}}>
        <Text style={styles.titulo}>
          Paty Cantú </Text>

          <View>
  <Text>
  Patricia Giovanna Cantú Velasco ​ conocida artísticamente como Paty Cantú, es una cantante y compositora mexicana. Inició su carrera profesional como miembro del dueto Lu con quien lanzó dos álbumes de estudio.
  </Text>
</View>
          
      <TouchableOpacity style={styles.boton1} onPress={()=>{
        navigation.navigate("Menu")}}>
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
        <Main.Screen name= "Katy Perry" component={Katy_Perry} />
        <Main.Screen name= "Ariana Grande" component={Ariana_Grande} />
        <Main.Screen name= "Marina" component={Marina} />
        <Main.Screen name= "Dua Lipa" component={Dua_Lipa} />
        <Main.Screen name= "Paty Cantú" component={Paty_Cantú} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc300',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:'60%',
    height: undefined,
    flex:1,
    marginBottom:-10
  },
  titulo:{
    fontSize:30,
    color:'#b5194b',
    fontWeight:'bold',
    marginBottom:10
  },
  boton1:{
    backgroundColor:'#571845',
    paddingTop: 10,
    paddingBottom: 10,
    width: 150,
    borderRadius:5,
    alignItems: 'center',
    marginBottom: 20

    
  },
  boton2:{
    backgroundColor:'#c70039',
    paddingTop: 5,
    paddingBottom: 5,
    width: 40,
    borderRadius:25,
    alignItems: 'center',
 
  },

boton3:{
  backgroundColor:'#ff5733',
  paddingTop: 10,
  paddingBottom: 10,
  width: 150,
  borderRadius:10,
  alignItems: 'center',
  marginBottom: 20

}

});
