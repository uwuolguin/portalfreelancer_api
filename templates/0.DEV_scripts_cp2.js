
function post_succesful_visible_2(response){


  const status = ((response.status).toString()).substring(0, 1);

  if (status ==="2") {
    document.getElementById("succesful_post").classList.remove("hidden_div")
    document.getElementById("succesful_post").classList.remove("red_text")
    document.getElementById("succesful_post").classList.add("green_text")
    document.getElementById("succesful_post").innerHTML="Succesful Login"
    document.location.href = "https://apiportalfreelancer.lat/auth/settings_url_for_del_up/";

  } else {
    
    document.getElementById("succesful_post").classList.remove("hidden_div")
    document.getElementById("succesful_post").classList.remove("green_text")
    document.getElementById("succesful_post").classList.add("red_text")
    document.getElementById("succesful_post").innerHTML="Failed Login"

  }

}

function post_failed_visible(error){
  console.log(error.detail)
  document.getElementById("failed_post").classList.remove("hidden_div")

  
}

async function postLogIn() {

  document.getElementById("button_post_log_in").disabled = true;

  btn=document.querySelector(".submission_button_login");
  btn.classList.toggle("submission_button_login--loading");

  oFormObject = document.forms['form6'];

  email=oFormObject.elements["email"].value


  const body = new FormData
  body.append("email", email)
  body.append("", "\\")
  body.append("password", password)


  await fetch("https://apiportalfreelancer.lat/changepassword/changepassword_part2", {
    body,
    headers: {
    Accept: "application/json"
    },
    method: "POST"
  })
  .then((response) => post_succesful_visible_2(response))
  .catch((error) => post_failed_visible(error));


  btn.classList.remove("submission_button_login--loading");

  document.getElementById("button_post_log_in").disabled = false;

  setTimeout(() => {
    document.getElementById("succesful_post").classList.add("hidden_div");
    document.getElementById("failed_post").classList.add("hidden_div");
  }, "5000");
  


} 