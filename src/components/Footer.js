import './Footer.css';

export default function Footer() {
    const widthHeight = 48;

    const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width={widthHeight} height={widthHeight}
        viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
    </svg>

    const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width={widthHeight} height={widthHeight}
        viewBox="0 0 24 24">
        <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
    </svg>

    const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width={widthHeight} height={widthHeight}
        viewBox="0 0 24 24">
        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
    </svg>

    const widthHeightSmallIcons = "16pt";

    const adressIcon = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={widthHeightSmallIcons} height={widthHeightSmallIcons} viewBox="0 0 90.000000 90.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M645 881 c-48 -22 -69 -44 -90 -94 -33 -79 -12 -143 75 -232 32 -33 60 -69 62 -80 2 -14 11 -20 28 -20 17 0 26 6 28 20 2 11 30 47 62 80 89 91 109 158 71 240 -22 48 -44 69 -94 90 -48 20 -93 19 -142 -4z m115 -121 c11 -11 20 -29 20 -40 0 -11 -9 -29 -20 -40 -11 -11 -29 -20 -40 -20 -11 0 -29 9 -40 20 -11 11 -20 29 -20 40 0 11 9 29 20 40 11 11 29 20 40 20 11 0 29 -9 40 -20z" />
            <path d="M355 796 c-107 -34 -186 -102 -232 -201 -24 -51 -28 -73 -28 -145 0 -72 4 -94 28 -146 36 -77 104 -145 182 -181 51 -24 73 -28 145 -28 72 0 94 4 145 28 112 52 195 163 211 281 l7 46 -37 -34 c-20 -19 -36 -39 -36 -45 0 -7 -23 -11 -57 -11 l-58 0 3 56 c3 47 0 59 -19 80 -12 13 -26 24 -30 24 -5 0 -9 -35 -11 -77 l-3 -78 -115 0 -115 0 0 85 0 85 108 3 c59 1 107 6 107 10 -1 4 -9 17 -19 30 -17 19 -28 22 -100 22 -45 0 -81 4 -81 9 0 5 8 29 19 53 23 54 63 92 90 85 19 -4 30 15 31 51 0 16 -81 15 -135 -2z m-45 -118 c-11 -24 -20 -51 -20 -60 0 -15 -9 -18 -51 -18 l-50 0 22 31 c21 30 94 89 110 89 4 0 -1 -19 -11 -42z m-40 -228 l0 -90 -54 0 -55 0 -7 45 c-3 25 -3 65 0 90 l7 45 55 0 54 0 0 -90z m20 -167 c0 -10 9 -37 20 -60 10 -24 15 -43 11 -43 -16 0 -89 59 -110 89 l-22 31 50 0 c42 0 51 -3 51 -17z m260 8 c0 -43 -69 -141 -100 -141 -31 0 -100 98 -100 141 0 5 45 9 100 9 55 0 100 -4 100 -9z m139 -22 c-21 -30 -94 -89 -110 -89 -4 0 1 19 11 43 11 23 20 50 20 60 0 14 9 17 51 17 l50 0 -22 -31z" />
        </g>
    </svg>

    const phoneIcon = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={widthHeightSmallIcons} height={widthHeightSmallIcons} viewBox="0 0 90.000000 90.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M193 790 c-37 -22 -73 -86 -73 -127 0 -84 62 -187 194 -322 141 -145 262 -221 349 -221 71 1 169 93 142 136 -5 8 -50 38 -99 67 l-88 51 -48 -27 c-26 -15 -53 -27 -59 -27 -14 0 -145 124 -173 163 l-22 30 29 52 28 53 -33 58 c-82 146 -88 150 -147 114z" />
        </g>
    </svg>

    const emailIcon = <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={widthHeightSmallIcons} height={widthHeightSmallIcons} viewBox="0 0 96.000000 96.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M109 781 c-19 -16 -22 -23 -13 -38 13 -21 362 -243 384 -243 14 0 337 198 372 228 23 19 23 27 -2 52 -19 19 -33 20 -369 20 -330 0 -350 -1 -372 -19z" />
            <path d="M676 524 c-99 -63 -187 -114 -196 -114 -9 0 -95 50 -192 110 -97 61 -183 110 -192 110 -14 0 -16 -24 -16 -210 0 -211 0 -211 25 -235 l24 -25 351 0 351 0 25 25 24 24 -2 212 c-2 131 -7 213 -13 215 -5 1 -91 -49 -189 -112z" />
        </g>
    </svg>

    return (
        <footer className="footer">
            <div className='social-media-box'>
                <SocialMediaIcon
                    linkTo={"https://www.facebook.com/FABIOuganda"}
                    svgCode={facebookIcon}
                />
                <SocialMediaIcon
                    linkTo={"https://twitter.com/FABIOUGANDA"}
                    svgCode={twitterIcon}
                />
                <SocialMediaIcon
                    linkTo={"https://www.instagram.com/fabiouganda_official/"}
                    svgCode={instagramIcon}
                />
            </div>

            <a className="adress" href="https://www.google.at/maps/place/First+African+Bicycle+Information+Organisation/@0.4251795,33.2041249,17z/data=!3m1!4b1!4m6!3m5!1s0x177e7b98bc93db09:0x78b50df53d9e6638!8m2!3d0.4251795!4d33.2063189!16s%2Fg%2F1hc3qyprg"
                target="_blank" rel="noreferrer">
                {adressIcon}
                P.O. Box 1620 &bull; Gabula Road 205b &bull; Jinja, Uganda
            </a>
            <a className="tel" href="tel:info@fabio.or.ug">
                {phoneIcon}
                +256 754 577003
            </a>
            <a className="email" href="mailto:info@fabio.or.ug">
                {emailIcon}
                info@fabio.or.ug
            </a>

            <a className="copyright" href='https://fabio.or.ug/' target="_blank" rel="noreferrer">Fabio &copy;2023</a>
        </footer>
    );
};

function SocialMediaIcon({ linkTo, svgCode }) {
    return (
        <a className="social-media-icon" href={linkTo} target="_blank" rel="noreferrer">
            {svgCode}
        </a>
    )
}