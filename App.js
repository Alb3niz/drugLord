
import React, { Component } from 'react'
import {View, Text, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
import Drug from './Components/Common/Drug'

export default class App extends Component {

  state = {
    drugList: [
      {
        name:'Placeholder1',
        icon:require('./Images/pills.png')
      },
      {
        name:'Placeholder2',
        icon:require('./Images/heroin.png')
      }
    ]
  }

  renderDrugList(){
    return this.state.drugList.map(function(drug, index){
      console.log(this.state.drugList[index].name)
      return <Drug key={index} drug={drug} onPress={()=>console.log('item pressed')}/>
    }.bind(this))
  }

  render(){
    return(
      <View style={styles.mainView}>



        <ScrollView style={styles.listView}>
          {this.renderDrugList()}
        </ScrollView>


        <View style={styles.bottomMenuView}>
          <Swiper showsButtons={false}>

            <View>
              <Text>Explore</Text>
            </View>

            <View>
              <Text>Explore</Text>
            </View>

          </Swiper>
        </View>


      </View>

    )
  }
}

const styles = {
  mainView:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:35,
  },
  listView:{
    backgroundColor:'skyblue',
    width:'100%',
    height:'80%'
  },
  bottomMenuView:{
    backgroundColor:'steelblue',
    width:'100%',
    height:'20%'
  },
  swiperSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
}
