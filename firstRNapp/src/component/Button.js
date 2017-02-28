/**
 * button按钮自定义组件，添加export，去掉最底下那行
 * 
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// 允许外部调用的方法必须要写export default
export default class Button extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      disabled : false,
    };
  {/*如果不在下面这样写的话，就需要绑定，this.customPressHandler = this.customPressHandler.bind(this)*/}
}

customPressHandler= ()=>{
  {/*绑定this，的=》写法，如果不使用this的话，可以直接  方法名（），但使用的话必须绑定*/}
  {/* 自定义方法 后面必须加分号 */}
  {/*参数中存着对面传过来的方法*/}
  const {onpress} = this.props;
  {/* const onpress = this.props.onpress */}
  this.disable();
  onpress(this.enable);

};
//置灰，不让点
disable=()=>{
  this.setState({
    disabled: true,
  });
};
// 变绿，让点
enable=()=>{
  this.setState({
    disabled : false,
  });
};

  render() {
  {/*
    这种写法const {text,bgcolor}=this.props;
    其实等于 const text=this.props.text; const bgcolor=this.props.bgcolor;
    */}
    const {text,bgcolor}=this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={ [styles.button,this.state.disabled && styles.disabled]} onPress={this.customPressHandler}>
        <Text>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  disabled:{
    backgroundColor:'gray',
  },
  button:{
    height:40,
    width:100,
    borderRadius:20,
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginTop:30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

