<template>
  <!--
    🔗 ROTAS DINÂMICAS - Parâmetros de URL

    Arquivo: /pages/greeting/[name].vue
    Rota: /greeting/:name (exemplo: /greeting/João)

    O nome do arquivo entre colchetes [name] se torna um parâmetro dinâmico!
  -->
  <div class="greeting-page">
    <div class="container">
      <!-- Card Principal -->
      <div class="greeting-card">
        <div class="greeting-header">
          <div class="wave-icon">👋</div>
          <h1 class="greeting-text">Olá, {{ formattedName }}!</h1>
          <p class="welcome-text">Bem-vindo à página de saudação personalizada</p>
        </div>

        <!-- Info do Parâmetro -->
        <div class="param-info">
          <h3>🔍 Parâmetro Capturado</h3>
          <div class="param-display">
            <span class="param-label">Nome da URL:</span>
            <span class="param-value">{{ name }}</span>
          </div>
          <div class="param-display">
            <span class="param-label">Rota Completa:</span>
            <span class="param-value">/greeting/{{ name }}</span>
          </div>
          <div class="param-display">
            <span class="param-label">Caracteres:</span>
            <span class="param-value">{{ name.length }}</span>
          </div>
        </div>

        <!-- Explicação -->
        <div class="explanation">
          <h3>📚 Como funciona?</h3>
          <ul>
            <li>
              <strong>Arquivo:</strong> O nome do arquivo é
              <code>[name].vue</code> - os colchetes tornam "name" um parâmetro
              dinâmico
            </li>
            <li>
              <strong>Acesso:</strong> Usamos <code>useRoute().params.name</code>
              para capturar o valor da URL
            </li>
            <li>
              <strong>Exemplo:</strong> Se você acessar <code>/greeting/Maria</code>,
              o parâmetro "name" será "Maria"
            </li>
          </ul>
        </div>

        <!-- Teste com Outros Nomes -->
        <div class="test-section">
          <h3>🧪 Teste com outros nomes!</h3>
          <div class="test-links">
            <NuxtLink to="/greeting/João" class="test-link">João</NuxtLink>
            <NuxtLink to="/greeting/Maria" class="test-link">Maria</NuxtLink>
            <NuxtLink to="/greeting/Pedro" class="test-link">Pedro</NuxtLink>
            <NuxtLink to="/greeting/Ana" class="test-link">Ana</NuxtLink>
            <NuxtLink to="/greeting/Nuxt" class="test-link">Nuxt</NuxtLink>
          </div>
        </div>

        <!-- Código de Exemplo -->
        <div class="code-example">
          <h4>💻 Código desta página:</h4>
          <pre><code>// 📁 Estrutura de arquivo
/pages/greeting/[name].vue

// 📝 Acessando o parâmetro
const name = useRoute().params.name

// 🎨 Usando no template
&lt;h1&gt;Olá, &#123;&#123; name &#125;&#125;!&lt;/h1&gt;</code></pre>
        </div>

        <!-- Navegação -->
        <div class="navigation">
          <NuxtLink to="/" class="btn-back">← Voltar ao Início</NuxtLink>
          <NuxtLink to="/abouts" class="btn-next">Ir para About →</NuxtLink>
        </div>
      </div>

      <!-- Cards de Conceitos -->
      <div class="concepts">
        <div class="concept-card">
          <h4>🎯 Parâmetros Dinâmicos</h4>
          <p>
            Arquivos com <code>[nome]</code> capturam valores da URL. Cada valor
            diferente cria uma "página" diferente!
          </p>
        </div>

        <div class="concept-card">
          <h4>🔧 useRoute()</h4>
          <p>
            Composable do Nuxt para acessar informações da rota atual:
            <code>params</code>, <code>query</code>, <code>path</code>, etc.
          </p>
        </div>

        <div class="concept-card">
          <h4>🌐 SEO Friendly</h4>
          <p>
            URLs limpas e semânticas: <code>/greeting/João</code> é melhor que
            <code>/greeting?name=João</code>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🔗 ROTAS DINÂMICAS - SCRIPT SETUP
 *
 * useRoute() retorna o objeto da rota atual com:
 * - params: parâmetros dinâmicos ([name], [id], etc)
 * - query: query strings (?foo=bar)
 * - path: caminho completo
 * - name: nome da rota
 * - meta: metadados
 */

// 📥 Captura o parâmetro da URL
const name = useRoute().params.name

/**
 * 🎨 Computed para formatação
 * Garante que a primeira letra seja maiúscula
 */
import { computed } from 'vue'

const formattedName = computed(() => {
  if (!name) return 'Visitante'
  return name.charAt(0).toUpperCase() + name.slice(1)
})

/**
 * 💡 OUTRAS FORMAS DE USAR PARÂMETROS:
 *
 * 1. Acessar no template diretamente:
 *    {{ $route.params.name }}
 *
 * 2. Watch para mudanças:
 *    watch(() => route.params.name, (newName) => {
 *      console.log('Nome mudou para:', newName)
 *    })
 *
 * 3. Usar em computeds:
 *    const greeting = computed(() => `Olá, ${name}!`)
 */

/**
 * 📚 RECURSOS:
 * - Rotas Dinâmicas: https://nuxt.com/docs/guide/directory-structure/pages#dynamic-routes
 * - useRoute: https://nuxt.com/docs/api/composables/use-route
 */
</script>

<style scoped>
/* Color values */
/* $primary: #00dc82 */
/* $secondary: #667eea */
/* $text-dark: #1e293b */
/* $text-light: #64748b */

.greeting-page {
  width: 100%;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.greeting-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
}

.greeting-header {
  background: linear-gradient(135deg, #00dc82 0%, #00a86b 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.greeting-header .wave-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

.greeting-header .greeting-text {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.greeting-header .welcome-text {
  font-size: 1.15rem;
  opacity: 0.95;
}

.param-info {
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-bottom: 2px solid #bae6fd;
}

.param-info h3 {
  color: #1e293b;
  font-size: 1.3rem;
  margin-bottom: 1.25rem;
}

.param-info .param-display {
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  background: white;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.param-info .param-display .param-label {
  color: #64748b;
  font-weight: 600;
}

.param-info .param-display .param-value {
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

.explanation {
  padding: 2rem;
}

.explanation h3 {
  color: #1e293b;
  font-size: 1.3rem;
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

.test-section {
  padding: 2rem;
  background: #faf5ff;
  border-top: 2px solid #e9d5ff;
}

.test-section h3 {
  color: #1e293b;
  font-size: 1.3rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.test-section .test-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.test-section .test-links .test-link {
  padding: 0.75rem 1.5rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #667eea;
  transition: all 0.3s ease;
}

.test-section .test-links .test-link:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.code-example {
  padding: 2rem;
  background: #1e293b;
}

.code-example h4 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.1rem;
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

.navigation {
  padding: 1.5rem 2rem;
  background: #f8fafc;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
}

.btn-back,
.btn-next {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-back {
  background: white;
  color: #1e293b;
  border: 2px solid #e2e8f0;
}

.btn-back:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateX(-4px);
}

.btn-next {
  background: #00dc82;
  color: white;
}

.btn-next:hover {
  background: #00a86b;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 220, 130, 0.3);
}

.concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #00dc82;
}

.concept-card h4 {
  color: #1e293b;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.concept-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.concept-card p code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #667eea;
  font-size: 0.9em;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}

@media (max-width: 768px) {
  .greeting-header {
    padding: 2rem 1.5rem;
  }

  .greeting-header .greeting-text {
    font-size: 2rem;
  }

  .navigation {
    flex-direction: column;
  }

  .navigation .btn-back,
  .navigation .btn-next {
    width: 100%;
    justify-content: center;
  }

  .test-section .test-links .test-link {
    flex: 1 1 calc(50% - 0.5rem);
    text-align: center;
  }
}
</style>