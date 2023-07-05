/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils';
import {
  IconNavHome,
  IconNavHomeFill,
  IconNavMap,
  IconNavMapFill,
  IconNavPoint,
  IconNavPointFill,
  IconNavProfile,
  IconNavProfileFill,
  IconNavMy,
} from '../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? (
        <IconNavHomeFill height={21} width={21} />
      ) : (
        <IconNavHome height={21} width={21} />
      );
    }
    if (title === 'Map') {
      return active ? (
        <IconNavMapFill height={21} width={21} />
      ) : (
        <IconNavMap height={21} width={21} />
      );
    }
    if (title === 'Kartu') {
      return <Image source={IconNavMy} style={styles.my} />;
    }
    if (title === 'Points') {
      return active ? (
        <IconNavPointFill height={21} width={21} />
      ) : (
        <IconNavPoint height={21} width={21} />
      );
    }
    if (title === 'Profile') {
      return active ? (
        <IconNavProfileFill height={21} width={21} />
      ) : (
        <IconNavProfile height={21} width={21} />
      );
    }
    return <View />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.red : colors.grey,
    marginTop: 8,
    fontWeight: '500',
  }),
  my: {
    height: 100,
    width: 100,
    marginTop: -65,
    marginBottom: -13,
    marginLeft: -32,
    marginRight: -32,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
});
