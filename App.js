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
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Crack',
        icon: require('./Images/crack.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Ecstasy',
        icon: require('./Images/ecstasy.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Hashish',
        icon: require('./Images/hashish.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Heroin',
        icon: require('./Images/heroin.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Ice',
        icon: require('./Images/ice.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Kat',
        icon: require('./Images/kat.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'LSD',
        icon: require('./Images/lsd.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'MDA',
        icon: require('./Images/mda.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Morphine',
        icon: require('./Images/morphine.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Mushrooms',
        icon: require('./Images/mushrooms.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Opium',
        icon: require('./Images/opium.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'PCP',
        icon: require('./Images/pcp.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Peyote',
        icon: require('./Images/peyote.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Special K',
        icon: require('./Images/specialk.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Speed',
        icon: require('./Images/speed.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
      {
        name: 'Weed',
        icon: require('./Images/cocaine.png'),
        price: 5,
        priceVariation: 2,
        minPrice:0,
        maxPrice:10,
        priceRise: '',
        quantity:0,
        greenArrow: require('./Images/greenArrow.png'),
        redArrow: require('./Images/redArrow.png')
      },
    ]
  }

  componentWillMount(){
    this.setInitialDrugQuantity()
  }

  changePrice() {
    console.log('*******************Changing Prices*******************')
    this.setState((previousState) => {
      previousState.drugList.forEach((drug) => {

        if(drug.quantity != 0){

          var addOrRemove = Math.floor(Math.random() * 2) + 1
          console.log(addOrRemove)
          switch (addOrRemove) {

            case 1:

            var randomNumber = Math.floor(Math.random() * drug.priceVariation) + 1
            console.log(drug.name + ' price increases in: ' + randomNumber + '$')
            if((drug.price + randomNumber) < drug.maxPrice){
              drug.price = drug.price + drug.priceVariation
              drug.priceRise = true
            }else{
              console.log('price is too high')
              drug.priceRise = ''
            }
              break;

            case 2:

            var randomNumber = Math.floor(Math.random() * drug.priceVariation) + 1
            console.log(drug.name + ' price decreases in: ' + randomNumber + '$')
            if((drug.price - randomNumber) > drug.minPrice){
              drug.price = drug.price - drug.priceVariation
              drug.priceRise = false
            }else{
              console.log('price is too low!')
              drug.priceRise = ''
            }

              break;
          }
        }
      })

      return previousState
    })
  }

  setInitialDrugQuantity(){
    console.log('*******************Changing Quantities*******************')
    this.setState((previousState) => {
      previousState.drugList.forEach((drug) => {
        var randomNumber = Math.floor(Math.random() * 2) + 1
        if(randomNumber != 2){
          drug.quantity = 25
        }
      })
      return previousState
    })
  }

  renderDrugList() {
    return this.state.drugList.map(function(drug, index) {
      if(drug.quantity != 0){
        return <Drug key={index} drug={drug} onPress={() => console.log('You pressed: ' + drug.name)}/>
      }
    }.bind(this))
  }

  render() {
    return (<View style={styles.mainView}>

      <ScrollView style={styles.listView}>
        {this.renderDrugList()}
      </ScrollView>

      <View style={styles.bottomMenuView}>
        <View>
          <TouchableOpacity onPress={() => this.changePrice()}>
            <Text>Explore</Text>
          </TouchableOpacity>
        </View>
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
