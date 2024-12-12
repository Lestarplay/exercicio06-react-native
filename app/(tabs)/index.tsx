import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function QuotePanel() {
  return (
    <View style={styles.panel}>
      <Text style={styles.quoteText}>
  "Nas garras do destino e seus estragos, Sob os golpes que o acaso atira e acerta, Nunca me lamentei - e ainda trago Minha cabeça - embora em sangue - ereta. Além deste oceano de lamúria, Somente o Horror das trevas se divisa; Porém o tempo, a consumir-se em fúria, Não me amedronta, nem me martiriza."
      </Text>
      <Image 
        source={{ uri: 'https://monicaalvarenga.com/site/wp-content/uploads/2017/07/Mandela-souphyna.com_.br_.jpg' }} 
        style={styles.authorImage} 
      />
      <Text style={styles.authorName}>Nelson mandela</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#335eff',
    marginBottom: 15,
    textAlign: 'center',
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});