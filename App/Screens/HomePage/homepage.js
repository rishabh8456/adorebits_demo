import * as React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native'
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataFromAPI } from '../../Redux/Action/fetchAPIAction';
import Article from '../../Components/Article/article';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchDataFromAPI()
  }

  renderFooter = () => (
    <View style={styles.footerStyle} />
  )

  render() {
    const { loading, data } = this.props;
    return (
      <View style={styles.container} >
        {
          (loading) ?
            <ActivityIndicator size={'large'} />
            :
            <FlatList
              contentContainerStyle={styles.containerStyle}
              data={data}
              keyExtractor={(index) => index.data.id.toString()}
              renderItem={({ item, index }) => <Article itemData={item.data} nav={this.props.navigation} />}
              extraData={data}
              ListFooterComponent={this.renderFooter()}
            />
        }
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.isLoading,
    data: state.data,
    message: state.message
  }
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({
      fetchDataFromAPI,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);






