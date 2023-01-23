// import React from "react";
// import { Image, TouchableOpacity, View } from "react-native";
// // import IMAGE from "../../assets/products/12.png";
// import { Text } from "react-native-paper";
// const CardMid = () => {
//   return (
//     <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderWidth: 1 }}>
//         <Image source={{uri: "https://picsum.photos/700"}} style={{ width: 50, height: 50 }} />
//         <View style={{ flex: 1, paddingLeft: 10 }}>
//           <Text style={{ fontSize: 16 }}>{"Gello"}</Text>
//         </View>
//       </View>
//   );
// };

// export default CardMid;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CardMid = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image source={product.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMid;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
  }
  
})