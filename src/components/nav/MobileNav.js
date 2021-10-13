import Link from "next/link";
import PropTypes from "prop-types";
import {getSiblings, getClosest, slideToggle, slideUp} from "@utils/method";

const MobileNav = ({className, mobileNavbarHandler, showMobileNavbar, navData}) => {
    const handleMenu = (e) => {
        const target = e.target;
        const hasSubmenus = getSiblings(target);
        hasSubmenus.length > 0 && e.preventDefault();
        target.classList.toggle('menu-expand');
        const parent = getClosest(target, "LI");
        const childNodes = parent.childNodes;
        const parentSiblings = getSiblings(parent);
        parentSiblings.forEach((sibling) => {
            const sibChildNodes = sibling.childNodes;
            sibChildNodes.forEach((child) => {
                if (child.classList.contains('mm-next-level')) {
                    child.classList.remove('menu-expand');
                }
                if (child.nodeName === "UL") {
                    slideUp(child, 300);
                }
            });
        });
        childNodes.forEach((child) => {
            if (child.nodeName === "UL") {
                slideToggle(child, 300);
            }
        });
    }

    return (
        <nav className={`panel-menu mobile-main-menu ${showMobileNavbar ? "mmitemopen" : null} ${className ? className : ''}`}>
            <div className="mmpanels">
                <div className="mmpanel mmopened mmcurrent" id="mm0">
                    <ul>
                        <li className="mm-close-parent">
                            <button className="mm-close" onClick={mobileNavbarHandler}>Close</button>
                        </li>
                        {navData.map(nav => (
                            <li key={nav.id}>
                                <Link href={nav?.link}>
                                    <a
                                        className={nav?.submenu || nav?.mega_menu ? 'mm-next-level' : ''}
                                        onClick={(event => handleMenu(event))}
                                    >
                                        {nav?.text}
                                    </a>
                                </Link>
                                {nav?.submenu && (
                                    nav?.submenu.map(subitem => (
                                        <ul key={subitem?.id}>
                                            <li className="title">{subitem?.title}</li>
                                            {subitem?.lists.map((item, idx) => (
                                                <li key={idx} className={item.badge}><Link href={item?.link}>{item?.text}</Link></li>
                                            ))}
                                        </ul>
                                    ))
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

MobileNav.propTypes = {
    mobileNavbarHandler: PropTypes.func.isRequired,
    showMobileNavbar: PropTypes.bool.isRequired,
    navData: PropTypes.array.isRequired
}

export default MobileNav;