import React from 'react'

function CuteSlider() {

    return (
        <div>
            <div id="defs" class="defilee-visually-hidden">
                <svg width="0" height="0" viewBox="0 0 600 600" id="axure-svg">
                    <defs>
                        <clipPath id="path-1" transform="translate(300,300)">
                            <path
                                data-morph-to="M 107.4 -157.9 C 144.8 -143 184.7 -122.8 213.5 -89 C 242.2 -55.1 259.7 -7.6 254.7 37.6 C 249.8 82.9 222.4 125.9 184.7 148.4 C 147.1 170.8 99.2 172.7 57.4 176.2 C 15.6 179.7 -20.1 184.9 -53.3 177.1 C -86.6 169.4 -117.3 148.9 -148.6 123.1 C -179.9 97.2 -211.7 66.1 -218.4 30.4 C -225.1 -5.3 -206.7 -45.7 -193.1 -93.4 C -179.4 -141.2 -170.5 -196.4 -139.2 -214 C -107.8 -231.7 -53.9 -211.8 -9.5 -197.1 C 35 -182.4 69.9 -172.8 107.4 -157.9 Z"
                                class="anime"
                                d="M 109 -171.3 C 151 -142.7 201.5 -128.9 229 -96.4 C 256.4 -64 260.8 -12.9 242 26.3 C 223.2 65.6 181.1 93 149 127.8 C 116.8 162.5 94.6 204.6 61.7 217.7 C 28.7 230.9 -14.9 215.2 -54.3 197.8 C -93.7 180.4 -128.9 161.3 -151.4 132.6 C -174 104 -184 66 -196.4 24.1 C -208.8 -17.7 -223.6 -63.3 -217 -108 C -210.4 -152.8 -182.5 -196.7 -142.8 -226.4 C -103.1 -256.1 -51.5 -271.5 -9 -257.5 C 33.5 -243.5 67 -200 109 -171.3 Z" />
                        </clipPath>
                        <clipPath id="path-2" transform="translate(300,300)">
                            <path
                                data-morph-to="M 133.3 -193.4 C 174.7 -180.8 211.5 -147.1 204.2 -109.1 C 196.9 -71.1 145.5 -28.8 122.8 6.4 C 100.2 41.5 106.4 69.6 102 105.5 C 97.5 141.5 82.4 185.4 59.2 184.3 C 36 183.3 4.6 137.2 -23.2 113.4 C -51.1 89.6 -75.4 88 -92.7 76 C -110.1 63.9 -120.4 41.3 -145.1 8 C -169.9 -25.3 -209.1 -69.3 -205.3 -100.4 C -201.4 -131.4 -154.5 -149.4 -113.1 -162 C -71.7 -174.6 -35.9 -181.8 5 -189.7 C 46 -197.5 91.9 -206 133.3 -193.4 Z"
                                class="anime"
                                d="M 87.5 -116.1 C 125.2 -111.9 175.9 -107.7 182.7 -85.5 C 189.6 -63.4 152.7 -23.4 138.5 14.3 C 124.3 51.9 132.8 87.2 125.4 124.9 C 118 162.6 94.6 202.7 65.6 200.8 C 36.6 198.9 2 155.1 -31.7 133.5 C -65.4 112 -98.1 112.6 -132 99.7 C -166 86.9 -201.3 60.4 -194.4 34.8 C -187.4 9.1 -138.3 -15.8 -107.4 -34.8 C -76.5 -53.8 -64 -66.8 -49.1 -81.6 C -34.2 -96.3 -17.1 -112.6 3.9 -118.7 C 24.9 -124.7 49.7 -120.4 87.5 -116.1 Z" />
                        </clipPath>
                        <clipPath id="path-3" transform="translate(300,300)">
                            <path
                                data-morph-to="M 179.9 -148.8 C 223.3 -89.1 241.8 -14.8 227.9 54.3 C 213.9 123.4 167.5 187.4 106.5 214 C 45.6 240.6 -29.9 229.7 -95 198.1 C -160 166.4 -214.5 113.9 -230.4 50.7 C -246.4 -12.5 -223.6 -86.4 -178.8 -146.4 C -134 -206.5 -67 -252.7 0.7 -253.3 C 68.3 -253.8 136.6 -208.6 179.9 -148.8 Z"
                                class="anime"
                                d="M 166.3 -136.4 C 201.2 -88.8 205.4 -20.5 190.1 42 C 174.7 104.6 139.9 161.3 88.4 187.6 C 37 213.8 -31 209.6 -92.6 183.4 C -154.3 157.1 -209.8 108.8 -224.3 49.9 C -238.8 -9.1 -212.4 -78.8 -168.2 -128.5 C -124.1 -178.3 -62 -208.1 1.8 -209.6 C 65.7 -211 131.3 -184.1 166.3 -136.4 Z" />
                        </clipPath>
                        <clipPath id="path-4" transform="translate(300,300)">
                            <path
                                data-morph-to="M 70.5 -74.2 C 95.7 -24.7 123.4 4.9 128.3 47.6 C 133.1 90.3 115.2 146 69.9 181.9 C 24.7 217.7 -47.7 233.7 -111.4 210.8 C -175 188 -229.8 126.5 -220.6 76.3 C -211.4 26.1 -138.2 -12.8 -90.7 -67.5 C -43.3 -122.2 -21.6 -192.6 0.5 -193 C 22.7 -193.4 45.3 -123.8 70.5 -74.2 Z"
                                class="anime"
                                d="M 167.9 -131.9 C 201.9 -91.3 202.8 -22.4 181 28.5 C 159.1 79.4 114.5 112.2 66.4 133.7 C 18.4 155.3 -33.1 165.5 -75.5 148.3 C -117.8 131.1 -151 86.6 -154.3 43.5 C -157.5 0.4 -130.7 -41.3 -100 -81.1 C -69.3 -120.9 -34.7 -159 16.2 -171.9 C 67 -184.7 134 -172.5 167.9 -131.9 Z" />
                        </clipPath>
                        <clipPath id="path-5" transform="translate(300,300)">
                            <path
                                data-morph-to="M 58.3 -47 C 72.3 -29 78 -4.9 69.3 8.7 C 60.5 22.4 37.2 25.6 13 43.6 C -11.1 61.6 -36.2 94.3 -65 95.5 C -93.8 96.8 -126.3 66.5 -133.3 31.6 C -140.3 -3.3 -121.8 -42.8 -95.3 -63.7 C -68.8 -84.5 -34.4 -86.8 -6.1 -81.9 C 22.2 -77 44.3 -65 58.3 -47 Z"
                                class="anime"
                                d="M 78.3 -67.6 C 102.3 -32.3 123.3 0.3 122.6 37.9 C 121.9 75.4 99.6 117.9 70.7 122.5 C 41.8 127 6.4 93.7 -41.3 74.9 C -88.9 56.1 -148.8 51.9 -160.4 28.7 C -171.9 5.6 -135.2 -36.5 -100.4 -74.3 C -65.7 -112 -32.8 -145.5 -2.9 -143.2 C 27.1 -140.9 54.2 -102.9 78.3 -67.6 Z" />
                        </clipPath>
                        <clipPath id="path-6" transform="translate(300,300)">
                            <path
                                data-morph-to="M 53.9 -49.2 C 67.2 -40.5 73.6 -20.3 72.4 -1.2 C 71.2 17.9 62.5 35.8 49.2 83.8 C 35.8 131.8 17.9 209.9 -7.4 217.3 C -32.8 224.8 -65.5 161.5 -107.7 113.5 C -149.9 65.5 -201.4 32.8 -188.8 12.6 C -176.2 -7.5 -99.4 -15.1 -57.3 -23.8 C -15.1 -32.4 -7.5 -42.2 6.4 -48.6 C 20.3 -54.9 40.5 -57.9 53.9 -49.2 Z"
                                class="anime"
                                d="M 124.8 -128.3 C 130.8 -118.8 83.4 -59.4 56.8 -26.6 C 30.1 6.1 24.3 12.3 18.3 54.9 C 12.3 97.6 6.1 176.8 -7 183.7 C -20 190.7 -40.1 125.4 -63.6 82.7 C -87.1 40.1 -114 20 -122.8 -8.7 C -131.5 -37.5 -122 -75 -98.5 -84.5 C -75 -94 -37.5 -75.5 11 -86.4 C 59.4 -97.4 118.8 -137.8 124.8 -128.3 Z" />
                        </clipPath>
                        <clipPath id="path-7" transform="translate(300,300)">
                            <path
                                data-morph-to="M 124.8 -128.3 C 130.8 -118.8 83.4 -59.4 56.8 -26.6 C 30.1 6.1 24.3 12.3 18.3 54.9 C 12.3 97.6 6.1 176.8 -7 183.7 C -20 190.7 -40.1 125.4 -63.6 82.7 C -87.1 40.1 -114 20 -122.8 -8.7 C -131.5 -37.5 -122 -75 -98.5 -84.5 C -75 -94 -37.5 -75.5 11 -86.4 C 59.4 -97.4 118.8 -137.8 124.8 -128.3 Z"
                                class="anime"
                                d="M 42.7 -33.9 C 61.9 -23.6 88.5 -11.8 113.6 25.1 C 138.7 62 162.3 124 143.1 129.8 C 124 135.6 62 85.3 16.7 68.6 C -28.5 51.9 -57 68.7 -90 62.9 C -123 57 -160.5 28.5 -151 9.5 C -141.4 -9.4 -84.9 -18.9 -51.9 -29.2 C -18.9 -39.5 -9.4 -50.8 1.2 -51.9 C 11.8 -53.1 23.6 -44.2 42.7 -33.9 Z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <div class="defilee__outer">
                <section id="defilee" class="defilee__ctnr">
                    <h1>The future will <br />either be green<br />or not at all.</h1>
                    <div class="defilee__div defilee__div ">
                        <svg class="item__svg" width="400px" height="400px" viewBox="0 0 600 600"
                            preserveAspectRatio="xMidYMid slice">
                            <g clip-path="url(#path-1)">
                                <image class="item__img" xlinkHref="https://picsum.photos/1200/1200?image=481 " x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>

                    <div class="defilee__div defilee__div--special">
                        <svg class="item__svg" width="500px" height="500px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-2)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=480" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special1 ">
                        <svg class="item__svg" width="400px" height="400px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-3)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=476" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special3 ">
                        <svg class="item__svg" width="400px" height="400px" viewBox="0 0 600 600"
                            preserveAspectRatio="xMidYMid slice">
                            <g clip-path="url(#path-4)">
                                <image class="item__img" xlinkHref="https://picsum.photos/1200/1200?image=472 " x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special4">
                        <svg class="item__svg" width="500px" height="500px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-5)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=89" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special1 ">
                        <svg class="item__svg" width="600px" height="600px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-6)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=33" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special--special3 ">
                        <svg class="item__svg" width="700px" height="700px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-7)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=94" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div">
                        <svg class="item__svg" width="500px" height="500px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-1)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=132" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>

                    <div class="defilee__div--special2">
                        <svg class="item__svg" width="400px" height="400px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-2)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=393" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>

                    <div class="defilee__div defilee__div ">
                        <svg class="item__svg" width="400px" height="400px" viewBox="0 0 600 600"
                            preserveAspectRatio="xMidYMid slice">
                            <g clip-path="url(#path-4)">
                                <image class="item__img" xlinkHref="https://picsum.photos/1200/1200?image=468 " x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special">
                        <svg class="item__svg" width="500px" height="500px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-6)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=557" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div--special4 ">
                        <svg class="item__svg" width="600px" height="600px" viewBox="0 0 600 600">
                            <g clip-path="url(#path-3)">
                                <image class="item__img" xlinkHref="https://picsum.photos/900/900?image=560" x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                    <div class="defilee__div defilee__div ">
                        <svg class="item__svg" width="600px" height="600px" viewBox="0 0 600 600"
                            preserveAspectRatio="xMidYMid slice">
                            <g clip-path="url(#path-7)">
                                <image class="item__img" xlinkHref="https://picsum.photos/1200/1200?image=562 " x="0" y="0"
                                    width="100%" height="100%" />
                            </g>
                        </svg>
                    </div>
                </section>
            </div>
        </div>
    )


}


export default CuteSlider