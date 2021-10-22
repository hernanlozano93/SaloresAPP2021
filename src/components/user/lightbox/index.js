import React from 'react';
import {Image, StyleSheet} from 'react-native';

const lightbox = props => {
  return (
    <Image
      source={{uri: props.uri}}
      style={[
        styles.image,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: props.selected ? 5 : 0,
        },
      ]}
    />
  );
};

export default lightbox;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 10,
    // borderWidth: 10,
    borderColor: '#fff',
  },
});
