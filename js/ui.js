class UI {
  constructor() {
    this.profile = document.querySelector('.output');
  }

    showProfile(user) {
      // console.log(user);
      this.profile.innerHTML = `
      <hr>
      <section class="profile">
      <div class="row">
        <div class="col-4">
          <img src="${user.profile.avatar_url}" alt="profile image" class="img">
          <a href="${user.profile.html_url}" class="btn btn-primary" target="_blank">View Profile</a>
        </div>
        <div class="col-8">
          <span class="badge badge-primary">Public Repos: ${user.profile.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.profile.public_gists}</span>
          <span class="badge badge-warning">Followers: ${user.profile.followers}</span>
          <span class="badge badge-success">Following: ${user.profile.following}</span>
          <ul>
            <li class="list">Name: ${user.profile.name}</li>
            <li class="list">Company: ${user.profile.company}</li>
            <li class="list">Website: ${user.profile.blog}</li>
            <li class="list">Location: ${user.profile.location}</li>
            <li class="list">Membership Since: ${user.profile.created_at}</li>
          </ul>
        </div>
      </div>
    </section>
    <hr>
    <section class="repos">
      <h2>Latest Repos:</h2>
      <ul>
      
      </ul>
    </section>
    `;
    }
    showRepos(repos) {
      // console.log(repos);
      let output = '';
      repos.forEach(repo => {
        output += ` <li class="card">
        <span>${repo.name}</span> 
        <span class="description">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forks_count}</span>
        </span>
      </li>`;
      });
      document.querySelector('.repos ul').innerHTML = output;
    }
    clearProfile() {
      this.profile.innerHTML = '';
    }
    showAlert(message, type = true) {
      const className = type === true ? 'alert alert-danger': 'alert alert-success';
      const alert = document.createElement('div');
      alert.className = className;
      alert.innerHTML = message;
      document.body.appendChild(alert);
      // remove element after 3 second 
      setTimeout(()=> {
        alert.remove();
      }, 3000);
    }
}