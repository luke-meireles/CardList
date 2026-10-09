import { View, Text, StyleSheet } from 'react-native';

// Componente reutilizável (Aula 3) com Flexbox em linha (Aula 4)
export function ItemCompra({ nome, quantidade }) {
  return (
    <View style={styles.item}>
      <View style={styles.bolinha} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.quantidade}>x{quantidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e3d9cf',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  bolinha: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5c4430',
    marginRight: 12,
  },
  nome: { flex: 1, fontSize: 16, color: '#333' },
  quantidade: { fontSize: 16, fontWeight: 'bold', color: '#5c4430' },
});
