<script lang="ts">
  import Login from '$lib/components/dashboard/login/Login.svelte';
  import { onMount } from 'svelte';

  interface VisitStat {
    page: string;
    visit_count: number;
  }

  // Définir le type pour les détails de l'événement de connexion
  interface LoginEventDetail {
    username: string;
    password: string;
  }

  let isAuthenticated = false;
  let visitStats: VisitStat[] = [];

  // Utiliser un type pour le paramètre `event`
  function handleLogin(event: CustomEvent<LoginEventDetail>) {
    const { username, password } = event.detail;
    
    // Vérifier les identifiants (par exemple, "admin" et "password123")
    if (username === 'djameldyne.gaidi' && password === 'DddMmmLll_9113z') {
      isAuthenticated = true;
      loadVisitStats(); // Charger les données une fois authentifié
    } else {
      alert('Nom d’utilisateur ou mot de passe incorrect');
    }
  }

  async function loadVisitStats() {
    const response = await fetch('/api/visits/stats');
    visitStats = await response.json();
  }
</script>

{#if isAuthenticated}
  <!-- Affiche le tableau de bord si l'utilisateur est authentifié -->
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Tableau de Bord des Visites</h1>
    <table class="min-w-full bg-white border">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b text-left">Page</th>
          <th class="py-2 px-4 border-b text-left">Nombre de visites</th>
        </tr>
      </thead>
      <tbody>
        {#each visitStats as stat}
          <tr>
            <td class="py-2 px-4 border-b">{stat.page}</td>
            <td class="py-2 px-4 border-b">{stat.visit_count}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <!-- Affiche le formulaire de connexion si l'utilisateur n'est pas authentifié -->
  <Login on:login={handleLogin} />
{/if}