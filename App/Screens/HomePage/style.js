import { StyleSheet } from 'react-native';
import * as Global from './../../Utils/Common/Global';
import * as Colors from '../../Utils/Common/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center'
  },
  containerStyle: {
    marginHorizontal: 10,
    marginTop: 20
  },
  footerStyle: {
    height: Global.ScreenHeight * 0.05
  }
});

export default styles;
