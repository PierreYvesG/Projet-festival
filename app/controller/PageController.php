<?php

class PageController extends Controller {

    public function index(){
        $template = $this->twig->loadTemplate('/Page/index.html.twig');
        echo $template->render(array());
    }

    public function help(){
        $template = $this->twig->loadTemplate('/Page/help.html.twig');
        echo $template->render(array());
    }
}