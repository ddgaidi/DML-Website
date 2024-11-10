<script lang="ts">
  import pp from '../../images/IMG/pdp/pp.png';
  import ppc from '../../images/IMG/pdp/pdp.png';
  import discord from '../../images/SVG/reseau/discord.svg';
  import github from '../../images/SVG/reseau/github.svg';
  import { lang } from '../../store/lang'; // Import du store de langue

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(function() {
      alert($lang === 'fr'
        ? 'Le mot dml130ris a été copié dans votre presse-papier.\nAllez vite le coller sur Discord pour ajouter DML !'
        : 'The word dml130ris has been copied to your clipboard.\nGo paste it on Discord to add DML !');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  let hover = false;
  function handleMouseOver() {
    hover = true;
  }
  function handleMouseOut() {
    hover = false;
  }
</script>

<div class="transition-colors duration-500 flex flex-col lg:flex-row justify-between items-center pt-[30px] pb-[10px] bg-[#edebf5] dark:bg-[#0a0a0f]" id="footer">
  
  <!-- Profile Picture Container -->
  <div class="ml-[130px] pb-[120px] pr-[120px] relative hidden lg:block" id="pp-container">
    <img 
      class="absolute w-[100px] rounded-[30px] transition-all duration-[350ms] ease-in-out transform {hover ? '-rotate-[25deg]' : ''} {hover ? 'opacity-0' : 'opacity-100'}" 
      src={pp} 
      alt="PP" 
      on:mouseover={handleMouseOver} 
      on:mouseout={handleMouseOut}
      on:focus={handleMouseOver} 
      on:blur={handleMouseOut}
    >
    <img
      class="absolute w-[100px] rounded-[30px] transition-all duration-[350ms] ease-in-out transform {hover ? '-rotate-[25deg]' : ''} {hover ? 'opacity-100' : 'opacity-0'}" 
      src={ppc} 
      alt="PPC" 
      on:mouseover={handleMouseOver} 
      on:mouseout={handleMouseOut}
      on:focus={handleMouseOver} 
      on:blur={handleMouseOut}
    >
  </div>

  <!-- Description Container -->
  <div id="center">
    <div class="description-container">
      <p class="transition-colors duration-500 text-center text-xs lg:text-l text-black dark:text-[#ffffff] mb-2.5 font-family: 'Outfit', sans-serif">
        {#if $lang === 'fr'}
          Je suis un jeune Développeur !<br>Je fais principalement du Frontend en utilisant le Framework Svelte.
        {:else}
          I am a young Developer!<br>I mainly work on Frontend using the Svelte Framework.
        {/if}
      </p>
    </div>
    <div class="bydml-container">
      <p class="transition-colors duration-500 text-center text-xs lg:text-l text-black dark:text-[#ffffff] font-family: 'Outfit', sans-serif">
        {#if $lang === 'fr'}
          Fais avec ❤️ par <a class="transition-colors duration-500 text-black dark:text-[#ffffff] underline hover:text-[#5865f2] font-family: 'Outfit', sans-serif" href="https://github.com/DMLSurGithub/" target="_blank">DML</a>
        {:else}
          Made with ❤️ by <a class="transition-colors duration-500 text-black dark:text-[#ffffff] underline hover:text-[#5865f2] font-family: 'Outfit', sans-serif" href="https://github.com/DMLSurGithub/" target="_blank">DML</a>
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
      <button on:click={() => copyToClipboard('dml130ris')} class="ml-[40px]">
        <img class="transition-colors duration-500 w-[20px] hover:brightness-[-180%] dark:hover:brightness-[180%]" src={discord} alt="Discord Logo">
      </button>      
      <a href="https://github.com/DMLSurGithub/" target="_blank" class="ml-[15px]">
        <img class="transition-colors duration-500 flex w-[20px] hover:brightness-[-180%] dark:hover:brightness-[180%]" src={github} alt="Github Logo">
      </a>
    </div>
  </div>

</div>