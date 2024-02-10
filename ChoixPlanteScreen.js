// ChoixPlanteScreen.js

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ChoixPlanteScreen = ({ route, navigation }) => {
  const [plantes, setPlantes] = React.useState([
    { id: 1, nom: 'Tomate', humiditeMin: 30, humiditeMax: 70 },
  { id: 2, nom: 'Carotte', humiditeMin: 40, humiditeMax: 80 },
  { id: 3, nom: 'Fraise', humiditeMin: 35, humiditeMax: 75 },
  { id: 4, nom: 'Basilic', humiditeMin: 45, humiditeMax: 85 },
  { id: 5, nom: 'Rose', humiditeMin: 25, humiditeMax: 65 },
  { id: 6, nom: 'Menthe', humiditeMin: 50, humiditeMax: 90 },
  { id: 7, nom: 'Lavande', humiditeMin: 32, humiditeMax: 72 },
  { id: 8, nom: 'Pomme de terre', humiditeMin: 38, humiditeMax: 78 },
  { id: 9, nom: 'Laitue', humiditeMin: 28, humiditeMax: 68 },
  { id: 10, nom: 'Citron', humiditeMin: 42, humiditeMax: 82 },
  ]);

  const handlePlanteSelection = (plante) => {
    const { onPlanteAjoutee } = route.params;
    onPlanteAjoutee(plante);
    navigation.navigate('PlanteList'); // Naviguer vers la liste des plantes après l'ajout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Choisissez une Plante</Text>
      <FlatList
        data={plantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.planteItem}>
            <Text>{item.nom}</Text>
            <Button
              title="Ajouter"
              onPress={() => handlePlanteSelection(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1f6153',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f820c',
    marginBottom: 16,
  },
  planteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default ChoixPlanteScreen;
