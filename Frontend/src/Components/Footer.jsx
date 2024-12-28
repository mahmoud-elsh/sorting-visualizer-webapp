import React from "react"

function Footer(){
    return(
        <div>
            <footer>
                <a href="https://github.com/mahmoud-elsh"
                target="_blank">
                    My Github
                </a>
                <br></br>
                <a href="https://www.linkedin.com/in/mahmoud-elsharydah/"
                target="_blank">
                    Connect With Me
                </a>
                <br></br>
                Made with 
                <span style={{color: "red", fontWeight: "bold"}}> &lt;3 </span>
                by Mahmoud Elsharydah
            </footer>
        </div>
    );
}

export default Footer