import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '位次查询'
  }

  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentDidMount(){}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return (
      <View>
        大学查询
      </View>
    )
  }
}

export default Index
