import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.elevatedcard]}>
            <Text>SHIV❣️</Text>
        </View>
        <View style={[styles.card, styles.elevatedcard1]}>
            <Text>Please</Text>
        </View>
        <View style={[styles.card, styles.elevatedcard]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedcard1]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedcard]}>
            <Text>😊</Text>
        </View>
        <View style={[styles.card, styles.elevatedcard1]}>
            <Text>❤️</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      card:{
        flex :1,
        justifyContent: 'center',
        alignItems : 'center',
        width: 100,
        height: 100,
        margin:8,
        borderRadius: 4,
        
      },
      elevatedcard:{
        backgroundColor: '#9966f2'
      },
      elevatedcard1:{
        backgroundColor: '#5bf06f'
      }
})