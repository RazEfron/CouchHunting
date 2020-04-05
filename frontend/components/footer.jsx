import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="icons-container-footer">
                    <a href="https://github.com/RazEfron/CouchHunting">
                        <img src={window.githubIcon} alt="" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;