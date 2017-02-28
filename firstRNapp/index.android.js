/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// 这里是本js中使用到的所有的组件的导入，没有会报错
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
// 这是自定义的一个纯js的button组件
import Button from './src/component/Button'
// 这是从git上引入的第三方的纯js组件
import Toast from 'react-native-root-toast';

// Es6的新的定义类的方法
export default class firstRNapp extends Component {

  constructor(props) {
    super(props); { /* 一个状态代表了一个数据集*/ } 
    this.state = {
      showText: ' 这里将会显示从网络上下载下来的数据 ！'
    };
  }
  //  这里有一个ES6的新写法
  // （x）=>x+6;等价于
  //  fuction(x){
  //     return x+6;
  //  }

 
      // 这是从网络请求数据的方法，其中enableCallback是一个回调的方法，因为网络请求是异步的，
      // 所以只有在确认数据加载完成之后，才会让按钮再变为绿色，
      // 这在Android开发中，实现自定义view的过程中是十分常用的
    
  fetchData = (enableCallback) => {

      fetch('http://bbs.reactnative.cn/api/category/3')
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.description){
              this.setState({
                showText : responseJson.description,
              })
              enableCallback();
            }else{
              Toast.show('数据有误！！！');
            }
      })
      .catch((error) => {
        console.error(error);
        alert(1);
      });
  };
  render() {
    {/*这里从是个图片链接，下面的Image组件会从网络请求这个图片加载*/}
    let pic = {
      uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487593629108&di=effb5885950f07ad2ca82a588d3620e3&imgtype=0&src=http%3A%2F%2Fi2.sinaimg.cn%2Fgm%2F2014%2F0408%2FU1782P115DT20140408115114.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text style={[styles.instructions,{marginTop:30}]} >
          {/* 组件同时使用两种样式用中括号括起来*/}
          {/* showText上面的网络请求是异步的，所以一定要有一个初始值，*/}
          {this.state.showText}
        </Text>
        <Button text='提交' bgcolor='green' onpress={this.fetchData} />
        <Image source={pic} style={{width: 193, height: 110,marginBottom : 50} } />
      </View>
          
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
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
// 注意，这里用引号括起来的'firstRNapp'必须和你init创建的项目名一致
//AppRegistry组件是用来告知React Native哪一个组件被注册为整个应用的根容器
AppRegistry.registerComponent('firstRNapp', () => firstRNapp);
