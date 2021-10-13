import Link from "next/link";

const BrandOne = ({className, logo, link}) => {
    return (
        <Link href={link ? link : '/'}>
            <a className={`tt-img-box ${className ? className : ''}`}>
                <img src={logo} alt="brand"/>
            </a>
        </Link>
    );
};

export default BrandOne;