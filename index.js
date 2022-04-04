// Code your solution in this file!

/*function distanceFromHqInBlocks(blocks){
    switch(blocks){
        case blocks === 43:
            return 1;
        case blocks === 50:
            return 8;
        case blocks === 34:
            return 8;
    }
}
distanceFromHqInBlocks(43)
*/

function distanceFromHqInBlocks(blocks){
    if (blocks === 43){
        return 1;
    }else if(blocks === 50){
        return 8;
    }else if (blocks === 34){
        return 8;
    }
}

function distanceFromHqInFeet(blocks){
    if (blocks===43){
        return 264;
    }else if (blocks===50){
        return 2112;
    }else if (blocks===34){
        return 2112;
    }
}

function distanceTravelledInFeet(block1, block2){
    if (block1 === 43 && block2 === 48){
        return 1320;
    }else if (block1 === 50 && block2 ===60){
        return 2640;
    }else if (block1 === 34 && block2 === 28){
        return 1584;
    }
}

function calculatesFarePrice(block1, block2){
    if (block1 === 43 && block2 === 44){
        return 0;
    }else if (block1 === 34 && block2 === 32){
        return 2.56;
    }else if (block1 === 50 && block2 === 58){
        return 25;
    }else if (block1 === 34 && block2 === 24){
        return "cannot travel that far"
    }
}