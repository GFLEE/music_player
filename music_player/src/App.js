
import './App.css';
// import Button from 'antd/lib/button';
import React from 'react';
// import { Modal, Button } from 'antd';
import Header from './component/header.js'
import { Layout } from 'antd';
import Progress from './component/progress.js';
import jPlayer from 'jplayer';
import $ from "jquery";
const { Content } = Layout;


class App extends React.Component {
  componentDidMount() {
    $('#player').jPlayer({
      ready: function (){
        $('#player').jPlayer('setMedia',{
          mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
        }).jPlayer('play');
      }
    })
  }

  render() {
    return (

      <div>
        <Layout>
          <Header>Header</Header>

          <Content>

            <Progress
              progress='1'
            >
            </Progress>


          </Content>
        </Layout>


      </div >

    );
  }
}

export default App;
