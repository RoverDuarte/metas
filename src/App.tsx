import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { styles } from './styles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.root}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <StatusBar
        animated={true}
        backgroundColor="#131313"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        showHideTransition="slide"
        translucent={false}
        networkActivityIndicatorVisible={true}
        hidden={true}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.greeting}>Metas Smart</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
