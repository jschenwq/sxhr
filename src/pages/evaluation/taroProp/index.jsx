import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'

import './index.scss'

import closeIcon from '../../../images/evaluation/close.png'

class Index extends Component {
  constructor(){
    super();
    this.state = {
      ...this.props
    };
  }
  show = (options)=>{//显示弹窗
    this.setState(()=> ({
      ...this.props,
      ...options,
      visible: true,
    }));
  }
  hide = ()=>{//关闭弹窗
    this.setState(()=> ({
      ...this.props,
      visible: false,
    }));
  }
  componentWillReceiveProps (nextProps) {
    this.setState(()=> ({
      ...nextProps
    }));
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='index' style={{display: this.state.visible ? 'block' : 'none'}}>
        <View className='dialog'>
          <View className='dialog-title'>{this.state.title}</View>
          <View className='dialog-content'>
            {this.props.children}
          </View>
          <Image src={closeIcon} className='close-icon' onClick={this.hide} />
        </View>
      </View>
    )
  }
}

export default Index
