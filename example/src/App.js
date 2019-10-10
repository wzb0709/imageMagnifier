import React, { Component,Fragment} from 'react'

import ExampleComponent from 'image-magnifier'

export default class App extends Component {
  render () {
    return (
      <div style={{width:'80%',margin:'0 auto',textAlign:'center'}}>
        <div style={{fontWeight:'bold',marginBottom:20}}>这里是标题</div>
        <div style={{marginBottom:20}}>
          这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述,这里是描述这里是描述这里是描述,这里是描述这里是描述
        </div>
        <div style={{display:'flex',justifyContent:'center',marginBottom:20}}>
          <ExampleComponent
            url='https://pzyfile.oss-cn-hangzhou.aliyuncs.com//6fec2680ea6311e98e5fc1818ef4e028passport1570604847928.jpg'
            width={400}
            style={{marginRight:20}}
          />
          <ExampleComponent
            url='https://pzyfile.oss-cn-hangzhou.aliyuncs.com//6fec2680ea6311e98e5fc1818ef4e028passport1570604847928.jpg'
            width={400}
          />
        </div>
        <ExampleComponent
          url='https://pzyfile.oss-cn-hangzhou.aliyuncs.com//6fec2680ea6311e98e5fc1818ef4e028passport1570604847928.jpg'
          width={600}
          style={{margin:'0 auto'}}
        />
      </div>
    )
  }
}
