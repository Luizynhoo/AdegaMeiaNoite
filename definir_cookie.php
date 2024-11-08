<?php
// Define o cookie "maior_de_18" com valor "sim" para durar 1 dia (86400 segundos)
setcookie("maior_de_18", "sim", time() + 86400, "/");
?>