<script lang="ts">
  import { onMount } from 'svelte';
  import { domCookie } from "cookie-muncher";
  import { darkMode } from '../../store/dark.js';
  import { lang } from '../../store/lang';
  import moon from '../../images/SVG/navbar/moon.svg';
  import sun from '../../images/SVG/navbar/sun.svg';
  import tradb from '../../images/SVG/navbar/tradb.svg';
  import tradw from '../../images/SVG/navbar/tradw.svg';

  const toggleTheme = () => {
    darkMode.update(value => !value);
  };

  function toggleLanguage() {
    lang.update(value => {
      const newLang = value === 'fr' ? 'en' : 'fr';
      saveLanguageChoice(newLang);
      return newLang;
    });
  }

  function saveUserChoice(isDarkModeEnabled: boolean) {
    const cookie = {
      name: "darkMode",
      value: isDarkModeEnabled ? "enabled" : "disabled"
    };
    domCookie.set(cookie);
  }

  function saveLanguageChoice(selectedLang: string) {
    const cookie = {
      name: "language",
      value: selectedLang
    };
    domCookie.set(cookie);
  }

  onMount(() => {
    const themeCookie = domCookie.get("darkMode");
    if (themeCookie) {
      darkMode.set(themeCookie.value === "enabled");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkMode.set(true);
    }

    darkMode.subscribe(value => {
      document.body.classList.toggle('dark', value);
      saveUserChoice(value);
    });

    const langCookie = domCookie.get("language");
    if (langCookie) {
      lang.set(langCookie.value);
    }
  });
</script>

<div class="fixed flex items-center justify-center w-full pt-5 z-[9999]" id="navbar">
  <div class="transition-all duration-500 group bg-[#d4d5e2] dark:bg-[#14141E] flex justify-center items-center cursor-pointer rounded-[20px] w-[53.5px] h-[53.5px] border-2 border-solid border-[#aaabbb] dark:border-[#868796] hover:bg-[#bdbeca] dark:hover:bg-[#23232e] hover:border-2 hover:border-[#9697a5] dark:hover:border-[#b5b6c9]" id="theme" on:click={toggleTheme} role="button" tabindex="0" on:keydown={e => { if (e.key === 'Enter') toggleTheme(); }}>
    <div class="mx-[10px] my-[10px]">
      <img src={sun} alt="HTML Noir" class="absolute top-[34px] left-[563px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
      <img src={moon} alt="HTML Blanc" class="absolute top-[34px] left-[564px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
    </div>
  </div>

  <div class="transition-colors duration-500 bg-[#d4d5e2] dark:bg-[#14141E] flex justify-between w-[290px] h-[53.5px] mx-3 px-1 py-1 rounded-[15px] border-2 border-solid border-[#aaabbb] dark:border-[#868796]" id="page">
    {#if $lang === 'fr'}
      <a class="transition-colors duration-500 text-[#5e5e5e] dark:text-[#a2a4b3] text-[15px] m-2.5 hover:text-[#000000] dark:hover:text-[#ffffff]" href="/">/Qui suis-je</a>
      <a class="transition-colors duration-500 text-[#5e5e5e] dark:text-[#a2a4b3] text-[15px] m-2.5 hover:text-[#000000] dark:hover:text-[#ffffff]" href="/creations">/Créations</a>
      <a class="transition-colors duration-500 text-[#5e5e5e] dark:text-[#a2a4b3] text-[15px] m-2.5 hover:text-[#000000] dark:hover:text-[#ffffff]" href="/contact">/Contact</a>
    {:else}
      <a class="transition-colors duration-500 text-[#5e5e5e] dark:text-[#a2a4b3] text-[15px] m-2.5 hover:text-[#000000] dark:hover:text-[#ffffff]" href="/">/About Me</a>
      <a class="transition-colors duration-500 text-[#5e5e5e] dark:text-[#a2a4b3] text-[15px] m-2.5 hover:text-[#000000] dark:hover:text-[#ffffff]" href="/creations">/Creations</a>
      <a class="transition-colors duration-500 text-[#5e5e5e] dark:text-[#a2a4b3] text-[15px] m-2.5 hover:text-[#000000] dark:hover:text-[#ffffff]" href="/contact">/Contact</a>
    {/if}
  </div>

  <div class="transition-colors duration-500 group bg-[#d4d5e2] dark:bg-[#14141E] flex justify-center items-center cursor-pointer rounded-[20px] w-[53.5px] h-[53.5px] border-2 border-solid border-[#aaabbb] dark:border-[#868796] hover:bg-[#bdbeca] dark:hover:bg-[#23232e] hover:border-2 hover:border-[#9697a5] dark:hover:border-[#b5b6c9]" id="langue" on:click={toggleLanguage} role="button" tabindex="0" on:keydown={e => { if (e.key === 'Enter' || e.key === ' ') toggleLanguage(); }}>
    <button class="mx-[10px] my-[10px]">
      <img src={tradb} alt="Traduction Sombre" class="absolute top-[34px] right-[563px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
      <img src={tradw} alt="Traduction Clair" class="absolute top-[34px] right-[564px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
    </button>
  </div>
</div>