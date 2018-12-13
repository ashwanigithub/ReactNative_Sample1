import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerConstentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
          <View style={headerConstentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
      </CardSection>

      <CardSection>
      <Image
      style={imageStyle}
        source={{ uri: image }}
      />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>

    </Card>
  );
};

const styles = {
  //Custom Method Name "headerConstentStyle"
  headerConstentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 5
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 40,
    width: 40
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    margineRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
