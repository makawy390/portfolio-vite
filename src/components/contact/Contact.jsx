import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import './contact.css'
import { Fragment } from 'react';
const Contact = () => {
  const contact = [
    {icon : '' , title : "Call Me" , type : "+(20)1010838632 , +(02)1555245948"},
    {icon : '' , title : "Email Me" , type : " moohesham83@gmail.com"},
    {icon : '' , title : "Location" , type : "Egypt , Cairo"},
    // {icon : '' , title : "WhatsApp" , type : "01555245948 "},

  ];
  const filtrationContact = contact.map((contacts , index)=>(
    // <Grid item xs={12} md={`${12/contact.length}`} key={index}>
     <Fragment key={index}>
      <h4>{contacts.title}</h4>
      <p>{contacts.type}</p>
     </Fragment>
    // </Grid>
  ));
  return (
    <div className='contact'>
      <Container fixed>
        <h2>Quick Contact Address</h2>
        <p></p>
        <Grid container spacing={2}>
          <Grid item md={6}>
          {filtrationContact}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Contact