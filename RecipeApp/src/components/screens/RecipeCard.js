import React from "react"
import styled from "styled-components"
import { StyleSheet, Text, View } from 'react-native';

export default function RecipeCard(){
    <View style={styles.container}>
        <View style={styles.card}>
            <Text>Recipe Title</Text>
            <Text>Image here</Text>
            <Text>Time and Servings component here</Text>
            <Text>Ingredients component here</Text>
            <Text>Directions component here</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: 'black',
        fontFamily: 'Century Gothic',
        fontWeight: 200,
        fontSize: 30,
        color: cornflowerblue
    },
  }); 