import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from '../../utils';
import {
  IconArrow,
  IconAsuransi,
  IconCharging,
  IconDeliveryService,
  IconGasStation,
  IconKios,
  IconMore,
  IconNotif,
  IconPoint,
  IconSubsidi,
  IconTopup,
  IconUndian,
  IconVoucher,
  ImgHomeIlus,
  ImgMyPertamina,
  ImgPromo,
} from '../../assets';
import {Gap} from '../../components';

export default function HomeScreen() {
  const menu = [
    {label: 'Subsidi \n Tepat', image: IconSubsidi},
    {label: 'Voucher', image: IconVoucher},
    {label: 'Delivery \n Service', image: IconDeliveryService},
    {label: 'Charging \n Station', image: IconCharging},
    {label: 'Undian', image: IconUndian},
    {label: 'Kios Matic', image: IconKios},
    {label: 'Asuransi', image: IconAsuransi},
    {label: 'Lainnya', image: IconMore},
  ];
  return (
    <View style={styles.pageHome}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homeHeader} />
        <View style={styles.homeIlus}>
          <ImgHomeIlus />
        </View>
        <Gap height={48} />
        <View style={styles.homeMypertamina}>
          <ImgMyPertamina />
        </View>
        <TouchableOpacity style={styles.containerNotif}>
          <IconNotif />
        </TouchableOpacity>
        <View style={styles.containerName}>
          <Text style={styles.textName}>Ruky Sektiawan</Text>
        </View>
        <Gap height={16} />
        <View style={styles.containerSaldo}>
          <View style={styles.flex}>
            <Text style={styles.titleSaldo}>Saldo</Text>
            <Text style={styles.textSaldo}>Rp. 65.000</Text>
          </View>
          <TouchableOpacity style={styles.buttonTopup}>
            <IconTopup />
            <Text>Top up</Text>
          </TouchableOpacity>
        </View>
        <Gap height={8} />
        <View style={styles.containerPoint}>
          <View style={styles.flex}>
            <Text style={styles.titlePoint}>My Point</Text>
            <Gap height={8} />
            <View style={styles.row}>
              <IconPoint />
              <Gap width={8} />
              <Text style={styles.textPoint}>201 Points</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <Text style={styles.titlePoint}>Total Pengisian</Text>
            <Gap height={8} />
            <View style={styles.row}>
              <IconGasStation />
              <Gap width={8} />
              <Text style={styles.textPoint}>2.9 Liter</Text>
            </View>
          </View>
        </View>
        <Gap height={25} />
        <View style={styles.containerMenu}>
          {menu.map(item => (
            <TouchableOpacity style={styles.menu}>
              <View style={styles.imgMenu}>
                <item.image />
              </View>
              <Gap height={8} />
              <View>
                <Text style={styles.labelMenu}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Gap height={24} />
        <View style={styles.containerTitleCard}>
          <Text style={styles.titleCard}>Event & Promo</Text>
          <Text style={styles.textCard}>Lihat Selengkapnya</Text>
        </View>
        <Gap height={10} />
        <TouchableOpacity>
          <Image source={ImgPromo} style={styles.imgPromo} />
        </TouchableOpacity>
        <Gap height={35} />
        <View style={styles.containerTitleCard}>
          <Text style={styles.titleCard}>Outlet Terdekat</Text>
          <Text style={styles.textCard}>Lihat Selengkapnya</Text>
        </View>
        <Gap height={10} />
        <TouchableOpacity style={styles.containerOutlet}>
          <IconGasStation />
          <Gap width={16} />
          <View style={styles.flex}>
            <Text style={styles.titleOutlet}>
              SPBU 341542 <Text style={styles.textLight}>(2 km)</Text>
            </Text>
            <Text style={styles.textOutlet}>Jln. H. Juanda Raya No. 65</Text>
          </View>
          <Text style={styles.textRute}>Rute</Text>
          <Gap width={5} />
          <IconArrow />
        </TouchableOpacity>
        <Gap height={5} />
        <TouchableOpacity style={styles.containerOutlet}>
          <IconGasStation />
          <Gap width={16} />
          <View style={styles.flex}>
            <Text style={styles.titleOutlet}>
              SPBU 336571 <Text style={styles.textLight}>(6 km)</Text>
            </Text>
            <Text style={styles.textOutlet}>Jln. Soekarno-Hata No. 105</Text>
          </View>
          <Text style={styles.textRute}>Rute</Text>
          <Gap width={5} />
          <IconArrow />
        </TouchableOpacity>
        <Gap height={5} />
        <TouchableOpacity style={styles.containerOutlet}>
          <IconGasStation />
          <Gap width={16} />
          <View style={styles.flex}>
            <Text style={styles.titleOutlet}>
              SPBU 341542 <Text style={styles.textLight}>(10 km)</Text>
            </Text>
            <Text style={styles.textOutlet}>Jln. Diponegoro No. 77</Text>
          </View>
          <Text style={styles.textRute}>Rute</Text>
          <Gap width={5} />
          <IconArrow />
        </TouchableOpacity>
        <Gap height={36} />
      </ScrollView>
    </View>
  );
}
