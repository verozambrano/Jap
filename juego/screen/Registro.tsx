import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/config';
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/config';



export default function RegistroScreen( {navigation}: any ) {
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [cedula, setcedula] = useState('')
  const [edad, setEdad] = useState('')

  const [userId, setuserId] = useState('')


  function registro() {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log("REGISTRO CORRECTO");
        navigation.navigate('Drawer_Welcome')
        setuserId(user.uid)
        console.log(userId);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;        
        console.log(errorCode)
        
        if ( errorCode=== 'auth/weak-password'){
          Alert.alert("Error", "La contraseña debe poseer 6 caracteres")
        }
        
      });
  }
  function guardar (userId:string, correo: string, nick: string, edad: string) {
    set(ref(db, 'users/' + userId), {
      nick: nick,
      email: correo,
      edad: edad
    });
  }

  function compuesta(){
    registro();
    guardar(userId, correo, cedula, edad)
  }


  return (
    <View>
      <Text>RegistroScreen</Text>
      <TextInput
        placeholder='Ingrese email'
        onChangeText={(texto) => setcorreo(texto)}
      />
      <TextInput
        placeholder='Ingrese contraseña'
        onChangeText={(texto) => setcontrasenia(texto)}
      />
      <TextInput 
        placeholder ="Ingrese un cedula"
        onChangeText={(texto) => setcedula(texto)}
      />
      <TextInput 
        placeholder="Edad"
      />

      <Button title='Registrarse' onPress={()=> compuesta() } />
    </View>
  )
}

const styles = StyleSheet.create({})