// import { StyleSheet, Dimensions } from 'react-native';

// const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// const AppStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E6F0FA',
//     alignItems: 'center',
//     paddingTop: 40,
//     justifyContent: 'space-between',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '90%',
//     marginBottom: 20,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   logo: {
//     resizeMode: 'contain',
//     width: 76,
//     height: 62,
//   },
//   headerButtons: {
//     flexDirection: 'row',
//   },
//   languageBtn: {
//     backgroundColor: '#fff',
//     paddingLeft: 8,
//     marginLeft: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 5,
//     borderWidth: 0.5,
//     marginRight: 8,
//   },
//   backBtn: {
//     backgroundColor: '#b7e3ea',
//     paddingHorizontal: 6,
//     marginLeft: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 5,
//     borderWidth: 0.5,
//   },
//   bodyContainer: {
//     alignItems: 'center',
//     width: '85%',
//   },
//   welcomeText: {
//     fontSize: 14,
//     fontWeight: '400',
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   buttonsContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '80%',
//   },
//   languageText: { fontWeight: 500, fontSize: 12 },
//   verticalLine: {
//     height: 18,
//     borderRightWidth: 1,
//     paddingLeft: 5,
//     borderColor: 'gray',
//     marginHorizontal: 2,
//   },
//   languageIcon: {
//     width: 28,
//     height: 26,
//     marginHorizontal: 2,
//   },
//   arrowIcon: {
//     width: 20,
//     height: 18,
//     marginRight: 8,
//   },
//   uploadIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   uploadButton: {
//     backgroundColor: '#F5F5F5',
//     padding: 4,
//     paddingHorizontal: 40,
//     borderRadius: 5,
//     marginBottom: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     elevation: 15,
//     shadowColor: '#1e525b',
//     borderWidth: 0.5,
//     borderColor: '#1e525b',
//   },
//   talkButton: {
//     backgroundColor: '#4d858f',
//     padding: 4,
//     paddingHorizontal: 40,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   doctorImageSize: {
//     width: screenWidth * 0.8,
//     height: screenHeight * 0.45,
//   },
// });

// export default AppStyles;

import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../constants/colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
    alignItems: 'center',
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 76,
    height: 62,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  languageBtn: {
    backgroundColor: COLORS.WHITE,
    paddingLeft: 8,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 0.5,
    marginRight: 8,
  },
  backBtn: {
    backgroundColor: COLORS.BUTTON_LIGHT_BLUE,
    paddingHorizontal: 6,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderWidth: 0.5,
  },
  bodyContainer: {
    alignItems: 'center',
    width: '85%',
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
  },
  languageText: { fontWeight: 500, fontSize: 12 },
  verticalLine: {
    height: 18,
    borderRightWidth: 1,
    paddingLeft: 5,
    borderColor: COLORS.BORDER_GRAY,
    marginHorizontal: 2,
  },
  languageIcon: {
    width: 28,
    height: 26,
    marginHorizontal: 2,
  },
  arrowIcon: {
    width: 20,
    height: 18,
    marginRight: 8,
  },
  uploadIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  uploadButton: {
    backgroundColor: COLORS.LIGHT_GRAY,
    padding: 4,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 13,
    shadowColor: COLORS.SHADOW_COLOR,
    borderWidth: 0.5,
    borderColor: COLORS.SHADOW_COLOR,
  },
  talkButton: {
    backgroundColor: COLORS.BUTTON_BLUE,
    padding: 4,
    paddingHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  doctorImageSize: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.45,
  },
});

export default AppStyles;
