import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteButton from './deleteButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    display:'flex',
    alignItems: 'center',
    flexDirection:'column'
  },
}));
const strike = {
    textDecorationLine: 'line-through' 
  };
  const no_strike = {
    textDecorationLine: 'none' 
  };
  const block = {
    display:'block',
    marginLeft:'30%'
  }
  const none = {
    display:'none',
    marginLeft:'15%'

  } 

export default function CheckboxList(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([-1])
  const [strikeThrough, setStrikeThrough] = React.useState([-1])
  const [hover,setHover] = React.useState([-1])
  const onMouseOver= (value)=> ()=>{
    const currentIndex = checked.indexOf(value);
    const newHover = [...hover]
    if (currentIndex === -1) {
        newHover.push(value)
      } else {
          newHover.splice(currentIndex,1)
      }
      setHover(newHover);
  }
  const onMouseOut= (value)=>()=>{
    // const currentIndex = checked.indexOf(value);
    // const newHover = [...hover];
    // if (currentIndex === -1) {
    //     newHover.push(value)
    //   } else {
    //       newHover.splice(currentIndex,1)
    //   }
      setHover([]);
  }
  const handleToggle = (value,id) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    const newStrikThroung = [...strikeThrough];
    console.log(`new check value= ${newStrikThroung}`)
    if (currentIndex === -1) {
      newChecked.push(value);

      newStrikThroung.push(value)
    } else {

        newChecked.splice(currentIndex, 1);
        newStrikThroung.splice(currentIndex,1)
    }
    setChecked(newChecked);
    setStrikeThrough(newStrikThroung);

  
  };
// document.getElementById('check').addEventListener('click',(e)=>{
// console.log(e.value)
// });
  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem className="list"key={value} onMouseEnter={ onMouseOver(value) }
          onMouseLeave={onMouseOut(value)}
          role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox 
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{'aria-labelledby': labelId}}/>
            </ListItemIcon>
            <ListItemText id={labelId} style={(strikeThrough.indexOf(value)) !==-1 ? strike : no_strike} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <div edge="end"
              onMouseEnter={ onMouseOver(value) }
              onMouseLeave={onMouseOut(value)}
              style={(hover.indexOf(value)) !==-1 ? block : none }  aria-label="Comments">
                <DeleteButton />
              </div>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}