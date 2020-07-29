import * as React from 'react';
import { View } from 'react-native';
import Article from '../../Components/Article/article';
import styles from './style';

class DetailsPage extends React.Component {

  componentDidMount() {
    const { itemData } = this.props.route.params
    this.props.navigation.setOptions({ title: itemData.title })
  }

  render() {
    const { itemData } = this.props.route.params
    return (
      <View style={styles.container} >
        <Article itemData={itemData} nav={this.props.navigation} />
      </View>
    )
  }
}

export default DetailsPage;






