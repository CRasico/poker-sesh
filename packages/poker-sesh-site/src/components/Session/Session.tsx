import { Component, ReactNode } from "react";

interface SessionProps {
    serviceName: string;
}

class Session extends Component {

    constructor(props: SessionProps) {
        super(props);
    }

    checkHealth() {
        alert('Healthy!');
        return;
    }

    render(): ReactNode {
        return (
            <div>
                <h1>Health Checker!</h1>
                <p>Check the Health of the Session Service</p>
                <button onClick={() => this.checkHealth()}>Health Check</button>
            </div>
        )
    }
}

export default Session;