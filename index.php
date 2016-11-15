<?php
include_once 'partials/header.php';
?>

<?php

$view = 'home.php';

switch (@$_GET['view']) {
    case"people":
        $view = "people.php";
        break;
    case"sectors":
        $view = "sectors.php";
        break;
    case"news":
        $view = "news.php";
        break;
    case"contacts":
        $view = "contacts.php";
        break;
    default :
        $view = "home.php";
        break;
}

/*$view = $_GET["view"].".php" ? "home.php" : $_GET["view"].".php" ;*/

?>
    <div class="container-fluid no-padding">
        <div class="container">
            <div class="row">
                <nav class="main-nav col-xs-12 col-md-10 col-md-offset-2">
                    <a class="<?php echo empty($_GET['view']) ? 'current_page_item' : '' ?>" href="?view=home">About
                        us</a>
                    <a class="<?php echo $_GET['view'] == 'people' ? 'current_page_item' : '' ?>" href="?view=people">Our
                        people</a>
                    <a class="<?php echo $_GET['view'] == 'sectors' ? 'current_page_item' : '' ?>" href="?view=sectors">Our
                        sectors</a>
                    <a class="<?php echo $_GET['view'] == 'news' ? 'current_page_item' : '' ?>"
                       href="?view=news">News</a>
                    <a class="<?php echo $_GET['view'] == 'contacts' ? 'current_page_item' : '' ?>"
                       href="?view=contacts">Contact us</a>
                </nav>
            </div>
        </div>
        <?php include $view ?>
    </div>
<?php
include_once 'partials/footer.php';
?>