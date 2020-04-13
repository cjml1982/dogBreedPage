import React, {Component} from 'react'

class Select extends React.Component {
  constructor (props:any) {
    super(props);
    //this.selectChange = this.handleSelectChange.bind(this);
    this.state = {
      // value text是select当前的option值
      select: {
        ls: [{value:"a",text:"aaa"},{value:"b",text:"bbb"},{value:"c",text:"ccc"}],
        value: 'c',
        text: "ccc"
      }
    }
  }
  // 这里单独打印e的时候，在浏览器控制台展开，发现e的target是null
  // 但是直接打印e.target时候，发现打印的是select的dom
  handleSelectChange (e) {
    e.preventDefault();
    console.log(e.target);
    let optionDom = e.target.options[e.target.selectedIndex];
    let v = optionDom.value,
        t = optionDom.text;
    let newSelect = {
      ls: this.state.select.ls,
      value: v,
      text: t
    }
    this.setState({
      select: newSelect
    })
  }
  render () {
    return (
      <div>
        <p>{this.state.select.value+'///'+this.state.select.text}</p>
        <select
          onChange={this.selectChange}
          value = {this.state.select.value}>
          {
            this.state.select.ls.map((item,i) => {
              return (
                <option key={"op"+i} index={i} value={item.value}>{item.text}</option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

export default Select;
