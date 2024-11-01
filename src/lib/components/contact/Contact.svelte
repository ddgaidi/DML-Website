<script lang="ts">
  let prenom: string = "";
  let nom: string = "";
  let email: string = "";
  let objet: string = "";
  let message: string = "";

  async function validateForm() {
    const prenomElem = document.getElementById("prenom") as HTMLInputElement | null;
    const nomElem = document.getElementById("nom") as HTMLInputElement | null;
    const emailElem = document.getElementById("email") as HTMLInputElement | null;
    const objetElem = document.getElementById("objet") as HTMLInputElement | null;
    const messageElem = document.getElementById("message") as HTMLInputElement | null;

    let missingFields: string[] = [];

    if (!prenomElem || !prenomElem.value) missingFields.push("prénom");
    if (!nomElem || !nomElem.value) missingFields.push("nom");
    if (!emailElem || !/\S+@\S+\.\S+/.test(emailElem.value)) missingFields.push("email (valide)");
    if (!objetElem || !objetElem.value) missingFields.push("objet");
    if (!messageElem || !messageElem.value) missingFields.push("message");

    if (missingFields.length > 0) {
      alert(`Veuillez remplir les champs : ${missingFields.join(", ")}.`);
    } else {
      // Envoi du formulaire via fetch à l'endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prenom, nom, email, objet, message })
      });

      if (response.ok) {
        alert("Email envoyé avec succès !");
      } else {
        alert("Erreur lors de l'envoi de l'email.");
      }
    }
  }
</script>

<div class="transition-colors duration-500 pt-[100px] pb-[30px] bg-[#f4f3fc] dark:bg-[#0C0C12] flex justify-center items-center" id="contact">
  <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] items-center w-[1000px] p-5 rounded-[10px]" id="contact-container">

    <div class="flex justify-center mb-5" id="contact-titre-container">
      <h1 class="transition-colors duration-500 font-bold text-[40px] underline text-[#ff9900] dark:text-[#FFC000] font-family: 'Outfit', sans-serif" id="contact-titre">Contactez moi :</h1>
    </div>

    <div class="flex flex-col space-y-2.5" id="entete">

      <div class="flex flex-row self-center pb-3" id="row">
        <div class="mr-5" id="prenom-container">
          <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">Votre prénom :</h1>
          <input bind:value={prenom} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[305px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="text" id="prenom" name="prenom" placeholder="Obligatoire" required />
        </div>

        <div class="mr-5" id="nom-container">
          <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">Votre nom :</h1>
          <input bind:value={nom} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[305px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="text" id="nom" name="nom" placeholder="Obligatoire" required />
        </div>

        <div class="" id="email-container">
          <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">Votre e-mail :</h1>
          <input bind:value={email} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[305px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="email" id="email" name="email" placeholder="Obligatoire" required />
        </div>
      </div>
      
      <div class="pb-5" id="objet-container">
        <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">Objet du mail :</h1>
        <input bind:value={objet} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[960px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="text" id="objet" name="objet" placeholder="Obligatoire" required />
      </div>
    </div>

    <div class="" id="message-container">
      <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">Message :</h1>
      <textarea bind:value={message} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[960px] h-[400px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" id="message" name="message" placeholder="Obligatoire" required></textarea>
    </div>

    <button class="transition-all duration-100 text-black dark:text-white flex items" type="button" id="button-envoyer" on:click={validateForm}>
      <div class="transition-all duration-500 bg-[#e4e4eb] hover:bg-[#ffffff] dark:bg-[#1d1d2c] dark:hover:bg-[#2c2c42] w-[100px] ml-[425px] rounded-full pl-3 p-3 mt-4" id="button-envoyer">
        Envoyer
      </div>
    </button>    

  </div>
</div>