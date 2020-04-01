import Taro, {Component} from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import {getQuestions,submitAnswers} from '@utils/api'
import './index.scss'

class Index extends Component{
  config = {
    navigationBarTitleText: '测评'
  }
  constructor(){
    super();
    this.state = {
      data: [],
      answerScores: [],
      currentIndex: 0
    };
  }
  componentWillMount(){
    // let title = this.$router.params.title;
    // Taro.setNavigationBarTitle({
    //   title: title
    // });
    getQuestions().then(({code,data})=>{
      console.log(data);
      if(code==0 && data){
        this.setState({
          data: data
        });
      }
    });
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {

  }

  componentDidHide () { }
  nextPicker(answerScore){
    console.log(answerScore);
    let {data, currentIndex} = this.state;
    if(currentIndex < data.length-1){
      this.setState((prevState)=>({
        answerScores: prevState.answerScores.concat(answerScore),
        currentIndex: prevState.currentIndex+1,
      }));
    }else{
      this.setState((prevState)=>({
        answerScores: currentIndex == data.length-1 ? prevState.answerScores.concat(answerScore):prevState.answerScores,
      }),()=>{
        console.log(this.state.answerScores);
        submitAnswers(this.state.answerScores).then((code, msg)=>{
          Taro.showToast({
            title: msg,
            icon: 'none',
            mask: true
          });
        });
      });
    }
  }
  render () {
    let {data, currentIndex} = this.state;
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
            {data[currentIndex].evaluationQuestion}
          </View>
        </View>
        {/* 选项 */}
        <View className='picker'>
          {data[currentIndex].answers.map((item)=>{
            return <View key={item} className='picker-item' hover-class="picker-item-hover" onClick={this.nextPicker.bind(this, item.answerScore)}>{item.answerDescription}</View>
          })}
        </View>
      </View>
    )
  }
}
export default Index;
