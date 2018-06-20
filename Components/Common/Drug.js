import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Drug extends Component {
  constructor(props) {
    super(props)
  }

  changePrice(){

  }

  checkPrice() {
    if (!this.props.drug.priceRise) {
      console.log('TRUE ' + this.props.drug.priceRise)
      return <Image style={styles.arrowImageStyle} source={this.props.drug.redArrow}/>
    } else {
      console.log('FALSE ' + this.props.drug.priceRise)
      return <Image style={styles.arrowImageStyle} source={this.props.drug.greenArrow}/>
    }
  }

  render() {
    return (<TouchableOpacity style={styles.touchableStyle} onPress={this.props.onPress}>
      <LinearGradient style={styles.linearGradient} colors={['#f7f7f7', '#fff']}>
        <Image style={styles.imageStyle} source={this.props.drug.icon}/>
        <Text style={styles.textStyle}>{this.props.drug.name}</Text>
        <Text style={styles.priceStyle}>{this.props.drug.currentPrice}</Text>
        {this.checkPrice()}
      </LinearGradient>
    </TouchableOpacity>)
  }
}

const styles = {
  priceStyle: {
    alignSelf: 'center',
    fontSize: 18,
    marginLeft: 50,
    color: '#515151'
  },
  touchableStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d6d6',
    height: 50
  },
  imageStyle: {
    width: 30,
    alignSelf: 'center',
    height: 30,
    marginLeft: 10
  },
  arrowImageStyle: {
    width: 25,
    alignSelf: 'center',
    height: 25,
    marginLeft: 80
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    marginLeft: 20,
    color: '#515151'
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row'
  }
}
