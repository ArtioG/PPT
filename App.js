import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');

  const opcoes = ['Pedra', 'Papel', 'Tesoura'];

  const jogar = (escolha) => {
    const escolhaAleatoria = opcoes[Math.floor(Math.random() * 3)];
    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaAleatoria);
    determinarVencedor(escolha, escolhaAleatoria);
  };

  const determinarVencedor = (escolhaUsuario, escolhaApp) => {
    if (escolhaUsuario === escolhaApp) {
      setResultado('Empate!');
    } else if (
      (escolhaUsuario === 'Pedra' && escolhaApp === 'Tesoura') ||
      (escolhaUsuario === 'Tesoura' && escolhaApp === 'Papel') ||
      (escolhaUsuario === 'Papel' && escolhaApp === 'Pedra')
    ) {
      setResultado('Você ganhou!');
    } else {
      setResultado('Você perdeu!');
    }
  };

  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>

      <View style={styles.opcoesContainer}>
        <TouchableOpacity onPress={() => jogar('Pedra')}>
          <Image
            source={{ uri: 'https://example.com/rock.png' }} 
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('Papel')}>
          <Image
            source={{ uri: 'https://example.com/paper.png' }} 
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => jogar('Tesoura')}>
          <Image
            source={{ uri: 'https://example.com/scissors.png' }} 
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      {escolhaUsuario ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado}>Você escolheu: {escolhaUsuario}</Text>
          <Text style={styles.resultado}>O App escolheu: {escolhaApp}</Text>
          <Text style={styles.resultado}>{resultado}</Text>
        </View>
      ) : null}

      <Button title="Jogar Novamente" onPress={reiniciarJogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  opcoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
  },
  resultadoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default App;