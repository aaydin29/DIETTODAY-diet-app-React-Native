import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    padding: 10,
  },
  header_text: {
    fontSize: 22,
    fontWeight: '400',
    color: colors.logoGreen,
    marginLeft: 20,
  },
  goback_icon: {
    fontSize: 40,
    margin: 10,
    color: colors.logoGreen,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingRight: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
  },
  search_icon: {
    color: colors.darkGray,
  },
  basket_container: {
    borderWidth: 0.6,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: 80,
  },
  counter_container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -10,
    top: -10,
  },
  counter: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  basket_icon: {
    color: colors.darkGray,
  },
});
