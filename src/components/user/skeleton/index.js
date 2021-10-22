import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Placeholder, PlaceholderMedia, Fade} from 'rn-placeholder';

const skeleton = props => {
  return (
    <Placeholder
      Animation={Fade}
      Left={prop => (
        <PlaceholderMedia
          style={[
            styles.placeholder,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              height: props.height,
              width: props.width,
              borderRadius:
                props.borderRadius !== undefined ? props.borderRadius : 8,
              marginBottom:
                props.marginBottom !== undefined ? props.marginBottom : 0,
            },
            props.style,
          ]}
        />
      )}>
      <Image source={{uri: props.uri}} style={styles.image} />
    </Placeholder>
  );
};

export default skeleton;

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: '#FFF',
  },
  image: {
    height: 0,
    width: 0,
  },
});
