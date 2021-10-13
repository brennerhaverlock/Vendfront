import {Tooltip as Tippy} from "react-tippy";
import PropTypes from "prop-types";

const Tooltip = ({content, position, className, children, style}) => {
    return (
        <Tippy
            title={content}
            position={position ? position : 'top'}
            trigger="mouseenter"
            arrow={true}
            arrowSize="small"
            duration={200}
            theme="light"
            size="small"
            style={style}
            className={className}
        >
            {children}
        </Tippy>
    );
};

Tooltip.propTypes = {
    content: PropTypes.string.isRequired
};

export default Tooltip;