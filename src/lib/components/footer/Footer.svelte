<script lang="ts">
  import pp from '../../images/IMG/pdp/pp.png';
  import discord from '../../images/SVG/reseau/discord.svg';
  import github from '../../images/SVG/reseau/github.svg';
  import { lang } from '../../store/lang'; // Import du store de langue

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(function() {
      alert($lang === 'fr'
        ? 'Le mot dml.exe a été copié dans votre presse-papier.\nAllez vite le coller sur Discord pour ajouter DML !'
        : 'The word dml.exe has been copied to your clipboard.\nGo paste it on Discord to add DML !');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
</script>

<div class="transition-colors duration-500 flex flex-col lg:flex-row justify-between items-center pt-[10px] pb-[20px] lg:pb-[10px] bg-[#edebf5] dark:bg-[#0a0a0f]" id="footer">
  
  <!-- Profile Picture Container -->
  <div class="ml-[130px] pb-[110px] pr-[120px] relative hidden lg:block" id="pp-container">
    <img class="absolute w-[150px] pointer-events-none select-none" src={pp} alt="">
  </div>


  <!-- Description Container -->
  <div id="center">
    <div class="description-container max-md:mx-5">
      <p class="transition-colors duration-500 text-center text-xs lg:text-l text-black dark:text-[#ffffff] mb-2.5 font-family: 'Outfit', sans-serif">
        {#if $lang === 'fr'}
          Je suis un jeune Développeur !<br/>J'ai une imagination débordante, alors n'hésitez pas à suivre mes projets !
        {:else}
          I am a young Developer !<br>I have a wild imagination, so don't hesitate to follow my projects !
        {/if}
      </p>
    </div>
    <div class="bydml-container">
      <p class="transition-colors duration-500 text-center text-xs lg:text-l text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {#if $lang === 'fr'}
          Fais avec ❤️ par <a class="transition-colors duration-500 text-black dark:text-[#ffffff] underline hover:text-[#5865f2] font-family: 'Outfit', sans-serif" href="https://github.com/DMLSurGithub/" target="_blank">DML</a>
        {:else}
          Made with ❤️ by <a class="transition-colors duration-500 text-black dark:text-[#ffffff] underline hover:text-[#5865f2] font-family: 'Outfit', sans-serif" href="https://github.com/ddgaidi" target="_blank">DML</a>
        {/if}
      </p>
    </div>
  </div>

  <!-- Social Networks Container (Desktop only) -->
  <div class="mr-[130px] hidden lg:block" id="reseau-container">
    <h6 class="transition-colors duration-500 flex text-l text-black dark:text-[#ffffff] mb-2.5 font-family: 'Outfit', sans-serif">
      {#if $lang === 'fr'} Réseaux Sociaux : {:else} Social Networks : {/if}
    </h6>
    <div class="flex">
      <button on:click={() => copyToClipboard('dml.exe')} class="ml-[40px]">
        <img class="transition-colors duration-500 w-[20px] hover:brightness-[-180%] dark:hover:brightness-[180%]" src={discord} alt="Discord Logo">
      </button>      
      <a href="https://github.com/DMLSurGithub/" target="_blank" class="ml-[15px]">
        <img class="transition-colors duration-500 flex w-[20px] hover:brightness-[-180%] dark:hover:brightness-[180%]" src={github} alt="Github Logo">
      </a>
    </div>
  </div>

</div>