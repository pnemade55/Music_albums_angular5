export interface Music {
  id: Number;
  name: String ;
  cover: String ;
  bio: String;
  genre: String;
  albums: Albums;
}

export interface Albums {
  albumId: String ;
  title: String ;
  year: Number ;
  cover: String ;
  price: Number;

}
