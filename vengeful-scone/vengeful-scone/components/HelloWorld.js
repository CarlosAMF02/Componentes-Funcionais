import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'


export default HelloWorld = (props) => {
  return(
    <Text style={estilos.helloWorld}>Olá {props.nome}</Text>
  )
}

const estilos = StyleSheet.create({
  helloWorld: {
    padding:8,
    fontSize : 24
  },
})