import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button')

  }

  render(){
    return (

      <View style={styles.container}>

        <View style={styles.buttonContainer}>

          <Button
            onPress={this._onPressButton}
              title="Press Me, You Won't!"
            />

        </View>

      </View>

        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
        buttonContainer: {
          margin: 20
        },
    });

    import React from 'react';
import ImagesExample from './Image_Example.js'

const App = () => {
   return (
      <ImagesExample />
   )
}
export default App
