<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  // Dispatcher pour envoyer l'événement de connexion au parent
  const dispatch = createEventDispatcher();

  let username = '';
  let password = '';

  // Fonction pour envoyer les identifiants au parent
  function handleSubmit() {
    dispatch('login', { username, password });
  }
</script>

<div class="transition-colors duration-500 flex items-center justify-center min-h-screen bg-[#0C0C12]" id="login-div">
  <form 
    class="transition-colors duration-500 bg-[#14141E] px-10 pb-8 pt-0 rounded-xl w-[400px]"
    on:submit|preventDefault={handleSubmit}
  >
    <h2 class="text-[40px] font-bold mb-6 text-center text-[#FFC000]">
      Connexion
    </h2>
    
    <div class="mb-5">
      <label for="username" class="block mb-2 text-[15px] lg:text-[18px] text-white">
        Nom d'utilisateur
      </label>
      <input
        type="text"
        id="username"
        bind:value={username}
        class="transition-colors duration-500 w-full p-2 rounded-xl bg-[#1d1d2c] border border-[#3d3d57] text-[15px] text-white"
        required
      />
    </div>
    
    <div class="mb-6">
      <label for="password" class="block mb-2 text-[15px] lg:text-[18px] text-white">
        Mot de passe
      </label>
      <input
        type="password"
        id="password"
        bind:value={password}
        class="transition-colors duration-500 w-full p-2 rounded-xl bg-[#1d1d2c] border border-[#3d3d57] text-[15px] text-white"
        required
      />
    </div>
    
    <div class="flex justify-center">
      <button 
        type="submit" 
        class="transition-all duration-500 bg-[#1d1d2c] hover:bg-[#2c2c42] w-[150px] text-[18px] text-white w-[120px] p-3 rounded-full"
      >
        Se connecter
      </button>
    </div>
  </form>
</div>