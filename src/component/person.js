import render from 'dom-serializer'
import Rect from 'react'

export default class Personclass extends Rect.Component{
    constructor(props){
        super(props)
        this.state={
            name: this.props.name,
            age: this.props.age
        }
        this.func=this.func.bind(this)
    }
    func(){
        return (this.state.age)*4
    }

    func2(){
        this.state.age=4
    }
   
    render(){
        return(
            <>
            <p>name:{this.state.name}  age:{this.state.age} num :{this.func()}</p>
            <button type="button" onClick={this.func2()}> לחץ לשינוי</button>
        </>
        )
    }
}

