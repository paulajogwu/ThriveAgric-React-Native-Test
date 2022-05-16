import * as React from 'react';
//import React, { useState, useEffect } from 'react'
import { Avatar, Button, Card, Title, Paragraph, TextInput, Divider } from 'react-native-paper';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'

import { setUsers } from '../git_search/action'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;





const stateSelector = createSelector(setUsers, (users) => ({
  users,
}))
const actionDispatch = (dispatch) => ({
  setUser: (users) => dispatch(setUsers(users)),
})

export default function Load() {
  
  const { users } = useSelector(stateSelector)
  //console.log(users,"good")
  const { setUser } = actionDispatch(useDispatch())
  let [name, setRepo] = React.useState('')
  let [searchError, setSearchError] = React.useState({})


  const GetRepo = () => {
    let timerInterval

    const isValid = validate()
    if (isValid) {

      Swal.fire({
        title: 'Loading!',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {


          var reposName = name;
          var nameURL = reposName.replace(/-/g, "/");
          fetch("https://api.github.com/users/" + nameURL)
            .then(result => result.json())
            .then((data) => {
              if (data.message == "Not Found") {
                Swal.fire({
                  icon: 'error',
                  title: `No Record Found`,
                  position: 'center',
                  showConfirmButton: false,
                  timer: 3000,
                  width: 350,
                  background: 'white',
                  iconColor: 'red',
                })
              }
              else {



                setUser(data)

                Redirects()
              }
            });

        }
      })


    }
  };

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
  return (
    <Card>
      <Image src={'../../assets/thriveagriclogo.svg'} />
      <Card.Cover source="" />
      <Card.Content>
        <Divider />
        <Title>Card title</Title>

        <TextInput onChange={(e) => setRepo(e.target.value)}
        />
        {Object.keys(searchError).map((key) => {
          return <div style={{ color: 'red' }}>{searchError[key]}</div>
        })}
      </Card.Content>
      {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}

      <Button icon='search' onClick={() => {
        GetRepo()
      }}>search</Button>

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