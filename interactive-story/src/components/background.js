import background from "./background.module.css" 

function Background({children}){
    return(
        <div className={background.container}>
            {children}
        </div>
    )
}

export default Background;