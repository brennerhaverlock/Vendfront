import {Container} from "react-bootstrap";

const CopyrightThree = ({className, dark}) => {
    return (
        <div className={`tt-footer-custom ${className ? className : ''} ${dark ? 'tt-color-scheme-04' : ''}`}>
            <Container>
                <div className="tt-row">
                    <div className="tt-col-center">
                        <div className="tt-col-item">
                            <div className="tt-box-copyright ht-copy">
                                &copy; Wokiee {new Date().getFullYear()}. Made with <i className="text-danger icon-h-37"/> by <a
                                href="https://hasthemes.com" target="_blank" rel="noopener noreferrer">HasThemes</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CopyrightThree;