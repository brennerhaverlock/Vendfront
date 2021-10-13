import Link from "next/link";

const SocialLink = ({url, children, className}) => {
    return (
        <Link href={url}>
            <a target="_blank" className={className ? className : ''}>
                {children}
            </a>
        </Link>
    );
};

export default SocialLink;