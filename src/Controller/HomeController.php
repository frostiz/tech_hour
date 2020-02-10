<?php

namespace App\Controller;

class HomeController extends BaseController
{
    public function index()
    {
	    return $this->redirectToRoute('product');
    }
}
