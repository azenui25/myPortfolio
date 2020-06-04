import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://pbs.twimg.com/profile_images/1102130213998219264/m7Wb19nv_400x400.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Geospatial Analyst/Full Stack Web Developer</h1>

            <hr/>

          <p>Python | R | ArcGIS/ArcGISPro | QGIS | PostGIS| Google Earth | ArcPy | GeoPandas | SQL 

          <br/>
          <br/>
          <br/>
          
       
         
          HTML/CSS | Linux | JavaScript | React | React Native | NodeJS | Express | MongoDB | RESTApi</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nicholasazenui/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/azenui25" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

           {/* Twitter */}
           <a href="https://twitter.com/AsangaNicholas" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>

         

         


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;