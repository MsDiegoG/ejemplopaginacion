export class Videojuego {
    constructor (
        public id: number,
        public title: string,
        public thumbnail: string,
        public short_description: string,
        public platform: string,
    ) {}
}