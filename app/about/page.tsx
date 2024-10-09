import CssStyle from "./about.module.css"

console.log(CssStyle, "Css-style")

function AboutPage(){
    return(
       <div> <h2 className={CssStyle.bgc}> this is second web page</h2>
       </div>
    )
}
export default AboutPage