import Rect from 'react'

let func=function (){
    return 4*4*4
}

export default function Person(props){
    const {name,age}=props
    return (
        <>
            <p>name:{name}  age:{age}</p>
        </>
    )

}
Person.defaultProps={
    name:'lea',
    age:22
}