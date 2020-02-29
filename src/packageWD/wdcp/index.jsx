import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtAvatar, AtList, AtListItem } from 'taro-ui'

import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '我的测评'
  }

  constructor(){

    this.state = {
      data: [{
        title: '学习倦怠测评',
        createTime: '2020-02-29 14:55'
      }]
    };
  }

  componentWillMount(){

  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {data} = this.state;
    return (
      <View className='index'>
        <AtList>
          {
            data.map((item)=>{
              return (
                <AtListItem
                  title={item.title}
                  note={item.createTime}
                  arrow='right'
                  iconInfo={{ size:12, color: '#4c9aff', value: 'file-generic'}}
                />
              );
            })
          }
        </AtList>
      </View>
    )
  }
}

export default Index
