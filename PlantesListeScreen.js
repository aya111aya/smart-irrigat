import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const PlanteListScreen = ({ navigation }) => {
  const [plantes, setPlantes] = useState([
    
  ]);

  const handleAjouterClick = () => {
    // Naviguer vers l'écran de choix de plante
    navigation.navigate('ChoixPlante', {
      onPlanteAjoutee: (plante) => {
        setPlantes([...plantes, plante]);
      },
    });
  };

  const handlePlanteClick = (plante) => {
    // Naviguer vers l'écran d'affichage des détails de la plante
    navigation.navigate('DetailsPlante', { plante });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.listeText}>Liste des Plantes</Text>
      </View>
      <FlatList
        data={plantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePlanteClick(item)}>
            <View style={styles.planteItem}>
              <Text>{item.nom}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Ajouter" onPress={handleAjouterClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#1f6153',
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  listeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f820c',
  },
  planteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 10,
    backgroundColor: '#d3e3d3',
    borderRadius: 8,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PlanteListScreen;
