<?php
    return json_encode(array(0=>"zero", 1 => "un"));
    echo "resizeFILE !!";

    /*
    convertImage('toto.png', 'testResize.png', '1200', '720');
    
    function convertImage($source, $destination, $width, $height){
        $imageSize = getimagesize($source);
        $imageRessource = imagecreatefrompng($source);
        $imageFinal = imagecreatetruecolor($width, $height);
        $final = imagecopyresampled($imageFinal, $imageRessource, 0, 0, 0, 0, $width, $height, $imageSize[0], $imageSize[1]);
        imagepng($imageFinal, $destination, 9);
    }

    */
?>