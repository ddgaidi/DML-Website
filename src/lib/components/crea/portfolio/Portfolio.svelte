<script>
  import { lang } from '../../../store/lang';
  import { darkMode } from '../../../store/dark.js';
  
  import htmld from '../../../images/SVG/technod/htmld.svg';
  import cssd from '../../../images/SVG/technod/cssd.svg';
  import svelted from '../../../images/SVG/technod/svelted.svg';
  import tailwindd from '../../../images/SVG/technod/tailwindd.svg';
  import jsd from '../../../images/SVG/technod/javascriptd.svg';
  import pythond from '../../../images/SVG/technod/pythond.svg';
  import sqld from '../../../images/SVG/technod/databased.svg';
  import gitd from '../../../images/SVG/technod/gitd.svg';
  import tsd from '../../../images/SVG/technod/typescriptd.svg';

  import htmlw from '../../../images/SVG/technow/htmlw.svg';
  import cssw from '../../../images/SVG/technow/cssw.svg';
  import sveltew from '../../../images/SVG/technow/sveltew.svg';
  import tailwindw from '../../../images/SVG/technow/tailwindw.svg';
  import jsw from '../../../images/SVG/technow/javascriptw.svg';
  import pythonw from '../../../images/SVG/technow/pythonw.svg';
  import sqlw from '../../../images/SVG/technow/databasew.svg';
  import gitw from '../../../images/SVG/technow/gitw.svg';
  import tsw from '../../../images/SVG/technow/typescriptw.svg';
  import open from '../../../images/SVG/crea/open.svg';

  let darkModeValue = false;

  darkMode.subscribe(value => {
    darkModeValue = value;
  });
</script>

<div class="transition-all duration-500 flex flex-col items-center justify-center pt-[21px] lg:pt-[50px] pb-[30px] bg-[#f4f3fc] dark:bg-[#0C0C12]" id="portfolio">

  <div class="w-full h-[3px] mb-7" style="background: linear-gradient(to right, transparent 10%, #5865f2 50%, #5865f2 50%, transparent 90%);"></div>

  <h1 class="transition-all duration-500 font-extrabold pb-9 underline text-[25px] lg:text-[40px] text-[#ff9900] dark:text-[#FFC000] font-family: 'Outfit', sans-serif" id="technologies">
    {$lang === 'fr' ? "Mes créations :" : "My creations :"}
  </h1>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4" id="row">

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[270px] lg:w-[325px] px-3 pt-[17px] pb-[10px] lg:p-4 rounded-[10px] relative" id="crea-container">  
      <a href="https://github.com/ddgaidi/NoxeliaBot" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-2 lg:top-4 lg:right-4" id="github-redirection">
          {$lang === 'fr' ? "Code" : "Code"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>
      <div>
        <h1 class="transition-colors duration-500 text-[15px] lg:text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Noxélia</h1>
        <p class="transition-colors duration-500 text-[8px] lg:text-[10px] mb-[5px] lg:mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">10/12/2024  ➜  07/01/2025</p>
        <p class="transition-colors duration-500 text-[10px] lg:text-[13px] lg:mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">{$lang === 'fr' ? "Noxélia est le bot du serveur discord de Wizorah." : "Noxélia is the bot of the Wizorah discord server."}</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="hidden lg:flex" id="techno-crea">
          <a href="https://typescriptlang.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tsd} alt="TypeScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tsw} alt="TypeScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
        </div>
      </div>
    </div>

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[270px] lg:w-[325px] px-3 pt-[17px] pb-[10px] lg:p-4 rounded-[6px] relative" id="crea-container">
      <a href="https://wizorah.fr/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-2 lg:top-4 lg:right-4" id="github-redirection">
          {$lang === 'fr' ? "Voir" : "View"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>
      <div>
        <h1 class="transition-colors duration-500 text-[15px] lg:text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">
          Wizorah Website
        </h1>
        <p class="transition-colors duration-500 text-[8px] lg:text-[10px] mb-[5px] lg:mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">
          10/12/2024  ➜  {$lang === 'fr' ? "Aujourd'hui" : "Today"}
        </p>
        <p class="transition-colors duration-500 text-[10px] lg:text-[13px] lg:mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">
          {$lang === 'fr' ? "Site pour un serveur de jeux Minecraft Bedrock." : "Website for a Minecraft Bedrock game server."}
        </p>
      </div>
      <div class="flex justify-start items-end">
        <div class="hidden lg:flex" id="techno-crea">
          <a href="https://svelte.dev/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={svelted} alt="Svelte Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={sveltew} alt="Svelte Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://tailwindcss.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tailwindd} alt="TailwindCSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tailwindw} alt="TailwindCSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={htmld} alt="HTML Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={htmlw} alt="HTML Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={cssd} alt="CSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={cssw} alt="CSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={jsd} alt="JavaScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={jsw} alt="JavaScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://typescriptlang.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tsd} alt="TypeScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tsw} alt="TypeScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
        </div>
      </div>
    </div>

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[270px] lg:w-[325px] px-3 pt-[17px] pb-[10px] lg:p-4 rounded-[10px] relative" id="crea-container">
      <a href="https://djamelgaidi.me/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-[65px] lg:top-4 lg:right-[92px]" id="github-redirection">
          {$lang === 'fr' ? "Voir" : "View"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>     
      <a href="https://github.com/DMLSurGithub/dml-website" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-2 lg:top-4 lg:right-4" id="github-redirection">
          {$lang === 'fr' ? "Code" : "Code"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>
      <div>
        <h1 class="transition-colors duration-500 text-[15px] lg:text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">DML Portfolio</h1>
        <p class="transition-colors duration-500 text-[8px] lg:text-[10px] mb-[5px] lg:mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">18/06/2023  ➜  25/06/2023</p>
        <p class="transition-colors duration-500 text-[10px] lg:text-[13px] lg:mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">{$lang === 'fr' ? "Site portfolio de DML." : "Portfolio site of DML."}</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="hidden lg:flex" id="techno-crea">
          <a href="https://svelte.dev/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={svelted} alt="Svelte Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={sveltew} alt="Svelte Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://tailwindcss.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tailwindd} alt="TailwindCSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tailwindw} alt="TailwindCSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={htmld} alt="HTML Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={htmlw} alt="HTML Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={cssd} alt="CSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={cssw} alt="CSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={jsd} alt="JavaScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={jsw} alt="JavaScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://typescriptlang.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tsd} alt="TypeScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tsw} alt="TypeScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
        </div>
      </div>
    </div>

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[270px] lg:w-[325px] px-3 pt-[17px] pb-[10px] lg:p-4 rounded-[6px] relative" id="crea-container">
      <a href="https://dml-website-old.vercel.app/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-[65px] lg:top-4 lg:right-[92px]" id="github-redirection">
          {$lang === 'fr' ? "Voir" : "View"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>     
      <a href="https://github.com/DMLSurGithub/dml-website-old" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-2 lg:top-4 lg:right-4" id="github-redirection">
          {$lang === 'fr' ? "Code" : "Code"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>         
      <div>
        <h1 class="transition-colors duration-500 text-[15px] lg:text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Old Portfolio</h1>
        <p class="transition-colors duration-500 text-[8px] lg:text-[10px] mb-[5px] lg:mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">24/05/2023  ➜  18/06/2023</p>
        <p class="transition-colors duration-500 text-[10px] lg:text-[13px] lg:mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">{$lang === 'fr' ? "Ancien site portfolio de DML. [PLUS MIS À JOUR]" : "Former DML portfolio site. [NO LONGER UPDATED]"}</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="hidden lg:flex" id="techno-crea">
          <a href="https://svelte.dev/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={svelted} alt="Svelte Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={sveltew} alt="Svelte Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://tailwindcss.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tailwindd} alt="TailwindCSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tailwindw} alt="TailwindCSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={htmld} alt="HTML Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={htmlw} alt="HTML Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={cssd} alt="CSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={cssw} alt="CSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={jsd} alt="JavaScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={jsw} alt="JavaScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://typescriptlang.com/" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={tsd} alt="TypeScript Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={tsw} alt="TypeScript Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
        </div>
      </div>
    </div>

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[270px] lg:w-[325px] px-3 pt-[17px] pb-[10px] lg:p-4 rounded-[10px] relative" id="crea-container">
      <a href="https://discord-invitation.vercel.app" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-[65px] lg:top-4 lg:right-[92px]" id="github-redirection">
          {$lang === 'fr' ? "Voir" : "View"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a> 
      <a href="https://github.com/DMLSurGithub/Discord-Invitation" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-2 lg:top-4 lg:right-4" id="github-redirection">
          {$lang === 'fr' ? "Code" : "Code"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>         
      <div>
        <h1 class="transition-colors duration-500 text-[15px] lg:text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Discord Invite</h1>
        <p class="transition-colors duration-500 text-[8px] lg:text-[10px] mb-[5px] lg:mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">13/05/2023</p>
        <p class="transition-colors duration-500 text-[10px] lg:text-[13px] lg:mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">{$lang === 'fr' ? "Bout de code qu'on peut customiser à sa guise." : "A piece of code that can be customized as desired."}</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="hidden lg:flex" id="techno-crea">
          <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={htmld} alt="HTML Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={htmlw} alt="HTML Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={cssd} alt="CSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={cssw} alt="CSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
        </div>
      </div>
    </div>

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[270px] lg:w-[325px] px-3 pt-[17px] pb-[10px] lg:p-4 rounded-[6px] relative" id="crea-container">
      <a href="https://securebits.vercel.app" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-[65px] lg:top-4 lg:right-[92px]" id="github-redirection">
          {$lang === 'fr' ? "Voir" : "View"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a> 
      <a href="https://github.com/DMLSurGithub/SecureBits" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute text-[10px] lg:text-[16px] top-2 right-2 lg:top-4 lg:right-4" id="github-redirection">
          {$lang === 'fr' ? "Code" : "Code"}
          <img class="ml-[6px] mt-[1px] lg:mt-[5px] h-3 lg:h-4" src={open} alt="Open">
        </div>
      </a>          
      <div>
        <h1 class="transition-colors duration-500 text-[15px] lg:text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">SecureBits</h1>
        <p class="transition-colors duration-500 text-[8px] lg:text-[10px] mb-[5px] lg:mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">01/04/2023  ➜  02/04/2023</p>
        <p class="transition-colors duration-500 text-[10px] lg:text-[13px] lg:mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">{$lang === 'fr' ? "Site qui présente la cybersécurité et l'informatique." : "Site that presents cybersecurity and IT."}</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="hidden lg:flex" id="techno-crea">
          <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={htmld} alt="HTML Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={htmlw} alt="HTML Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
          <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" class="transition-all duration-150 mr-[-20px] hover:mr-[5px]">
            <div class="relative transition-colors duration-500 bg-[#c4c6d6] dark:bg-[#0f0f18] hover:bg-[#aaacbb] dark:hover:bg-[#161624] p-[10px] rounded-full w-[42px] h-[42px] border-[0.5px] border-solid border-[#aaacbb] dark:border-[#3a3a5a] hover:border-[#777985] dark:hover:border-[#4f4f79]">
              <img src={cssd} alt="CSS Noir" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5'}>
              <img src={cssw} alt="CSS Blanc" class={$darkMode ? 'absolute transition-opacity duration-500 ease-in-out opacity-0 h-5' : 'absolute transition-opacity duration-500 ease-in-out opacity-100 h-5'}>
            </div>            
          </a>
        </div>
      </div>
    </div>

  </div>

</div>