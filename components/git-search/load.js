import * as React from 'react';
//import React, { useState, useEffect } from 'react'
import { Avatar, Button, Card, Title, Paragraph ,TextInput,Divider} from 'react-native-paper';
import { StyleSheet, Text, View,Image } from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;







export default function Load() {
    let [name, setRepo] = React.useState('')
    let [searchError, setSearchError] = React.useState({})

    
const validate = () => {
    const searchError = {}
   

    let isvalid = true

    if (name == 0) {
      searchError.searchV = 'Repo is Required'
      isvalid = false
    } 

    setSearchError(searchError)
  

    return isvalid
  }
    return(
  <Card>
  <Image src={'../../assets/thriveagriclogo.svg'} />
    <Card.Cover source="" />
    <Card.Content>
    <Divider/>
      <Title>Card title</Title>
   
    <TextInput   />
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    
      <Button icon='search'>search</Button>
   
  </Card>
    );
};

// const style = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });