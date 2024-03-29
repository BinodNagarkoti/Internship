import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import AddButton from "./addButton";
import Box from "@material-ui/core/Box";

import TextField from "@material-ui/core/TextField";

class CheckboxList extends React.Component {
  constructor(props) {
    super(props);
    // this.updateTodo = this.updateTodo.bind(this);
    this.state = {
      textStrikeTrue: {
        textDecorationLine: "line-through"
      },
      textStrikeFalse: {
        textDecorationLine: "none"
      },
      firstLoad: true,
      block: {
        display: "block",
        marginLeft: "30%"
      },
      none: {
        display: "none",
        marginLeft: "15%"
      },
      newList: "",
      username: "",
      list: [],
      flag: [],
      onSaveMsg: "",
      onLoadMsg: "",
      checked: [-1],
      strikeThrough: [-1],
      hover: [-1]
    };
  }
  onMouseOver = value => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newHover = [...this.state.hover];
    if (currentIndex === -1) {
      newHover.push(value);
    } else {
      newHover.splice(currentIndex, 1);
    }

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
      console.log();
      newStrikThroung.splice(currentIndex, 1);
    }
    this.setState({ checked: newChecked, strikeThrough: newStrikThroung });
  };
  // updateTodo = list => {
  //   this.setState({ list: list, flag: });
  // };
  onChange = e => {
    let newList = e.target.value;
    this.setState({ newList: `${newList.replace(/^\s+/, "")}` });
    console.log(this.state.newList);
  };
  onAdd = async () => {
    const data = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        newList: this.state.newList,
        username: this.state.username
      })
    };
    const res = await fetch(`http://localhost:2000/save`, data);
    const jsonD = await res.json();
    this.setState({ onSaveMsg: `${jsonD.msg}` });
    console.log(this.state.onSaveMsg);
    this.fetchLocalData(this.state.username);
  };
   deleteItem=async(idx)=>{
    const usr= this.state.username
    console.log(idx,usr)
    const res = await fetch(`http://localhost:2000/get?usr=${usr}&idx=${idx}`);
    const jsonD = await res.json();
    console.log(jsonD)
    this.fetchLocalData(this.state.username);
  }
  async fetchLocalData(username) {
    this.setState({ username: `${username}` });
    const res = await fetch(`http://localhost:2000/get?usr=${username}`);
    const jsonD = await res.json();
    var flag = [];
    var title = [];
    for (let i = 0; i < jsonD.length; i++) {
      title[i] = jsonD[i].title;
      flag[i] = parseInt(jsonD[i].flag, 10);
    }
    this.setState({ list: title});
    console.log(this.state.strikeThrough, this.state.checked);
  }
  render() {
    if (this.state.firstLoad === true) {
      this.fetchLocalData(this.props.usr);
      this.setState({ 
        firstLoad: false,
        username:this.props.usr });
    }
    return (
      <div className="List-Container">
        <div className="top-level">
          <div className="greetings"> {this.props.greetings} </div>
          <div className="circle-Button">
            {" "}
            <AddButton onClick={this.onAdd} />
          </div>
          <Box
            fontWeight="fontWeightBold"
            style={{ fontSize: "24px", color: "Green" }}
            m={1}
          >
            {this.state.onSaveMsg}
          </Box>
        </div>
        <TextField
          id="outlined-List"
          label="List"
          margin="normal"
          type="text"
          fullWidth
          onChange={this.onChange}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <List
          style={{
            width: "100%",
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <TodoLists
            list={this.state.list}
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
            deleteItem = {this.deleteItem}
          />
          {/* <button onClick={() => this.updateTodo(title)}>Refresh</button> */}
        </List>
      </div>
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
  handleToggle,
  deleteItem
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
          primary={`${id}. ${value}`}
        />
        <ListItemSecondaryAction onClick={()=>deleteItem(id)}>
          <div

            edge="end"
            onMouseEnter={onMouseOver(id)}
            onMouseLeave={onMouseOut(id)}
            style={hover.indexOf(id) !== -1 ? block : none}
            aria-label="delete"
          >
            <Fab   
          
            disabled aria-label="Delete" 
            style={{                                    
                  width: '35px',                                                      
                  height : '0px'
                  }}>
        <DeleteIcon />
      </Fab>
                      </div>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </ul>
);
export default CheckboxList;
