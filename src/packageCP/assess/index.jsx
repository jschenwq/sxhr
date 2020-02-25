import Taro, {Component} from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import './index.scss'

class Index extends Component{
  state = {
    data: [
      '我喜欢中国传统文化，特别是祖辈留给我们的中医、古诗词等文化遗产。1',
      '我喜欢中国传统文化，特别是祖辈留给我们的中医、古诗词等文化遗产。2',
      '我喜欢中国传统文化，特别是祖辈留给我们的中医、古诗词等文化遗产。3',
      '我喜欢中国传统文化，特别是祖辈留给我们的中医、古诗词等文化遗产。4',
    ],
    choice: ['A 非常符合', 'B 比较符合', 'C 一般', 'D 不太符合', 'E 很不符合'],
    currentIndex: 0
  }
  componentWillMount(){
    Taro.setNavigationBarTitle({
      title: this.$router.params.title
    });
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  nextPicker(){
    this.setState((prevState)=>({
      currentIndex: prevState.currentIndex == prevState.data.length - 1 ? 0 : prevState.currentIndex + 1,
    }));
  }
  render () {
    let {data, currentIndex, choice} = this.state;
    return (
      <View className='index'>
        {/* 测评进度 */}
        <View className='assess'>
          <View className='order'>
            <Text className='order-number'>{currentIndex+1}</Text><Text className='order-sum'>/{data.length}</Text>
          </View>
          <View className='progress'>
            <View className='percent' style={{width: (currentIndex + 1)/data.length * 100 + '%'}}></View>
          </View>
          <View className='subject'>
            {data[currentIndex]}
          </View>
        </View>
        {/* 选项 */}
        <View className='picker'>
          {choice.map((item)=>{
            return <View key={item} className='picker-item' hover-class="picker-item-hover" onClick={this.nextPicker}>{item}</View>
          })}
        </View>
      </View>
    )
  }
}
export default Index;
