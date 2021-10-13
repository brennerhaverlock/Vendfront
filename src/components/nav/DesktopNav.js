import Link from "next/link";
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";

const DesktopNav = ({className, navData}) => {
    return (
        <nav className={className}>
            <ul>
                {navData && (
                    navData.map(navItem => (
                        <li key={navItem.id}
                            className={`dropdown ${navItem.submenu ? 'tt-submenu' : ''} ${navItem.mega_menu ? 'megamenu' : 'tt-megamenu-col-01'}`}
                        >
                            <Link href={navItem.link}><a>{navItem.text}</a></Link>
                            {navItem?.submenu && (
                                <div className="dropdown-menu">
                                    <Row>
                                        <Col lg={12}>
                                            <Row className="tt-col-list">
                                                {navItem?.submenu && navItem?.submenu.map(subItem => (
                                                    <div className={`col-sm-${navItem?.mega_menu ? 3 : 12}`}
                                                         key={subItem.id}>
                                                        <h6 className="tt-title-submenu">
                                                            <Link href="/">
                                                                <span>{subItem.title}</span>
                                                            </Link>
                                                        </h6>
                                                        <ul className="tt-megamenu-submenu">
                                                            {subItem?.lists.map((item, index) => (
                                                                <li key={index} className={item.badge}>
                                                                    <Link href={item.link}>
                                                                        <a>
                                                                            {item.text}
                                                                            {item.badge && (
                                                                                <span
                                                                                    className={`tt-badge tt-${item.badge}`}>
                                                                                {item.badge === 'coming_soon' && 'COMING SOON'}
                                                                                    {item.badge === 'popular' && 'POPULAR'}
                                                                                    {item.badge === 'hot' && 'HOT'}
                                                                                    {item.badge === 'new' && 'NEW'}
                                                                            </span>
                                                                            )}
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}

                                                {navItem?.promo && (
                                                    <Col lg={3}>
                                                        <Link href="/shop" className="tt-promo-02">
                                                            <a><img src={navItem?.promo} alt="promo"/></a>
                                                        </Link>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </li>
                    ))
                )}
            </ul>
        </nav>
    );
};

DesktopNav.propTypes = {
    className: PropTypes.string,
    navData: PropTypes.array.isRequired
}

export default DesktopNav;
