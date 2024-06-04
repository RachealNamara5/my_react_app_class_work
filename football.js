import React from "react";

class GoalButton extends React.Component {
    handleClick = () => {
        alert("goal");
    }

    render() {
        return (
            <div className="GoalButton">
                <h1>My Football App Goal Alert</h1>
                <button onClick={this.handleClick}>Goal</button>
            </div>
        );
    }
}

export default GoalButton;

