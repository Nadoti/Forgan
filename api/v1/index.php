<?php
require __DIR__ . "/vendor/autoload.php";

use CoffeeCode\Router\Router;

$router = new Router("");

/*** User */
$router->group("user")->namespace("Source\Service");
$router->post("/authenticate", "AuthController:authenticate");

/** Erro */
$router->group("erro")->namespace('');
$router->get("/404", function () {
    throw new Exception("Endpoint nao encontrado", 404);
});

$router->dispatch();
$router->error();

/*** Erro de redirect */
if ($router->error()) {
    $router->redirect( URLBASE . "/api/v1/erro/{$router->error()}");
}
