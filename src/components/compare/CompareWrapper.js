import {useContext} from "react";
import {Container} from "react-bootstrap";
import {CompareContext} from "@global/CompareContext";
import CompareProducts from "@components/compare/CompareProducts";

const CompareWrapper = () => {

    const {compareList} = useContext(CompareContext);

    return (
        <Container>
            <h1 className="tt-title-subpages noborder">
                COMPARING <span>{compareList.length}</span> PRODUCTS
            </h1>
            <div className="tt-compare-table02 mt-0">
                <div className="tt-col-title">
                    <div className="title-item compare_row compare_row_01"/>
                    <div className="title-item compare_row compare_row_02">
                        Descriptions
                    </div>
                    <div className="title-item compare_row compare_row_03">Vendor</div>
                    <div className="title-item compare_row compare_row_04">Color</div>
                    <div className="title-item compare_row compare_row_05">Size</div>
                    <div className="title-item compare_row compare_row_06">Material</div>
                    <div className="title-item compare_row compare_row_07"/>
                </div>

                <CompareProducts/>
            </div>
        </Container>
    );
};

export default CompareWrapper;