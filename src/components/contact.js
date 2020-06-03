import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nicholas Azenui Asanga</h2>
            <img
              src="https://pbs.twimg.com/profile_images/1102130213998219264/m7Wb19nv_400x400.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', }}>Pragmatic professional with extensive knowledge of Geographic Information System and Full Stack Web Development</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'yellow'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +4915211246344
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'yellow'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <a href="mailto: 70908045nico@gmail.com">70908045nico@gmail.com</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'yellow'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    asanga nicholas
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;