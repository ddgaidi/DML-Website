<script lang="ts">
  import { onMount } from 'svelte';
  import { domCookie } from "cookie-muncher";
  import { darkMode } from '../../store/dark.js';
  import { lang } from '../../store/lang';
  import moon from '../../images/SVG/navbar/moon.svg';
  import sun from '../../images/SVG/navbar/sun.svg';
  import tradb from '../../images/SVG/navbar/tradb.svg';
  import tradw from '../../images/SVG/navbar/tradw.svg';

  let isMobileMenuOpen = false;

  const toggleTheme = () => {
    darkMode.update(value => !value);
  };

  const toggleLanguage = () => {
    lang.update(value => {
      const newLang = value === 'fr' ? 'en' : 'fr';
      saveLanguageChoice(newLang);
      return newLang;
    });
  };

  const saveUserChoice = (isDarkModeEnabled: boolean) => {
    const cookie = {
      name: "darkMode",
      value: isDarkModeEnabled ? "enabled" : "disabled"
    };
    domCookie.set(cookie);
  };

  const saveLanguageChoice = (selectedLang: string) => {
    const cookie = {
      name: "language",
      value: selectedLang
    };
    domCookie.set(cookie);
  };

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

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

<div class="fixed w-full pt-5 z-[9999]" id="navbar">
  <!-- Navbar pour Desktop -->
  <div class="hidden lg:flex items-center justify-center">
    <!-- Bouton de thème -->
    <div class="transition-all duration-500 group bg-[#d4d5e2] dark:bg-[#14141E] flex justify-center items-center cursor-pointer rounded-[20px] w-[53.5px] h-[53.5px] border-2 border-solid border-[#aaabbb] dark:border-[#868796] hover:bg-[#bdbeca] dark:hover:bg-[#23232e] hover:border-2 hover:border-[#9697a5] dark:hover:border-[#b5b6c9]" id="theme" on:click={toggleTheme} role="button" tabindex="0" on:keydown={e => { if (e.key === 'Enter') toggleTheme(); }}>
      <div class="mx-[10px] my-[10px]">
        <img src={sun} alt="HTML Noir" class="absolute top-[34px] left-[563px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={moon} alt="HTML Blanc" class="absolute top-[34px] left-[564px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
      </div>
    </div>

    <!-- Liens de page -->
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

    <!-- Bouton de langue -->
    <div class="transition-colors duration-500 group bg-[#d4d5e2] dark:bg-[#14141E] flex justify-center items-center cursor-pointer rounded-[20px] w-[53.5px] h-[53.5px] border-2 border-solid border-[#aaabbb] dark:border-[#868796] hover:bg-[#bdbeca] dark:hover:bg-[#23232e] hover:border-2 hover:border-[#9697a5] dark:hover:border-[#b5b6c9]" id="langue" on:click={toggleLanguage} role="button" tabindex="0" on:keydown={e => { if (e.key === 'Enter' || e.key === ' ') toggleLanguage(); }}>
      <button class="mx-[10px] my-[10px]">
        <img src={tradb} alt="Traduction Sombre" class="absolute top-[34px] right-[563px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-100' : 'opacity-0'}" />
        <img src={tradw} alt="Traduction Clair" class="absolute top-[34px] right-[564px] transition-opacity duration-500 ease-in-out h-[25px] {$darkMode ? 'opacity-0' : 'opacity-100'}" />
      </button>
    </div>
  </div>

  <!-- Navbar pour Mobile -->
  <div class="lg:hidden flex items-center px-3 py-3 mt-[-20px]  bg-[#edebf5] dark:bg-[#0a0a0f]">
    <!-- Bouton Hamburger pour ouvrir le menu -->
    <button class="text-[#5e5e5e] dark:text-[#a2a4b3]" on:click={toggleMobileMenu}>
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  
    <!-- Bouton pour changer de thème -->
    <button class="ml-3 mb-6" on:click={toggleTheme}>
      <img src={sun} alt="Mode clair" class="transition-opacity duration-500 h-6 absolute {$darkMode ? 'opacity-100' : 'opacity-0'}" />
      <img src={moon} alt="Mode sombre" class="transition-opacity duration-500 h-6 absolute {$darkMode ? 'opacity-0' : 'opacity-100'}" />
    </button>
  
    <!-- Bouton pour changer la langue -->
    <button class="ml-9 mb-6" on:click={toggleLanguage}>
      <img src={tradb} alt="Langue sombre" class="transition-opacity duration-500 h-6 absolute {$darkMode ? 'opacity-100' : 'opacity-0'}" />
      <img src={tradw} alt="Langue claire" class="transition-opacity duration-500 h-6 absolute {$darkMode ? 'opacity-0' : 'opacity-100'}" />
    </button>
  
    <!-- Menu déroulant pour la navigation -->
    {#if isMobileMenuOpen}
      <div class="absolute top-14 left-0 w-full  bg-[#e4e3ed] dark:bg-[#07070b] p-5 flex flex-col space-y-4">
        <!-- Liens de navigation -->
        {#if $lang === 'fr'}
          <a class="text-[#5e5e5e] dark:text-[#a2a4b3] text-lg hover:text-[#000000] dark:hover:text-[#ffffff]" href="/" on:click={toggleMobileMenu}>/Qui suis-je</a>
          <a class="text-[#5e5e5e] dark:text-[#a2a4b3] text-lg hover:text-[#000000] dark:hover:text-[#ffffff]" href="/creations" on:click={toggleMobileMenu}>/Créations</a>
          <a class="text-[#5e5e5e] dark:text-[#a2a4b3] text-lg hover:text-[#000000] dark:hover:text-[#ffffff]" href="/contact" on:click={toggleMobileMenu}>/Contact</a>
        {:else}
          <a class="text-[#5e5e5e] dark:text-[#a2a4b3] text-lg hover:text-[#000000] dark:hover:text-[#ffffff]" href="/" on:click={toggleMobileMenu}>/About Me</a>
          <a class="text-[#5e5e5e] dark:text-[#a2a4b3] text-lg hover:text-[#000000] dark:hover:text-[#ffffff]" href="/creations" on:click={toggleMobileMenu}>/Creations</a>
          <a class="text-[#5e5e5e] dark:text-[#a2a4b3] text-lg hover:text-[#000000] dark:hover:text-[#ffffff]" href="/contact" on:click={toggleMobileMenu}>/Contact</a>
        {/if}
      </div>
    {/if}
  </div>
  
</div>