const url_api = "https://form-api-htlm.onrender.com/member";


document.getElementById("btnSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  if (memberName.value && email.value && inputDiscord.value && inputGithub.value) {
    const objMember = {
      name: memberName.value,
      surname: surname.value,
      email: email.value,
      discordId: inputDiscord.value,
      githubLogin: inputGithub.value
    }

    axios.post(url_api, objMember)
      .then((_) => {
        alert("Usuário cadastrado com sucesso!", "success", "Sucesso!")

        setTimeout(() => {
          window.location.reload();
        }, 5000);

      })
      .catch((_) => {
        alert("Erro ao cadastrar membro", "error", "Erro!")
      });
  }
  else {
    alert("Preencha todos os campos requeridos", "info", "Ops!")
  }
});

// alert personalizado
function alert(message, type, title) {
  Swal.fire({
    icon: type,
    title: title,
    text: message,
    footer: `${getRequiredFields()}`
  })
}
function getRequiredFields() {
  return [memberName, email].map((field) => field.value ? "" : field.name).filter((field) => field !== "").join(", ")
}