import React, {useState} from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import {addLike, deleteLike} from '../../../services/ducks/actions';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Title from '../../common/Title';

const Cover = ({title, uri, style, onPress, date, id, liked, mystyle, item, home}) => {
  const [isLiked, setisLiked] = useState(liked);
  const dispatch = useDispatch();

  const onLinking = () => {
    if (isLiked) {
      setisLiked(false);
      dispatch(deleteLike(id));
    } else {
      dispatch(addLike(item));
      setisLiked(true);
    }
  };

  return (
    <TouchableOpacity style={[styles.container, style,mystyle]} onPress={onPress}>
      <ImageBackground
        style={styles.imageBackground}
        borderRadius={16}
        source={{uri}}>
        <View style={styles.overlay}>
          {
            home && (
              <TouchableOpacity
            style={{position: 'absolute', top: 5, left: 5}}
            onPress={onLinking}>
            <Ionicons
              name={isLiked ? 'bookmark' : 'bookmark-outline'}
              size={30}
              color={isLiked ? '#a8000f' : '#fff'}
            />
          </TouchableOpacity>
            )
          }
          <Title numberOfLines={3} style={styles.headline}>
            {title}
          </Title>

          <Text numberOfLines={1} style={styles.meta}>
            {date}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Cover;
