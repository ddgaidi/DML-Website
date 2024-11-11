<script lang="ts">
  import { lang } from '../../../store/lang';
  import { darkMode } from '../../../store/dark.js';

  import webd from '../../../images/SVG/service/webd.svg';
  import webw from '../../../images/SVG/service/webw.svg';

  let darkModeValue = false;

  darkMode.subscribe(value => {
    darkModeValue = value;
  });

  $: primaryColorClass = $lang === 'fr' ? 'text-[#ff9900] dark:text-[#FFC000]' : 'text-[#4e59d8] dark:text-[#5865f2] font-bold';
  $: secondaryColorClass = $lang === 'fr' ? 'text-[#4e59d8] dark:text-[#5865f2] font-bold' : 'text-[#ff9900] dark:text-[#FFC000]';
</script>

<div class="transition-colors duration-500 lg:pt-[100px] pt-[70px] bg-[#f4f3fc] dark:bg-[#0C0C12] flex justify-center items-center" id="biographie">
  <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col lg:flex-row items-center w-[90%] lg:max-w-[800px] p-4 lg:p-5 rounded-[10px]" id="bio-container">
    
    <!-- Section image avec adaptabilité pour mobile -->
    <div class="relative hidden lg:flex justify-center items-center w-full lg:w-[200px] lg:mr-7 mt-5 lg:mt-0" id="web">
      <img src={webd} alt="Web sombre" class="absolute transition-opacity duration-500 ease-in-out {darkModeValue ? 'opacity-0' : 'opacity-100'} lg:w-[150px]">
      <img src={webw} alt="Web clair" class="absolute transition-opacity duration-500 ease-in-out {darkModeValue ? 'opacity-100' : 'opacity-0'} lg:w-[150px]">
    </div>    
    
    <!-- Texte biographique avec adaptabilité pour mobile -->
    <div class="transition-colors duration-500 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto" id="bio-text">
      <h1 class="text-[18px] lg:text-[40px] mb-[10px] font-family: 'Outfit', sans-serif dark:text-white font-semibold">
        <span class="{primaryColorClass}">
          {$lang === 'fr' ? "Développement" : "Web"}
        </span>
        <span class="{secondaryColorClass}">
          {$lang === 'fr' ? "Web" : "Development"}
        </span>
      </h1>
      <p class="transition-colors duration-500 text-[12px] lg:text-[17px] text-black dark:text-[#868894] font-family: 'Outfit', sans-serif dark:text-white text-justify lg:text-left max-w-[95%] lg:max-w-[600px]">
        {$lang === 'fr' ? "Pour l'instant je suis spécialisé dans le développement Web, offrant des solutions pour répondre à vos besoins. J’utilise le framework Svelte, reconnu pour sa rapidité et son efficacité, combiné avec TailwindCSS pour un design moderne et réactif. Mon objectif est de créer des sites Web performants et esthétiquement agréables." 
        : 
        "Currently, I specialize in web development, offering solutions to meet your needs. I use the Svelte framework, known for its speed and efficiency, combined with TailwindCSS for a modern and responsive design. My goal is to create high-performance and aesthetically pleasing websites."}
      </p>
    </div>

  </div>
</div>