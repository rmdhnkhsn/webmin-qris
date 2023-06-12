<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    <style>
        @font-face {
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            src: url({{ url("/fonts/Nunito-Regular.ttf") }});
        }
        @font-face {
            font-family: OpenSansBold;
            src: url({{ url("/fonts/OpenSans-Bold.ttf") }});
        }
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: Nunito, sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }
        .full-height {
            height: 100vh;
        }
        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }
        .position-ref {
            position: relative;
        }
        .code {
            text-align: center;
        }
        .message {
            font-size: 16px;
            text-align: center;
        }
        @keyframes gstrokeanim {
            0% {
                stroke-width: 6;
            }
            50% {
                stroke-width: 0;
            }
            100% {
                stroke-width: 6;
            }
        }
        .text {
            fill: none;
            stroke-width: 6;
            stroke-linejoin: round;
            stroke-dasharray: 70 330;
            stroke-dashoffset: 0;
            -webkit-animation: stroke 6s infinite linear;
            animation: stroke 6s infinite linear;
        }

        .text:nth-child(5n + 1) {
            stroke: #b71c1c;
            -webkit-animation-delay: -1.2s;
            animation-delay: -1.2s;
        }

        .text:nth-child(5n + 2) {
            stroke: #FF6F00;
            -webkit-animation-delay: -2.4s;
            animation-delay: -2.4s;
        }

        .text:nth-child(5n + 3) {
            stroke: #636b6f;
            -webkit-animation-delay: -3.6s;
            animation-delay: -3.6s;
        }

        .text:nth-child(5n + 4) {
            stroke: #01579B;
            -webkit-animation-delay: -4.8s;
            animation-delay: -4.8s;
        }

        .text:nth-child(5n + 5) {
            stroke: #1B5E20;
            -webkit-animation-delay: -6s;
            animation-delay: -6s;
        }

        @-webkit-keyframes stroke {
            100% {
                stroke-dashoffset: -400;
            }
        }

        @keyframes stroke {
            100% {
                stroke-dashoffset: -400;
            }
        }

        /*////////////////////v animation//////////////////*/

        .text1 {
            fill: none;
            stroke-linejoin: round;
            stroke-dasharray: 1160;
            stroke-dashoffset: 1160;
            -webkit-animation: vstroke 6s infinite linear;
            animation: vstroke 6s infinite ease-in-out;

        }

        .text1:nth-child(3n+3) {
            stroke-width: 6;
            stroke: #636b6f;
            -webkit-animation-delay: 0s;
            animation-delay: 00s;
        }

        .text1:nth-child(3n+1) {
            stroke: #FFB300;
            stroke-width: 1;
            -webkit-animation-delay: .2s;
            animation-delay: -.2s;
        }

        .text1:nth-child(3n+2) {
            stroke: #b71c1c;
            stroke-width: 2;
            -webkit-animation-delay: -.1s;
            animation-delay: -.1s;
        }


        @keyframes vstroke {
            100% {
                stroke-dashoffset: 0;
            }
        }
        /*///////////////// Other styles /////////////////////////*/
        /*html, body {*/
        /*    height: 100%;*/
        /*}*/
        body {
            /*background: #212121;*/
            background-size: .2em 100%;
            margin: 0;
        }
        svg {
            position: relative;
            font: 24em/1 OpenSansBold, sans-serif;
            /*font-size: 24em;*/
            /*font-family: OpenSansBold, sans-serif;*/
            text-transform: uppercase;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="code">
        <svg viewBox="0 0 1500 300">
            <!--pattern-->
            <defs>
                <pattern id="GPattern" x="0" y="0" width="20" height="20"
                         patternUnits="userSpaceOnUse"
                         patternTransform="rotate(35)">
                    <animateTransform attributeType="xml"
                                      attributeName="patternTransform"
                                      type="rotate"
                                      from="35"
                                      to="395"
                                      begin="0"
                                      dur="160s" repeatCount="indefinite"/>
                    <circle cx="10" cy="10" r="10" stroke="none" fill="yellow">
                        <animate attributeName="r"
                                 type="xml"
                                 from="1" to="1"
                                 values="1; 10; 1"
                                 begin="0s" dur="2s"
                                 repeatCount="indefinite"
                        />
                    </circle>
                </pattern>
            </defs>

            <!-- Symbol -->
            <symbol id="s-text">
                <text text-anchor="middle"
                      x="30%" y="50%" dy=".35em">
                    @yield('code1')
                </text>
            </symbol>
            <symbol id="v-text">
                <text text-anchor="middle"
                      x="50%" y="50%" dy=".35em">
                    @yield('code2')
                </text>
            </symbol>
            <symbol id="g-text">
                <text text-anchor="middle"
                      x="70%" y="50%" dy=".35em">
                    @yield('code3')
                </text>
            </symbol>
            <!-- Duplicate symbols -->
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#s-text" class="text"></use>
            <use xlink:href="#v-text" class="text1"></use>
            <use xlink:href="#v-text" class="text1"></use>
            <use xlink:href="#v-text" class="text1"></use>
            <use xlink:href="#g-text" class="text"></use>
            <use xlink:href="#g-text" class="text"></use>
            <use xlink:href="#g-text" class="text"></use>
            <use xlink:href="#g-text" class="text"></use>
            <use xlink:href="#g-text" class="text"></use>
        </svg>
        <div class="message" style="padding: 10px;">
           @yield('message')
        </div>
    </div>
</div>
</body>
</html>
