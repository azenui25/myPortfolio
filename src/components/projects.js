import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://townsquare.media/site/341/files/2013/04/Cutest-Dogs1.gif?w=980&q=75) center / cover'}} >Dog Memory</CardTitle>
            <CardText>
            An app which behaves as an interactive game build using
React, Redux, HTML CSS, Express and external API.
            </CardText>
            <CardActions border>
            <a href="https://github.com/Remzi1993/dog-breed-memory" rel="noopener noreferrer" target="_blank"> <Button  colored>GitHub</Button></a> 
            <a href="https://dog-memory.netlify.app/" rel="noopener noreferrer" target="_blank"> <Button  colored>App</Button></a> 
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://66.media.tumblr.com/7d6a5cb5d0d007a2851122695da318a8/tumblr_p5y78fhSlD1qz5u6yo1_400.gifv) center / cover'}} >Score Board</CardTitle>
            <CardText>
              A simple react app the show the scores of people as they increase
            </CardText>
            <CardActions border>
            <a href="https://github.com/azenui25/scoreboard-app-" rel="noopener noreferrer" target="_blank"> <Button  colored>GitHub</Button></a> 
            <a href="https://nostalgic-bardeen-27d800.netlify.app/" rel="noopener noreferrer" target="_blank"> <Button  colored>App</Button></a> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media0.giphy.com/media/133L9tE1zx87pC/source.gif) center / cover'}} >Erasmus Student Guide - Münster  
A spatial story to your life experience, made by students for students!</CardTitle>
        <CardText>
        A spatial story to your life experience, made by students for students!
        </CardText>
        <CardActions border>
        <a href="http://bit.ly/2OCZqXB" rel="noopener noreferrer" target="_blank"> <Button  colored>Story Map</Button></a> 
        <a href="https://docs.google.com/document/d/1jqseo1fJj9AAMvdw-vLbAVufvcHh5k-KUDCHm4NPIWU/edit?usp=sharing" rel="noopener noreferrer" target="_blank"> <Button  colored>Documentation</Button></a> 
          
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* project2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://1.bp.blogspot.com/-v7z5MG6Y1Ss/XRixI58XnxI/AAAAAAAACTw/dChYs2bzlGglYdVQfgq3vbbFB0HymPNQQCLcBGAs/s1600/leafglezgif-3-9d22587083e9.gif) center / cover'}} >   Exploring the predictive power of daily weather data for rental-bike
availability in The Netherlands</CardTitle>
        <CardText>
         The results show how weather affects Bike rental predictability
        </CardText>
        <CardActions border>
        <a href="https://docs.google.com/document/d/1eCmn_E5XCYK7bnwbVJ4tFrmpbhLCrZiNlqmr217liCo/edit?usp=sharing" rel="noopener noreferrer" target="_blank"> <Button  colored>Paper</Button></a> 
          
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
      
      
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is other</h1></div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web/App projects</Tab>
          <Tab>Geospatial Projects</Tab>
          <Tab>Other Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;