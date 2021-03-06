

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
<link rel="stylesheet" href="https://pc-contactweb-pc.github.io/canada/pc_custom.css?6"> <!-- PC Custom CSS -->
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
<!-- Custom CSS -->
<!-- For exploring down the road, possibly darken the banner images on mouseover to improve legibility -->
<!-- <style>
    div#wb-auto-3:hover {
        background-color: #444444;
        /* background-blend-mode: luminosity; */
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
    }
</style> -->
`

let headNav=` <nav>
<ul id="wb-tphp" class=" wb-disable-inited">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
    <li class="wb-slc visible-sm visible-md visible-lg"><a class="wb-sl" href="#wb-info">Skip to About this site</a></li>
    <li class="wb-slc"><a class="wb-sl" href="?wbdisable=true" rel="alternate">Switch to basic HTML version</a></li>
</ul>
</nav>`

let searchHTML = ` <h2>Search</h2>
<form action="#" method="post" name="cse-search-box" role="search">
    <div class="form-group wb-srch-qry">
        <label for="wb-srch-q" class="wb-inv">Search Canada.ca</label>
        <input id="wb-srch-q" list="wb-srch-q-ac" class="wb-srch-q form-control" name="q" type="search" value="" size="34" maxlength="170" placeholder="Search Canada.ca">
        <datalist id="wb-srch-q-ac"></datalist>
    </div>
    <div class="form-group submit">
        <button type="submit" id="wb-srch-sub" class="btn btn-primary btn-small" name="wb-srch-sub">
            <span class="glyphicon-search glyphicon"></span>
            <span class="wb-inv">Search</span>
        </button>
    </div>
</form>`

let footerHTML = `<footer class="pc-footer bg-hg">
<section class="container">
    <div class="row">
        <div class="col-xs-12">
            <img src="https://user-images.githubusercontent.com/45856706/151230155-9d0bfe38-5b23-4bca-a13d-68070f16c396.png"
                alt="Parks Canada logo" class="pc-logo center-block mrgn-tp-xl">
        </div>
    </div>

    <div class="row center-block mrgn-tp-lg">
        <div class="col-xs-12 col-sm-4 center-block mrgn-bttm-md"><a href="#3"
                class="btn btn-footer col-xs-12 col-sm-10 col-sm-offset-1">Job opportunities</a></div>
        <div class="col-xs-12 col-sm-4 center-block mrgn-bttm-md"><a href="#3"
                class="btn btn-footer col-xs-12 col-sm-10 col-sm-offset-1">Volunteer</a></div>
        <div class="col-xs-12 col-sm-4 center-block mrgn-bttm-md"><a href="#3"
                class="btn btn-footer col-xs-12 col-sm-10 col-sm-offset-1">Partner</a></div>
    </div>
    <div class="row">
        <div class="col-sm-8">
            <h2><a href="#noTarget" class="wb-lbx">About the Parks Canada Agency</a></h2>
            <ul class="list-unstyled lst-spcd">
                <li><a href="#noTarget" class="wb-lbx">Mandate and Charter</a></li>
                <li><a href="#noTarget" class="wb-lbx">Message from the Chief Executive Officer</a></li>
                <li><a href="#noTarget" class="wb-lbx">Indigenous relations at Parks Canada</a></li>

                <li><a href="#noTarget" class="wb-lbx">Strategies, plans, reports</a></li>
                <li><a href="#noTarget" class="wb-lbx">Transparency</a></li>

                <li><a href="#noTarget" class="wb-lbx">News releases</a></li>
                <li><a href="#noTarget" class="wb-lbx">Media room</a></li>
                <li><a href="#noTarget" class="wb-lbx">Contact Parks Canada</a></li>
            </ul>
        </div>
        <div class="col-sm-4">
            <h2>Minister</h2>
            <p><a href="#noTarget" class="wb-lbx">The Honourable Steven Guilbeault</a></p>
            <small>Minister of Environment and Climate Change</small>
            <h2>Follow us</h2>

            <ul class="list-unstyled list-inline nowrap text-white">
                <li><a class="mrgn-rght-md" href="https://www.facebook.com/parkscanada"><span
                            class="fab fa-facebook fa-2x" aria-hidden="true"></span><span
                            class="wb-inv">Facebook</span></a></li>
                <li><a class="mrgn-rght-md" href="https://twitter.com/parkscanada"><span
                            class="fab fa-twitter fa-2x" aria-hidden="true"></span><span
                            class="wb-inv">Twitter</span></a></li>
                <li><a class="mrgn-rght-md" href="https://www.youtube.com/ParksCanada"><span
                            class="fab fa-youtube fa-2x" aria-hidden="true"></span><span
                            class="wb-inv">YouTube</span></a></li>
                <li><a class="mrgn-rght-md" href="https://www.instagram.com/ParksCanada"><span
                            class="fab fa-instagram fa-2x" aria-hidden="true"></span><span
                            class="wb-inv">YouTube</span></a></li>
            </ul>
            <ul class="list-unstyled lst-spcd">
                <li><a href="#noTarget" class="wb-lbx">Our newsletter</a></li>
                <li><a href="#noTarget" class="wb-lbx">Apps</a></li>
            </ul>
        </div>
    </div>




    <!-- Footer V1 - Pre Feb 14, 2022 -->
    <!-- <div class="row mrgn-tp-xl mrgn-bttm-xl">
    <div class="col-md-3 pc-footer-list">
        <h2><a href="#noTarget" class="wb-lbx">About Parks Canada</a></h2>
        <ul class="list-unstyled lst-spcd">
            <li><a href="#noTarget" class="wb-lbx">Mandate and Charter</a></li>
            <li><a href="#noTarget" class="wb-lbx">Our Minister</a></li>
            <li><a href="#noTarget" class="wb-lbx">Message from the CEO</a></li>
            <li><a href="#noTarget" class="wb-lbx">Indigenous relations</a></li>
            <li><a href="#noTarget" class="wb-lbx">Partners</a></li>
            <li><a href="#noTarget" class="wb-lbx">Strategies and plans</a></li>
            <li><a href="#noTarget" class="wb-lbx">Reports and statistics</a></li>
        </ul>
    </div>
    <div class="col-md-3 pc-footer-list">
        <h2><a href="#noTarget" class="wb-lbx">News</a></h2>
        <ul class="list-unstyled lst-spcd">
            <li><a href="#noTarget" class="wb-lbx">News release</a></li>
            <li><a href="#noTarget" class="wb-lbx">Media room</a></li>
            <li><a href="#noTarget" class="wb-lbx">Travel media</a></li>
        </ul>
    </div>
    <div class="col-md-3 pc-footer-list">
        <h2><a href="#noTarget" class="wb-lbx">Transparency</a></h2>
        <ul class="list-unstyled lst-spcd">
            <li><a href="#noTarget" class="wb-lbx">Proactive disclosure</a></li>
            <li><a href="#noTarget" class="wb-lbx">Access to information and privacy</a></li>
            <li><a href="#noTarget" class="wb-lbx">Terms and conditions</a></li>
            <li><a href="#noTarget" class="wb-lbx">Consultations</a></li>
        </ul>
    </div>
    <div class="col-md-3 pc-footer-list">
        <h2><a href="#noTarget" class="wb-lbx">Stay connected</a></h2>
        <ul class="list-unstyled lst-spcd">
            <li><a href="#noTarget" class="wb-lbx">Newsletter</a></li>
            <li><a href="#noTarget" class="wb-lbx">Apps</a></li>
            <li><a href="#noTarget" class="wb-lbx">Facebook</a></li>
            <li><a href="#noTarget" class="wb-lbx">Instagram</a></li>
            <li><a href="#noTarget" class="wb-lbx">Twitter</a></li>
            <li><a href="#noTarget" class="wb-lbx">YouTube</a></li>
            <li><a href="#noTarget" class="wb-lbx">Social media in Parks Canada places</a></li>
            <li><a href="#noTarget" class="wb-lbx">Contact us</a></li>
        </ul>
    </div>
</div> -->
</section>
</footer>
<section id="noTarget" class="mfp-hide modal-dialog modal-content overlay-def">
<header class="modal-header">
    <h2 class="modal-title">Oops!</h2>
</header>
<div class="modal-body">
    <p>We haven't made this page yet.</p>
</div>
</section>
<footer id="wb-info">
<div class="landscape">
    <nav class="container wb-navcurr">
        <h2 class="wb-inv">About government</h2>
        <ul class="list-unstyled colcount-sm-2 colcount-md-3">
            <li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>
            <li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li>
            <li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and
                    military</a></li>
            <li><a href="https://www.canada.ca/en/news.html">News</a></li>
            <li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and
                    regulations</a></li>
            <li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a>
            </li>
            <li><a href="https://pm.gc.ca/eng">Prime Minister</a></li>
            <li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li>
            <li><a href="https://open.canada.ca/en/">Open government</a></li>
        </ul>
    </nav>
</div>
<div class="brand">
    <!--Start CDTS serverBottom-en -->
    <div class="container">
        <div class="row">
            <nav class="col-md-9 col-lg-10 ftr-urlt-lnk">
                <h2 class="wb-inv">About this site</h2>
                <ul>
                    <li><a href="https://www.canada.ca/en/social.html">Social media</a></li>
                    <li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li>
                    <li><a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a></li>
                    <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a>
                    </li>
                    <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
                </ul>
            </nav>
            <div class="col-xs-6 visible-sm visible-xs tofpg"> <a href="#wb-cont">Top of Page <span
                        class="glyphicon glyphicon-chevron-up"></span></a> </div>
            <div class="col-xs-6 col-md-2 text-right"> <img
                    src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/assets/wmms-blk.svg"
                    alt="Symbol of the Government of Canada" />
                <meta property="areaServed" typeOf="Country" content="Canada" />
                <link property="logo"
                    href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_32/assets/wmms-blk.svg" />
            </div>
        </div>
    </div>
</div>
</footer>
<!--End CDTS serverBottom-en -->
<!-- Start Treasury board Script footer -->
<script src="https://www.canada.ca/etc.clientlibs/clientlibs/granite/jquery.min.js"></script>
<script src="https://www.canada.ca/etc.clientlibs/clientlibs/granite/utils.min.js"></script>
<script src="https://www.canada.ca/etc/designs/canada/clientlib-publish.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"></script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"></script>
<!-- End Treasury board Script footer -->

<!-- End custom script -->`