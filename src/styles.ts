import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#131313',
  },
  container: {
    flex: 1,
  },
  centralizedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ff9900',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
  },
  containerCenter: {
    // height: 48,
    // width: 48,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
  },
  label: {
    padding: 8,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  greeting: {
    fontSize: 26,
    fontWeight: '500',
    color: '#ff9900',
  },
});
