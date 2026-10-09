import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { ItemCompra } from './ItemCompra';

export default function App() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [itens, setItens] = useState([]);

  // Aula 8: roda toda vez que a lista (itens) muda
  useEffect(() => {
    console.log('A lista mudou. Total de itens:', itens.length);
  }, [itens]);

  function adicionarItem() {
    const nomeLimpo = nome.trim();
    if (nomeLimpo === '') return; // não adiciona item vazio

    const novoItem = {
      id: Date.now().toString(),
      nome: nomeLimpo,
      quantidade: quantidade.trim() === '' ? '1' : quantidade.trim(),
    };

    setItens([...itens, novoItem]); // spread, sem .push()
    setNome('');
    setQuantidade('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CardList</Text>

      {/* Flexbox em linha (Aula 4): campo, quantidade e botão lado a lado */}
      <View style={styles.linha}>
        <TextInput
          style={[styles.input, styles.inputNome]}
          placeholder="Adicionar a lista..."
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={[styles.input, styles.inputQuantidade]}
          placeholder="Qtd"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={styles.total}>
        Total: {itens.length} {itens.length === 1 ? 'item' : 'itens'}
      </Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCompra nome={item.nome} quantidade={item.quantidade} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#faf6f1',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5c4430',
    textAlign: 'center',
    marginBottom: 16,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cfc4b8',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  inputNome: { flex: 1, minWidth: 0, marginRight: 8 },
  inputQuantidade: { width: 70, flexShrink: 0, textAlign: 'center' },
  botao: {
    backgroundColor: '#5c4430',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  textoBotao: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  total: {
    fontSize: 14,
    color: '#7a6a5b',
    marginBottom: 10,
  },
});
