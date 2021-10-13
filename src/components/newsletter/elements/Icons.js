import socialMedia from "@data/social-media.json";
import SocialLink from "@components/social-link";

const SocialIcons = () => {
    return (
        <ul className="tt-social-icon">
            {socialMedia.map(social => (
                <li key={social.id}>
                    <SocialLink
                        url={`https://www.${social.media}.com/${social.username}`}
                        className={social.iconClass}
                    />
                </li>
            ))}
        </ul>
    );
};

export default SocialIcons;