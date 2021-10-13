import Link from "next/link";
import {useContext} from "react";
import Widget from "@components/widget";
import {toCapitalize} from "@utils/toCapitalize";
import {Col, Container, Row} from "react-bootstrap";
import {ProductsContext} from "@global/ProductsContext";
import SocialIcons from "@components/newsletter/elements/Icons";
import {CopyrightThree as Copyright} from "@components/footer/elements/copyright";
import {getProductsUniqueCategories, getProductsUniqueColors} from "@utils/product";

const FooterSeven = ({className}) => {
    const {products} = useContext(ProductsContext);
    const colors = getProductsUniqueColors(products).slice(0, 7);
    const categories = getProductsUniqueCategories(products, 7);

    return (
        <footer id="tt-footer" className={`${className ? className : ''}`}>
            <div className="tt-footer-col tt-color-scheme-01">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className="tt-footer-box">
                                <address className="tt-address01">
                                    <span className="tt-text-large">
                                        +566 4774 9930
                                    </span>
                                    All week from 9 am to 9 pm
                                </address>
                                <address className="tt-address02">
                                    Address: 7895 Piermont Dr NE Albuquerque, NM 198866, United States of America

                                    <Link href="mailto:info@mydomain.com">
                                        <div className="tt-link-icon">
                                            <span className="tt-text">info@mydomain.com</span>
                                        </div>
                                    </Link>
                                </address>

                                <SocialIcons/>
                            </div>
                        </Col>

                        <Col md={{span: 6, offset: 1}}>
                            <div className="tt-collapse-listing">
                                <Row>
                                    <Col md={6}>
                                        <Widget title="Shop By Color">
                                            <ul className="tt-list">
                                                {colors.map((color, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href="/shop"><a>{toCapitalize(color.name.replace('-', ' '))}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Widget>
                                    </Col>

                                    <Col md={6}>
                                        <Widget title="Categories">
                                            <ul className="tt-list">
                                                {categories.map((category, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href="/shop"><a>{toCapitalize(category.replace('-', ' '))}</a></Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Widget>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Copyright className="tt-color-scheme-01"/>
        </footer>
    );
};

export default FooterSeven;