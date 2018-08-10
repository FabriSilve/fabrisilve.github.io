<?php
    $file = null;
    $languages = null;
    if(isset($_GET['lang']))
        $languages = $_GET['lang'];


    switch ($languages) {
        case "it":
            //echo "<!-- ITALIAN -->";
            $file = file_get_contents("string/strings-ita.json");
            break;
        default:
            //echo "<!-- ENGLISH -->";
            $file = file_get_contents("string/strings-eng.json"); //to eng
    }

    $strings = json_decode($file, true);
    //echo print_r($strings, true);
?>

<!DOCTYPE html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content=" <?php echo $strings['description']; ?> ">
    <meta name="author" content=" <?php echo $strings['credentials']; ?>">
    <meta name="keywords" content=" <?php echo $strings['keywords']; ?>">
    <meta property="og:title" content=" <?php echo $strings['title']; ?>"/>
    <meta property="og:description" content=" <?php echo $strings['description']; ?> "/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="silvestri.online"/>
    <!--<meta property="og:image" content="img/banner-link.jpg"/>-->
    <meta property="og:site_name" content=" <?php echo $strings['title']; ?> "/>
    <meta property="fb:admins" content=" <?php echo $strings['credentials']; ?>"/>
    <meta property="og:locale" content=" <?php echo $strings['lang']; ?> "/>

    <link rel="shortcut icon" href="img/icon.ico">
    <title> <?php echo $strings['credentials']; ?> </title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <!-- import font from google -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Custom styles for this template -->
    <link href="css/agency.min.css" rel="stylesheet">

</head>

<body id="page-top">

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <?php echo $strings['credentials']; ?>
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#knowledge"><?php echo $strings["knowledge"]; ?></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#portfolio"><?php echo $strings["portfolio"]; ?></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#training"><?php echo $strings["training"]; ?></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#team"><?php echo $strings["team"]; ?></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact"><?php echo $strings["contact"]; ?></a>
                </li>
                <li class="nav-item">
                    <?php
                    if($strings['lang'] == "it") {
                        echo '<a class="nav-link js-scroll-trigger" href="index.php?lang=en">'.$strings['translate'].' <i class="fa fa-globe"></i></a>';
                    } else {
                        echo '<a class="nav-link js-scroll-trigger" href="index.php?lang=it">'.$strings['translate'].' <i class="fa fa-globe"></i></a>';
                    }
                    ?>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Header -->
<header class="masthead">
    <div class="container">
        <div class="intro-text">
            <div class="intro-lead-in"><?php echo $strings["introSubtitle"]; ?></div>
            <div class="intro-heading"><?php echo $strings["introTitle"]; ?></div>
            <a class="btn btn-xl js-scroll-trigger" href="#knowledge"><?php echo $strings["introButton"]; ?></a>
        </div>
    </div>
</header>

<!-- knowledge -->
<section id="knowledge">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading"><?php echo $strings["knowledge"]; ?></h2>
                <h3 class="section-subheading text-muted"><?php echo $strings["knowledgeSubtitle"]; ?></h3>
            </div>
        </div>
        <div class="row text-center">

            <?php
                for($i = 0; $i < count($strings["knowledges"]); $i++) {
                    $knowItem = $strings["knowledges"][$i];
                    ?>

                    <div class="col-sm-4">
                        <span class="fa-stack fa-4x">
                          <i class="fa fa-circle fa-stack-2x text-primary"></i>
                          <i class="fa <?php echo $knowItem["icon"]; ?> fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="service-heading"><?php echo $knowItem["title"]; ?></h4>
                        <p class="text-muted"><?php echo $knowItem["body"]; ?></p>
                    </div>

                    <?php
                }
            ?>

        </div>
    </div>
</section>

<!-- Portfolio Grid -->
<section class="bg-light" id="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading"><?php echo $strings["portfolio"]?> </h2>
                <h3 class="section-subheading text-muted"> <?php echo $strings['portfolioSubtitle']; ?></h3>
            </div>
        </div>
        <div class="row">

            <?php
                for($i = 0; $i < count($strings["projects"]); $i++) {
                    $projectItem = $strings["projects"][$i];
                    ?>

                    <div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#project<?php echo $i; ?>">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content">
                                    <i class="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img class="img-fluid" src=" <?php echo $projectItem['img']; ?>" alt=" <?php echo $projectItem['title']; ?>">
                        </a>
                        <div class="portfolio-caption">
                            <h4><?php echo $projectItem['title']; ?></h4>
                            <p class="text-muted"><?php echo $projectItem['subtitle']; ?></p>
                        </div>
                    </div>

                    <?php
                }
            ?>

        </div>
    </div>
</section>

<!-- Training -->
<section id="training">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading"><?php echo $strings['training']; ?></h2>
                <h3 class="section-subheading text-muted"><?php echo $strings['trainingSubtitle']; ?></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <ul class="timeline">
                <?php
                    for($i = 0; $i < count($strings['stages']); $i++) {

                        $stageItem = $strings['stages'][$i];
                        if($i % 2 != 0) {
                            echo '<li class="timeline-inverted">';
                        } else {
                            echo '<li>';
                        }
                    ?>
                            <div class="timeline-image">
                                <img class="rounded-circle img-fluid" src="<?php echo $stageItem['img'] ?>" alt="<?php echo $stageItem['title']; ?>">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4><?php echo $stageItem['date']; ?></h4>
                                    <h4 class="subheading"><?php echo $stageItem['title']; ?></h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">
                                        <?php echo $stageItem['description']; ?>
                                    </p>
                                </div>
                            </div>
                        </li>
                    <?php
                    }
                ?>

                    <li>
                        <a target="_blank" href="pdf/<?php echo $strings["curriculum"]; ?>.pdf">
                            <div class="timeline-image">
                                <h4><?php echo $strings['my']; ?><br>Curriculum<br/>!</h4>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Team -->
<section class="bg-light" id="team">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading"><?php echo $strings['team']; ?></h2>
                <h3 class="section-subheading text-muted"><?php echo $strings['teamSubtitle']; ?></h3>
            </div>
        </div>
        <div class="row">
            <?php
            for($i = 0; $i < count($strings['group']); $i++) {
                $groupItem = $strings['group'][$i];
                ?>
                <div class="col-sm-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="<?php echo $groupItem['img']; ?>" alt="<?php echo $groupItem['role']; ?>">
                        <h4><?php echo $strings['name']; ?></h4>
                        <p class="text-muted"><?php echo $groupItem['role']; ?></p>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <ul class="list-inline social-buttons">
                    <?php
                    for($i = 0; $i <count($strings['links']); $i++) {
                        $linkItem = $strings['links'][$i];
                        ?>
                        <li class="list-inline-item">
                            <a target="_blank" href="<?php echo $linkItem['link']; ?>">
                                <i class="fa <?php echo $linkItem['icon']; ?>"></i>
                            </a>
                        </li>
                        <?php
                    }
                    ?>
                </ul>
                <br/>
                <p class="large text-muted">
                    <?php echo $strings['aboutMe']; ?>
                </p>
            </div>
        </div>
    </div>

    <div class="container text-center">
        <h3><?php echo $strings['badgesTitle']; ?></h3>
        <div class="row container">
            <div class="col-sm-1 hidden-xs"></div>
            <?php
            for($i = 0; $i < count($strings['badges']); $i++) {
                $badgeItem = $strings['badges'][$i];
                ?>
                <div class="col-sm-2 col-xs-3">
                    <a target="_blank" href="<?php echo $badgeItem['link']; ?>">
                        <img class="img-fluid d-block mx-auto" src="<?php echo $badgeItem['img']; ?>" alt="<?php echo $badgeItem['alt']; ?>">
                    </a>
                </div>
                <?php
            }
            ?>
        </div>
    </div>
</section>

<!-- Contact -->
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading"><?php echo $strings['contact']; ?></h2>
                <h3 class="section-subheading text-muted"><?php echo $strings['contactSubtitle']; ?></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <form id="contactForm" name="sentMessage" novalidate>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input class="form-control" id="name" type="text" placeholder="<?php echo $strings['contactName']; ?> *" required data-validation-required-message="Per favore inserisci il nome.">
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input class="form-control" id="email" type="email" placeholder="<?php echo $strings['contactMail']; ?> *" required data-validation-required-message="Per favore inserisci la mail.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <textarea class="form-control" id="message" placeholder="<?php echo $strings['contactMessage']; ?> *" required data-validation-required-message="Per favore inserisci il messaggio."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                        <div class="clearfix"></div>
                        <div class="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" class="btn btn-xl" type="submit"><?php echo $strings['contactSend']; ?></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <span class="copyright">Copyright &copy; silvestri.online 2017</span>
            </div>
            <div class="col-md-4">
                <ul class="list-inline social-buttons">
                    <?php
                    for($i = 0; $i <count($strings['links']); $i++) {
                        $linkItem = $strings['links'][$i];
                        ?>
                        <li class="list-inline-item">
                            <a target="_blank" href="<?php echo $linkItem['link']; ?>">
                                <i class="fa <?php echo $linkItem['icon']; ?>"></i>
                            </a>
                        </li>
                        <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</footer>

<!-- Portfolio Modals -->

<?php
    for($i = 0; $i < count($strings["projects"]); $i++) {
        $projectItem = $strings["projects"][$i];
        ?>
        <div class="portfolio-modal modal fade" id="project<?php echo $i; ?>" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="modal-body">
                                    <h2><?php echo $projectItem['title']; ?></h2>
                                    <p class="item-intro text-muted"><?php echo $projectItem['subtitle']; ?></p>
                                    <img class="img-fluid d-block mx-auto" src="<?php echo $projectItem['preview']; ?>"
                                         alt="<?php echo $projectItem['title']; ?>">
                                    <p>
                                        <?php echo $projectItem['description']; ?>
                                        <br/>
                                        <?php
                                            if($projectItem['link'] != null) {
                                                ?>
                                                <a target="_blank" href="<?php echo $projectItem['link']; ?>"> <?php echo $strings['visit']; ?></a>
                                                <?php
                                            }
                                            if($projectItem['relation']) {
                                                ?>
                                                 <a target="_blank" href="<?php echo $projectItem['relation']; ?>"><?php echo $strings['relation']; ?></a>
                                                <?php
                                            }
                                        ?>
                                    </p>
                                    <ul class="list-inline">
                                        <li><?php echo $strings['date'].": ".$projectItem['date']; ?></li>
                                        <li><?php echo $projectItem['for']; ?></li>
                                        <li><?php echo $strings['category'].": ".$projectItem['category']; ?></li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fa fa-times"></i>
                                        <?php echo $strings['closeProject']; ?>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
?>

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/popper/popper.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>

<!-- Plugin JavaScript -->
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

<!-- Contact form JavaScript -->
<script src="js/jqBootstrapValidation.js"></script>
<script src="js/contact_me.js"></script>

<!-- Custom scripts for this template -->
<script src="js/agency.min.js"></script>

</body>

</html>
