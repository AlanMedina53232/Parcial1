import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, Card} from 'react-native-paper'; 

export default function Form() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    const [displayText, setDisplayText] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    });

    const handlePress = () => {
        setDisplayText({
        id: id,
        name: name,
        email: email,
        phone: phone
        });

        // Limpiar los campos
        setId("");
        setName("");
        setEmail("");
        setPhone("");
    };

  return (
    <View >
      <Card.Content style={{marginTop: 10, backgroundColor: '#787878', borderRadius: 10, padding: 10, color: 'white', boxShadow: '15%'}}>
      {/* HEADER */}
      

      <Text variant="headlineLarge" style={{margin: 10}}>Please enter your user information</Text>

      {/* Input de ID */}
      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />

      {/* Input de Name */}
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Input de Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* Input de Phone */}
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      {/* Botón para mostrar los valores */}
      <Button mode="contained" onPress={handlePress} style={{marginBottom: 20 , backgroundColor: '#df0505'}}>
        Show Text!
      </Button>

      

      {/* Mostrar los valores de los inputs */}
      <Text variant="headlineSmall" >ID: {displayText.id}</Text>
      <Text variant="headlineSmall" >Name: {displayText.name}</Text>
      <Text variant="headlineSmall" >Email: {displayText.email}</Text>
      <Text variant="headlineSmall" style={{marginBottom: 10}}>Phone Number: {displayText.phone}</Text>
      </Card.Content>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d5f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    width: '300',
  },
});
