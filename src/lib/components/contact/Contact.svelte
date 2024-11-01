<script lang="ts">
  import { lang } from '../../store/lang';

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

    if (!prenomElem || !prenomElem.value) missingFields.push($lang === 'fr' ? "prénom" : "first name");
    if (!nomElem || !nomElem.value) missingFields.push($lang === 'fr' ? "nom" : "last name");
    if (!emailElem || !/\S+@\S+\.\S+/.test(emailElem.value)) missingFields.push($lang === 'fr' ? "email (valide)" : "valid email");
    if (!objetElem || !objetElem.value) missingFields.push($lang === 'fr' ? "objet" : "subject");
    if (!messageElem || !messageElem.value) missingFields.push($lang === 'fr' ? "message" : "message");

    if (missingFields.length > 0) {
      alert($lang === 'fr'
        ? `Veuillez remplir les champs : ${missingFields.join(", ")}.`
        : `Please fill in the fields: ${missingFields.join(", ")}.`);
    } else {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prenom, nom, email, objet, message })
      });

      if (response.ok) {
        alert($lang === 'fr' ? "Email envoyé avec succès !" : "Email sent successfully !");
      } else {
        alert($lang === 'fr' ? "Erreur lors de l'envoi de l'email." : "Error sending the email.");
      }
    }
  }

  let hover = false;
  function handleMouseOver() {
    hover = true;
  }
  function handleMouseOut() {
    hover = false;
  }
</script>

<div class="transition-colors duration-500 pt-[100px] pb-[30px] bg-[#f4f3fc] dark:bg-[#0C0C12] flex justify-center items-center" id="contact">
  <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] items-center w-[1000px] p-5 rounded-[10px]" id="contact-container">

    <div class="flex justify-center mb-5" id="contact-titre-container">
      <h1 class="transition-colors duration-500 font-bold text-[40px] underline text-[#ff9900] dark:text-[#FFC000] font-family: 'Outfit', sans-serif" id="contact-titre">
        {$lang === 'fr' ? "Contactez moi :" : "Contact me :"}
      </h1>
    </div>

    <div class="flex flex-col space-y-2.5" id="entete">

      <div class="flex flex-row self-center pb-3" id="row">
        <div class="mr-5" id="prenom-container">
          <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">
            {$lang === 'fr' ? "Votre prénom :" : "Your first name :"}
          </h1>
          <input bind:value={prenom} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[305px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="text" id="prenom" name="prenom" placeholder={$lang === 'fr' ? "Obligatoire" : "Required"} required />
        </div>

        <div class="mr-5" id="nom-container">
          <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">
            {$lang === 'fr' ? "Votre nom :" : "Your last name :"}
          </h1>
          <input bind:value={nom} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[305px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="text" id="nom" name="nom" placeholder={$lang === 'fr' ? "Obligatoire" : "Required"} required />
        </div>

        <div class="" id="email-container">
          <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">
            {$lang === 'fr' ? "Votre e-mail :" : "Your email :"}
          </h1>
          <input bind:value={email} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[305px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="email" id="email" name="email" placeholder={$lang === 'fr' ? "Obligatoire" : "Required"} required />
        </div>
      </div>
      
      <div class="pb-5" id="objet-container">
        <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">
          {$lang === 'fr' ? "Objet du mail :" : "Mail subject :"}
        </h1>
        <input bind:value={objet} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[960px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" type="text" id="objet" name="objet" placeholder={$lang === 'fr' ? "Obligatoire" : "Required"} required />
      </div>
    </div>

    <div class="" id="message-container">
      <h1 class="transition-colors duration-500 mb-2 text-[15px] text-black dark:text-[#c2c4d4] font-family: 'Outfit', sans-serif dark:text-white">
        {$lang === 'fr' ? "Message :" : "Message :"}
      </h1>
      <textarea bind:value={message} class="transition-colors duration-500 bg-[#edeef7] dark:bg-[#1d1d2c] px-2 py-1 w-[960px] h-[400px] rounded-xl border-[1px] text-[13px] border-[#7b7c83] dark:border-[#3d3d57] text-black dark:text-white" id="message" name="message" placeholder={$lang === 'fr' ? "Obligatoire" : "Required"} required></textarea>
    </div>

    <button class="transition-all duration-100 text-black dark:text-white flex items" type="button" id="button-envoyer" on:click={validateForm}>
      <div class="transition-all duration-500 bg-[#e4e4eb] hover:bg-[#ffffff] dark:bg-[#1d1d2c] dark:hover:bg-[#2c2c42] w-[100px] ml-[425px] rounded-full pl-3 p-3 mt-4" id="button-envoyer">
        {$lang === 'fr' ? "Envoyer" : "Send"}
      </div>
    </button>    

  </div>
</div>