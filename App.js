import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper'
import Drug from './Components/Common/Drug'

export default class App extends Component {

  state = {
    drugList: [
      {
        name: 'Cocaine',
        icon: require('./Images/cocaine.png'),
        currentPrice: 20,
        priceRise: false,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      }, {
        name: 'Crack',
        icon: require('./Images/crack.png'),
        currentPrice: 30,
        priceRise: false,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      }, {
        name: 'Ecstasy',
        icon: require('./Images/ecstasy.png'),
        currentPrice: 17,
        priceRise: false,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      }
    ]
  }

  changePrice() {
    console.log('asdasdasd')
    this.setState((previousState) => {
      previousState.drugList.forEach((drug) => {
        drug.currentPrice++
      })
      return previousState
    })
  }
renderDrugList() {
  return this.state.drugList.map(function(drug, index) {
    return <Drug key={index} drug={drug} onPress={() => console.log('You pressed: ' + drug.name)}/>
  }.bind(this))
}

render() {
  return (<View style={styles.mainView}>

    <ScrollView style={styles.listView}>
      {this.renderDrugList()}
    </ScrollView>

    <View style={styles.bottomMenuView}>
      <Swiper showsButtons={false}>

        <View>
          <TouchableOpacity onPress={() => this.changePrice()}>
            <Text>Explore</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Explore</Text>
        </View>

      </Swiper>
    </View>

  </View>)
}
}

const styles = {
mainView: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 35
},
listView: {
  backgroundColor: 'skyblue',
  width: '100%',
  height: '80%'
},
bottomMenuView: {
  backgroundColor: 'steelblue',
  width: '100%',
  height: '20%'
},
swiperSlide: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff'
}
}

// {
//   name:'Crack',
//   icon:require('./Images/crack.png')
// },
// {
//   name:'Ecstasy',
//   icon:require('./Images/ecstasy.png')
// },
// {
//   name:'Hashish',
//   icon:require('./Images/hashish.png')
// },
// {
//   name:'Heroin',
//   icon:require('./Images/heroin.png')
// },
// {
//   name:'Ice',
//   icon:require('./Images/ice.png')
// },
// {
//   name:'Kat',
//   icon:require('./Images/kat.png')
// },
// {
//   name:'LSD',
//   icon:require('./Images/lsd.png')
// },
// {
//   name:'MDA',
//   icon:require('./Images/mda.png')
// },
// {
//   name:'Morphine',
//   icon:require('./Images/morphine.png')
// },
// {
//   name:'Mushrooms',
//   icon:require('./Images/mushrooms.png')
// },
// {
//   name:'Opium',
//   icon:require('./Images/opium.png')
// },
// {
//   name:'PCP',
//   icon:require('./Images/pcp.png')
// },
// {
//   name:'Peyote',
//   icon:require('./Images/peyote.png')
// },
// {
//   name:'Special-K',
//   icon:require('./Images/specialk.png')
// },
// {
//   name:'Speed',
//   icon:require('./Images/speed.png')
// },
// {
//   name:'Cannabis',
//   icon:require('./Images/weed.png')
// }
