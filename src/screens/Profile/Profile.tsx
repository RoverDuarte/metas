import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View>
        <Button title=" Login " accessibilityLabel="Login" color={'#40146F'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#863555',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Profile;
