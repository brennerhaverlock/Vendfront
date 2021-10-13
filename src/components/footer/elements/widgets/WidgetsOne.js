import Link from "next/link";
import {useContext} from "react";
import Widget from "@components/widget";
import {toCapitalize} from "@utils/toCapitalize";
import accountData from "@data/account-menu.json";
import {arrSortByCharacter} from "@utils/method";
import {Col, Container, Row} from "react-bootstrap";
import {getProductsUniqueCategories} from "@utils/product";
import {ProductsContext} from "@global/ProductsContext";

const WidgetsOne = ({className, dark}) => {
    const {products} = useContext(ProductsContext);
    const cats = getProductsUniqueCategories(products, 6);
    const categories = arrSortByCharacter(cats);

    return (
        <div className={`tt-footer-col tt-color-scheme-0${dark ? 3 : 1} ${className ? className : ''}`}>
            <Container>
                <Row>
                    <Col md={6} lg={2} xl={3}>
                        <Widget title="CATEGORIES">
                            <ul className="tt-list">
                                {categories.map(category => (
                                    <li key={category}>
                                        <Link href={`/product/category/${category}`}>
                                            <a>{toCapitalize(category.toLowerCase())}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Widget>
                    </Col>

                    <Col md={6} lg={2} xl={3}>
                        <Widget title="MY ACCOUNT">
                            <ul className="tt-list">
                                {accountData.map(item => (
                                    <li key={item.id}>
                                        <Link href={item.link}>
                                            <a>{item.text}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Widget>
                    </Col>

                    <Col md={6} lg={2} xl={3}>
                        <Widget title="ABOUT US">
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                                ut labore et dolore. Lorem ipsum dolor amet conse ctetur
                                adipisicing elit, sedo eiusmod tempor incididunt ut labore etdolore. </p>
                        </Widget>
                    </Col>

                    <Col md={6} lg={2} xl={3}>
                        <Widget title="CONTACT">
                            <address>
                                <p><span>Address:</span> 2548 Broaddus Maple Court Avenue, Madisonville KY 4783, USA</p>
                                <p><span>Phone:</span> +777 2345 7885; +777 2345 7886</p>
                                <p><span>Hours:</span> 7 Days a week from 10 am to 6 pm</p>
                                <p><span>E-mail:</span> <Link href="mailto:info@mydomain.com">info@mydomain.com</Link>
                                </p>
                            </address>
                        </Widget>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default WidgetsOne;