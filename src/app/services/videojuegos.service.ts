import { Videojuego } from "../models/videojuego";
import { Injectable } from "@angular/core";

@Injectable()

export class ServiceVideojuegos {


    getVideojuegos(): any {
        
        var videojuegos = new Array<Videojuego>();

        videojuegos = [
            new Videojuego(2,"World of Tanks", "https:\/\/www.freetogame.com\/g\/2\/thumbnail.jpg", "If you like blowing up tanks, with a quick and intense game style you will love this game!", "PC (Windows)"),
            new Videojuego(3,"Warframe", "https:\/\/www.freetogame.com\/g\/3\/thumbnail.jpg", "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ","PC (Windows)"),
            new Videojuego(4,"CRSED: F.O.A.D.", "https:\/\/www.freetogame.com\/g\/4\/thumbnail.jpg", "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)", "PC (Windows)"),
            new Videojuego(5,"Crossout", "https:\/\/www.freetogame.com\/g\/5\/thumbnail.jpg", "A post-apocalyptic MMO vehicle combat game! ","PC (Windows)"),
            new Videojuego(7,"Armored Warfare", "https:\/\/www.freetogame.com\/g\/7\/thumbnail.jpg", "A modern team-based MMO tank game from Obsidian Entertainment.","PC (Windows)"),
            new Videojuego(9,"World of Warships", "https:\/\/www.freetogame.com\/g\/9\/thumbnail.jpg", "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ", "PC (Windows)"),
            new Videojuego(12,"War Thunder", "https:\/\/www.freetogame.com\/g\/12\/thumbnail.jpg", "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.","PC (Windows)"),
            new Videojuego(15,"Crossfire", "https:\/\/www.freetogame.com\/g\/15\/thumbnail.jpg", "A first person tactical shooter with a huge selection of game modes!","PC (Windows)"),
            new Videojuego(20,"Splitgate: Arena Warfare", "https:\/\/www.freetogame.com\/g\/20\/thumbnail.jpg", "A free-to-play multiplayer shooter developed and published by 1047 games. ", "PC (Windows)"),
            new Videojuego(21,"Destiny 2", "https:\/\/www.freetogame.com\/g\/21\/thumbnail.jpg", "A free-to-play multiplayer Sci-Fi MMOFPS from Bungie.","PC (Windows)"),
            new Videojuego(23,"Apex Legends", "https:\/\/www.freetogame.com\/g\/23\/thumbnail.jpg", "A free-to-play strategic battle royale game featuring 60-player matches and team-based play. ","PC (Windows)"),
            new Videojuego(24,"Counter-Strike: Global Offensive", "https:\/\/www.freetogame.com\/g\/24\/thumbnail.jpg", "The popular multiplayer shooter from Valve. ","PC (Windows)"),
            new Videojuego(28,"Spacelords", "https:\/\/www.freetogame.com\/g\/28\/thumbnail.jpg", "A free-to-play 4v1 sci-fi shooter. ","PC (Windows)"),
            new Videojuego(29,"Ring of Elysium", "https:\/\/www.freetogame.com\/g\/29\/thumbnail.jpg", "A free-to-play battle royale developed and published by Tencent Games. ", "PC (Windows)"),
            new Videojuego(30,"Quake Champions", "https:\/\/www.freetogame.com\/g\/30\/thumbnail.jpg", "Quake Champions is a callback to the early days of the Quake IP, featuring the fast-paced action that made the IP popular over two decades ago. ","PC (Windows)"),
            new Videojuego(35,"Defiance 2050", "https:\/\/www.freetogame.com\/g\/35\/thumbnail.jpg", "A re-imagining of Trion Worlds' sci-fi shooter Defiance. \r\n","PC (Windows)"),
            new Videojuego(36,"Realm Royale", "https:\/\/www.freetogame.com\/g\/36\/thumbnail.jpg", "A free-to-play fantasy-themed battle royale game based on Hi-Rez Studio's team shooter Paladins.","PC (Windows)"),
            new Videojuego(39,"Darwin Project", "https:\/\/www.freetogame.com\/g\/39\/thumbnail.jpg", "A free-to-play 10-player battle royale game set just prior to an impeding ice age.", "PC (Windows)"),
            new Videojuego(43,"Z1 Battle Royale", "https:\/\/www.freetogame.com\/g\/43\/thumbnail.jpg", "A highly competitive free-to-play battle royale shooter.","PC (Windows)"),
            new Videojuego(48,"Ironsight", "https:\/\/www.freetogame.com\/g\/48\/thumbnail.jpg", "A free-to-play futuristic shooter published by Aeria Games. ", "PC (Windows)")

        ];
        return videojuegos;
    }
}
