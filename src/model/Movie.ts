class Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: number;

  constructor(id: number, title: string, url: string, release_date: number) {
    this.id = id;
    this.title = title;
    this.poster_path = url;
    this.release_date = release_date;
  }
}

export default Movie;
