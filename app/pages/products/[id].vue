<template>
  <!--
    ✅ VALIDAÇÃO DE ROTA - Route Validation

    Arquivo: /pages/products/[id].vue
    Rota: /products/:id (exemplo: /products/123)

    Demonstra como validar parâmetros de rota antes de renderizar a página!
  -->
  <div class="validation-page">
    <div class="container">
      <div class="validation-card">
        <!-- Header -->
        <div class="header">
          <div class="icon">✅</div>
          <h1 class="title">Validação de Rota</h1>
          <p class="subtitle">ID Validado com Sucesso!</p>
        </div>

        <!-- Product Info -->
        <div class="product-section">
          <h2>📦 Informações do Produto</h2>

          <div class="info-grid">
            <div class="info-item">
              <span class="label">ID do Produto:</span>
              <span class="value">{{ productId }}</span>
            </div>
            <div class="info-item">
              <span class="label">Tipo de ID:</span>
              <span class="value">{{ idType }}</span>
            </div>
            <div class="info-item">
              <span class="label">Validação:</span>
              <span class="value success">✅ Passou</span>
            </div>
          </div>

          <div class="success-message">
            <p>
              🎉 Este ID passou na validação! O <code>validate</code> verificou que o ID é um número válido.
            </p>
          </div>
        </div>

        <!-- Explanation -->
        <div class="explanation">
          <h3>💡 Como Funciona a Validação?</h3>

          <div class="info-box">
            <p>
              O <code>validate</code> é executado <strong>antes</strong> da página ser renderizada.
              Se retornar <code>false</code>, o Nuxt redireciona para a página de erro 404.
            </p>
          </div>

          <ul class="features-list">
            <li>
              <span class="icon">🔒</span>
              <div>
                <strong>Validação de Parâmetros</strong>
                <p>Verifica se os parâmetros da URL são válidos</p>
              </div>
            </li>
            <li>
              <span class="icon">🚫</span>
              <div>
                <strong>Proteção contra URLs Inválidas</strong>
                <p>Impede acesso a rotas com dados incorretos</p>
              </div>
            </li>
            <li>
              <span class="icon">⚡</span>
              <div>
                <strong>Validação Antes do Render</strong>
                <p>Roda antes de qualquer código da página</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Code Example -->
        <div class="code-section">
          <h3>💻 Código desta Página</h3>

          <div class="code-block">
            <div class="code-header">
              <span>📄 products/[id].vue</span>
            </div>
            <pre><code>&lt;script setup&gt;
// 🎯 Validação de Rota
definePageMeta({
  validate: async (route) => {
    // Valida se o ID é um número
    const id = route.params.id

    // Retorna true = válido, false = redireciona para 404
    return /^\d+$/.test(id)

    // Exemplos de validações:
    // - Verificar se ID existe no banco
    // - Validar formato (UUID, número, etc)
    // - Checar permissões de acesso
  }
})

const route = useRoute()
const productId = route.params.id
&lt;/script&gt;</code></pre>
          </div>
        </div>

        <!-- Test Cases -->
        <div class="test-section">
          <h3>🧪 Teste a Validação</h3>

          <div class="test-grid">
            <div class="test-card valid">
              <h4>✅ URLs Válidas (Números)</h4>
              <div class="test-links">
                <NuxtLink to="/products/1" class="test-link valid">
                  /products/1
                </NuxtLink>
                <NuxtLink to="/products/123" class="test-link valid">
                  /products/123
                </NuxtLink>
                <NuxtLink to="/products/9999" class="test-link valid">
                  /products/9999
                </NuxtLink>
              </div>
            </div>

            <div class="test-card invalid">
              <h4>❌ URLs Inválidas (Vão para 404)</h4>
              <div class="test-links">
                <NuxtLink to="/products/abc" class="test-link invalid">
                  /products/abc
                </NuxtLink>
                <NuxtLink to="/products/test" class="test-link invalid">
                  /products/test
                </NuxtLink>
                <NuxtLink to="/products/12abc" class="test-link invalid">
                  /products/12abc
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Use Cases -->
        <div class="usecases">
          <h3>🎯 Casos de Uso Comuns</h3>

          <div class="usecase-grid">
            <div class="usecase-card">
              <h4>🔢 Validar Formato de ID</h4>
              <code>return /^\d+$/.test(id)</code>
              <p>Garante que o ID seja apenas números</p>
            </div>

            <div class="usecase-card">
              <h4>🔑 Validar UUID</h4>
              <code>return /^[0-9a-f-]{36}$/.test(id)</code>
              <p>Valida formato UUID padrão</p>
            </div>

            <div class="usecase-card">
              <h4>📊 Validar Range</h4>
              <code>return id >= 1 && id <= 1000</code>
              <p>Verifica se ID está em um intervalo</p>
            </div>

            <div class="usecase-card">
              <h4>🗄️ Verificar Existência</h4>
              <code>return await checkIfExists(id)</code>
              <p>Consulta banco para verificar se existe</p>
            </div>
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
 * ✅ VALIDAÇÃO DE ROTA - ROUTE VALIDATION
 *
 * O validate é executado ANTES da página ser renderizada.
 * Retorna true = página renderiza, false = erro 404
 */

definePageMeta({
  validate: async (route) => {
    // Pega o parâmetro ID da URL
    const id = route.params.id

    /**
     * 🔍 VALIDAÇÃO: Verifica se o ID é um número
     *
     * Regex /^\d+$/ significa:
     * ^ = início da string
     * \d+ = um ou mais dígitos
     * $ = fim da string
     */
    const isValid = /^\d+$/.test(id)

    console.log(`🔍 Validando ID: ${id} - ${isValid ? '✅ Válido' : '❌ Inválido'}`)

    return isValid

    /**
     * 💡 OUTROS EXEMPLOS DE VALIDAÇÃO:
     *
     * 1. Validar UUID:
     *    return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(id)
     *
     * 2. Validar range de números:
     *    return !isNaN(id) && id >= 1 && id <= 1000
     *
     * 3. Verificar no banco (assíncrono):
     *    const exists = await $fetch(`/api/products/${id}`)
     *    return exists !== null
     *
     * 4. Validar múltiplos parâmetros:
     *    return /^\d+$/.test(route.params.id) && route.params.category
     */
  }
})

const route = useRoute()
const productId = route.params.id

/**
 * 📊 Computed para mostrar informações
 */
import { computed } from 'vue'

const idType = computed(() => {
  const id = productId
  if (/^\d+$/.test(id)) return 'Número Inteiro'
  if (/^\d+\.\d+$/.test(id)) return 'Número Decimal'
  return 'Texto/String'
})

/**
 * 📚 RECURSOS:
 * - Docs: https://nuxt.com/docs/api/utils/define-page-meta#validate
 * - Route Object: https://nuxt.com/docs/api/composables/use-route
 */
</script>

<style scoped>
.validation-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.validation-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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

.product-section {
  padding: 2rem;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}

.product-section h2 {
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.info-grid {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.info-item .label {
  color: #64748b;
  font-weight: 600;
}

.info-item .value {
  font-family: 'Courier New', monospace;
  font-weight: 700;
  color: #10b981;
  font-size: 1.1rem;
}

.info-item .value.success {
  color: #10b981;
}

.success-message {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #10b981;
}

.success-message p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.success-message code {
  background: rgba(16, 185, 129, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #10b981;
  font-family: 'Courier New', monospace;
}

.explanation {
  padding: 2rem;
}

.explanation h3 {
  color: #1e293b;
  margin-bottom: 1.25rem;
  font-size: 1.3rem;
}

.info-box {
  background: #f0f9ff;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.info-box p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.info-box code {
  background: rgba(102, 126, 234, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #667eea;
  font-family: 'Courier New', monospace;
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
  font-size: 1.05rem;
  margin-bottom: 0.25rem;
}

.features-list li p {
  color: #64748b;
  margin: 0;
  font-size: 0.95rem;
}

.code-section {
  padding: 2rem;
  background: #f8fafc;
}

.code-section h3 {
  color: #1e293b;
  margin-bottom: 1.25rem;
}

.code-block {
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.code-block .code-header {
  background: #0f172a;
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #334155;
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

.test-section {
  padding: 2rem;
}

.test-section h3 {
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.test-card {
  border-radius: 12px;
  padding: 1.5rem;
}

.test-card.valid {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border: 2px solid #10b981;
}

.test-card.invalid {
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border: 2px solid #ef4444;
}

.test-card h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.test-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.test-link {
  padding: 0.75rem 1rem;
  background: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  text-align: center;
}

.test-link.valid {
  color: #10b981;
  border: 2px solid #10b981;
}

.test-link.valid:hover {
  background: #10b981;
  color: white;
  transform: scale(1.02);
}

.test-link.invalid {
  color: #ef4444;
  border: 2px solid #ef4444;
}

.test-link.invalid:hover {
  background: #ef4444;
  color: white;
  transform: scale(1.02);
}

.usecases {
  padding: 2rem;
  background: #f8fafc;
}

.usecases h3 {
  color: #1e293b;
  margin-bottom: 1.25rem;
}

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.usecase-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #10b981;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.usecase-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.usecase-card h4 {
  color: #1e293b;
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.usecase-card code {
  display: block;
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #10b981;
  margin-bottom: 0.75rem;
  overflow-x: auto;
}

.usecase-card p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
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

  .test-grid,
  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
