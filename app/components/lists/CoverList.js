import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import Cover from '../cards/Cover';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
const {width} = Dimensions.get('window');
import {loadArticles} from '../../services/ducks/actions';

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const CoverList = ({data, home}) => {
  const dispatch = useDispatch();
  const [refreshing, setrefreshing] = useState(false);
  const coverCardKeyExtractor = (item) => `cover-card-${item.id}`;
  const navigation = useNavigation();

  const onRefresh = React.useCallback(() => {
    setrefreshing(true);

    dispatch(loadArticles());

    wait(3000).then(() => setrefreshing(false));
  }, []);

  const renderCoverListItem = ({item}) => {
    return (
      <Cover
        item={item}
        home={home}
        liked={item.liked ? true : null}
        id={item.id}
        title={item.title}
        uri={item.uri}
        style={styles.cover}
        date={item.datejs}
        onPress={() =>
          navigation.navigate('Details', {screen: 'Details', params: item})
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={data}
        renderItem={renderCoverListItem}
        keyExtractor={coverCardKeyExtractor}
        numColumns={1}
        contentContainerStyle={styles.wideListWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CoverList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  // coverList: {
  //   height: 200,
  // },
  wideListWrapper: {
    paddingLeft: 10,
    marginTop: 10,
  },
  coverListWrapper: {
    paddingLeft: 10,
  },
  cover: {
    marginRight: 10,
  },
  wideCard: {
    height: 140,
    width: width - 16,
    marginTop: 16,
    borderRadius: 16,
    marginLeft: 8,
  },
});
