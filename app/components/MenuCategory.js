import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadCategory} from '../services/ducks/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import CoverList from '../components/lists/CoverList';
import LottieView from 'lottie-react-native';

const TabCategory = ({route, navigation}) => {
  const {id, name} = route.params;
  const dispatch = useDispatch();
  const categoryPosts = useSelector((state) => state.categ.categories[name]);
  const error = useSelector((state) => state.categ.error);

  useEffect(() => {
    dispatch(loadCategory(id, 20));
  }, []);

  if(error) return navigation.goBack()

  if (!categoryPosts)
    return (
      <Modal
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            alignSelf: 'center',
            top: '70%',
            position: 'absolute',
          }}>
          Chargment des articles...
        </Text>

        <LottieView
          source={require('../assets/lottie/news.json')}
          autoPlay
          loop
        />
      </Modal>
    );

  return (
    <View>
      <TouchableOpacity
        style={{marginLeft: 18}}
        onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons name="menu" size={30} color={colors.primary} />
      </TouchableOpacity>
      <CoverList data={categoryPosts} CategoryId={id} />
    </View>
  );
};

export default TabCategory;

const styles = StyleSheet.create({});
