const UserStats = (props) => {
    return (
        <div id='user-stats'>
            <span>Current Score: {props.currentScore}</span>
            <span>Best Score: {props.bestScore}</span>
        </div>
    );
};

export default UserStats;