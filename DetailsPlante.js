
       // DetailsPlante.js

       import React from 'react';
       import { View, Text, Button, StyleSheet } from 'react-native';
       
       const DetailsPlante = ({ route, navigation }) => {
         const { plante } = route.params;
       
         const handleBluetoothConnection = () => {
           // Naviguer vers la page ConnexionBluetooth en passant la plante sélectionnée comme paramètre
           navigation.navigate('ConnexionBluetooth', { plante: plante });
         };
       
         return (
           <View style={styles.container}>
             <Text style={styles.headerText}>Détails de la Plante</Text>
             <Text>Nom: {plante.nom}</Text>
             
             <Text style={styles.detailText}>Humidité minimale: {plante.humiditeMin}%</Text>
             <Text style={styles.detailText}>Humidité maximale: {plante.humiditeMax}%</Text>
             <Button
               title="Se Connecter au Bluetooth"
               onPress={handleBluetoothConnection}
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
       });
       
       export default DetailsPlante;
       