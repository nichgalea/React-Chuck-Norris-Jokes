class JokeService {
  getRandomJokes(amount: number): Promise<void> {
    return fetch(`http://api.icndb.com/jokes/random/${amount}`).then(r => r.json());
  }

  getJoke(id: number): Promise<void> {
    return fetch(`http://api.icndb.com/jokes/${id}`).then(r => r.json());
  }
}

export default new JokeService();
