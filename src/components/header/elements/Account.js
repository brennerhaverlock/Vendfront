import Link from "next/link";
import data from "@data/account-menu.json";

const Account = ({className, isHidden, openHandler, closeHandler}) => {
    return (
        <div className={`tt-parent-box ${className}`}>
            <div className={`tt-account tt-dropdown-obj ${!isHidden ? 'active' : null}`}>
                <button className="tt-dropdown-toggle" data-id="account" onClick={openHandler} >
                    <i className="icon-f-94"/>
                </button>
                <div className="tt-dropdown-menu">
                    <div className="tt-mobile-add">
                        <button className="tt-close" data-id="account" onClick={closeHandler}>Close</button>
                    </div>
                    <div className="tt-dropdown-inner">
                        <ul>
                            {data.map(item => (
                                <li key={item.id}>
                                    <Link href={item.link}>
                                        <a><i className={item.iconClass}/>{item.text}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
