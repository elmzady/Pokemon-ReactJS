function Footer(){
    return(
        <div className = 'footer flex justify-center my-3'>
            <div className = 'flex justify-around'>
                <a href = "https://www.youtube.com" target = "_blank">
                    <img className = "mx-2" width = "28px" height = "28px" src = '/web.png' alt = 'website' />
                </a>

                <a href = "" target = "_blank">
                    <img className = "mx-2" width = "28px" height = "28px" src = '/github.png' alt = 'github' />
                </a>

                <a href = "" target = "_blank">
                    <img className = "mx-2" width = "28px" height = "28px" src = '/linkedin.png' alt = 'linkedin' />
                </a>
            </div>
        </div>
    );
}

export default Footer;
