const  Settings = ({className, isHidden, openHandler, closeHandler}) => {
    return (
        <div className={`tt-parent-box ${className}`}>
            <div className={`tt-multi-obj tt-dropdown-obj ${!isHidden ? 'active' : null}`}>
                <button className="tt-dropdown-toggle" data-id="settings" onClick={openHandler}>
                    <i className="icon-f-79"/>
                </button>
                <div className="tt-dropdown-menu">
                    <div className="tt-mobile-add">
                        <button className="tt-close" data-id="settings" onClick={closeHandler}>Close</button>
                    </div>
                    <div className="tt-dropdown-inner">
                        <ul>
                            {data.map(item => (
                                <li key={item.id}>
                                    <button><i className={item.iconClass}/>{item.text}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const data = [
    {"id": 1, "iconClass": "icon-h-59", "text": "USD - US Dollar"},
    {"id": 2, "iconClass": "icon-h-60", "text": "EUR - Euro"},
    {"id": 3, "iconClass": "icon-h-61", "text": "GBP - British Pound Sterling"}
]

export default Settings;
