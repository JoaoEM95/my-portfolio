<template>
  <div class="rotate-page">
    <div class="container">
      <div class="demo-card">
        <div class="icon">🌀</div>
        <h1>Rotate Transition</h1>
        <p>Esta página roda suavemente ao aparecer</p>

        <div class="info">
          <code>pageTransition: &#123; name: 'rotate' &#125;</code>
        </div>

        <div class="nav-buttons">
          <NuxtLink to="/nuxt-transitions/scale" class="btn-back">
            ← Anterior
          </NuxtLink>
          <NuxtLink to="/nuxt-transitions" class="btn-home">
            🏠 Início
          </NuxtLink>
          <NuxtLink to="/" class="btn-next">
            🏠 Home Principal
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'rotate',
    mode: 'out-in'
  }
})
</script>

<style scoped lang="scss">
.rotate-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fae8ff 0%, #f3e8ff 100%);
}

.container {
  max-width: 600px;
  padding: 2rem;
}

.demo-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  .icon {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  h1 {
    color: #1e293b;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #64748b;
    margin-bottom: 2rem;
  }

  .info {
    background: #f8fafc;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;

    code {
      color: #a855f7;
      font-family: 'Courier New', monospace;
    }
  }

  .nav-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn-back,
  .btn-home,
  .btn-next {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #00dc82;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: #00a86b;
      transform: translateY(-2px);
    }
  }

  .btn-back {
    background: #64748b;

    &:hover {
      background: #475569;
    }
  }

  .btn-home {
    background: #667eea;

    &:hover {
      background: #5568d3;
    }
  }
}

/**
 * 💡 NOTA: As classes CSS da transição 'rotate' estão definidas
 * globalmente no app.vue para que o Nuxt possa aplicá-las corretamente.
 */
</style>
