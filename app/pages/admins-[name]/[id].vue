<template>
  <!--
    ⚙️ ROTAS COM PREFIXO - Texto Estático + Parâmetro

    Arquivo: /pages/admins-[name]/[id].vue
    Rota: /admins-:name/:id
    Exemplo: /admins-João/456

    Demonstra como combinar texto fixo com parâmetros dinâmicos!
  -->
  <div class="prefix-page">
    <div class="container">
      <div class="prefix-card">
        <!-- Header -->
        <div class="header">
          <div class="icon">⚙️</div>
          <h1 class="title">Rotas com Prefixo</h1>
          <p class="subtitle">Texto Estático + Parâmetros Dinâmicos</p>
        </div>

        <!-- Acesso Direto ao $route no Template -->
        <div class="highlight-section">
          <h3>🎯 Acesso Direto: $route no Template</h3>
          <p class="info-text">
            Você pode acessar a rota diretamente no template sem usar <code>useRoute()</code>!
          </p>
          <div class="route-display">
            <strong>Objeto $route completo:</strong>
            <pre><code>{{ $route }}</code></pre>
          </div>
        </div>

        <!-- Parâmetros -->
        <div class="params-section">
          <h3>🔍 Parâmetros Capturados</h3>

          <div class="param-cards">
            <div class="param-card admin">
              <div class="param-icon">👤</div>
              <div class="param-content">
                <span class="param-label">Admin Name</span>
                <span class="param-value">{{ route.params.name }}</span>
                <span class="param-hint">Do script setup</span>
              </div>
            </div>

            <div class="param-card id">
              <div class="param-icon">🆔</div>
              <div class="param-content">
                <span class="param-label">Admin ID</span>
                <span class="param-value">{{ id }}</span>
                <span class="param-hint">Constante no script</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Explicação -->
        <div class="explanation">
          <h3>💡 Entenda a Estrutura</h3>
          <div class="structure-box">
            <div class="structure-item">
              <strong>📁 Nome do Arquivo:</strong>
              <code>/pages/admins-[name]/[id].vue</code>
            </div>
            <div class="structure-item">
              <strong>🌐 URL Gerada:</strong>
              <code>/admins-:name/:id</code>
            </div>
            <div class="structure-item">
              <strong>📝 Exemplo de URL:</strong>
              <code>/admins-João/456</code>
            </div>
            <div class="structure-item">
              <strong>🔑 Breakdown:</strong>
              <ul>
                <li><code>admins-</code> = texto fixo (prefixo)</li>
                <li><code>[name]</code> = parâmetro dinâmico</li>
                <li><code>/[id]</code> = segundo parâmetro aninhado</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Comparação -->
        <div class="comparison-section">
          <h3>📊 Comparação de Padrões</h3>
          <div class="comparison-grid">
            <div class="comparison-card">
              <h4>Padrão Simples</h4>
              <code>/users/[id].vue</code>
              <p>→ <code>/users/123</code></p>
            </div>
            <div class="comparison-card">
              <h4>Com Prefixo</h4>
              <code>/admin-[name]/[id].vue</code>
              <p>→ <code>/admin-joão/123</code></p>
            </div>
            <div class="comparison-card">
              <h4>Múltiplos Níveis</h4>
              <code>/[category]/[id].vue</code>
              <p>→ <code>/tech/123</code></p>
            </div>
          </div>
        </div>

        <!-- Código -->
        <div class="code-example">
          <h4>💻 Código desta Página</h4>
          <pre><code>// 📁 Estrutura
/pages/admins-[name]/[id].vue

// 📝 Script Setup
const route = useRoute()
const id = route.params.id

// 🎨 No Template
// Acesso direto com $route:
{{ $route.params.name }}
{{ $route.params.id }}

// Ou usando variáveis do script:
{{ route.params.name }}
{{ id }}</code></pre>
        </div>

        <!-- Teste -->
        <div class="test-section">
          <h3>🧪 Teste Diferentes Admins</h3>
          <div class="test-links">
            <NuxtLink to="/admins-João/456" class="test-link">
              /admins-João/456
            </NuxtLink>
            <NuxtLink to="/admins-Maria/789" class="test-link">
              /admins-Maria/789
            </NuxtLink>
            <NuxtLink to="/admins-Admin/999" class="test-link">
              /admins-Admin/999
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
 * ⚙️ ROTAS COM PREFIXO + Acesso ao $route
 *
 * Esta página demonstra duas formas de acessar parâmetros:
 * 1. useRoute() no script setup
 * 2. $route diretamente no template
 */

const route = useRoute()
const id = route.params.id

/**
 * 💡 ACESSO DIRETO NO TEMPLATE:
 *
 * O Nuxt disponibiliza $route globalmente no template.
 * Você pode usar $route.params, $route.query, $route.path, etc.
 * sem precisar declarar nada no script!
 */

/**
 * 🎯 CASOS DE USO:
 *
 * - Painéis administrativos: /admin-{username}/{action}
 * - Dashboards: /dashboard-{company}/{page}
 * - Perfis: /user-{username}/{section}
 * - API Routes: /api-{version}/{endpoint}
 */
</script>

<style lang="scss" scoped>
$primary: #00dc82;
$secondary: #667eea;
$text-dark: #1e293b;
$text-light: #64748b;
$admin-color: #ef4444;

.prefix-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.prefix-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background: linear-gradient(135deg, $admin-color 0%, #dc2626 100%);
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

.highlight-section {
  padding: 2rem;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-bottom: 3px solid #fca5a5;

  h3 {
    color: $text-dark;
    margin-bottom: 1rem;
  }

  .info-text {
    color: $text-light;
    margin-bottom: 1.25rem;
    line-height: 1.6;

    code {
      background: rgba(239, 68, 68, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      color: $admin-color;
    }
  }

  .route-display {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    border-left: 4px solid $admin-color;

    strong {
      display: block;
      color: $text-dark;
      margin-bottom: 0.75rem;
    }

    pre {
      margin: 0;
      overflow-x: auto;

      code {
        color: $text-light;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        white-space: pre-wrap;
        word-break: break-all;
      }
    }
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.param-card {
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &.admin {
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    border: 2px solid #fca5a5;

    &:hover {
      border-color: $admin-color;
    }
  }

  &.id {
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border: 2px solid #93c5fd;

    &:hover {
      border-color: #3b82f6;
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  .param-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .param-content {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    .param-label {
      font-size: 0.8rem;
      color: $text-light;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .param-value {
      font-size: 1.6rem;
      font-weight: 700;
      color: $admin-color;
      font-family: 'Courier New', monospace;
    }

    .param-hint {
      font-size: 0.75rem;
      color: $text-light;
      font-style: italic;
    }
  }
}

.explanation {
  padding: 2rem;
  background: #f8fafc;

  h3 {
    color: $text-dark;
    margin-bottom: 1.25rem;
  }

  .structure-box {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    border-left: 4px solid $admin-color;
  }

  .structure-item {
    padding: 1rem 0;
    border-bottom: 1px solid #e2e8f0;

    &:last-child {
      border-bottom: none;
    }

    strong {
      display: block;
      color: $text-dark;
      margin-bottom: 0.5rem;
    }

    code {
      background: rgba(239, 68, 68, 0.1);
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      color: $admin-color;
      font-family: 'Courier New', monospace;
    }

    ul {
      margin-top: 0.75rem;
      padding-left: 1.5rem;
      color: $text-light;

      li {
        padding: 0.25rem 0;

        code {
          font-size: 0.9em;
        }
      }
    }
  }
}

.comparison-section {
  padding: 2rem;

  h3 {
    color: $text-dark;
    margin-bottom: 1.25rem;
  }

  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .comparison-card {
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.25rem;
    text-align: center;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: $admin-color;
    }

    h4 {
      color: $text-dark;
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }

    code {
      display: block;
      background: rgba(0, 0, 0, 0.04);
      padding: 0.5rem;
      border-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      color: $admin-color;
      margin-bottom: 0.5rem;
    }

    p {
      color: $text-light;
      font-size: 0.9rem;
      margin: 0;
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
  background: #fef2f2;

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
      color: $admin-color;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      border: 2px solid $admin-color;
      transition: all 0.3s ease;
      text-align: center;
      font-family: 'Courier New', monospace;

      &:hover {
        background: $admin-color;
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
    background: darken($primary, 10%);
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
  .comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>
