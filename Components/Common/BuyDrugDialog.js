import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Slider from 'react-native-slider';

export default class BuyDrugDialog extends Component {
  constructor(props){
    super(props)
  }

  state = {
    sliderValue: 0,
    totalPrice: 0,
    testDrug:[
      {
        name: 'Heroin',
        price: 1276,
        quantity:28,
      }
    ]
  }

  calculateTotalPrice(){
    this.setState({totalPrice: this.state.sliderValue * this.state.testDrug[0].price})
  }

  render(){
    return(
      <View style={styles.containerViewStyle}>
        <Text style={styles.titleStyle}>Buy {this.state.testDrug[0].name}</Text>

        <Text style={styles.textStyle}>Quantity: {this.state.sliderValue}</Text>

        <Text style={styles.greenTextStyle}>$ : {this.state.totalPrice}</Text>

        <Slider
          trackStyle={styles.sliderTrackStyle}
          thumbStyle={styles.sliderThumbStyle}
          minimumTrackTintColor='#eecba8'
          minimumValue={0}
          maximumValue={this.state.testDrug[0].quantity}
          step={1}
          onValueChange={sliderValue => {
            this.setState({sliderValue})
            this.calculateTotalPrice()
          }}
        />

        <View style={styles.buttonsContainerStyle}>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>console.log('closing dialog...')}>
            <Text style={styles.buttonTextStyle}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>console.log('closing dialog...')}>
            <Text style={styles.buttonTextStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = {
  buttonsContainerStyle:{
    flexDirection:'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle:{
    width:100,
    marginTop:10,
    marginRight:18,
    marginLeft:18,
    marginBottom:10,
    borderRadius:5,
    borderWidth:1,
    borderColor:'steelblue',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle:{
    fontSize:20,
    color:'steelblue',
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    marginBottom:10,
    fontWeight:'600'
  },
  containerViewStyle:{
    marginTop: 35,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 6,
    borderColor:'steelblue',
    borderWidth:1,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.1,
    elevation: 3,
    marginLeft: 15,
    marginRight: 15
  },
  titleStyle:{
    fontSize: 20,
    marginTop: 10,
    marginLeft: 18,
    marginRight: 18,
    fontWeight: '600',
    color:'steelblue',
    alignSelf: 'center'
  },
  textStyle:{
    fontSize: 16,
    marginTop: 10,
    marginLeft: 18,
    marginRight: 18,
    color:'steelblue',
    alignSelf: 'center',
    textAlign: 'center',
  },
  greenTextStyle:{
    fontSize: 16,
    marginTop: 10,
    marginLeft: 18,
    marginRight: 18,
    color:'red',
    fontWeight:'600',
    alignSelf: 'center',
    textAlign: 'center',
  },
  sliderTrackStyle:{
    height: 10,
    width:150,
    borderRadius: 3,
    backgroundColor: '#d0d0d0'
  },
  sliderThumbStyle:{
    width: 10,
    height: 20,
    borderRadius: 5,
    backgroundColor: '#eb6e1b'
  }
}
