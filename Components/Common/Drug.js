import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Drug extends Component {
  constructor(props) {
    super(props)
  }

  checkPrice() {
    if (this.props.drug.priceRise === false) {
      console.log(this.props.drug.name + ' is -')
      return <View style={styles.arrowView}><Image style={styles.arrowImageStyle} source={this.props.drug.redArrow}/></View>
    }
    if(this.props.drug.priceRise === true){
      console.log(this.props.drug.name + ' is +')
      return <View style={styles.arrowView}><Image style={styles.arrowImageStyle} source={this.props.drug.greenArrow}/></View>
    }else {
      console.log(this.props.drug.name + ' is the same')
      return <View style={styles.arrowView}><Image style={styles.arrowImageStyle} source={require('../../Images/empty.png')}/></View>
    }
  }

  renderDrugList(){
    if(this.props.drug.quantity !== 0){
      return(
        <TouchableOpacity style={styles.touchableStyle} onPress={this.props.onPress}>
          <LinearGradient style={styles.linearGradient} colors={['#f7f7f7', '#fff']}>
            <View style={styles.imageView}>
              <Image style={styles.imageStyle} source={this.props.drug.icon}/>
            </View>
            <View style={styles.nameView}>
              <Text style={styles.textStyle}>{this.props.drug.name}</Text>
            </View>
            <View style={styles.quantityView}>
              <Text style={styles.textStyle}>{this.props.drug.quantity}</Text>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.priceStyle}>{this.props.drug.price}</Text>
            </View>
            {this.checkPrice()}
          </LinearGradient>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (this.renderDrugList())
  }
}

const styles = {
  touchableStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d6d6',
    height: 45
  },
  imageView:{
    // backgroundColor:'blueviolet',
    height:'100%',
    width:'15%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  imageStyle: {
    width: 25,
    alignSelf: 'center',
    height: 25,
  },
  nameView:{
    // backgroundColor:'steelblue',
    height:'100%',
    width:'35%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  quantityView:{
    // backgroundColor:'powderblue',
    height:'100%',
    width:'15%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#515151',
  },
  priceView:{
    // backgroundColor:'cornflowerblue',
    height:'100%',
    width:'20%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  priceStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#515151',
  },
  arrowView:{
    // backgroundColor:'blanchedalmond',
    height:'100%',
    width:'15%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  arrowImageStyle: {
    width: 20,
    alignSelf: 'center',
    height: 20
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row'
  }
}
