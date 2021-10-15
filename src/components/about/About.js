import {Container} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";

const AboutTwo = () => {
    return (
        <div className="container-indent">
            <Container>
                <SectionTitle
                    title="ABOUT OUR STORE"
                />

                <div className="tt-text-box01">
                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                </div>
            </Container>
        </div>
    );
};

export default AboutTwo;