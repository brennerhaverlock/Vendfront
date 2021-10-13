import Link from "next/link";
import {useContext} from "react";
import Widget from "@components/widget";
import {toCapitalize} from "@utils/toCapitalize";
import accountData from "@data/account-menu.json";
import {arrSortByCharacter} from "@utils/method";
import {Col, Container, Row} from "react-bootstrap";
import {ProductsContext} from "@global/ProductsContext";
import {getProductsUniqueCategories} from "@utils/product";
import SocialIcons from "@components/newsletter/elements/Icons";
import NewsletterForm from "@components/newsletter/elements/Form";

const WidgetsTwo = ({className, dark, colorScheme}) => {
    const {products} = useContext(ProductsContext);
    const cats = getProductsUniqueCategories(products, 6);
    const categories = arrSortByCharacter(cats);

    return (
        <div className={`tt-footer-col ${className ? className : ''} ${dark ? 'tt-color-scheme-03' : ''} ${!dark ? colorScheme :''}`}>
            <Container>
                <Row>
                    <Col md={6} lg={3}>
                        <Widget title="CATEGORIES">
                            <ul className="tt-list">
                                {categories.sort().map(category => (
                                    <li key={category}>
                                        <Link href={`/product/category/${category}`}>
                                            <a>{toCapitalize(category.toLowerCase())}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Widget>
                    </Col>

                    <Col md={6} lg={3}>
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

                    <Col lg={6}>
                        <div className="tt-newsletter">
                            <Widget title="NEWSLETTER SIGNUP">
                                <p>Sign up for our e-mail and be the first who know our special offers! Furthermore, we
                                    will give a 15% discount on the next order after you sign up.</p>
                                <NewsletterForm/>
                            </Widget>

                            <SocialIcons/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

WidgetsTwo.defaultProps = {
    colorScheme: "tt-color-scheme-01",
    dark: false
}

export default WidgetsTwo;