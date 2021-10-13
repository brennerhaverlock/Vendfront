import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {toCapitalize} from "@utils/toCapitalize";

const Breadcrumb = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {breadcrumb: path.replace(/-/g, ' '), href: '/' + linkPath.slice(0, i + 1).join('/')};
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    return (
        <div className="tt-breadcrumb">
            <div className="container">
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    {breadcrumbs?.map((breadcrumb, i) => (
                        breadcrumbs.length !== (i + 1) ? (
                            <li key={breadcrumb.breadcrumb}>
                                <Link href={breadcrumb.href}><a>{toCapitalize(breadcrumb.breadcrumb)}</a></Link>
                            </li>
                        ) : (
                            <li key={breadcrumb.breadcrumb}>
                                {toCapitalize(breadcrumb.breadcrumb).replace(/\?(.*)/g, '')}
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumb;