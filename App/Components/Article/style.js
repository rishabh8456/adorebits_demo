import { StyleSheet, Platform } from 'react-native';
import * as Colors from '../../Utils/Common/Colors';

const styles = StyleSheet.create({
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: Colors.gray,
    fontSize: 10
  },
  featuredTitleStyleWithoutShadow: {
    marginHorizontal: 5,
    fontWeight: 'bold'
  },
  selfText: {
    marginBottom: 10
  },
  dividerStyle: {
    height: 1,
    backgroundColor: Colors.gray,
    opacity: 0.4
  },
  ItemStyle: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: Colors.gray,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: Colors.shadowColor,
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  withImage: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
    borderColor: Colors.gray
  },
  withoutImage: {
    borderRadius: 5,
    opacity: 0.5,
  },
  imageView: {
    marginBottom: 20
  }
});

export default styles;
