import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Platform, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Allcategories, Menucategories} from '../services/helper';

//Screens
import Home from '../screens/Home';
import TabCategory from '../components/TabCategory';
import MenuCategory from '../components/MenuCategory';
import Details from '../screens/Details';
import colors from '../config/colors';
import Category from '../screens/Category';
import Favorite from '../screens/Favorite';

const HomeStack = createStackNavigator();
const PostStack = createStackNavigator();
const FavStack = createStackNavigator();
const MoreStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = ({navigation}) => {
  return (
    <HomeStack.Navigator headerMode="screen">
      <HomeStack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MaterialCommunityIcons
                name="menu"
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Fav')}>
              <MaterialCommunityIcons
                name="bookmark"
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 20,
          },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              source={require('../assets/imgs/lgo.png')}
              style={{height: 30, width: 190}}
            />
          ),
          headerTitleContainerStyle: {
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 5,
          },
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={postNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Fav"
        component={favNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="category"
        component={MoreNavigator}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const postNavigator = () => (
  <PostStack.Navigator
    mode="card"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: 'white',
      headerLeftContainerStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(92,90,91,0.7)',
        alignItems: 'center',
        marginLeft: 10,
        paddingLeft: Platform.OS === 'android' ? 0 : 10,
        marginTop: 5,
      },
    }}>
    <HomeStack.Screen name="Details" component={Details} />
    {/* <HomeStack.Screen name="category" component={Category} /> */}
  </PostStack.Navigator>
);

const favNavigator = () => (
  <FavStack.Navigator
    mode="card"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTitle: '',
      headerTintColor: 'white',
      headerLeftContainerStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(92,90,91,0.7)',
        alignItems: 'center',
        marginLeft: 10,
        paddingLeft: Platform.OS === 'android' ? 0 : 10,
        marginTop: 5,
      },
    }}>
    <FavStack.Screen name="Fav" component={Favorite} />
    {/* <HomeStack.Screen name="category" component={Category} /> */}
  </FavStack.Navigator>
);

const MoreNavigator = () => (
  <MoreStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: 'white',
      headerLeftContainerStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(92,90,91,0.7)',
        alignItems: 'center',
        marginLeft: 10,
        paddingLeft: Platform.OS === 'android' ? 0 : 10,
        marginTop: 5,
      },
    }}>
    <MoreStack.Screen name="category" component={Category} />
  </MoreStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    lazy
    lazyPreloadDistance={3}
    tabBarOptions={{scrollEnabled: true, tabStyle: {width: 120}}}>
    <Tab.Screen name="Actualités" component={Home} />
    {Allcategories.map((category) => (
      <Tab.Screen
        name={category.name}
        component={TabCategory}
        initialParams={category}
        key={`tab-${category.id}`}
      />
    ))}
  </Tab.Navigator>
);

export const DawerNavigator = () => (
  <Drawer.Navigator lazy lazyPreloadDistance={3}>
    <Drawer.Screen name="Home" component={StackNavigator} />
    {Menucategories.map((category) => (
      <Drawer.Screen
        name={category.name}
        component={MenuCategory}
        initialParams={category}
        key={`tab-${category.id}`}
      />
    ))}
  </Drawer.Navigator>
);
