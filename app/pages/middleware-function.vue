<template>
  <!--
    🛡️ PÁGINA COM MIDDLEWARE

    Rota: /middleware-function
    Conceitos demonstrados:
    - Route Middlewares
    - definePageMeta
    - Execução antes da navegação
    - Proteção de rotas
  -->
  <div class="middleware-page">
    <div class="container">
      <!-- Hero Section -->
      <div class="hero-card">
        <div class="shield-icon">🛡️</div>
        <h1 class="title">Route Middleware</h1>
        <p class="subtitle">Proteção e Lógica Antes da Navegação</p>
      </div>

      <!-- Sucesso Message -->
      <div class="success-card">
        <div class="success-icon">✅</div>
        <h2>Middleware Executado com Sucesso!</h2>
        <p>
          Se você está vendo esta página, significa que o middleware
          <code>middleware-example</code> permitiu seu acesso.
        </p>
      </div>

      <!-- Explicação -->
      <div class="explanation-section">
        <h2 class="section-title">🤔 O que são Middlewares?</h2>

        <div class="info-card">
          <p>
            <strong>Middlewares</strong> são funções que executam
            <strong>antes</strong> de uma página ser renderizada. Eles são
            perfeitos para:
          </p>

          <ul class="features-list">
            <li>
              <span class="icon">🔐</span>
              <div>
                <strong>Autenticação</strong>
                <p>Verificar se o usuário está logado</p>
              </div>
            </li>
            <li>
              <span class="icon">🚦</span>
              <div>
                <strong>Autorização</strong>
                <p>Checar permissões de acesso</p>
              </div>
            </li>
            <li>
              <span class="icon">📊</span>
              <div>
                <strong>Analytics</strong>
                <p>Rastrear navegação e eventos</p>
              </div>
            </li>
            <li>
              <span class="icon">🔄</span>
              <div>
                <strong>Redirecionamento</strong>
                <p>Redirecionar baseado em condições</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Como Funciona -->
      <div class="how-it-works">
        <h2 class="section-title">⚙️ Como Funciona?</h2>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Definir Middleware</h3>
            <p>
              Crie um arquivo em <code>/middleware/nome.js</code> com sua
              lógica.
            </p>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Registrar na Página</h3>
            <p>
              Use <code>definePageMeta()</code> para vincular o middleware à
              página.
            </p>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Executar Lógica</h3>
            <p>O middleware roda antes da página carregar e decide o que fazer.</p>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <h3>Permitir ou Bloquear</h3>
            <p>
              O middleware pode permitir acesso, redirecionar ou mostrar erro.
            </p>
          </div>
        </div>
      </div>

      <!-- Código de Exemplo -->
      <div class="code-section">
        <h2 class="section-title">💻 Código desta Página</h2>

        <div class="code-block">
          <div class="code-header">
            <span class="file-name">📄 middleware-function.vue</span>
          </div>
          <pre><code>&lt;script setup&gt;
// 🎯 Registra o middleware para esta página
definePageMeta({
  middleware: ['middleware-example']
})

// Você pode registrar múltiplos middlewares:
// middleware: ['auth', 'admin', 'analytics']
&lt;/script&gt;</code></pre>
        </div>

        <div class="code-block">
          <div class="code-header">
            <span class="file-name">📄 middleware/middleware-example.js</span>
          </div>
          <pre><code>export default defineNuxtRouteMiddleware((to, from) => {
  // 'to' = rota de destino (para onde está indo)
  // 'from' = rota de origem (de onde está vindo)

  console.log('Navegando de:', from.path)
  console.log('Navegando para:', to.path)

  // Exemplos de uso:

  // ❌ Bloquear acesso
  // if (!usuarioLogado) {
  //   return navigateTo('/login')
  // }

  // ❌ Verificar permissões
  // if (!usuarioAdmin) {
  //   return abortNavigation('Sem permissão')
  // }

  // ✅ Permitir navegação
  // (não retorne nada para continuar)
})</code></pre>
        </div>
      </div>

      <!-- Tipos de Middleware -->
      <div class="types-section">
        <h2 class="section-title">📚 Tipos de Middleware</h2>

        <div class="types-grid">
          <div class="type-card">
            <h3>🎯 Named Middleware</h3>
            <p class="type-description">
              Middleware específico registrado por nome em páginas individuais.
            </p>
            <div class="type-example">
              <strong>Arquivo:</strong>
              <code>/middleware/auth.js</code>
            </div>
            <div class="type-example">
              <strong>Uso:</strong>
              <code>middleware: ['auth']</code>
            </div>
          </div>

          <div class="type-card highlight">
            <h3>🌍 Global Middleware</h3>
            <p class="type-description">
              Executa em TODAS as rotas automaticamente. Use sufixo
              <code>.global.js</code>
            </p>
            <div class="type-example">
              <strong>Arquivo:</strong>
              <code>/middleware/analytics.global.js</code>
            </div>
            <div class="type-example">
              <strong>Uso:</strong>
              <span class="badge">Automático</span>
            </div>
          </div>

          <div class="type-card">
            <h3>⚡ Inline Middleware</h3>
            <p class="type-description">
              Definido diretamente na página usando uma função anônima.
            </p>
            <div class="type-example">
              <strong>Uso:</strong>
              <code>middleware: [() => {...}]</code>
            </div>
          </div>
        </div>
      </div>

      <!-- Funções Úteis -->
      <div class="utils-section">
        <h2 class="section-title">🛠️ Funções Úteis no Middleware</h2>

        <div class="utils-grid">
          <div class="util-card">
            <code class="util-name">navigateTo(url)</code>
            <p>Redireciona para outra rota</p>
          </div>

          <div class="util-card">
            <code class="util-name">abortNavigation(msg)</code>
            <p>Cancela a navegação com mensagem</p>
          </div>

          <div class="util-card">
            <code class="util-name">to.path</code>
            <p>Caminho da rota de destino</p>
          </div>

          <div class="util-card">
            <code class="util-name">from.path</code>
            <p>Caminho da rota de origem</p>
          </div>

          <div class="util-card">
            <code class="util-name">to.params</code>
            <p>Parâmetros da rota</p>
          </div>

          <div class="util-card">
            <code class="util-name">to.query</code>
            <p>Query parameters (?key=value)</p>
          </div>
        </div>
      </div>

      <!-- Navegação -->
      <div class="navigation">
        <NuxtLink to="/" class="btn-back">← Voltar ao Início</NuxtLink>
        <NuxtLink to="/abouts" class="btn-next">Próximo Exemplo →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🛡️ MIDDLEWARE - SCRIPT SETUP
 *
 * definePageMeta é uma função especial do Nuxt que permite
 * configurar metadados da página, incluindo middlewares.
 */

/**
 * 🎯 REGISTRANDO MIDDLEWARE
 *
 * A propriedade 'middleware' aceita:
 * - String: nome de um único middleware
 * - Array: múltiplos middlewares (executam na ordem)
 * - Function: middleware inline
 */
definePageMeta({
  middleware: ['middleware-example'], // Registra o middleware

  // Você também pode adicionar outros metadados:
  // layout: 'custom-layout',
  // keepalive: true,
  // pageTransition: { name: 'fade' }
})

/**
 * 💡 ORDEM DE EXECUÇÃO:
 *
 * 1. Global middlewares (.global.js)
 * 2. Named middlewares (definidos aqui)
 * 3. Inline middlewares (funções anônimas)
 */

/**
 * 📚 EXEMPLO DE MIDDLEWARE INLINE:
 *
 * definePageMeta({
 *   middleware: [
 *     (to, from) => {
 *       console.log('Middleware inline executado!')
 *       // Sua lógica aqui
 *     }
 *   ]
 * })
 */

/**
 * 🔗 RECURSOS:
 * - Docs: https://nuxt.com/docs/guide/directory-structure/middleware
 * - definePageMeta: https://nuxt.com/docs/api/utils/define-page-meta
 */
</script>

<style scoped>
/**
 * 🎨 ESTILOS - Página de Middleware
 */

.middleware-page {
  width: 100%;
  padding-bottom: 3rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Card */
.hero-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

.hero-card .shield-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

.hero-card .title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-card .subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
}

/* Success Card */
.success-card {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border: 2px solid #00dc82;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.success-card .success-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.success-card h2 {
  color: #1e293b;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.success-card p {
  color: #64748b;
  line-height: 1.6;
  font-size: 1.05rem;
}

.success-card p code {
  background: rgba(0, 0, 0, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #667eea;
}

/* Section Title */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Explanation Section */
.explanation-section {
  margin-bottom: 3rem;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.info-card p {
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.info-card p strong {
  color: #1e293b;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
}

.features-list li {
  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.features-list li:hover {
  background: #f1f5f9;
  transform: translateX(4px);
}

.features-list li .icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.features-list li strong {
  display: block;
  color: #1e293b;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.features-list li p {
  color: #64748b;
  margin: 0;
  font-size: 0.95rem;
}

/* How It Works */
.how-it-works {
  margin-bottom: 3rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.step-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.step-card .step-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00dc82 0%, #00a86b 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.step-card h3 {
  color: #1e293b;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.step-card p {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
}

.step-card p code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  color: #667eea;
}

/* Code Section */
.code-section {
  margin-bottom: 3rem;
}

.code-block {
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.code-block .code-header {
  background: #0f172a;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #334155;
}

.code-block .code-header .file-name {
  color: #94a3b8;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.code-block pre {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-block pre code {
  color: #cbd5e1;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Types Section */
.types-section {
  margin-bottom: 3rem;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.type-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-top: 4px solid #64748b;
  transition: all 0.3s ease;
}

.type-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.type-card.highlight {
  border-top-color: #00dc82;
  background: linear-gradient(135deg, #ecfdf5 0%, white 100%);
}

.type-card h3 {
  color: #1e293b;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.type-card .type-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.type-card .type-description code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  color: #667eea;
}

.type-card .type-example {
  padding: 0.75rem;
  background: #f8fafc;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.type-card .type-example strong {
  color: #1e293b;
  display: block;
  margin-bottom: 0.25rem;
}

.type-card .type-example code {
  color: #667eea;
  font-family: 'Courier New', monospace;
}

.type-card .type-example .badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #00dc82;
  color: white;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Utils Section */
.utils-section {
  margin-bottom: 3rem;
}

.utils-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.util-card {
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border-left: 3px solid #00dc82;
  transition: all 0.3s ease;
}

.util-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.util-card .util-name {
  display: block;
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.util-card p {
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
}

/* Navigation */
.navigation {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.btn-back,
.btn-next {
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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

/* Animações */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-card {
    padding: 2rem 1.5rem;
  }

  .hero-card .shield-icon {
    font-size: 3.5rem;
  }

  .hero-card .title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .types-grid,
  .utils-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }

  .navigation {
    flex-direction: column;
  }

  .navigation .btn-back,
  .navigation .btn-next {
    width: 100%;
    justify-content: center;
  }
}
</style>