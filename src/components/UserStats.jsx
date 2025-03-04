const UserStats = (props) => {
    return (
        <div id='user-stats'>
            <div className='user-stats-container'>
                <img className='user-stats-img' src='./images/cat.png' />
                <span>Current Score: {props.currentScore}</span>
            </div>
            <div className='user-stats-container'>
                <img className='user-stats-img'  src='./images/cup.png'/>
                <span>Best Score: {props.bestScore}</span>
            </div>
        </div>
    );
};

export default UserStats;