<?php

    if( isset($_GET['source'], $_GET['destination'], $_GET['width'] ,$_GET['height'])){
        header("Access-Control-Allow-Origin: *");
        function resize($source, $destination, $width, $height){
            $source = str_replace("_", "/", $source);
            $destination = str_replace("_", "/", $destination);
            $imageSize = getimagesize($source);
            $imageRessource = imagecreatefrompng($source);
            $imageFinal = imagecreatetruecolor($width, $height);
            $final = imagecopyresampled($imageFinal, $imageRessource, 0, 0, 0, 0, $width, $height, $imageSize[0], $imageSize[1]);
            imagepng($imageFinal, $destination, 9);
        };
        resize($_GET['source'], $_GET['destination'], $_GET['width'] ,$_GET['height']);
        echo json_encode(array("status" => true));
    }
	else{
        echo json_encode(array("status" => false));
    }


?>