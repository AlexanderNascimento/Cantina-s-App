import React from 'react';
import {
  Text, SafeAreaView, View, StyleSheet, Dimensions,
  TouchableOpacity
} from 'react-native';
import Theme from '../Constants/Theme';
import { Ionicons, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
export default function Pedidos() {
  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Meus Pedidos</Text>
      </View>

      <View style={styles.Content}>
        <View style={styles.Iten}>
          <View style={styles.ItenHeader}>
            <View >
              <View style={styles.ItenHeaderContent}>
                <Text style={styles.Price}>R$399,99</Text>
                <Text style={styles.Total}>10 itens</Text>
              </View>
              <Text style={styles.ItenDate}>26/12/2023</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.ButtonShow}>
                <Entypo name="list" size={25} color={Theme.COLORS.DEFAULT} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ItenState}>
            <View style={styles.ItenStateLabel}>
              <Entypo name="check" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Confirmado - 12:33</Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.ItenStateLabel}>
              <AntDesign name="clockcircle" style={styles.ItenIcons} color={Theme.COLORS.WARNING} />
              <Text style={{color:Theme.COLORS.WARNING}}>Preparando - 12:33</Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.ItenStateLabel}>
              <Ionicons name="ios-fast-food-sharp" style={styles.ItenIcons} color={Theme.COLORS.DEFAULT} />
              <Text style={{color:Theme.COLORS.DEFAULT}}>Em Aguardo</Text>
            </View>
          </View>
        </View>


        <View style={styles.Iten}>
          <View style={styles.ItenHeader}>
            <View >
              <View style={styles.ItenHeaderContent}>
                <Text style={styles.Price}>R$699,99</Text>
                <Text style={styles.Total}>12 itens</Text>
              </View>
              <Text style={styles.ItenDate}>26/01/2023</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.ButtonShow}>
                <Entypo name="list" size={25} color={Theme.COLORS.DEFAULT} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ItenState}>
            <View style={styles.ItenStateLabel}>
              <Entypo name="check" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Confirmado - 13:01</Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.ItenStateLabel}>
              <AntDesign name="clockcircle" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Preparado - 13:44</Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.ItenStateLabel}>
              <Ionicons name="ios-fast-food-sharp" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Retirado</Text>
            </View>
          </View>
        </View>

        <View style={styles.Iten}> 
          <View style={styles.ItenHeader}>
            <View >
              <View style={styles.ItenHeaderContent}>
                <Text style={styles.Price}>R$999,99</Text>
                <Text style={styles.Total}>14 itens</Text>
              </View>
              <Text style={styles.ItenDate}>26/12/2022</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.ButtonShow}>
                <Entypo name="list" size={25} color={Theme.COLORS.DEFAULT} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ItenState}>
            <View style={styles.ItenStateLabel}>
              <Entypo name="check" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Confirmado - 13:43</Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.ItenStateLabel}>
              <AntDesign name="clockcircle" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Preparado - 14:50</Text>
            </View>
            <View style={styles.Line} />
            <View style={styles.ItenStateLabel}>
              <Ionicons name="ios-fast-food-sharp" style={styles.ItenIcons} color={Theme.COLORS.SUCCESS} />
              <Text style={{color:Theme.COLORS.SUCCESS}}>Retirado</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.COLORS.DEFAULT,
    paddingVertical: 15,
    elevation: 5,
  },
  HeaderText: {
    color: Theme.COLORS.SECONDARY,
    fontSize: 30
  },

  Iten: {
    marginTop: 20,
    maxWidth: width,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.MUTED,
    paddingBottom: 10
  },
  ItenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10
  },
  ItenHeaderContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  ItenIcons: {
    fontSize: 30,
    
    
    
  },
  Line: {
    height: 2,
    backgroundColor: Theme.COLORS.DEFAULT,
    width: 10,
    marginTop: 13
  },
  ItenState: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  ItenStateLabel:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ItenDate: {
    color: Theme.COLORS.MUTED,

  },
  Price:{
    color: Theme.COLORS.DEFAULT,
    fontSize:20,
    marginRight:10,
  },
  Total:{
    color: Theme.COLORS.DEFAULT,
    fontSize:15
  }
})