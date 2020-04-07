import Taro, {Component} from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import {
  getKSXLXWCSQuestions,submitKSXLXWCSAnswers,
  getTYXWQuestions,submitTYXWAnswers,
  getJDXWQuestions,submitJDXWAnswers,
  getXXNLQuestions,submitXXNLAnswers,
  getZYXQQuestions,submitZYXQAnswers,
} from '@utils/api'
import './index.scss'

class Index extends Component{
  config = {
    navigationBarTitleText: '测评'
  }
  constructor(){
    super();
    this.state = {
      data: [],
      answerScores: [],//提交分数
      currentIndex: 0,
      type:'',//测评类型
    };
  }
  componentWillMount(){
    let title = this.$router.params.title;
    Taro.setNavigationBarTitle({
      title: title
    });
    let type = this.$router.params.type;
    console.log("测评拿题type："+type)
    //获取考试心理和行为测试题库
    if(type == 0){
      getKSXLXWCSQuestions().then(({code,data})=>{
        this.setState({
          data: data
        });
      });
    }
    //获取拖延行为测评题库
    if(type == 1){
      getTYXWQuestions().then(({code,data})=>{
        this.setState({
          data: data
        });
      });
    }
    //获取倦怠行为测评题库
    if(type == 2){
      getJDXWQuestions().then(({code,data})=>{
        this.setState({
          data: data
        });
      });
    }
    //获取学习能力测评题库
    if(type == 3){
      getXXNLQuestions().then(({code,data})=>{
        this.setState({
          data: data
        });
      });
    }

    //专业能力能力测评题库
    if(type == 6){
      getZYXQQuestions().then(({code,data})=>{
        this.setState({
          data: data
        });
      });
    }
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
        let type = this.$router.params.type;
        console.log("测评答题type："+type);
        //提交考试心理和行为测评结果
        if(type == 0){
          submitKSXLXWCSAnswers(this.state.answerScores).then(({data})=>{
            console.log(data)
            Taro.navigateTo({
              // url: '/packageCP/wdcpjg/index?result=' + data.scoreByGrade
              url: '/packageCP/wdcpjg/index?result=' + JSON.stringify(data)
            });
          });
        }
        //提交拖延行为测评结果
        if(type == 1){
          submitTYXWAnswers(this.state.answerScores).then(({data})=>{
            console.log(data)
            Taro.navigateTo({
              url: '/packageCP/wdcpjg/index?result=' + data
            });
          });
        }
        //提交倦怠行为测评结果
        if(type == 2){
          submitJDXWAnswers(this.state.answerScores).then(({data})=>{
            console.log(data)
            Taro.navigateTo({
              url: '/packageCP/wdcpjg/index?result=' + data
            });
          });
        }
        //提交学习能力测评结果
        if(type == 3){
          submitXXNLAnswers(this.state.answerScores).then(({data})=>{
            console.log(data)
            Taro.navigateTo({
              url: '/packageCP/wdcpjg/index?result=' + data
            });
          });
        }

        //提交职业兴趣测评结果
        if(type == 6){
          submitZYXQAnswers(this.state.answerScores).then(({data})=>{
            console.log(data)
            Taro.navigateTo({
              url: '/packageCP/wdcpjg/index?result=' + data
            });
          });
        }
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
