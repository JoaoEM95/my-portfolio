<template>
  <!--
    🌐 CATCH-ALL ROUTE (Rota Coringa)

    Arquivo: /pages/[...words].vue
    Captura: QUALQUER rota que não existe

    [...words] = captura múltiplos segmentos da URL
    Exemplo: /docs/nuxt/getting-started → ['docs', 'nuxt', 'getting-started']
  -->
  <div class="catchall-page">
    <div class="container">
      <div class="catchall-card">
        <!-- Header -->
        <div class="header">
          <div class="icon">🌐</div>
          <h1 class="title">Catch-all Route</h1>
          <p class="subtitle">Capturando múltiplos segmentos da URL</p>
        </div>

        <!-- URL Captured -->
        <div class="url-section">
          <h3>📍 URL Capturada</h3>
          <div class="url-display">
            <span class="url-full">{{ fullPath }}</span>
          </div>
        </div>

        <!-- Segments -->
        <div class="segments-section">
          <h3>📦 Segmentos Capturados (Array)</h3>
          <div class="segments-grid">
            <div
              v-for="(segment, index) in wordsArray"
              :key="index"
              class="segment-item"
            >
              <span class="segment-index">{{ index }}</span>
              <span class="segment-value">{{ segment }}</span>
            </div>
          </div>
          <div v-if="wordsArray.length === 0" class="no-segments">
            <p>Nenhum segmento capturado. Acesse uma URL como <code>/docs/nuxt/tutorial</code></p>
          </div>
        </div>

        <!-- Explanation -->
        <div class="explanation">
          <h3>💡 Como Funciona?</h3>
          <ul>
            <li><strong>Sintaxe:</strong> <code>[...nome]</code> com 3 pontos captura todos os segmentos restantes</li>
            <li><strong>Retorno:</strong> Um array com cada parte da URL separada por <code>/</code></li>
            <li><strong>Uso:</strong> Perfeito para páginas 404, documentação multinível, ou sistemas de arquivos</li>
            <li><strong>Prioridade:</strong> Esta rota só é usada se nenhuma outra rota específica corresponder</li>
          </ul>
        </div>

        <!-- Use Cases -->
        <div class="usecases">
          <h3>🎯 Casos de Uso Comuns</h3>
          <div class="usecase-grid">
            <div class="usecase-card">
              <h4>📄 Página 404 Customizada</h4>
              <p>Capture todas as rotas não encontradas e mostre uma página de erro personalizada.</p>
            </div>
            <div class="usecase-card">
              <h4>📚 Sistema de Documentação</h4>
              <p>URLs como /docs/guide/getting-started podem ter quantos níveis você precisar.</p>
            </div>
            <div class="usecase-card">
              <h4>🗂️ Navegador de Arquivos</h4>
              <p>Represente estruturas de pastas: /files/documents/2024/report.pdf</p>
            </div>
          </div>
        </div>

        <!-- Código -->
        <div class="code-example">
          <h4>💻 Código desta Página</h4>
          <pre><code>// 📁 Nome do arquivo
/pages/[...words].vue

// 📝 Acessando os segmentos
const words = useRoute().params.words
// words é um array: ['docs', 'nuxt', 'tutorial']

// 🔍 Exemplos de URL:
// /hello → words = ['hello']
// /docs/guide → words = ['docs', 'guide']
// /a/b/c/d/e → words = ['a', 'b', 'c', 'd', 'e']</code></pre>
        </div>

        <!-- Test Links -->
        <div class="test-section">
          <h3>🧪 Teste com Diferentes URLs</h3>
          <div class="test-links">
            <NuxtLink to="/docs" class="test-link">/docs</NuxtLink>
            <NuxtLink to="/docs/nuxt" class="test-link">/docs/nuxt</NuxtLink>
            <NuxtLink to="/docs/nuxt/getting-started" class="test-link">/docs/nuxt/getting-started</NuxtLink>
            <NuxtLink to="/blog/2024/january/post-1" class="test-link">/blog/2024/january/post-1</NuxtLink>
          </div>
        </div>

        <!-- Navigation -->
        <div class="navigation">
          <NuxtLink to="/" class="btn-back">← Voltar ao Início</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🌐 CATCH-ALL ROUTE (Rota Coringa)
 *
 * [...param] = Captura TODOS os segmentos restantes da URL
 * Retorna um array com cada parte separada por /
 */

const route = useRoute()
const words = route.params.words

/**
 * 📊 Processamento dos dados
 */
import { computed } from 'vue'

// Garante que words seja sempre um array
const wordsArray = computed(() => {
  if (!words) return []
  return Array.isArray(words) ? words : [words]
})

// Path completo
const fullPath = computed(() => route.fullPath)

/**
 * 💡 DIFERENÇAS IMPORTANTES:
 *
 * [slug].vue      → Captura 1 segmento: /blog
 * [...slug].vue   → Captura N segmentos: /blog/2024/post
 *
 * [...slug] sempre retorna um ARRAY, mesmo com 1 segmento!
 */

/**
 * 🎯 EXEMPLO PRÁTICO - Página 404:
 *
 * if (wordsArray.value.length > 0) {
 *   // Rota não encontrada
 *   setResponseStatus(404)
 * }
 */
</script>

<style scoped>
/* Color values */
/* $primary: #00dc82 */
/* $secondary: #667eea */
/* $text-dark: #1e293b */
/* $text-light: #64748b */

.catchall-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.catchall-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.header .icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.header .title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.header .subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
}

.url-section {
  padding: 2rem;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.url-section h3 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.url-section .url-display {
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  color: #d97706;
  font-weight: 600;
  overflow-x: auto;
}

.segments-section {
  padding: 2rem;
}

.segments-section h3 {
  color: #1e293b;
  margin-bottom: 1.25rem;
}

.segments-section .segments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.segments-section .segment-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.segments-section .segment-item .segment-index {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.9rem;
}

.segments-section .segment-item .segment-value {
  font-family: 'Courier New', monospace;
  font-weight: 600;
  flex: 1;
}

.segments-section .no-segments {
  text-align: center;
  padding: 2rem;
  color: #64748b;
}

.segments-section .no-segments code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  color: #667eea;
}

.explanation {
  padding: 2rem;
  background: #f8fafc;
}

.explanation h3 {
  color: #1e293b;
  margin-bottom: 1rem;
}

.explanation ul {
  list-style: none;
  padding: 0;
}

.explanation ul li {
  padding: 0.75rem 0;
  color: #64748b;
  line-height: 1.7;
}

.explanation ul li strong {
  color: #1e293b;
}

.explanation ul li code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #667eea;
  font-size: 0.9em;
}

.usecases {
  padding: 2rem;
}

.usecases h3 {
  color: #1e293b;
  margin-bottom: 1.25rem;
}

.usecases .usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.usecases .usecase-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.usecases .usecase-card:hover {
  border-color: #00dc82;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.usecases .usecase-card h4 {
  color: #1e293b;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.usecases .usecase-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.code-example {
  padding: 2rem;
  background: #1e293b;
}

.code-example h4 {
  color: white;
  margin-bottom: 1rem;
}

.code-example pre {
  margin: 0;
  overflow-x: auto;
}

.code-example pre code {
  color: #cbd5e1;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
}

.test-section {
  padding: 2rem;
  background: #faf5ff;
}

.test-section h3 {
  color: #1e293b;
  margin-bottom: 1.25rem;
  text-align: center;
}

.test-section .test-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.test-section .test-links .test-link {
  padding: 0.875rem 1.5rem;
  background: white;
  color: #d97706;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #d97706;
  transition: all 0.3s ease;
  text-align: center;
  font-family: 'Courier New', monospace;
}

.test-section .test-links .test-link:hover {
  background: #d97706;
  color: white;
  transform: scale(1.02);
}

.navigation {
  padding: 1.5rem 2rem;
  background: #f8fafc;
  text-align: center;
}

.btn-back {
  padding: 0.75rem 1.5rem;
  background: #00dc82;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #00a86b;
  transform: translateX(-4px);
}

@media (max-width: 768px) {
  .header {
    padding: 2rem 1.5rem;
  }

  .header .title {
    font-size: 2rem;
  }

  .segments-section .segments-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>