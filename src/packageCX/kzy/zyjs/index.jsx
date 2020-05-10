import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import $ from '@utils/http'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '职业介绍'
  }

  constructor(props) {
    super(props)
    this.state = {
      detailNodes: ''
    };
  }

  componentDidMount() {
    let introducePath = Taro.getStorageSync('introducePath');
    $.ajaxJson(introducePath,'GET').then(({data})=>{
      this.setState({
        detailNodes: data
      });
    });

  }

  render() {
    return (
      <View>
        <View style='padding:0px 20px'>
        <RichText nodes={this.state.detailNodes} />
        </View>
      </View>
    )
  }

}

export default Index
