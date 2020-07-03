/* @application: Github finder
@author: Santosh Jha 
@licence: MIT */
// Initializing the Github
const github = new Github;
//UI init
const ui = new UI;

const searchUser = document.getElementById('searchUser');
 
// Add Event listener for Searching User
searchUser.addEventListener('keyup', e => {
  let inputValue = e.target.value;
  if(inputValue !== '') {
    github.getuser(inputValue)
    .then(data => {
      // checking condition if data available or not 
      if(data.profile.message === 'Not Found') {
        ui.showAlert('user not found');
        // console.log(data.profile);
      }else {
        ui.showProfile(data);
        ui.showRepos(data.repos);
      }

    });
  }else {
    ui.clearProfile();
  }
});