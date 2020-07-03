// class for fetching data 
class Github {
  async getuser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    this.reposCount = 5;
    this.repos_sort = 'create: asc';
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.repos_sort}`);
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
  //  returning the response 
    return { profile, repos }
  }
}