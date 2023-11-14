import React, { useState } from 'react';
import { View, Text, Image, Switch, ScrollView, TextInput, Button } from 'react-native';

const App = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const onSwitchChange = (value) => {
    setSwitchValue(value);
  };

  // Estilo condicional com base no valor do Switch
  const containerStyle = {
    flex: 1,
    backgroundColor: switchValue ? 'black' : 'white',
  };

  // Estilo condicional para o texto de entrada
  const inputTextStyle = {
    color: switchValue ? 'white' : 'black',
  };

  return (
    <View style={containerStyle}>
      <ScrollView>
        <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 23,
              marginBottom: 10,
              alignSelf: "center",
              color: switchValue ? 'white' : 'black', // Cor do texto condicional
            }}
          >
            One Piece
          </Text>

          <Image
            source={{
              uri: 'https://images4.alphacoders.com/133/1331188.png',
            }}
            style={{ width: 350, height: 270, alignSelf: "center" }}
          />

          <Button
            onPress={() => {
              console.log('Botão pressionado!');
            }}
            title="Gear 5"
          />

          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
          />
        </View>

        {/* Estilo condicional para a entrada de texto */}
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 5,
            margin: 15,
            color: inputTextStyle.color, // Aplicando a cor condicional
          }}
          defaultValue="Gomu Gomu no Kaminari ⚡⚡⚡"
        />
      </ScrollView>
    </View>
  );
}

export default App;