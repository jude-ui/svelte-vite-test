<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './components/Counter.svelte'
  // import ImportMetaSet from './vite-env'

  let tit = 'vite와 svelte 프로젝트'
  console.log(import.meta.env.PROD)
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="./vite/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src="{svelteLogo}" class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1 class="tit_test" style="">{tit}</h1>
  <h2 style="color:var(--secondary)">Vite + Svelte</h2>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>
