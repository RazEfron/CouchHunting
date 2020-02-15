import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                <div className="icons-container-footer">
                    <a onClick={() => alert('profile must be completed to start hunting')}>
                        <img src={window.githubIcon} alt="" />
                        <p>Github</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default Footer;