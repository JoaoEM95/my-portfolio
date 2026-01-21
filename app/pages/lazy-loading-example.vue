<template>
  <!--
    ⚡ LAZY LOADING - Carregamento Preguiçoso

    Demonstra diferentes técnicas de lazy loading no Nuxt 3:
    1. Componentes com defineAsyncComponent
    2. Importações dinâmicas
    3. Imagens com Intersection Observer
    4. Code splitting automático
  -->
  <div class="lazy-loading-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <div class="icon">⚡</div>
        <h1>Lazy Loading no Nuxt 3</h1>
        <p class="subtitle">Otimize o carregamento da sua aplicação com técnicas de carregamento preguiçoso</p>
      </div>

      <!-- Introdução -->
      <div class="intro-section">
        <h2>🎯 O que é Lazy Loading?</h2>
        <p>
          Lazy Loading (carregamento preguiçoso) é uma técnica que <strong>adia o carregamento</strong>
          de recursos até que eles sejam realmente necessários. Isso reduz o tempo de carregamento inicial
          e economiza largura de banda!
        </p>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="benefit-icon">⚡</span>
            <h3>Carregamento Rápido</h3>
            <p>Página inicial menor = carregamento mais rápido</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">💾</span>
            <h3>Economia de Banda</h3>
            <p>Só baixa o que é realmente usado</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">🎨</span>
            <h3>Melhor UX</h3>
            <p>Usuário vê conteúdo mais rápido</p>
          </div>
        </div>
      </div>

      <!-- Exemplo 1: Lazy Component com defineAsyncComponent -->
      <div class="example-section">
        <div class="example-header">
          <h2>1️⃣ Componente com defineAsyncComponent</h2>
          <p>Carregue componentes pesados apenas quando necessário</p>
        </div>

        <div class="example-demo">
          <div class="demo-controls">
            <button @click="loadHeavyComponent" class="load-button" :disabled="showHeavyComponent">
              {{ showHeavyComponent ? '✅ Componente Carregado' : '📦 Carregar Componente Pesado' }}
            </button>
            <div v-if="isLoadingHeavy" class="loading-indicator">
              <div class="spinner-small"></div>
              <span>Carregando...</span>
            </div>
          </div>

          <!-- Componente Pesado (Lazy Loaded) -->
          <transition name="slide-fade">
            <div v-if="showHeavyComponent" class="component-wrapper">
              <HeavyComponent v-if="HeavyComponentLoaded" />
            </div>
          </transition>

          <div v-if="!showHeavyComponent" class="explanation-box">
            <h4>💡 Como funciona?</h4>
            <p>
              Clique no botão acima para carregar dinamicamente um componente "pesado".
              Ele não está incluído no bundle inicial da página!
            </p>
            <div class="code-block">
              <pre><code>// Importação dinâmica usando defineAsyncComponent
const HeavyComponent = defineAsyncComponent(() =>
  import('~/components/HeavyComponent.vue')
)

// O componente só é baixado quando você chama:
showHeavyComponent.value = true</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemplo 2: Lazy Images -->
      <div class="example-section">
        <div class="example-header">
          <h2>2️⃣ Imagens com Lazy Loading</h2>
          <p>Use Intersection Observer para carregar imagens sob demanda</p>
        </div>

        <div class="example-demo">
          <p class="demo-description">
            Role a página para baixo! As imagens só são carregadas quando entram na viewport:
          </p>

          <div class="images-grid">
            <div v-for="n in 6" :key="n" class="image-card">
              <h4>Imagem {{ n }}</h4>
              <OptimizedImage
                :src="`https://picsum.photos/400/300?random=${n}`"
                :alt="`Imagem lazy load ${n}`"
                :loading-text="`Carregando imagem ${n}...`"
              />
            </div>
          </div>

          <div class="explanation-box">
            <h4>💡 Como funciona?</h4>
            <p>
              Usamos a <strong>Intersection Observer API</strong> para detectar quando
              a imagem entra na área visível (viewport) e só então carregá-la.
            </p>
            <div class="code-block">
              <pre><code>// Componente OptimizedImage
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      shouldLoad.value = true // Carrega a imagem!
    }
  })
}, { rootMargin: '200px' }) // Começa 200px antes</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Exemplo 3: Lazy Import -->
      <div class="example-section">
        <div class="example-header">
          <h2>3️⃣ Importação Dinâmica de Módulos</h2>
          <p>Carregue bibliotecas JavaScript apenas quando necessário</p>
        </div>

        <div class="example-demo">
          <div class="demo-controls">
            <button @click="loadChartLibrary" class="load-button" :disabled="chartLoaded">
              {{ chartLoaded ? '✅ Biblioteca Carregada' : '📊 Carregar Biblioteca de Gráficos' }}
            </button>
          </div>

          <div v-if="chartLoaded" class="chart-preview">
            <p class="success-message">
              ✅ Biblioteca de gráficos carregada com sucesso!
              <br />
              <small>Em um app real, você poderia usar Chart.js, ECharts, etc.</small>
            </p>
          </div>

          <div v-else class="explanation-box">
            <h4>💡 Como funciona?</h4>
            <p>
              Bibliotecas grandes (Chart.js, Moment.js, etc.) podem aumentar muito o bundle.
              Com importações dinâmicas, elas só são baixadas quando necessário!
            </p>
            <div class="code-block">
              <pre><code>// Importação dinâmica de biblioteca
const loadChartLibrary = async () => {
  // A biblioteca só é baixada AQUI!
  const chartLib = await import('chart.js')

  // Use a biblioteca
  chartLib.default.Chart(...)
}</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparação de Performance -->
      <div class="performance-section">
        <h2>📊 Impacto no Performance</h2>
        <div class="comparison-grid">
          <div class="comparison-card without">
            <h3>❌ Sem Lazy Loading</h3>
            <div class="metric">
              <span class="metric-value">2.5 MB</span>
              <span class="metric-label">Bundle inicial</span>
            </div>
            <div class="metric">
              <span class="metric-value">4.2s</span>
              <span class="metric-label">Tempo de carregamento</span>
            </div>
            <ul>
              <li>Todo código carregado de uma vez</li>
              <li>Usuário espera mais tempo</li>
              <li>Desperdiça banda</li>
            </ul>
          </div>

          <div class="comparison-card with">
            <h3>✅ Com Lazy Loading</h3>
            <div class="metric">
              <span class="metric-value">450 KB</span>
              <span class="metric-label">Bundle inicial</span>
            </div>
            <div class="metric">
              <span class="metric-value">1.1s</span>
              <span class="metric-label">Tempo de carregamento</span>
            </div>
            <ul>
              <li>Código dividido em chunks</li>
              <li>Carregamento progressivo</li>
              <li>Melhor experiência</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Boas Práticas -->
      <div class="best-practices-section">
        <h2>✨ Boas Práticas</h2>
        <div class="practices-grid">
          <div class="practice-card">
            <span class="practice-icon">✅</span>
            <h3>Quando Usar</h3>
            <ul>
              <li>Componentes grandes (gráficos, editores)</li>
              <li>Conteúdo abaixo da dobra (below fold)</li>
              <li>Modais e popovers</li>
              <li>Funcionalidades raramente usadas</li>
              <li>Bibliotecas pesadas</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="practice-icon">❌</span>
            <h3>Quando NÃO Usar</h3>
            <ul>
              <li>Componentes críticos do header</li>
              <li>Conteúdo above the fold</li>
              <li>Componentes pequenos (< 10KB)</li>
              <li>Conteúdo que precisa ser indexado (SEO)</li>
              <li>Elementos interativos principais</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="practice-icon">💡</span>
            <h3>Dicas Extras</h3>
            <ul>
              <li>Use prefixo "Lazy" do Nuxt: <code>&lt;LazyMyComponent /&gt;</code></li>
              <li>Configure <code>rootMargin</code> no Intersection Observer</li>
              <li>Mostre skeleton loaders enquanto carrega</li>
              <li>Trate erros de carregamento</li>
              <li>Teste em conexões lentas (3G)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Código de Exemplo Completo -->
      <div class="code-section">
        <h2>💻 Código de Exemplo Completo</h2>
        <div class="code-tabs">
          <div class="code-tab">
            <h4>Lazy Component (Método 1)</h4>
            <div class="code-block">
              <pre><code>&lt;script setup&gt;
// ⚡ Usando defineAsyncComponent do Vue
const HeavyComponent = defineAsyncComponent(() =>
  import('~/components/HeavyComponent.vue')
)

const show = ref(false)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="show = true"&gt;Carregar&lt;/button&gt;
  &lt;HeavyComponent v-if="show" /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>

          <div class="code-tab">
            <h4>Lazy Component (Método 2 - Nuxt)</h4>
            <div class="code-block">
              <pre><code>&lt;script setup&gt;
// ⚡ Usando o prefixo "Lazy" do Nuxt
// O Nuxt automaticamente faz o lazy loading!
const show = ref(false)
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="show = true"&gt;Carregar&lt;/button&gt;

  &lt;!-- Adicione "Lazy" no início do nome --&gt;
  &lt;LazyHeavyComponent v-if="show" /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Recursos -->
      <div class="resources-section">
        <h2>📚 Recursos e Documentação</h2>
        <div class="resources-grid">
          <a href="https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports" target="_blank" class="resource-link">
            <span class="resource-icon">📖</span>
            <div>
              <strong>Nuxt Lazy Components</strong>
              <small>Documentação oficial sobre componentes lazy</small>
            </div>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" class="resource-link">
            <span class="resource-icon">🔍</span>
            <div>
              <strong>Intersection Observer API</strong>
              <small>MDN Web Docs sobre Intersection Observer</small>
            </div>
          </a>
          <a href="https://web.dev/lazy-loading/" target="_blank" class="resource-link">
            <span class="resource-icon">🌐</span>
            <div>
              <strong>Lazy Loading Best Practices</strong>
              <small>Guia do Google sobre lazy loading</small>
            </div>
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div class="navigation">
        <NuxtLink to="/" class="btn-back">← Voltar ao Início</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * ⚡ LAZY LOADING EXAMPLE
 *
 * Esta página demonstra 3 técnicas principais de lazy loading:
 *
 * 1. defineAsyncComponent (Vue 3)
 *    - Carrega componentes dinamicamente
 *    - Cria chunks separados automaticamente
 *
 * 2. Intersection Observer (Web API)
 *    - Detecta quando elementos entram na viewport
 *    - Ideal para imagens e conteúdo below fold
 *
 * 3. Dynamic Imports (ES6)
 *    - import() retorna uma Promise
 *    - Webpack/Vite criam chunks automaticamente
 *
 * 💡 DICA: O Nuxt 3 tem suporte nativo!
 * Basta adicionar o prefixo "Lazy" nos componentes:
 * <LazyMyComponent /> ao invés de <MyComponent />
 */

import { ref, defineAsyncComponent } from 'vue'

// Estado para controlar exibição
const showHeavyComponent = ref(false)
const isLoadingHeavy = ref(false)
const HeavyComponentLoaded = ref(false)
const chartLoaded = ref(false)

// Lazy load do componente pesado
let HeavyComponent = null

const loadHeavyComponent = async () => {
  if (showHeavyComponent.value) return

  isLoadingHeavy.value = true

  try {
    // Importação dinâmica - cria um chunk separado
    HeavyComponent = defineAsyncComponent(() =>
      import('~/components/HeavyComponent.vue')
    )

    // Simula delay de rede
    await new Promise((resolve) => setTimeout(resolve, 800))

    HeavyComponentLoaded.value = true
    showHeavyComponent.value = true

    console.log('✅ Componente pesado carregado!')
  } catch (error) {
    console.error('❌ Erro ao carregar componente:', error)
  } finally {
    isLoadingHeavy.value = false
  }
}

// Lazy load de biblioteca (simulado)
const loadChartLibrary = async () => {
  if (chartLoaded.value) return

  try {
    console.log('📊 Carregando biblioteca de gráficos...')

    // Em um app real, você faria:
    // const chartLib = await import('chart.js')

    // Simulação de carregamento
    await new Promise((resolve) => setTimeout(resolve, 1500))

    chartLoaded.value = true
    console.log('✅ Biblioteca carregada!')
  } catch (error) {
    console.error('❌ Erro ao carregar biblioteca:', error)
  }
}

/**
 * 📚 RECURSOS ADICIONAIS:
 *
 * - Lazy Components: https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports
 * - Code Splitting: https://nuxt.com/docs/guide/concepts/code-splitting
 * - Performance: https://web.dev/lazy-loading/
 */

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
$primary: #00dc82;
$secondary: #667eea;
$text-dark: #1e293b;
$text-light: #64748b;

.lazy-loading-page {
  width: 100%;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  margin-bottom: 3rem;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: pulse 2s ease-in-out infinite;
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

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
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

    strong {
      color: $primary;
      font-weight: 700;
    }
  }
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.benefit-card {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 2px solid #bae6fd;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
    border-color: $secondary;
  }

  .benefit-icon {
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

.example-demo {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.load-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, $primary 0%, #00a86b 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 220, 130, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 220, 130, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.loading-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: $text-light;
  font-weight: 600;
}

.spinner-small {
  width: 24px;
  height: 24px;
  border: 3px solid #e2e8f0;
  border-top-color: $primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.component-wrapper {
  margin-top: 2rem;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Explanation Box */
.explanation-box {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;

  h4 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 1rem;

    strong {
      color: $text-dark;
      font-weight: 700;
    }
  }
}

.code-block {
  background: #1e293b;
  border-radius: 8px;
  padding: 1.5rem;
  overflow-x: auto;
  margin-top: 1rem;

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

/* Images Grid */
.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.image-card {
  h4 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
}

.demo-description {
  color: $text-light;
  font-size: 1.05rem;
  margin-bottom: 2rem;
  text-align: center;
}

/* Chart Preview */
.chart-preview {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 2px solid $primary;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.success-message {
  color: $text-dark;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;

  small {
    display: block;
    margin-top: 0.5rem;
    color: $text-light;
    font-weight: 400;
    font-size: 0.9rem;
  }
}

/* Performance Section */
.performance-section {
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

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.comparison-card {
  border-radius: 12px;
  padding: 2rem;
  border: 3px solid;

  &.without {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border-color: #ef4444;

    h3 {
      color: #991b1b;
    }
  }

  &.with {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    border-color: $primary;

    h3 {
      color: #065f46;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  .metric {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;

    .metric-value {
      font-size: 2rem;
      font-weight: 700;
      color: $text-dark;
    }

    .metric-label {
      font-size: 0.9rem;
      color: $text-light;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;

    li {
      padding: 0.5rem 0;
      color: $text-dark;
      font-weight: 500;

      &::before {
        content: '•';
        margin-right: 0.5rem;
        color: inherit;
      }
    }
  }
}

/* Best Practices */
.best-practices-section {
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

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.practice-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
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

/* Code Section */
.code-section {
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

.code-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.code-tab {
  h4 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.1rem;
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
  text-align: center;
  margin-bottom: 3rem;
}

.btn-back {
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
    transform: translateX(-4px);
  }
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

  .benefits-grid,
  .comparison-grid,
  .practices-grid {
    grid-template-columns: 1fr;
  }

  .images-grid {
    grid-template-columns: 1fr;
  }

  .code-tabs {
    grid-template-columns: 1fr;
  }

  .demo-controls {
    flex-direction: column;
    align-items: stretch;

    .load-button {
      width: 100%;
    }
  }
}
</style>
