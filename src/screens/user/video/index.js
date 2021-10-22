import React, {Component} from 'react';
import {View, FlatList, Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');
import VideoData from '../../../controllers/video';

let data = [
  {
    title: 'Pizza 1',
    video:
      'https://d53y15ftmjckx.cloudfront.net/other_n_awa_application_of_strategy.mp4',
    img: require('../../../assets/p1.jpg'),
    description:
      "Esta es una deliciosa hamburguesa con doble carne, la cual tenía ganas de probar, es deliciosa, y sobre todo tiene ese sabor a carbon que tanto me encantaaaaaaa! La amooo.",
  },
  {
    title: 'Pizza 2',
    video:
      'https://d53y15ftmjckx.cloudfront.net/other_n_awa_application_of_strategy.mp4',
    img: require('../../../assets/p1.jpg'),
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
  {
    title: 'Pizza 3',
    video:
      'https://d53y15ftmjckx.cloudfront.net/other_n_awa_application_of_strategy.mp4',
    img: require('../../../assets/p1.jpg'),
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
  {
    title: 'Pizza 4',
    video:
      'https://d53y15ftmjckx.cloudfront.net/other_n_awa_application_of_strategy.mp4',
    img: require('../../../assets/p1.jpg'),
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
  {
    title: 'Pizza 5',
    video:
      'https://d53y15ftmjckx.cloudfront.net/other_n_awa_application_of_strategy.mp4',
    img: require('../../../assets/p1.jpg'),
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  },
];

class Video extends Component {
  state = {
    current: 0,
  };
  render() {
    return (
      <View style={{height: height}}>
        <FlatList
          data={data}
          onScrollEndDrag={() => {
            this.setState({
              current: this.state.current + 1,
            });
          }}
          renderItem={({item, index}) => {
            return (
              <VideoData
                current={this.state.current}
                now={index}
                key={index}
                item={item}
              />
            );
          }}
        />
      </View>
    );
  }
}

export default Video;
