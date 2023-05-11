import { useNavigation , DrawerActions } from '@react-navigation/native';
import {Pressable, Text, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { useNavigation } from "@react-navigation/native";
import styles from '../style/HeaderStyle';

const Header = () => {
  const navigation=useNavigation();
  return (
        <View style={styles.HeaderAndImage}>
          <View style={styles.Header}>
            <Pressable onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="bars" style={styles.icons}></Icon>
            </Pressable>
            <View style={styles.rightNavbar}>
            <Pressable>
            <Icon name="search" style={styles.icons}></Icon>
            </Pressable>
             
              <Icon name="user" style={styles.icons}></Icon>
            </View>
          </View>
          <View></View>
        </View>
  );
};
export default Header;
