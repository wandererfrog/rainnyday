import React,{useState} from 'react'
import './OptionsMenu.css'

function OptionsMenu({options}){
    const [isOpen,setOpen] = useState(false)

    return (
        <div className="options-menu">
            <button className="options-menu-icon" onClick={()=>{ setOpen((isOpen) ? false : true )}}>
                <i className="options-menu-button lnr lnr-cog"></i>
            </button>
            {
                (isOpen) ?
                (<div className="options-menu-dropdown animated flipInX">
                    {
                        options.map((opt)=>{
                            return (
                                <div className="options-menu-item" onClick={opt.callback.bind(this)} >
                                    {opt.label}
                                </div>
                            )
                        })
                    }
                </div>)
                : null
            }
            
        </div>
    )
}

export default OptionsMenu;