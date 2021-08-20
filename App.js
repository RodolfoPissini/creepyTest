import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';

export default function App() {
  const filmes = [
    {
      estilo:'Slasher',
      filme:[
        {
          nome:'O Massacre da Serra Elétrica',
          url:'https://i.pinimg.com/564x/67/60/33/676033284554e5e41592f2534084c3b0.jpg'
        },
        {
          nome:'Sexta Feira 13',
          url:'https://i.pinimg.com/originals/da/8b/2c/da8b2c893c527deb2fa81e932ae5bdce.jpg'
        },
        {
          nome:'Halloween',
          url:'https://i.pinimg.com/564x/e9/a8/12/e9a812031092669cd833ebc24b382cbd.jpg'
        },
        {
          nome:'A Hora do Pesadelo',
          url:'https://i.pinimg.com/564x/b3/af/7d/b3af7d1a5d444c0613f6bdc4314e7ed7.jpg'
        },
        {
          nome:'Motel Hell',
          url:'https://i.pinimg.com/564x/56/9e/3c/569e3cd379c8b409ea152e75f6c9af65.jpg'
        },
      ]
    },
    {
      estilo:'Sobrenatural',
      filme:[
        {
          nome:'Demons 2',
          url:'https://i.pinimg.com/564x/43/9a/e8/439ae864021479c13df3379328b67581.jpg'
        },
        {
          nome:'O Exorcista',
          url:'https://i.pinimg.com/564x/70/c3/3b/70c33bc33a6f4d10cce3cb29255b5196.jpg'
        },
        {
          nome:'A Noite Dos Demonios 2',
          url:'https://i.pinimg.com/564x/17/b0/fb/17b0fbd70b0a4348759d61b05f65df3f.jpg'
        },
        {
          nome:'O Bebe de Rosemary',
          url:'https://i.pinimg.com/564x/bc/c8/b8/bcc8b88ba48c00466d1485004bd6527c.jpg'
        },
        {
          nome:'O Iluminado',
          url:'https://i.pinimg.com/564x/9e/b1/13/9eb11302aa110b74934d4b6706efce50.jpg'
        },
      ]
    },
    {
      estilo:'Classicos',
      filme:[
        {
          nome:'A Bolha Assassina',
          url:'http://www.retro-daze.org/images/postImages/1413590891theblob.jpg'
        },
        {
          nome:'A Morte do Demonio',
          url:'https://i.pinimg.com/564x/8a/b6/a4/8ab6a4f671c6f83d472086244abbae8e.jpg'
        },
        {
          nome:'Carrie a Estranha',
          url:'https://i.pinimg.com/564x/69/4e/21/694e21740f9a4aa9026487c416ef33f0.jpg'
        },
        {
          nome:'Christine o Carro Assassino',
          url:'https://i.pinimg.com/564x/b3/88/64/b38864b6625f8603c46413c8a7b107d3.jpg'
        },
        {
          nome:'Criaturas',
          url:'https://i.pinimg.com/564x/a9/98/32/a99832c9716c9b36829a665e831945a7.jpg'
        },
      ]
    },
    {
      estilo:'Zumbis',
      filme:[
        {
          nome:'O Dia Dos Mortos',
          url:'https://i.pinimg.com/564x/b3/11/0d/b3110dca8bb7668d9efaeefd4d1ca87e.jpg'
        },
        {
          nome:'A Noite dos Mortos Vivos',
          url:'https://i.pinimg.com/564x/9b/28/c3/9b28c37ef2d0bf5596666ac759e5fc8c.jpg'
        },
        {
          nome:'O Retorno Dos Mortos Vivos',
          url:'https://i.pinimg.com/564x/20/f3/81/20f38107ac965bb22cad0396e489ffdb.jpg'
        },
        {
          nome:'Holocauto Zumbi',
          url:'https://i.pinimg.com/564x/24/f9/9a/24f99a27ad3afdc126e48b5fbd6c6c87.jpg'
        },
        {
          nome:'Fome Animal',
          url:'https://i.pinimg.com/564x/8a/0f/f0/8a0ff050e1cfb732504f94f81dcb6e13.jpg'
        },
      ]
    }
  ]
  return (
    <>
    <ScrollView>
      <StatusBar barStyle='light-content' backgroundColor='#00002D' />
      <View style={styles.head}>
        <Image
          style={styles.logo}
          resizeMode='contain'
          source={require('./assets/creepy.png')}
        />
        <View style={styles.icon}>
          <Ionicons name="skull" size={24} color="#B1D95B" />
          <FontAwesome name="search" size={30} color="#B1D95B" />
        </View>
      </View>
      <View style={styles.banner}>
        <Image
          style={{width:'100%'}}
          resizeMode='contain'
          source={require('./assets/frank.jpg')}
        />
      </View>
      <ScrollView style={{backgroundColor:'#00002D'}}>
      {filmes.map(function(i){
          return(
            <>
              <Text>{i.estilo}</Text>
              <ScrollView horizontal={true}>
                {i.filme.map(function(movie){
                  return(
                    <View style={{alignItems: 'center', padding: 16}}>
                      <Image
                      style={{
                        width:100,
                        height: 150,
                        borderRadius: 10,
                      }}
                        source={{uri: movie.url}}
                      />
                      <Text style={{color:'#B1D95B'}}>{movie.nome}</Text>
                    </View>
                  )
                })}     
            </ScrollView>
            
        </>
          )
        })}
      </ScrollView>

      
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    height:50,
    padding:20,
    width:'100%',
    backgroundColor: '#00002D',
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    height:120,
    width:120,
  },
  icon:{
    display: 'flex',
    flexDirection: 'row',
  },
  banner:{
    height:300,
    width:'100%',
    padding:5,
    backgroundColor: '#00002D'
  }
});
