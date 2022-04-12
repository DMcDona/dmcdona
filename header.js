

let headHTML = `  
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <link rel="schema.dcterms" href="http://purl.org/dc/terms/" />
    <link rel="canonical" href="" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="dcterms.title" content="" />
    <meta name="dcterms.description" content="" />
    <meta name="dcterms.creator" content="" />
    <meta name="dcterms.language" title="ISO639-2/T" content="eng" />
    <meta name="dcterms.issued" title="W3CDTF" content="" />
    <meta name="dcterms.modified" title="W3CDTF" content="" />
    <meta name="dcterms.spatial" content="Canada" />
    <meta name="dcterms.type" content="navigation page - institutional profile" />
    <meta name="dcterms.identifier" content="" />
    <script src="//assets.adobedtm.com/be5dfd287373/abb618326704/launch-3eac5e076135.min.js"></script>
    <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css" />
    <!-- -------------------------- -->
    <!--	Temp font awesome   -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/9090ff3cfc.js" crossorigin="anonymous"></script>
    <!--	End temp font awesome -->

    <link rel="stylesheet" href="https://pc-contactweb-pc.github.io/canada/pc_custom.css"> <!-- PC Custom CSS -->

    <!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>-->
    <link href="https://www.canada.ca/etc/designs/canada/wet-boew/assets/favicon.ico" rel="icon" type="image/x-icon" />
    <noscript>
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/noscript.min.css" />
    </noscript>
    <!-- Start provisional CSS for institutional page-->
    <style>
        .provisional.bg-cover {
            background-size: cover;
        }

        .provisional.bg-right {
            background-position: right;
        }

        .provisional.pb-3 {
            padding-bottom: 15px;
        }

        .provisional.btn-call-to-action {
            font-size: 1em;
        }

        .provisional.gc-featured-lnk {
            background: #31708f;
            margin-bottom: 0em;
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .provisional.gc-featured-lnk a {
            color: #fff
        }

        ul.feeds-cont li a {
            font-weight: bold;
        }

        .provisional.most-requested-bullets li {
            font-family: 'Lato', sans-serif;
            font-size: 17px;
            font-weight: 600;
            line-height: 26px;
            margin-top: 0
        }

        .provisional.most-requested-bullets .pddng-r-0 {
            padding-right: 0px;
        }

        .provisional.most-requested-bullets h2 {
            font-size: 1.2em;
        }

        .provisional.list-bld {
            font-weight: 600;
        }

        .provisional.followus h2 {
            font-size: 1.1em;
            margin-top: 10px;
        }

        .provisional.followus {
            padding: 0;
        }

        .provisional.followus h2 {
            display: block;
        }

        .provisional.followus h2,
        .provisional.followus ul {
            margin-left: 0;
        }

        .provisional.followus-vertical {
            line-height: 0em;
        }

        .provisional.followus-vertical,
        .provisional.followus {
            background-color: transparent;
        }

        .provisional.followus-vertical a {
            text-decoration: none;
        }

        .provisional.followus-vertical ul {
            display: block;
            list-style-type: none;
            margin-block-start: 1em;
            padding-inline-start: 1em;
            font-size: 16px;
            margin-block-end: 0em;
        }

        .provisional.followus-vertical ul li {
            margin-bottom: 15px;
        }

        .provisional.followus-vertical ul li:last-child {
            margin-bottom: 0px;
        }

        .provisional.followus-vertical ul li a {
            border: none;
            padding: 0px 5px;
        }

        .provisional.followus ul li a {
            border: none;
        }

        .provisional .social-lnk {
            position: relative;
            bottom: -18px;
            left: 45px;
        }

        .provisional.followus-vertical li {
            display: block;
            background-position: left;
        }

        .provisional.followus .facebook,
        .provisional.followus .twitter,
        .provisional.followus .youtube,
        .provisional.followus .instagram,
        .provisional.followus .linkedin {
            display: block;
            height: 38px;
            width: 38px;
        }

        /* remove this section if you do not want the new icons */
        .provisional.followus .facebook {
            background: url("https://design.canada.ca/images/social-media/facebook.png") 0 0 / cover no-repeat;
        }

        .provisional.followus .twitter {
            background: url("https://design.canada.ca/images/social-media/twitter.png") 0 0 / cover no-repeat;
        }

        .provisional.followus .youtube {
            background: url("https://design.canada.ca/images/social-media/youtube.png") 0 0 / cover no-repeat;
        }

        .provisional.followus .instagram {
            background: url("https://design.canada.ca/images/social-media/instagram.png") 0 0 / cover no-repeat;
        }

        .provisional.followus .linkedin {
            background: url("https://design.canada.ca/images/social-media/linkedin.png") 0 0 / cover no-repeat;
        }

        /* end of new social media icons */
        @media screen and (max-width: 767px) {
            .provisional.bg-hide-xs {
                background-image: url("none") !important;
            }

            .provisional.btn-call-to-action {
                font-size: .9em;
            }

            .provisional.xs-left {
                float: left !important;
            }
        }

        @media (min-width:768px) and (max-width:991px) {
            .provisional.bg-hide-sm {
                background-image: url("none") !important;
            }
        }
    </style>
    <!-- End provisional CSS for institutional page-->
`


function inputHead() {
document.getElementById("head2").innerHTML += headHTML;
}