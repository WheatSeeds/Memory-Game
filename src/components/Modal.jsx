const Modal = (props) => {
    const visible = [];
    if (props.modalVisible) {
        visible.push('active')
    }

    return (
        <div id='modal' className={visible.join(' ')}>
            <div className='modal-content'>
                {props.playerIsWin === true
                    ? <img src='./gifs/ezgif-7c539b52674b82.gif'/>
                    : <img src='./gifs/ezgif-2065f43b84edce.gif'/>
                }
            </div>
            <div id='user-result'>
                <div className='user-result-block'>Your Score: {props.currentScore}</div>
                <div className='user-result-block'>Your Best Score:{props.bestScore}</div>
            </div>
            <button className='modal-btn' onClick={() => {
                props.setModalVisible(false);
                props.reloadGame();
            }}>Play</button>
        </div>
    );
};

export default Modal;