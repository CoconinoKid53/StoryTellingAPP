import button from "./button.module.css"

function EmphasizedButton({content}){
    return(
        <button className={button.emphasized}><a href="#">{content}</a></button>
    )
}

export default EmphasizedButton;