<template>
  <!--
    🎨 EXEMPLO DE LAYOUTS - NuxtLayout e NuxtPage

    Esta página demonstra como o sistema de layouts funciona no Nuxt 3.
    Ela usa o layout "default" que criamos.
  -->
  <div class="layouts-example-page">
    <div class="page-header">
      <div class="icon">🎨</div>
      <h1>Sistema de Layouts no Nuxt 3</h1>
      <p class="subtitle">Entenda como NuxtLayout e NuxtPage funcionam juntos</p>
    </div>

    <!-- Explicação Visual -->
    <div class="visual-explanation">
      <h2>📊 Como Funciona</h2>
      <div class="flow-diagram">
        <div class="flow-item">
          <div class="flow-box app-vue">
            <strong>app.vue</strong>
            <code>&lt;NuxtPage /&gt;</code>
          </div>
          <span class="flow-arrow">↓</span>
        </div>
        <div class="flow-item">
          <div class="flow-box layout-file">
            <strong>layouts/default.vue</strong>
            <code>&lt;slot /&gt;</code>
          </div>
          <span class="flow-arrow">↓</span>
        </div>
        <div class="flow-item">
          <div class="flow-box page-file">
            <strong>pages/layouts-example.vue</strong>
            <code>Seu conteúdo aqui</code>
          </div>
        </div>
      </div>
    </div>

    <!-- Conceitos -->
    <div class="concepts-section">
      <h2>💡 Conceitos Principais</h2>
      <div class="concepts-grid">
        <div class="concept-card">
          <div class="concept-icon">📄</div>
          <h3>app.vue</h3>
          <p>
            É o componente raiz da aplicação. Contém o <code>&lt;NuxtPage /&gt;</code>
            que renderiza a página atual.
          </p>
          <div class="code-sample">
            <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;NuxtPage /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🎨</div>
          <h3>layouts/*.vue</h3>
          <p>
            Layouts envolvem as páginas com elementos comuns (header, footer, sidebar).
            Contém <code>&lt;slot /&gt;</code> onde o conteúdo da página é inserido.
          </p>
          <div class="code-sample">
            <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;header&gt;...&lt;/header&gt;
    &lt;slot /&gt;
    &lt;footer&gt;...&lt;/footer&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">📝</div>
          <h3>pages/*.vue</h3>
          <p>
            São as páginas individuais. Podem escolher qual layout usar com
            <code>definePageMeta</code>.
          </p>
          <div class="code-sample">
            <pre><code>&lt;script setup&gt;
definePageMeta({
  layout: 'default'
})
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Layouts Disponíveis -->
    <div class="available-layouts">
      <h2>🗂️ Layouts Disponíveis</h2>
      <div class="layouts-grid">
        <div class="layout-card default">
          <div class="layout-preview">
            <div class="preview-header">Header Completo</div>
            <div class="preview-content">Conteúdo</div>
            <div class="preview-footer">Footer Completo</div>
          </div>
          <h3>default.vue</h3>
          <p>Layout padrão com header, navegação, breadcrumb e footer completos.</p>
          <div class="layout-features">
            <span class="feature">✓ Navegação</span>
            <span class="feature">✓ Breadcrumb</span>
            <span class="feature">✓ Footer</span>
          </div>
        </div>

        <div class="layout-card minimal">
          <div class="layout-preview">
            <div class="preview-header-minimal">← Voltar</div>
            <div class="preview-content">Conteúdo</div>
            <div class="preview-footer-minimal">Footer Simples</div>
          </div>
          <h3>minimal.vue</h3>
          <p>Layout minimalista, ideal para login, 404, ou páginas focadas.</p>
          <div class="layout-features">
            <span class="feature">✓ Simples</span>
            <span class="feature">✓ Clean</span>
            <span class="feature">✓ Focado</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Como Usar -->
    <div class="how-to-use">
      <h2>🚀 Como Usar Layouts nas Páginas</h2>
      <div class="usage-examples">
        <div class="usage-card">
          <h4>1️⃣ Usando o Layout Padrão</h4>
          <pre><code>&lt;script setup&gt;
// Usa automaticamente o default.vue
// Ou especifique explicitamente:
definePageMeta({
  layout: 'default'
})
&lt;/script&gt;</code></pre>
        </div>

        <div class="usage-card">
          <h4>2️⃣ Usando Layout Alternativo</h4>
          <pre><code>&lt;script setup&gt;
// Usa o minimal.vue
definePageMeta({
  layout: 'minimal'
})
&lt;/script&gt;</code></pre>
        </div>

        <div class="usage-card">
          <h4>3️⃣ Sem Layout</h4>
          <pre><code>&lt;script setup&gt;
// Não usa nenhum layout
definePageMeta({
  layout: false
})
&lt;/script&gt;</code></pre>
        </div>

        <div class="usage-card">
          <h4>4️⃣ Layout Dinâmico</h4>
          <pre><code>&lt;script setup&gt;
const route = useRoute()
const isAdmin = route.path.includes('admin')

definePageMeta({
  layout: isAdmin ? 'admin' : 'default'
})
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </div>

    <!-- Hierarquia -->
    <div class="hierarchy-section">
      <h2>📂 Estrutura de Arquivos</h2>
      <div class="file-tree">
        <div class="tree-item">
          <span class="folder">📁 app/</span>
          <div class="tree-children">
            <div class="tree-item">
              <span class="file">📄 app.vue</span>
              <span class="file-desc">← Contém &lt;NuxtPage /&gt;</span>
            </div>
            <div class="tree-item">
              <span class="folder">📁 layouts/</span>
              <div class="tree-children">
                <div class="tree-item">
                  <span class="file">🎨 default.vue</span>
                  <span class="file-desc">← Layout completo</span>
                </div>
                <div class="tree-item">
                  <span class="file">🎨 minimal.vue</span>
                  <span class="file-desc">← Layout minimalista</span>
                </div>
              </div>
            </div>
            <div class="tree-item">
              <span class="folder">📁 pages/</span>
              <div class="tree-children">
                <div class="tree-item">
                  <span class="file">📝 index.vue</span>
                  <span class="file-desc">← Usa default.vue</span>
                </div>
                <div class="tree-item">
                  <span class="file">📝 layouts-example.vue</span>
                  <span class="file-desc">← Esta página!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Teste de Layouts -->
    <div class="test-section">
      <h2>🧪 Teste os Layouts</h2>
      <p class="test-description">
        Esta página está usando o <strong>layout default</strong>.
        Veja outras páginas para comparar layouts diferentes!
      </p>
      <div class="test-links">
        <NuxtLink to="/" class="test-link default-link">
          <span class="link-icon">🏠</span>
          <span class="link-text">
            <strong>Página Inicial</strong>
            <small>Layout: Default</small>
          </span>
        </NuxtLink>
        <NuxtLink to="/greeting/Maria" class="test-link default-link">
          <span class="link-icon">👋</span>
          <span class="link-text">
            <strong>Saudação</strong>
            <small>Layout: Default</small>
          </span>
        </NuxtLink>
        <NuxtLink to="/products/123" class="test-link default-link">
          <span class="link-icon">📦</span>
          <span class="link-text">
            <strong>Produtos</strong>
            <small>Layout: Default</small>
          </span>
        </NuxtLink>
      </div>
    </div>

    <!-- Recursos -->
    <div class="resources">
      <h2>📚 Recursos Adicionais</h2>
      <div class="resource-links">
        <a href="https://nuxt.com/docs/guide/directory-structure/layouts" target="_blank" class="resource-card">
          <span class="resource-icon">📖</span>
          <span class="resource-text">
            <strong>Layouts - Nuxt Docs</strong>
            <small>Documentação oficial sobre layouts</small>
          </span>
        </a>
        <a href="https://nuxt.com/docs/api/components/nuxt-page" target="_blank" class="resource-card">
          <span class="resource-icon">📄</span>
          <span class="resource-text">
            <strong>NuxtPage Component</strong>
            <small>Aprenda sobre o componente NuxtPage</small>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🎨 EXEMPLO DE LAYOUTS
 *
 * Esta página demonstra o sistema de layouts do Nuxt 3.
 * Ela está usando o layout "default" criado em /layouts/default.vue
 *
 * 📚 CONCEITOS:
 *
 * 1. app.vue:
 *    - Componente raiz da aplicação
 *    - Contém <NuxtPage /> que renderiza a página/layout atual
 *
 * 2. layouts/*.vue:
 *    - Envolve páginas com elementos comuns (header, footer, etc)
 *    - Contém <slot /> onde o conteúdo da página é inserido
 *
 * 3. pages/*.vue:
 *    - Páginas individuais
 *    - Usa definePageMeta({ layout: 'nome' }) para escolher o layout
 *
 * 🔄 FLUXO:
 * app.vue → NuxtPage → layout escolhido → slot → conteúdo da página
 *
 * 💡 VANTAGENS:
 * - Reutilização de código (header/footer em um só lugar)
 * - Múltiplos layouts para diferentes seções do app
 * - Fácil manutenção e organização
 * - SEO-friendly
 */

definePageMeta({
  layout: 'default' // Esta página usa o layout default.vue
})
</script>

<style scoped>
$primary: #00dc82;
$secondary: #667eea;
$accent: #f59e0b;
$text-dark: #1e293b;
$text-light: #64748b;
$border: #e2e8f0;

.layouts-example-page {
  width: 100%;
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

/* Visual Explanation */
.visual-explanation {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
}

.flow-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.flow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.flow-box {
  padding: 1.5rem 2rem;
  border-radius: 12px;
  text-align: center;
  min-width: 300px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  strong {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  code {
    display: block;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    border-radius: 6px;
    font-family: 'Courier New', monospace;
  }

  &.app-vue {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border: 2px solid #f59e0b;

    code {
      color: #d97706;
    }
  }

  &.layout-file {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border: 2px solid #3b82f6;

    code {
      color: #1e40af;
    }
  }

  &.page-file {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    border: 2px solid $primary;

    code {
      color: #059669;
    }
  }
}

.flow-arrow {
  font-size: 2rem;
  color: $secondary;
  font-weight: bold;
}

/* Concepts */
.concepts-section {
  margin-bottom: 3rem;

  h2 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .concept-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: $text-dark;
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: $text-light;
    line-height: 1.7;
    margin-bottom: 1rem;

    code {
      background: rgba(102, 126, 234, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      color: $secondary;
      font-family: 'Courier New', monospace;
    }
  }

  .code-sample {
    background: #1e293b;
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;

    pre {
      margin: 0;

      code {
        color: #cbd5e1;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
        line-height: 1.6;
      }
    }
  }
}

/* Available Layouts */
.available-layouts {
  margin-bottom: 3rem;

  h2 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
}

.layouts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.layout-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .layout-preview {
    border: 2px solid $border;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;

    .preview-header,
    .preview-header-minimal {
      background: $secondary;
      color: white;
      padding: 0.75rem;
      text-align: center;
      font-weight: 600;
      font-size: 0.85rem;
    }

    .preview-header-minimal {
      background: rgba(102, 126, 234, 0.3);
      color: $text-dark;
      text-align: left;
    }

    .preview-content {
      padding: 3rem 1rem;
      text-align: center;
      background: #f8fafc;
      color: $text-light;
      font-style: italic;
    }

    .preview-footer {
      background: #1e293b;
      color: white;
      padding: 1rem;
      text-align: center;
      font-size: 0.8rem;
    }

    .preview-footer-minimal {
      background: rgba(0, 0, 0, 0.05);
      color: $text-light;
      padding: 0.5rem;
      text-align: center;
      font-size: 0.75rem;
    }
  }

  h3 {
    color: $text-dark;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: $text-light;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .layout-features {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

    .feature {
      background: rgba(0, 220, 130, 0.1);
      color: $primary;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
    }
  }
}

/* How to Use */
.how-to-use {
  margin-bottom: 3rem;

  h2 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
}

.usage-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.usage-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h4 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  pre {
    margin: 0;
    background: #1e293b;
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;

    code {
      color: #cbd5e1;
      font-family: 'Courier New', monospace;
      font-size: 0.8rem;
      line-height: 1.6;
    }
  }
}

/* Hierarchy */
.hierarchy-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
}

.file-tree {
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.tree-item {
  padding: 0.5rem 0;

  .folder,
  .file {
    font-weight: 600;
    color: $text-dark;
  }

  .file-desc {
    color: $text-light;
    font-style: italic;
    margin-left: 0.5rem;
  }

  .tree-children {
    margin-left: 2rem;
    border-left: 2px solid $border;
    padding-left: 1rem;
    margin-top: 0.25rem;
  }
}

/* Test Section */
.test-section {
  background: linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;

  h2 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.75rem;
  }

  .test-description {
    color: $text-light;
    margin-bottom: 1.5rem;
    line-height: 1.7;

    strong {
      color: $secondary;
      font-weight: 700;
    }
  }
}

.test-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.test-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &.default-link {
    border-color: $secondary;

    &:hover {
      background: $secondary;

      .link-icon,
      .link-text strong,
      .link-text small {
        color: white;
      }
    }
  }

  .link-icon {
    font-size: 2rem;
  }

  .link-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      color: $text-dark;
      font-size: 1rem;
    }

    small {
      color: $text-light;
      font-size: 0.85rem;
    }
  }
}

/* Resources */
.resources {
  h2 {
    color: $text-dark;
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
}

.resource-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.resource-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  border: 2px solid $border;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 220, 130, 0.2);
  }

  .resource-icon {
    font-size: 2.5rem;
  }

  .resource-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    strong {
      color: $text-dark;
      font-size: 1.05rem;
    }

    small {
      color: $text-light;
      font-size: 0.9rem;
    }
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

  .flow-box {
    min-width: 250px;
    padding: 1rem 1.5rem;
  }

  .concepts-grid,
  .layouts-grid,
  .usage-examples {
    grid-template-columns: 1fr;
  }

  .test-links {
    grid-template-columns: 1fr;
  }
}
</style>
