import React from 'react';
import { View, TouchableNativeFeedback, ImageBackground, Text } from 'react-native';
import styles from './style';

export default class Article extends React.Component {

  navigateToDetails() {
    this.props.nav.navigate('DetailsPage', { itemData: this.props.itemData })
  }

  render() {
    const { title, author, thumbnail, selftext, domain } = this.props.itemData;

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => this.navigateToDetails()}
      >
        <View style={styles.ItemStyle}>
          <View style={styles.imageView} >
            <ImageBackground source={{ uri: thumbnail }} imageStyle={styles.withoutImage} style={[styles.withImage, { height: (thumbnail !== 'self') ? 200 : null, }]} >
              <Text style={styles.featuredTitleStyleWithoutShadow} >{title}</Text>
            </ImageBackground>
          </View>

          <Text style={styles.selfText}>
            {selftext || 'No description'}
          </Text>

          <View style={styles.dividerStyle} />
          <View style={styles.detailsView}>
            <Text style={styles.noteStyle}>{domain}</Text>
            <Text style={styles.noteStyle}>{author}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}