import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRMPAlZMxk-U9m3YzFJrbltxxQt05eGm4",
  authDomain: "meuprimeirofirestore-bd42b.firebaseapp.com",
  projectId: "meuprimeirofirestore-bd42b",
  storageBucket: "meuprimeirofirestore-bd42b.appspot.com",
  messagingSenderId: "1055855126534",
  appId: "1:1055855126534:web:8698084adb51cff862fb87"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pessoasCollection = firebase.firestore().collection('Pessoas');
      const snapshot = await pessoasCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.SobreNome}</Text>
          </View>
        )}
      />
    </View>
  );
}
