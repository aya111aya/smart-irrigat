import React from 'react';
import { View, Text, Button,Image, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
   
      <View style={styles.titleContainer}>
        <Text style={styles.welcomeText}>Bienvenue sur SmartIrrigate</Text>
        <Text style={styles.descriptionText}>Votre compagnon pour une agriculture intelligente.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Voir la Liste des Plantes"
          onPress={() => navigation.navigate('PlanteList')}
          color='#5dc73a'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#0aab85',
  },
  titleContainer: {
    marginBottom: 20,
     marginLeft:50,
    alignSelf: 'flex-start', 
  },
 
  buttonContainer: {
    marginTop: 50,
    alignSelf: 'center', // Centrez le bouton horizontalement
    backgroundColor:'vert',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#cbf7f2',
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1f820c',
    marginTop: 8, // Marge en haut pour séparer le titre du sous-titre
  },
});

export default WelcomeScreen;
