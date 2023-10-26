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
            <Text style={styles.cardTitle}>
              Lake
            </Text>
            <Text style={styles.cardCity}>
                Some where on earth 😁.
            </Text>
            <Text style={styles.cardDes}>
                This image is form Internet😂.
            </Text>
            <Text style={styles.cardFooter}>
                Miles Away...
            </Text>
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
  card: {},
  elevatedcard: {},
  cardimage: {
    height: 180,
  },
  cardBody:{},
  cardTitle: {},
  cardCity: {},
  cardDes: {},
  cardFooter: {}
});
