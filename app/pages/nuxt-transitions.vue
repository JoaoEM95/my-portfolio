<template>
  <!--
    🎭 NUXT TRANSITIONS - Transições entre Páginas e Layouts

    Demonstra as transições específicas do Nuxt 3:
    - Page Transitions (transições entre páginas)
    - Layout Transitions (transições entre layouts)
    - Transições customizadas com definePageMeta
  -->
  <div class="nuxt-transitions-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <div class="icon">🎭</div>
        <h1>Nuxt Transitions</h1>
        <p class="subtitle">Transições entre páginas e layouts no Nuxt 3</p>
      </div>

      <!-- Introdução -->
      <div class="intro-section">
        <h2>🎯 O que são Nuxt Transitions?</h2>
        <p>
          O Nuxt 3 oferece suporte nativo para transições entre páginas e layouts.
          Você pode aplicar animações automaticamente quando navega entre rotas!
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon">📄</span>
            <h3>Page Transitions</h3>
            <p>Anima a troca entre páginas</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">🎨</span>
            <h3>Layout Transitions</h3>
            <p>Anima a mudança de layouts</p>
          </div>
          <div class="feature-card">
            <span class="feature-icon">⚙️</span>
            <h3>Customizável</h3>
            <p>Configure por página ou globalmente</p>
          </div>
        </div>
      </div>

      <!-- Page Transitions -->
      <div class="example-section">
        <div class="example-header">
          <h2>1️⃣ Page Transitions</h2>
          <p>Transições aplicadas quando você navega entre páginas diferentes</p>
        </div>

        <div class="demo-box">
          <h3>🧪 Teste as Transições</h3>
          <p class="demo-description">
            Clique nos links abaixo para ver diferentes transições entre páginas.
            Cada página usa uma transição diferente!
          </p>

          <div class="navigation-grid">
            <NuxtLink to="/nuxt-transitions/fade" class="demo-nav-card fade">
              <span class="nav-icon">💨</span>
              <div class="nav-content">
                <h4>Fade</h4>
                <small>Transição suave de opacidade</small>
              </div>
            </NuxtLink>

            <NuxtLink to="/nuxt-transitions/slide" class="demo-nav-card slide">
              <span class="nav-icon">➡️</span>
              <div class="nav-content">
                <h4>Slide</h4>
                <small>Desliza da direita para esquerda</small>
              </div>
            </NuxtLink>

            <NuxtLink to="/nuxt-transitions/scale" class="demo-nav-card scale">
              <span class="nav-icon">🔍</span>
              <div class="nav-content">
                <h4>Scale</h4>
                <small>Zoom in/out ao trocar</small>
              </div>
            </NuxtLink>

            <NuxtLink to="/nuxt-transitions/rotate" class="demo-nav-card rotate">
              <span class="nav-icon">🔄</span>
              <div class="nav-content">
                <h4>Rotate</h4>
                <small>Gira ao entrar e sair</small>
              </div>
            </NuxtLink>
          </div>

          <div class="info-box">
            <h4>💡 Como Funciona</h4>
            <p>
              Cada link acima leva para uma subpágina com uma transição diferente.
              As transições são configuradas usando <code>definePageMeta</code> em cada página.
            </p>
          </div>
        </div>
      </div>

      <!-- Configuração Global -->
      <div class="config-section">
        <h2>⚙️ Configuração Global</h2>
        <p class="section-description">
          Você pode configurar transições globalmente no <code>nuxt.config.ts</code>
          ou por página usando <code>definePageMeta</code>
        </p>

        <div class="config-grid">
          <div class="config-card">
            <h3>📄 nuxt.config.ts (Global)</h3>
            <div class="code-block">
              <pre><code>export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  }
})</code></pre>
            </div>
          </div>

          <div class="config-card">
            <h3>📝 definePageMeta (Por Página)</h3>
            <div class="code-block">
              <pre><code>&lt;script setup&gt;
definePageMeta({
  pageTransition: {
    name: 'slide',
    mode: 'out-in'
  }
})
&lt;/script&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- CSS para Transitions -->
      <div class="css-section">
        <h2>🎨 CSS das Transições</h2>
        <p class="section-description">
          Após definir o nome da transição, você precisa criar as classes CSS correspondentes.
          O Nuxt usa o mesmo sistema de classes do Vue.
        </p>

        <div class="css-examples">
          <div class="css-example-card">
            <h3>Fade Transition</h3>
            <div class="code-block">
              <pre><code>.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}</code></pre>
            </div>
          </div>

          <div class="css-example-card">
            <h3>Slide Transition</h3>
            <div class="code-block">
              <pre><code>.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}</code></pre>
            </div>
          </div>

          <div class="css-example-card">
            <h3>Scale Transition</h3>
            <div class="code-block">
              <pre><code>.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from {
  transform: scale(0.9);
  opacity: 0;
}

.scale-leave-to {
  transform: scale(1.1);
  opacity: 0;
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Modos de Transição -->
      <div class="modes-section">
        <h2>🔄 Modos de Transição</h2>
        <p class="section-description">
          O modo controla a ordem das animações de entrada e saída
        </p>

        <div class="modes-grid">
          <div class="mode-card">
            <div class="mode-badge default">Default</div>
            <h3>Padrão (Simultâneo)</h3>
            <p>
              Entrada e saída acontecem ao mesmo tempo.
              Pode causar sobreposição de elementos.
            </p>
            <div class="code-block">
              <pre><code>pageTransition: {
  name: 'page'
  // sem mode
}</code></pre>
            </div>
          </div>

          <div class="mode-card">
            <div class="mode-badge out-in">out-in</div>
            <h3>Out-In (Recomendado)</h3>
            <p>
              Primeiro a página atual sai, depois a nova entra.
              Evita sobreposição e é mais limpo.
            </p>
            <div class="code-block">
              <pre><code>pageTransition: {
  name: 'page',
  mode: 'out-in' // ✅ Recomendado
}</code></pre>
            </div>
          </div>

          <div class="mode-card">
            <div class="mode-badge in-out">in-out</div>
            <h3>In-Out</h3>
            <p>
              Primeiro a nova página entra, depois a antiga sai.
              Raramente usado, pode causar sobreposição.
            </p>
            <div class="code-block">
              <pre><code>pageTransition: {
  name: 'page',
  mode: 'in-out'
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- JavaScript Hooks -->
      <div class="hooks-section">
        <h2>🪝 JavaScript Hooks</h2>
        <p class="section-description">
          Você pode usar hooks JavaScript para controlar a transição programaticamente
        </p>

        <div class="code-block large">
          <pre><code>&lt;script setup&gt;
definePageMeta({
  pageTransition: {
    name: 'custom',
    mode: 'out-in',

    // Hooks disponíveis
    onBeforeEnter: (el) => {
      console.log('Antes de entrar')
    },
    onEnter: (el, done) => {
      // Anime com GSAP, anime.js, etc
      console.log('Entrando')
      done()
    },
    onAfterEnter: (el) => {
      console.log('Depois de entrar')
    },
    onBeforeLeave: (el) => {
      console.log('Antes de sair')
    },
    onLeave: (el, done) => {
      console.log('Saindo')
      done()
    },
    onAfterLeave: (el) => {
      console.log('Depois de sair')
    }
  }
})
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Layout Transitions -->
      <div class="layout-transitions-section">
        <h2>🎨 Layout Transitions</h2>
        <p class="section-description">
          Similar às page transitions, mas aplicadas quando o layout muda
        </p>

        <div class="layout-example">
          <div class="code-block">
            <pre><code>// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  }
})

// CSS (app.vue ou global)
.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s ease;
}

.layout-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.layout-leave-to {
  opacity: 0;
  transform: translateY(20px);
}</code></pre>
          </div>
        </div>
      </div>

      <!-- Boas Práticas -->
      <div class="best-practices-section">
        <h2>✨ Boas Práticas</h2>
        <div class="practices-grid">
          <div class="practice-card">
            <span class="practice-icon">⚡</span>
            <h3>Performance</h3>
            <ul>
              <li>Use durações curtas (200-400ms)</li>
              <li>Prefira <code>transform</code> e <code>opacity</code></li>
              <li>Use <code>mode: 'out-in'</code> para evitar sobreposição</li>
              <li>Teste em dispositivos móveis</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="practice-icon">🎯</span>
            <h3>UX</h3>
            <ul>
              <li>Mantenha transições consistentes</li>
              <li>Não abuse - nem toda navegação precisa de animação</li>
              <li>Considere <code>prefers-reduced-motion</code></li>
              <li>Transições devem ser rápidas e sutis</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="practice-icon">🔧</span>
            <h3>Implementação</h3>
            <ul>
              <li>Configure globalmente no <code>nuxt.config.ts</code></li>
              <li>Override por página com <code>definePageMeta</code></li>
              <li>Use nomes descritivos (fade, slide, etc)</li>
              <li>Documente as transições customizadas</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Disable Transitions -->
      <div class="disable-section">
        <h2>🚫 Desabilitando Transições</h2>
        <p class="section-description">
          Às vezes você precisa desabilitar transições em páginas específicas
        </p>

        <div class="disable-examples">
          <div class="disable-card">
            <h3>Desabilitar em Uma Página</h3>
            <div class="code-block">
              <pre><code>&lt;script setup&gt;
definePageMeta({
  pageTransition: false,
  layoutTransition: false
})
&lt;/script&gt;</code></pre>
            </div>
          </div>

          <div class="disable-card">
            <h3>Desabilitar com CSS Media Query</h3>
            <div class="code-block">
              <pre><code>@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none !important;
  }
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Recursos -->
      <div class="resources-section">
        <h2>📚 Recursos Adicionais</h2>
        <div class="resources-grid">
          <a href="https://nuxt.com/docs/getting-started/transitions" target="_blank" class="resource-link">
            <span class="resource-icon">📖</span>
            <div>
              <strong>Nuxt Transitions</strong>
              <small>Documentação oficial do Nuxt sobre transitions</small>
            </div>
          </a>
          <a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" class="resource-link">
            <span class="resource-icon">🎬</span>
            <div>
              <strong>Vue Transition Component</strong>
              <small>Base das transitions do Nuxt</small>
            </div>
          </a>
          <a href="https://easings.net/" target="_blank" class="resource-link">
            <span class="resource-icon">📐</span>
            <div>
              <strong>Easing Functions</strong>
              <small>Referência visual de timing functions</small>
            </div>
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div class="navigation">
        <NuxtLink to="/" class="btn-back">← Voltar ao Início</NuxtLink>
        <NuxtLink to="/transitions-example" class="btn-next">
          Ver Transitions do Vue →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🎭 NUXT TRANSITIONS
 *
 * Este exemplo demonstra as transições específicas do Nuxt 3:
 *
 * 📚 CONCEITOS:
 *
 * 1. Page Transitions
 *    - Aplicadas automaticamente entre navegações
 *    - Configuradas em nuxt.config.ts ou definePageMeta
 *
 * 2. Layout Transitions
 *    - Animam mudanças de layout
 *    - Útil quando diferentes seções usam layouts diferentes
 *
 * 3. Modos
 *    - default: entrada e saída simultâneas
 *    - out-in: espera sair antes de entrar (recomendado)
 *    - in-out: entra antes de sair
 *
 * 4. JavaScript Hooks
 *    - onBeforeEnter, onEnter, onAfterEnter
 *    - onBeforeLeave, onLeave, onAfterLeave
 *
 * 💡 DIFERENÇA DO VUE TRANSITIONS:
 * - Vue: <Transition> para componentes dentro da página
 * - Nuxt: pageTransition para navegação entre páginas
 */

// Esta página não precisa de lógica adicional
// As transições são configuradas via definePageMeta ou nuxt.config.ts
</script>

<style scoped>
$primary: #00dc82;
$secondary: #667eea;
$accent: #f59e0b;
$text-dark: #1e293b;
$text-light: #64748b;

.nuxt-transitions-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Page Header */
.page-header {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.3);

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    opacity: 0.95;
    margin: 0;
  }
}

/* Intro Section */
.intro-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.75rem;
  }

  p {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #fbbf24;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.2);
  }

  .feature-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 1rem;
  }

  h3 {
    color: $text-dark;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: $text-light;
    font-size: 0.95rem;
    margin: 0;
  }
}

/* Example Sections */
.example-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.example-header {
  margin-bottom: 2rem;

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: $text-light;
    margin: 0;
  }
}

.demo-box {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;

  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .demo-description {
    color: $text-light;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
}

.navigation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.demo-nav-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border: 3px solid;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &.fade {
    border-color: #3b82f6;

    &:hover {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      transform: translateY(-4px);
    }
  }

  &.slide {
    border-color: $primary;

    &:hover {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      transform: translateY(-4px);
    }
  }

  &.scale {
    border-color: #a855f7;

    &:hover {
      background: linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%);
      transform: translateY(-4px);
    }
  }

  &.rotate {
    border-color: #f59e0b;

    &:hover {
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      transform: translateY(-4px);
    }
  }

  .nav-icon {
    font-size: 2.5rem;
  }

  .nav-content {
    h4 {
      color: $text-dark;
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }

    small {
      color: $text-light;
      font-size: 0.85rem;
    }
  }
}

.info-box {
  background: white;
  border-left: 4px solid $accent;
  border-radius: 8px;
  padding: 1.5rem;

  h4 {
    color: $text-dark;
    margin-bottom: 0.75rem;
  }

  p {
    color: $text-light;
    margin: 0;
    line-height: 1.7;

    code {
      background: rgba(0, 0, 0, 0.06);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      color: $secondary;
      font-family: 'Courier New', monospace;
    }
  }
}

/* Config Section */
.config-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .section-description {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 2rem;

    code {
      background: rgba(0, 0, 0, 0.06);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      color: $secondary;
      font-family: 'Courier New', monospace;
    }
  }
}

.config-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.config-card {
  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
}

/* Code Blocks */
.code-block {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;

  &.large {
    padding: 2rem;
  }

  pre {
    margin: 0;

    code {
      color: #cbd5e1;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
}

/* CSS Section */
.css-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .section-description {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}

.css-examples {
  display: grid;
  gap: 2rem;
}

.css-example-card {
  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
}

/* Modes Section */
.modes-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .section-description {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}

.modes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.mode-card {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  padding-top: 3rem;

  .mode-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.default {
      background: #e2e8f0;
      color: $text-dark;
    }

    &.out-in {
      background: linear-gradient(135deg, $primary 0%, #00a86b 100%);
      color: white;
    }

    &.in-out {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: white;
    }
  }

  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: $text-light;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

/* Hooks, Layout, Best Practices Sections */
.hooks-section,
.layout-transitions-section,
.best-practices-section,
.disable-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .section-description {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.practice-card {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary;
    transform: translateY(-2px);
  }

  .practice-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 1rem;
  }

  h3 {
    color: $text-dark;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.5rem 0;
      color: $text-light;
      font-size: 0.95rem;
      line-height: 1.6;

      &::before {
        content: '→';
        margin-right: 0.5rem;
        color: $primary;
        font-weight: 700;
      }

      code {
        background: rgba(0, 0, 0, 0.06);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        color: $secondary;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
      }
    }
  }
}

/* Disable Section */
.disable-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.disable-card {
  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
}

/* Resources */
.resources-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
}

.resources-grid {
  display: grid;
  gap: 1rem;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary;
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 220, 130, 0.2);
  }

  .resource-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  strong {
    display: block;
    color: $text-dark;
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
  }

  small {
    color: $text-light;
    font-size: 0.9rem;
  }
}

/* Navigation */
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  flex-wrap: wrap;
}

.btn-back,
.btn-next {
  padding: 0.75rem 1.5rem;
  background: $primary;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background: #00a86b;
  }
}

.btn-back:hover {
  transform: translateX(-4px);
}

.btn-next:hover {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 768px) {
  .page-header {
    padding: 2rem 1.5rem;

    h1 {
      font-size: 1.75rem;
    }

    .icon {
      font-size: 3rem;
    }
  }

  .features-grid,
  .navigation-grid,
  .config-grid,
  .modes-grid,
  .practices-grid,
  .disable-examples {
    grid-template-columns: 1fr;
  }

  .navigation {
    flex-direction: column;

    .btn-back,
    .btn-next {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
