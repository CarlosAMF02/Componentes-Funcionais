import React, {useState} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import HelloWorld from './components/HelloWorld'

//Hooks = funções criadas para suprir algumas funções perdidas na transição de componentes de classe para componentes funcionais 
export default App = () => {

  const [nome, setNome] = useState('')

  return (
    <SafeAreaView>
      <TextInput 
        placeholder='Digite seu nome aqui'
        style={estilos.input} 
        onChangeText={(text)=> setNome(text)} />
      <HelloWorld nome = { nome } />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  input : {
    borderColor: '#CCC',
    borderRadius: 5,
    borderWidth: 1,
    height: 32,
    margin: 8
  }
})