import React from "react";
import { Image, Platform, TouchableOpacity, View } from "react-native";
// import IMAGE from "../../assets/products/12.png";
import { Text } from "react-native-paper";
const CardMid = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        padding: 10,
        margin: "5px",
        borderRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "#171717",
        shadowOpacity: 0.3,
        shadowRadius: 8,
      }}
    >
      <Image
        source={{ uri: "https://picsum.photos/700" }}
        style={{
          width: 150,
          height: 100,
          marginBottom: "15px",
          justifyContent: "center",
        }}
      />
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={{ fontSize: 16 }}>IPhone 12 pro max</Text>
        <Text style={{ color: "#333" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          minima id. Optio.
        </Text>
      </View>
    </View>
  );
};

/* 
const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};
*/
export default CardMid;
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const CardMid = ({ product, onPress }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.cardContainer}>
//         <Image source={product.image} style={styles.image} />
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{product.name}</Text>
//           <Text style={styles.price}>${product.price}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default CardMid;

// const styles = StyleSheet.create({
//   cardContainer: {
//     flexDirection: 'row',
//     borderRadius: 8,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//   }

// })
