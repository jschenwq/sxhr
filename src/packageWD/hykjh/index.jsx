import Taro, { Component } from '@tarojs/taro'
import { View, Button} from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '会员卡激活'
  }
  constructor(){
    super();
    this.state = {

    };
  }
  componentWillMount(){

  }
  render(){
    return (
      <View className='index'>

      </View>
    );
  }
}
