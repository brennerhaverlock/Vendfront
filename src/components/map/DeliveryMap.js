const DeliveryMap = ({className}) => {
    return (
        <div className={`container-indent ${className ? className :''}`}>
            <div className="tt-box-map" style={{backgroundImage: `url('/assets/images/skins/foods/img-map-01.jpg')`}}>
                <h6 className="tt-title">DELIVERY<br/>AREA</h6>
            </div>
        </div>
    );
};

export default DeliveryMap;