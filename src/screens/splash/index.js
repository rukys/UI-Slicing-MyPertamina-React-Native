import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../utils';
import {IconLogoMy} from '../../assets';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 4000);
  }, [navigation]);
  return (
    <View style={styles.pageSplash}>
      <IconLogoMy />
    </View>
  );
}
