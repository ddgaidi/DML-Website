<script>
  import { darkMode } from '../../../store/dark.js';
  
  import htmld from '../../../images/SVG/technod/htmld.svg';
  import cssd from '../../../images/SVG/technod/cssd.svg';
  import svelted from '../../../images/SVG/technod/svelted.svg';
  import tailwindd from '../../../images/SVG/technod/tailwindd.svg';
  import jsd from '../../../images/SVG/technod/javascriptd.svg';
  import nextd from '../../../images/SVG/technod/nextd.svg';
  import pythond from '../../../images/SVG/technod/pythond.svg';
  import sqld from '../../../images/SVG/technod/databased.svg';
  import gitd from '../../../images/SVG/technod/gitd.svg';
  import tsd from '../../../images/SVG/technod/typescriptd.svg';

  import htmlw from '../../../images/SVG/technow/htmlw.svg';
  import cssw from '../../../images/SVG/technow/cssw.svg';
  import sveltew from '../../../images/SVG/technow/sveltew.svg';
  import tailwindw from '../../../images/SVG/technow/tailwindw.svg';
  import jsw from '../../../images/SVG/technow/javascriptw.svg';
  import nextw from '../../../images/SVG/technow/nextw.svg';
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

<div class="transition-colors duration-500 flex flex-col items-center justify-center pt-[30px]  pb-[30px] bg-[#f4f3fc] dark:bg-[#0C0C12]" id="portfolio">

  <div class="w-full h-[3px] mb-7" style="background: linear-gradient(to right, transparent 10%, #5865f2 50%, #5865f2 50%, transparent 90%);"></div>

  <h1 class="transition-all duration-500 font-extrabold pb-9 underline text-[40px] text-[#ff9900] dark:text-[#FFC000] font-family: 'Outfit', sans-serif" id="technologies">Mes créations :</h1>

  <div class="flex flex-row" id="row">

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[325px] p-4 mr-5 rounded-[6px] relative" id="crea-container">
      <a href="https://geodia.vercel.app/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-4" id="github-redirection">
          Voir
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>
      <div>
        <h1 class="transition-colors duration-500 text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Geodia Website</h1>
        <p class="transition-colors duration-500 text-[10px] mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">29/11/2023  ➜  Aujourd'hui</p>
        <p class="transition-colors duration-500 text-[13px] mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">Site pour un serveur de jeux Minecraft fictif.</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="flex" id="techno-crea">
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

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[325px] p-4 mr-5 rounded-[6px] relative" id="crea-container">
      <a href="https://khadra.vercel.app/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-4" id="github-redirection">
          Voir
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>           
      <div>
        <h1 class="transition-colors duration-500 text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Khadra</h1>
        <p class="transition-colors duration-500 text-[10px] mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">14/06/2024  ➜  Aujourd'hui</p>
        <p class="transition-colors duration-500 text-[13px] mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">Site wiki sur l'histoire football algérien.</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="flex" id="techno-crea">
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

    

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[325px] mr-[25px] p-5 rounded-[10px] relative" id="crea-container">
      <a href="https://dml-portfolio.vercel.app/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-[92px]" id="github-redirection">
          Voir
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>     
      <a href="https://github.com/DMLSurGithub/dml-website" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-4" id="github-redirection">
          Code
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>
      <div>
        <h1 class="transition-colors duration-500 text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">DML Portfolio</h1>
        <p class="transition-colors duration-500 text-[10px] mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">18/06/2023  ➜  Aujourd'hui</p>
        <p class="transition-colors duration-500 text-[13px] mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">Site portfolio de Djamel Dyne GAÏDI (DML).</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="flex" id="techno-crea">
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

    
  </div>

  <div class="flex flex-row mt-[25px]" id="row">

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[325px] p-4 mr-5 rounded-[6px] relative" id="crea-container">
      <a href="https://dml-website-old.vercel.app/" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-[92px]" id="github-redirection">
          Voir
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>     
      <a href="https://github.com/DMLSurGithub/dml-website-old" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-4" id="github-redirection">
          Code
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>         
      <div>
        <h1 class="transition-colors duration-500 text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Old Portfolio</h1>
        <p class="transition-colors duration-500 text-[10px] mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">24/05/2023  ➜  18/06/2023</p>
        <p class="transition-colors duration-500 text-[13px] mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">Ancien site portfolio de DML. [PLUS MIS À JOUR]</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="flex" id="techno-crea">
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

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[325px] mr-[25px] p-5 rounded-[10px] relative" id="crea-container">
      <a href="https://discord-invitation.vercel.app" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-[92px]" id="github-redirection">
          Voir
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a> 
      <a href="https://github.com/DMLSurGithub/Discord-Invitation" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-4" id="github-redirection">
          Code
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>         
      <div>
        <h1 class="transition-colors duration-500 text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">Discord Invite</h1>
        <p class="transition-colors duration-500 text-[10px] mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">13/05/2023</p>
        <p class="transition-colors duration-500 text-[13px] mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">Bout de code qu'on peut customiser à sa guise.</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="flex" id="techno-crea">
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

    <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex flex-col justify-between w-[325px] p-4 mr-5 rounded-[6px] relative" id="crea-container">
      <a href="https://securebits.vercel.app" target="_blank">
        <div class="bg-red-700 hover:bg-red-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-[92px]" id="github-redirection">
          Voir
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a> 
      <a href="https://github.com/DMLSurGithub/SecureBits" target="_blank">
        <div class="bg-green-700 hover:bg-green-600 text-white py-[2px] px-[4px] flex rounded absolute top-4 right-4" id="github-redirection">
          Code
          <img class="ml-[6px] mt-[5px] h-4" src={open} alt="Open">
        </div>
      </a>          
      <div>
        <h1 class="transition-colors duration-500 text-[20px] mb-[0px] mt-[-10px] font-family: 'Outfit', sans-serif text-[#4e59d8] dark:text-[#5865f2] font-bold">SecureBits</h1>
        <p class="transition-colors duration-500 text-[10px] mb-[15px] font-family: 'Outfit', sans-serif text-black dark:text-white">01/04/2023  ➜  02/04/2023</p>
        <p class="transition-colors duration-500 text-[13px] mb-[10px] w-[300px] font-family: 'Outfit', sans-serif text-black dark:text-white">Site qui présente la cybersécurité et l'informatique.</p>
      </div>
      <div class="flex justify-start items-end">
        <div class="flex" id="techno-crea">
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