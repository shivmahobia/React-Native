import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function () {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedcard]}>
        <Image
          source={{
            uri: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
          }}
          style={styles.cardimage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lake</Text>
          <Text style={styles.cardCity}>Some where on earth 😁.</Text>
          <Text style={styles.cardDes}>This image is form Internet😂.</Text>
          <Text style={styles.cardFooter}>Miles Away...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 300,
    borderRadius: 8,
    marginHorizontal:8,
    marginVertical:12,
  },
  elevatedcard: {
    backgroundColor: '#FFFFFF',
  },
  cardimage: {
    height: 180,
    marginBottom: 10,
    borderTopLeftRadius:8,
    borderTopRightRadius:8
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:10
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom : 4
    
  },
  cardCity: {
    color: '#000000',
    fontWeight :'400'
    
  },
  cardDes: {
    color: '#000000',
    fontWeight :'400',
    marginBottom:12
  },
  cardFooter: {
    color: '#000000',
    fontSize:12,
    
  },
});
