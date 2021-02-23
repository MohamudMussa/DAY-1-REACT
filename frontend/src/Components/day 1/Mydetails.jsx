import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const People = require('./Prop/Intermediate/People')


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

    
  };

  return (

  

      
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}> PROGRAMMING LANGUAGES </Typography>
          <Typography className={classes.secondaryHeading}>Java, HTML, CSS, JavaScript, Python</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>IDE’S</Typography>
          <Typography className={classes.secondaryHeading}>
          IntelliJ, Eclipse, PyCharm, Visual Studio Code, Spring Boot
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Thes are the IDE'S that I am most comfortable with so far but I'm learning everyday!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>OPERATING SYSTEMS</Typography>
          <Typography className={classes.secondaryHeading}>
          Windows, MacOS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Windows, MacOS
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>CLOUD PLATFORMS</Typography>
          <Typography className={classes.secondaryHeading}>
          Jenkins, Git, Docker, Node, Selenium
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            More Detail regarding the above here pal
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>OTHER</Typography>
          <Typography className={classes.secondaryHeading}>
          Agile Scrum, Postman, Junit, Spring Boot, Maven, Photoshop, Figma, Adobe Creative Suite 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          More Detail regarding the above here pal
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>

  );
}
