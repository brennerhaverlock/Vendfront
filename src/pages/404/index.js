import Link from "next/link";
import Head from "next/head";
import {Fragment} from "react";

const Page404 = () => {
    return (
        <Fragment>
            <Head>
                <title>404 ERROR - Page can't be found!</title>
            </Head>

            <div className="tt-offset-0 container-indent">
                <div className="tt-page404">
                    <div className="tt-page404-content">
                        <img src="/assets/images/no-placeholder/error.png" alt="404 not found error"/>
                        <h1 className="tt-title">THAT PAGE CAN’T BE FOUND.</h1>
                        <p>It looks like nothing was found at this location.</p>
                        <Link href="/"><a className="btn">GO TO HOME</a></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Page404;