<script>
    import { onMount } from 'svelte';

onMount(async () => {
  await fetch('/api/visits', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      page: window.location.pathname,
      visitor_id: crypto.randomUUID() // ou un autre identifiant unique
    })
  });
});

  import '../app.css';
  import Navbar from '../lib/components/navbar/Navbar.svelte';
  import Footer from '../lib/components/footer/Footer.svelte';
  import Bio from '../lib/components/qui/bio/Bio.svelte';
  import Histoire from '../lib/components/qui/histoire/Histoire.svelte';
</script>

<svelte:head>
	<title>DML - Qui suis-je</title>
	<meta name="description" content="Je m'appelle Djamel, j'ai 17 ans et je réside en région parisienne. Depuis mon plus jeune âge, ma passion pour l'informatique ne cesse de grandir. Au cours de la dernière année, j'ai particulièrement plongé dans le domaine du Développement Web et je me suis concentré sur l'apprentissage approfondi du Framework Svelte." />
	<meta content="#5865f2" data-react-helmet="true" name="theme-color"/>
	<meta property="og:image" content="https://i.ibb.co/G74TVt9/dml.gif" />
</svelte:head>

<Navbar />

<Bio />

<Histoire />

<Footer />