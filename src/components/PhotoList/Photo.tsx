import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet, Image, Dimensions, ActivityIndicator, View } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import * as MediaLibrary from 'expo-media-library';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PhotoBadge from './PhotoBadge';

const deviceWidth = Dimensions.get('window').width

interface PhotoProps {
  badge?: JSX.Element
  item: MediaLibrary.Asset
}

export default function Photo(props: PhotoProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const item: MediaLibrary.AssetInfo = props.item;

  return <TouchableOpacity
    style={styles.imageView}
    key={item.id}
    onPress={() => {
      MediaLibrary.getAssetInfoAsync(item).then((res) => {
        FileViewer.open(res.localUri || '')
      }).catch(() => { })
    }}
  >
    <Image
      onLoadEnd={() => setIsLoaded(true)}
      style={styles.image}
      source={{ uri: item.localUri }}
    />
    {!isLoaded
      ? <ActivityIndicator color='gray' size='small' style={styles.badge} />
      : <View style={styles.badge}>
        {props.badge || <PhotoBadge isUploaded={props.item.isUploaded} isLocal={props.item.isLocal} />}
      </View>}
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute'
  },
  image: {
    borderRadius: 10,
    height: (deviceWidth - wp('3.5')) / 3,
    width: (deviceWidth - wp('3.5')) / 3
  },
  imageView: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: wp('0.5'),
    marginVertical: wp('0.5')
  }
});