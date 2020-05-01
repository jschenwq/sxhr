import Taro, { Component } from '@tarojs/taro'
import { View, Button} from '@tarojs/components'
import { AtIcon, AtButton } from 'taro-ui'
import './index.scss'

class Index extends Component {

  config = {
    navigationBarTitleText: '会员卡激活'
  }
  constructor(){
    super();
    this.state = {
      VIPNumber: '',
      VIPPwd: ''
    };
  }
  componentWillMount(){

  }
  hykhInput=(e)=>{
    this.setState((prevState)=>({
      VIPNumber: e.detail.value
    }));
  }
  hykmmInput=(e)=>{
    this.setState((prevState)=>({
      VIPPwd: e.detail.value
    }));
  }
  VIPActive=()=>{
    Taro.navigateBack({
      delta: 1
    });
  }
  render(){
    let {VIPNumber, VIPPwd} = this.state;
    return (
      <View className='index'>
        <View className='params'>
          <AtIcon prefixClass='icon' value='shouji54' size='20' color='#9e9e9e' />
          <Input type='text' className='input-panel' placeholder='会员卡号' value={VIPNumber} onInput={this.hykhInput.bind(this)}/>
        </View>
        <View className='params'>
          <AtIcon prefixClass='icon' value='mima' size='20' color='#9e9e9e' />
          <Input type='text' className='input-panel' placeholder='会员卡密码' value={VIPPwd} onInput={this.hykmmInput.bind(this)}/>
        </View>
        <View className='btn-panel'>
          <AtButton disabled={!VIPNumber || !VIPPwd} type="primary" onClick={this.VIPActive.bind(this)}>激 活</AtButton>
        </View>
        <View className="bottom-panel">
          会员卡帮助热线：0379-65116985
        </View>
      </View>
    );
  }
}
