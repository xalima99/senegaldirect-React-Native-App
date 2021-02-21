import React from 'react';
import {View, Image, Text} from 'react-native';
import Title from '../../common/Title';

import styles from './styles';

import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const WideCard = ({title, uri, onPress, description, date, type}) => {
  if (type) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.SeeMore}>
          <Title size={22}>Voir plus d'articles</Title>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image resizeMode="cover" style={styles.Image} source={{uri}} />
        <View style={styles.content}>
          <Title numberOfLines={4}>{title}</Title>
          {/* <Description>{description.substring(3)}</Description> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WideCard;
