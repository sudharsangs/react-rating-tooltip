import React, { useEffect, useState } from 'react';
import './App.css';
function Star(props)  {

    const [selected,setSelected] = useState(props.selected)
    const [showTooltip,setShowToolTip] = useState(false)

    const mounted = useRef();
    useEffect(()=>{
        if(mounted.current){
            const {selected} = props;
            setSelected(selected);
        }
    },[selected])
   const onHover = () => {
        this.props.onHover(this.props.index);
        this.setState({
            showTooltip: true
        })
    }
  const   onMouseLeave = () => {
        this.props.onMouseLeave();
        this.setState({
            showTooltip: false
        })
    }
  const   selectStar = () => {
        this.props.selectStar(this.props.index)
    }

        return (
            <div key={props.key} onClick={selectStar} onMouseOver={onHover} onMouseOut={onMouseLeave} className="tp-container">
                {this.state.selected ? this.props.ActiveComponent : this.props.InActiveComponent}
                {this.state.showTooltip && this.props.tpText && <span className="tooltiptext" style={this.props.tooltipStyle}>{this.props.tpText}</span>}
            </div>
        );
    }


export default Star;
