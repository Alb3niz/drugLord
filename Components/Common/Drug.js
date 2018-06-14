import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default class Drug extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TouchableOpacity style={styles.touchableStyle} onPress={this.props.onPress}>
        <LinearGradient style={styles.linearGradient} colors={['#f7f7f7', '#fff']}>
          <Image style={styles.imageStyle} source={this.props.drug.icon}/>
          <Text style={styles.textStyle}>{this.props.drug.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = {
  touchableStyle:{
    alignSelf: 'stretch',
    alignItems:'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#d6d6d6',
    height: 50,
  },
  imageStyle: {
    width: 30,
    alignSelf:'center',
    height: 30,
    marginLeft:10
  },
  textStyle: {
    color: 'blue',
    alignSelf:'center',
    fontSize: 18,
    marginLeft:10,
    color:'#515151'
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
  }
}
