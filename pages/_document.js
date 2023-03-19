// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;700;800&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="..." />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}