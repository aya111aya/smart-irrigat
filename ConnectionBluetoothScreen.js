import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const ConnexionBluetooth = ({ route, navigation }) => {
  const { plante } = route.params;
  const [devices, setDevices] = useState([]);
  const [manager, setManager] = useState(new BleManager());

  useEffect(() => {
    const handleStateChanged = (state) => {
      if (state === 'PoweredOn') {
        startScan();
      }
    };

    const subscription = manager.onStateChange(handleStateChanged, true);

    return () => {
      subscription.remove();
      manager.destroy();
    };
  }, [manager]);

  const startScan = async () => {
    try {
      manager.startDeviceScan(null, null, handleDiscover);

      // Arrêtez le balayage après un certain temps (par exemple, 10 secondes)
      setTimeout(() => {
        manager.stopDeviceScan();
      }, 10000);
    } catch (error) {
      console.error('Erreur lors du démarrage du scan:', error);
    }
  };

  const handleDiscover = (error, scannedDevice) => {
    if (error) {
      console.error('Erreur de découverte du périphérique:', error);
      return;
    }

    if (scannedDevice) {
      setDevices((prevDevices) => {
        if (!prevDevices.find((device) => device.id === scannedDevice.id)) {
          return [...prevDevices, scannedDevice];
        }
        return prevDevices;
      });
    }
  };

  const handleDeviceSelection = (selectedDevice) => {
    manager.stopDeviceScan();
    // Continuez avec le reste de votre logique de connexion Bluetooth
    // ...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sélectionnez un Appareil Bluetooth</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceItem}>
            <Text>{item.name || 'Unknown Device'}</Text>
            <Button
              title="Connecter"
              onPress={() => handleDeviceSelection(item)}
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
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default ConnexionBluetooth;
