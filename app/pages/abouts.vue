<template>
  <!--
    👤 PÁGINA ABOUT - Exemplo de Rotas Simples

    Rota: /abouts
    Conceitos demonstrados:
    - Rotas simples (sem parâmetros)
    - Interação com o usuário (input/prompt)
    - Navegação dinâmica com variáveis
    - Validação de entrada
    - Renderização condicional
  -->
  <div class="about-page">
    <div class="container">
      <!-- Card Principal -->
      <div class="about-card">
        <!-- Header -->
        <div class="card-header">
          <div class="icon-wrapper">
            <span class="icon">👤</span>
          </div>
          <h1 class="title">Página About</h1>
          <p class="subtitle">Exemplo de Rota Simples</p>
        </div>

        <!-- Conteúdo -->
        <div class="card-content">
          <!-- Explicação -->
          <div class="info-box">
            <h3>📝 Como funciona esta página?</h3>
            <ul>
              <li><strong>Rota Simples:</strong> Este arquivo está em <code>/pages/abouts.vue</code></li>
              <li><strong>URL:</strong> Acesse em <code>/abouts</code></li>
              <li><strong>Interação:</strong> Solicitamos seu nome ao carregar a página</li>
              <li><strong>Navegação:</strong> Link dinâmico usa o nome que você digitou</li>
            </ul>
          </div>

          <!-- Exibição do Nome -->
          <div v-if="userName" class="user-info">
            <div class="welcome-message">
              <span class="emoji">👋</span>
              <div>
                <h2>Olá, {{ userName }}!</h2>
                <p>Seu nome foi capturado com sucesso</p>
              </div>
            </div>

            <!-- Estatísticas do Nome -->
            <div class="name-stats">
              <div class="stat">
                <span class="stat-label">Caracteres</span>
                <span class="stat-value">{{ userName.length }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">Primeira Letra</span>
                <span class="stat-value">{{ userName[0].toUpperCase() }}</span>
              </div>
              <div class="stat">
                <span class="stat-label">Formato</span>
                <span class="stat-value">{{ nameFormat }}</span>
              </div>
            </div>
          </div>

          <!-- Fallback caso não tenha nome -->
          <div v-else class="no-name-message">
            <span class="emoji">🤔</span>
            <p>Você não digitou um nome ou cancelou o prompt.</p>
            <button @click="askForName" class="btn-primary">
              Tentar Novamente
            </button>
          </div>
        </div>

        <!-- Navegação -->
        <div class="card-footer">
          <NuxtLink to="/" class="btn-secondary">
            ← Voltar ao Início
          </NuxtLink>

          <NuxtLink
            v-if="userName"
            :to="`/greeting/${userName}`"
            class="btn-primary"
          >
            Ver Página de Saudação →
          </NuxtLink>
        </div>

        <!-- Código de Exemplo -->
        <div class="code-example">
          <h4>💻 Código desta página:</h4>
          <pre><code>// Detecta se está no lado do cliente (navegador)
if (process.client) {
  userName.value = prompt('Digite seu nome:')
}

// Navegação dinâmica com template string
&lt;NuxtLink :to="\`/greeting/\${userName}\`"&gt;
  Ver Página de Saudação
&lt;/NuxtLink&gt;</code></pre>
        </div>
      </div>

      <!-- Cards de Conceitos -->
      <div class="concepts">
        <div class="concept-card">
          <h4>🌐 process.client</h4>
          <p>
            Detecta se o código está rodando no navegador (client-side).
            Necessário porque Nuxt faz SSR (Server-Side Rendering) e não
            podemos usar <code>prompt()</code> no servidor.
          </p>
        </div>

        <div class="concept-card">
          <h4>🔗 Navegação Dinâmica</h4>
          <p>
            Use <code>:to="\`/path/\${variable}\`"</code> para criar links
            dinâmicos. O bind (<code>:</code>) permite usar JavaScript no
            atributo.
          </p>
        </div>

        <div class="concept-card">
          <h4>📦 Reatividade</h4>
          <p>
            <code>ref()</code> cria variáveis reativas. Quando o valor muda,
            o Vue atualiza o template automaticamente!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🎯 SCRIPT SETUP - Exemplo com Interação do Usuário
 *
 * Conceitos demonstrados:
 * - Refs reativos
 * - Detecção de ambiente (client vs server)
 * - Computed properties
 * - Funções/métodos
 */

import { ref, computed } from 'vue'

// 📝 Estado reativo para armazenar o nome do usuário
const userName = ref('')

/**
 * 🔍 EXPLICAÇÃO: process.client
 *
 * Nuxt faz Server-Side Rendering (SSR):
 * 1. Primeiro renderiza no servidor (Node.js)
 * 2. Depois hidrata no cliente (navegador)
 *
 * `prompt()` só funciona no navegador, então precisamos checar!
 */
if (process.client) {
  const inputName = prompt('👋 Digite seu nome para continuar:')

  // Validação: verifica se o usuário digitou algo
  if (inputName && inputName.trim()) {
    userName.value = inputName.trim()
  }
}

/**
 * 💡 COMPUTED PROPERTY
 *
 * Propriedade calculada que atualiza automaticamente quando
 * userName muda. Melhor que calcular no template!
 */
const nameFormat = computed(() => {
  if (!userName.value) return 'N/A'

  // Detecta se tem espaços (nome composto)
  if (userName.value.includes(' ')) return 'Nome Composto'

  // Detecta se tem números
  if (/\d/.test(userName.value)) return 'Com Números'

  return 'Nome Simples'
})

/**
 * 🔄 FUNÇÃO PARA PEDIR O NOME NOVAMENTE
 *
 * Demonstra como criar métodos no script setup
 */
const askForName = () => {
  const inputName = prompt('👋 Digite seu nome:')

  if (inputName && inputName.trim()) {
    userName.value = inputName.trim()
  }
}

/**
 * 📚 DICAS:
 *
 * 1. Sempre valide entradas do usuário
 * 2. Use process.client para código que só roda no navegador
 * 3. Prefira computed properties para valores derivados
 * 4. Use .trim() para remover espaços em branco
 * 5. Forneça fallbacks quando dados estão ausentes
 */
</script>

<style scoped>
/**
 * 🎨 ESTILOS ESCOPADOS - Página About
 */

.about-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Card Principal */
.about-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 2rem;
}

/* Header do Card */
.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
}

.card-header .icon-wrapper {
  margin-bottom: 1rem;
}

.card-header .icon-wrapper .icon {
  font-size: 4rem;
  display: inline-block;
  animation: bounce 2s infinite;
}

.card-header .title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.card-header .subtitle {
  font-size: 1.1rem;
  opacity: 0.95;
}

/* Conteúdo do Card */
.card-content {
  padding: 2rem;
}

/* Info Box */
.info-box {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-left: 4px solid #667eea;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.info-box h3 {
  color: #1e293b;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.info-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-box ul li {
  padding: 0.5rem 0;
  color: #64748b;
  line-height: 1.6;
}

.info-box ul li strong {
  color: #1e293b;
}

.info-box ul li code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #667eea;
}

/* Informações do Usuário */
.user-info .welcome-message {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.user-info .welcome-message .emoji {
  font-size: 3rem;
}

.user-info .welcome-message h2 {
  color: #1e293b;
  font-size: 1.8rem;
  margin: 0 0 0.25rem 0;
}

.user-info .welcome-message p {
  color: #64748b;
  margin: 0;
}

/* Estatísticas do Nome */
.name-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.name-stats .stat {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  transition: all 0.3s ease;
}

.name-stats .stat:hover {
  border-color: #00dc82;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 220, 130, 0.15);
}

.name-stats .stat .stat-label {
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.name-stats .stat .stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #00dc82;
}

/* Mensagem sem nome */
.no-name-message {
  text-align: center;
  padding: 3rem 2rem;
}

.no-name-message .emoji {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.no-name-message p {
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

/* Footer do Card */
.card-footer {
  padding: 1.5rem 2rem;
  background: #f8fafc;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Botões */
.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: #00dc82;
  color: white;
}

.btn-primary:hover {
  background: #00a86b;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 220, 130, 0.3);
}

.btn-secondary {
  background: white;
  color: #1e293b;
  border: 2px solid #e2e8f0;
}

.btn-secondary:hover {
  border-color: #667eea;
  color: #667eea;
  transform: translateY(-2px);
}

/* Exemplo de Código */
.code-example {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: #1e293b;
  border-radius: 8px;
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
  color: #94a3b8;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Cards de Conceitos */
.concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
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
  font-size: 0.95rem;
}

.concept-card p code {
  background: rgba(0, 0, 0, 0.06);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: #667eea;
}

/* Animação */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .card-header {
    padding: 2rem 1.5rem;
  }

  .card-header .title {
    font-size: 2rem;
  }

  .card-footer {
    flex-direction: column;
  }

  .card-footer .btn-primary,
  .card-footer .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .user-info .welcome-message {
    flex-direction: column;
    text-align: center;
  }

  .user-info .welcome-message h2 {
    font-size: 1.5rem;
  }
}
</style>