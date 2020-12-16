import React, {Fragment} from 'react'
import ReactFlow, {Controls, Background} from 'react-flow-renderer'
import { connect } from 'react-redux'

      
const Graph = (props) => {
  const elements = [
    { id: '1', data: { label: `${props.data.nameA} (${props.data.valA})`}, position: { x: 150, y: 100 }, style: {width:100} },
    { id: '2', data: { label: `${props.data.nameB} (${props.data.valB})`}, position: { x: 85, y: 200 }, style: {width:100} },
    { id: '3', data: { label: `${props.data.nameC} (${props.data.valC})`}, position: { x: 215, y: 200 }, style: {width:100} },
    { id: '4', data: { label: "Stay" }, position: { x: 175, y: 25 }, style: {width:50}},
    { id: 'e1-2', type:'smooth', source: '1', target: '2', animated: true, label:`${props.data.a2}%` },
    { id: 'e1-3', type:'smooth', source: '1', target: '3', animated: true, label:`${props.data.a3}%` },
    { id: 'e1-4', type:'smooth', source: '1', target: '4', animated: true, label:`${props.data.a1}%`},
    { id: '5', data: { label: `${props.data.nameB} (${props.data.valB})`}, position: { x: 450, y: 100 }, style: {width:100} },
    { id: '6', data: { label: `${props.data.nameA} (${props.data.valA})`}, position: { x: 385, y: 200 }, style: {width:100} },
    { id: '7', data: { label: `${props.data.nameC} (${props.data.valC})`}, position: { x: 515, y: 200 }, style: {width:100} },
    { id: '8', data: { label: "Stay" }, position: { x: 475, y: 25 }, style: {width:50}},
    { id: 'e5-6', type:'smooth', source: '5', target: '6', animated: true, label:`${props.data.b1}%` },
    { id: 'e5-7', type:'smooth', source: '5', target: '7', animated: true, label:`${props.data.b3}%` },
    { id: 'e5-8', type:'smooth', source: '5', target: '8', animated: true, label:`${props.data.b2}%`},
    { id: '9', data: { label: `${props.data.nameC} (${props.data.valC})`}, position: { x: 750, y: 100 }, style: {width:100} },
    { id: '10', data: { label: `${props.data.nameA} (${props.data.valA})`}, position: { x: 685, y: 200 }, style: {width:100} },
    { id: '11', data: { label: `${props.data.nameB} (${props.data.valB})`}, position: { x: 815, y: 200 }, style: {width:100} },
    { id: '12', data: { label: "Stay" }, position: { x: 775, y: 25 }, style: {width:50}},
    { id: 'e9-10', type:'smooth', source: '9', target: '10', animated: true, label:`${props.data.c1}%` },
    { id: 'e9-11', type:'smooth', source: '9', target: '11', animated: true, label:`${props.data.c2}%` },
    { id: 'e9-12', type:'smooth', source: '9', target: '12', animated: true, label:`${props.data.c3}%`},
  ]; 
  
  
  return(
    <Fragment>  
    <ReactFlow 
    elements={elements}
    style={{width:'100%', height:'40vh'}}
    >              
        <Controls/>
        <Background />
    </ReactFlow>    
    </Fragment>  
    );
}

const mapStateToProps = (state) => {
  return{
    data: state.data
  }
}

export default connect(mapStateToProps)(Graph)