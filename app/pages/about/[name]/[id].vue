<template>
  <!--
    📂 ROTAS ANINHADAS - Múltiplos Parâmetros

    Arquivo: /pages/about/[name]/[id].vue
    Rota: /about/:name/:id
    Exemplo: /about/João/123

    Demonstra como capturar MÚLTIPLOS parâmetros em uma rota aninhada!
  -->
  <div class="nested-page">
    <div class="container">
      <div class="nested-card">
        <!-- Header -->
        <div class="header">
          <div class="icon">📂</div>
          <h1 class="title">Rotas Aninhadas</h1>
          <p class="subtitle">Múltiplos Parâmetros Dinâmicos</p>
        </div>

        <!-- Parâmetros -->
        <div class="params-section">
          <h3>🔍 Parâmetros Capturados</h3>

          <div class="param-cards">
            <div class="param-card">
              <div class="param-icon">👤</div>
              <div class="param-content">
                <span class="param-label">Nome</span>
                <span class="param-value">{{ route.params.name }}</span>
              </div>
            </div>

            <div class="param-card">
              <div class="param-icon">🆔</div>
              <div class="param-content">
                <span class="param-label">ID</span>
                <span class="param-value">{{ id }}</span>
              </div>
            </div>
          </div>

          <!-- Informações da Rota -->
          <div class="route-info">
            <h4>📊 Informações Completas da Rota</h4>
            <div class="info-grid">
              <div class="info-item">
                <strong>Path:</strong>
                <code>{{ route.path }}</code>
              </div>
              <div class="info-item">
                <strong>Full Path:</strong>
                <code>{{ route.fullPath }}</code>
              </div>
              <div class="info-item">
                <strong>Name Param:</strong>
                <code>{{ route.params.name }}</code>
              </div>
              <div class="info-item">
                <strong>ID Param:</strong>
                <code>{{ route.params.id }}</code>
              </div>
            </div>
          </div>
        </div>

        <!-- Explicação -->
        <div class="explanation">
          <h3>💡 Como Funciona?</h3>
          <ul>
            <li><strong>Estrutura de Pastas:</strong> <code>/pages/about/[name]/[id].vue</code></li>
            <li><strong>URL Gerada:</strong> <code>/about/:name/:id</code></li>
            <li><strong>Acesso aos Parâmetros:</strong> <code>useRoute().params.name</code> e
              <code>useRoute().params.id</code></li>
            <li><strong>Ordem Importa:</strong> Os parâmetros são capturados na ordem das pastas!</li>
          </ul>
        </div>

        <!-- Casos de Uso -->
        <div class="usecases">
          <h3>🎯 Casos de Uso Reais</h3>
          <div class="usecase-grid">
            <div class="usecase-item">
              <h4>👥 Perfis de Usuário</h4>
              <p><code>/users/joao/123</code></p>
              <span>Nome de usuário + ID único</span>
            </div>
            <div class="usecase-item">
              <h4>📝 Posts de Blog</h4>
              <p><code>/blog/tech/post-42</code></p>
              <span>Categoria + ID do post</span>
            </div>
            <div class="usecase-item">
              <h4>🛍️ Produtos</h4>
              <p><code>/products/electronics/12345</code></p>
              <span>Categoria + SKU</span>
            </div>
          </div>
        </div>

        <!-- Código -->
        <div class="code-example">
          <h4>💻 Código desta Página</h4>
          <pre><code>// 📁 Estrutura de arquivos
/pages/about/[name]/[id].vue

// 📝 Acessando múltiplos parâmetros
const route = useRoute()
const name = route.params.name
const id = route.params.id

// 🔍 Objeto route completo disponível no template
console.log('route', route)</code></pre>
        </div>

        <!-- Teste -->
        <div class="test-section">
          <h3>🧪 Teste com Diferentes Combinações</h3>
          <div class="test-links">
            <NuxtLink to="/about/João/123" class="test-link">
              /about/João/123
            </NuxtLink>
            <NuxtLink to="/about/Maria/456" class="test-link">
              /about/Maria/456
            </NuxtLink>
            <NuxtLink to="/about/Pedro/789" class="test-link">
              /about/Pedro/789
            </NuxtLink>
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
 * 📂 ROTAS ANINHADAS COM MÚLTIPLOS PARÂMETROS
 *
 * A estrutura de pastas define a estrutura da URL:
 * /pages/about/[name]/[id].vue → /about/:name/:id
 */

const route = useRoute()
const id = route.params.id

useHead({
  title: "about page",
  meta: [
    { name: 'description', content: "This is about page" }
  ]
})
/**
 * 💡 DICA:
 * Você pode acessar route diretamente no template usando $route
 * Exemplo: {{ $route.params.name }}
 */

/**
 * 🔄 WATCH PARA MUDANÇAS NOS PARÂMETROS:
 *
 * import { watch } from 'vue'
 *
 * watch(() => route.params, (newParams) => {
 *   console.log('Parâmetros mudaram:', newParams)
 * })
 */

/**
 * 📚 RECURSOS:
 * - Nested Routes: https://nuxt.com/docs/guide/directory-structure/pages#nested-routes
 */
</script>

<style lang="scss" scoped>
$primary: #00dc82;
$secondary: #667eea;
$text-dark: #1e293b;
$text-light: #64748b;

.nested-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.nested-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;

  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    opacity: 0.95;
  }
}

.params-section {
  padding: 2rem;

  h3 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}

.param-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.param-card {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border: 2px solid #e9d5ff;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(139, 92, 246, 0.2);
    border-color: #8b5cf6;
  }

  .param-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .param-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .param-label {
      font-size: 0.85rem;
      color: $text-light;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .param-value {
      font-size: 1.8rem;
      font-weight: 700;
      color: #8b5cf6;
      font-family: 'Courier New', monospace;
    }
  }
}

.route-info {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    color: $text-dark;
    margin-bottom: 1rem;
  }

  .info-grid {
    display: grid;
    gap: 0.75rem;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: white;
    border-radius: 6px;
    font-size: 0.95rem;

    strong {
      color: $text-dark;
    }

    code {
      color: #8b5cf6;
      font-family: 'Courier New', monospace;
      background: rgba(139, 92, 246, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
    }
  }
}

.explanation {
  padding: 2rem;
  background: #fef3c7;

  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 0.75rem 0;
      color: $text-light;
      line-height: 1.7;

      strong {
        color: $text-dark;
      }

      code {
        background: rgba(0, 0, 0, 0.06);
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        color: #d97706;
        font-size: 0.9em;
      }
    }
  }
}

.usecases {
  padding: 2rem;

  h3 {
    color: $text-dark;
    margin-bottom: 1.25rem;
  }

  .usecase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .usecase-item {
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.25rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: #8b5cf6;
      transform: translateY(-2px);
    }

    h4 {
      color: $text-dark;
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-family: 'Courier New', monospace;
      color: #8b5cf6;
      margin-bottom: 0.5rem;

      code {
        background: rgba(139, 92, 246, 0.1);
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
      }
    }

    span {
      color: $text-light;
      font-size: 0.9rem;
    }
  }
}

.code-example {
  padding: 2rem;
  background: #1e293b;

  h4 {
    color: white;
    margin-bottom: 1rem;
  }

  pre {
    margin: 0;
    overflow-x: auto;

    code {
      color: #cbd5e1;
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
      line-height: 1.7;
    }
  }
}

.test-section {
  padding: 2rem;
  background: #faf5ff;

  h3 {
    color: $text-dark;
    margin-bottom: 1.25rem;
    text-align: center;
  }

  .test-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .test-link {
      padding: 0.875rem 1.5rem;
      background: white;
      color: #8b5cf6;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      border: 2px solid #8b5cf6;
      transition: all 0.3s ease;
      text-align: center;
      font-family: 'Courier New', monospace;

      &:hover {
        background: #8b5cf6;
        color: white;
      }
    }
  }
}

.navigation {
  padding: 1.5rem 2rem;
  background: #f8fafc;
  text-align: center;
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

@media (max-width: 768px) {
  .header {
    padding: 2rem 1.5rem;

    .title {
      font-size: 2rem;
    }
  }

  .param-cards,
  .usecase-grid {
    grid-template-columns: 1fr;
  }
}
</style>
