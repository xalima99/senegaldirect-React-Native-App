import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import Cover from '../cards/Cover';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const CoverList = ({data, home}) => {
  const coverCardKeyExtractor = (item) => `cover-card-${item.id}`;
  const navigation = useNavigation();

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
        data={data}
        renderItem={renderCoverListItem}
        keyExtractor={coverCardKeyExtractor}
        numColumns={2}
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
