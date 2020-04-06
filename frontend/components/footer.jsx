import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="icons-container-footer">
                    <a href="https://github.com/RazEfron/CouchHunting" target="_blank">
                        <img src={window.githubIcon} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/raz-efron/" target="_blank">
                        <img src={window.linkedinLogo} alt="" />
                    </a>
                    <a href="https://angel.co/u/raz-efron" target="_blank">
                        <img src={window.angelistLogo} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;