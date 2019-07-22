import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteButton from "./deleteButton";
var flag = [];
var title = [];
class CheckboxList extends React.Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
    this.state = {
      textStrikeTrue: {
        textDecorationLine: "line-through"
      },
      textStrikeFalse: {
        textDecorationLine: "none"
      },
      block: {
        display: "block",
        marginLeft: "30%"
      },
      none: {
        display: "none",
        marginLeft: "15%"
      },
      list: [],
      checked: [-1],
      strikeThrough: [-1],
      hover: [-1]
    };
  }

  // const [list,setList] =React.useState([])
  // const [checked, setChecked] = React.useState([-1])
  // const [strikeThrough, setStrikeThrough] = React.useState([-1])
  // const [hover,setHover] = React.useState([-1])
  onMouseOver = value => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newHover = [...this.state.hover];
    if (currentIndex === -1) {
      newHover.push(value);
    } else {
      newHover.splice(currentIndex, 1);
    }
    // setHover(newHover);
    this.setState({ hover: newHover });
  };
  onMouseOut = value => () => {
    this.setState({ hover: [] });
  };
  handleToggle = value => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];
    const newStrikThroung = [...this.state.strikeThrough];

    if (currentIndex === -1) {
      newChecked.push(value);
      newStrikThroung.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      newStrikThroung.splice(currentIndex, 1);
    }
    this.setState({ checked: newChecked, strikeThrough: newStrikThroung });
  };
  updateTodo = list => {
    this.setState({ list: list });
  };
  async fetchLocalData(username) {
    console.log(username+' Nagarkoti')
    const res = await fetch(`http://localhost:2000/get?user=${username}`);
    const jsonD = await res.json();
    for (let i = 0; i < jsonD.length; i++) {
      title[i] = jsonD[i].title;
      flag[i] = jsonD[i].flag;
    }
  }
  render() {
    window.addEventListener("load", this.fetchLocalData(this.props.usr));
    return (
      <List
        style={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {this.props.greetings} 
        <TodoLists
          list={title}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          checked={this.state.checked}
          strikeThrough={this.state.strikeThrough}
          textStrikeTrue={this.state.textStrikeTrue}
          textStrikeFalse={this.state.textStrikeFalse}
          block={this.state.block}
          none={this.state.none}
          hover={this.state.hover}
          handleToggle={this.handleToggle}
        />
        {/* */}
     
        <button onClick={() => this.updateTodo(title)}>Refresh</button>
      </List>
    );
  }
}
const TodoLists = ({
  list,
  onMouseOver,
  onMouseOut,
  checked,
  strikeThrough,
  textStrikeTrue,
  textStrikeFalse,
  block,
  none,
  hover,
  handleToggle
}) => (
  <ul>
    {list.map((value, id) => (
      <ListItem
        className="list"
        key={id}
        onMouseEnter={onMouseOver(id)}
        onMouseLeave={onMouseOut(id)}
        role={undefined}
        dense
        button
        onClick={handleToggle(id)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(id) !== -1}
            disableRipple
            inputProps={{ "aria-labelledby": `${value}${id}` }}
          />
        </ListItemIcon>
        <ListItemText
          id={`${value}${id}`}
          style={
            strikeThrough.indexOf(id) !== -1 ? textStrikeTrue : textStrikeFalse
          }
          primary={`1.${value}`}
        />
        <ListItemSecondaryAction>
          <div
            edge="end"
            onMouseEnter={onMouseOver(id)}
            onMouseLeave={onMouseOut(id)}
            style={hover.indexOf(id) !== -1 ? block : none}
            aria-label="delete"
          >
            <DeleteButton />
          </div>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </ul>
);
export default CheckboxList;
