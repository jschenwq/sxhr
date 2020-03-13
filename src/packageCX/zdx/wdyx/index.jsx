import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SchoolItem from '../component/schoolItem/index'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {login} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '我的院校'
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
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
        <SchoolItem />
      </View>
    )
  }
}

export default Index
