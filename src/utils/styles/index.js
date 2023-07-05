import {StyleSheet} from 'react-native';
import {colors} from '../colors';
// import {fonts} from '../fonts';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageSplash: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHome: {
    flex: 1,
    backgroundColor: colors.white,
  },
  homeIlus: {
    position: 'absolute',
    top: 0,
  },
  homeHeader: {
    height: 253,
    width: '100%',
    borderBottomLeftRadius: 32,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 0,
  },
  homeMypertamina: {
    marginHorizontal: 8,
  },
  containerNotif: {
    alignItems: 'flex-end',
    marginHorizontal: 16,
  },
  containerName: {
    marginHorizontal: 16,
  },
  textName: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.white,
  },
  containerSaldo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  titleSaldo: {
    color: colors.white,
  },
  textSaldo: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.white,
  },
  buttonTopup: {
    width: 83,
    height: 29,
    borderRadius: 5,
    backgroundColor: colors.white,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textTopup: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  containerPoint: {
    height: 85,
    marginHorizontal: 16,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 24,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  titlePoint: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.grey,
  },
  textPoint: {
    fontWeight: '500',
  },
  containerMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 18,
  },
  menu: {
    width: 81,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 24,
  },
  imgMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.softBlue,
    borderRadius: 15,
    height: 73,
    width: 73,
  },
  labelMenu: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.black,
  },
  containerTitleCard: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  titleCard: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
  },
  textCard: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.grey,
  },
  imgPromo: {
    marginHorizontal: 16,
    height: 112,
    width: 358,
  },
  containerOutlet: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.softBlue,
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  titleOutlet: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.black,
  },
  textOutlet: {
    fontSize: 12,
    fontWeight: '300',
    color: colors.grey,
  },
  textRute: {
    color: colors.primary,
  },
  textLight: {
    fontWeight: '300',
  },
});
