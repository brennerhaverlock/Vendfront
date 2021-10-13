import PropType from "prop-types";

const SortBy = ({onSortHandler}) => {
    return (
        <select defaultValue="default" onChange={(event => onSortHandler(event.target.value))}>
            <option value="default">Default</option>
            <option value="nameA2Z">Name (A-Z)</option>
            <option value="nameZ2A">Name (Z-A)</option>
            <option value="priceLow2High">Price (Low to High)</option>
            <option value="priceHigh2Low">Price (High to Low)</option>
        </select>
    );
};

SortBy.propTypes = {
    onSortHandler: PropType.func.isRequired
}

export default SortBy;