import {StyleSheet, Dimensions} from 'react-native';

export const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: width - 20,
    marginBottom: 10,
  },
  imageBackground: {
    width: '100%',
    height: 200,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  headline: {
    fontSize: 18,
    color: 'white',
  },
  meta: {
    fontSize: 12,
    color: 'white',
  },
});
