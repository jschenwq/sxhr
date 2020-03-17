import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SchoolItem from '../component/schoolItem/index'
import { AtGrid , AtButton, AtRate   } from 'taro-ui'
import classNames from 'classnames'
import {login,getSchoolList} from '@utils/api'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '我的院校'
  }

  constructor(props) {
    super(props)
    this.state = {
      schoolData: []
    };
  }

  componentDidMount(){
    getSchoolList({currentPage: 0,pageSize: 2}).then(({data})=>{
      this.setState((prevState)=>({
        schoolData: data.list
      }));
    });
  }

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    let {schoolData} = this.state;
    return (
      <View>
        {
          schoolData.map((item)=>{
            return (<SchoolItem item={item}/>);
          })
        }
      </View>
    )
  }
}

export default Index
