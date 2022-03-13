import React from 'react'

function auseUrl(Component) {
  return class AUseUrl extends React.Component {
    constructor(props) {
      super(props);
      this.state = { newArr: [] ,url : this.props.url};
    }

   async componentDidMount() {
        const response = await fetch(this.state.url);
        let newresponse = await response.json();
        this.setState({newArr:newresponse})
    }

    inc = () => {
        this.setState({newArr:[]})
    }

    render() {
      //debugger
      const { newArr } = this.state;
      const  inc1 = this.inc
     
      return (
        <Component newArr={newArr}  inc={inc1} />
      );
    }  
    
  }
}

export const CountryHierOrderCompomemt = auseUrl(class Country extends React.Component {
  render() {
    const { newArr,inc} = this.props;

    return (
        <>
        <button onClick={inc}>לחץ</button>
         <ol>
         {newArr.map(item => <li key={item.id}>{item.id}</li>)}
         </ol>
     </>
    );
  }
});

export const JokeHierOrderCompomemt = auseUrl(class Joke extends React.Component {
  
render() {
    const { newArr,inc } = this.props;
    let style={
        border:'3px solid pink'
    }
    return (
        <>
        <button onClick={inc}>לחץ</button>
       <table>
        {newArr.map(item => <td style={style} key={item.login}>{item.login}</td>)}
        </table>
    </>
    );
  }
});