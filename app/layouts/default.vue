<template>
  <!--
    🎨 LAYOUT PADRÃO - Default Layout

    Este é um layout que pode ser aplicado em várias páginas.
    Ele envolve o conteúdo da página com elementos comuns.

    💡 Como usar em uma página:
    definePageMeta({ layout: 'default' })
  -->
  <div class="default-layout">
    <!-- Header do Layout -->
    <header class="layout-header">
      <div class="header-container">
        <NuxtLink to="/" class="logo">
          <span class="logo-icon">📚</span>
          <span class="logo-text">Nuxt Learning</span>
        </NuxtLink>

        <nav class="main-nav">
          <NuxtLink to="/" class="nav-link">Início</NuxtLink>
          <NuxtLink to="/greeting/Maria" class="nav-link">Saudação</NuxtLink>
          <NuxtLink to="/about/João/123" class="nav-link">About</NuxtLink>
          <NuxtLink to="/products/42" class="nav-link">Produtos</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Breadcrumb -->
    <div class="breadcrumb-wrapper">
      <div class="breadcrumb-container">
        <span class="breadcrumb-item">
          🏠 <NuxtLink to="/">Home</NuxtLink>
        </span>
        <span class="breadcrumb-separator">›</span>
        <span class="breadcrumb-item current">{{ currentPageName }}</span>
      </div>
    </div>

    <!-- Conteúdo da Página (slot) -->
    <main class="layout-main">
      <div class="main-container">
        <slot />
      </div>
    </main>

    <!-- Footer do Layout -->
    <footer class="layout-footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>📚 Nuxt Learning</h4>
            <p>Exemplos práticos de Nuxt 3</p>
          </div>
          <div class="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><NuxtLink to="/">Início</NuxtLink></li>
              <li><NuxtLink to="/layouts-example">Sobre Layouts</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Recursos</h4>
            <ul>
              <li><a href="https://nuxt.com" target="_blank">Documentação Nuxt</a></li>
              <li><a href="https://vuejs.org" target="_blank">Vue.js</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Made with 💚 using Nuxt 3 | Layout: Default</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
/**
 * 🎨 LAYOUT PADRÃO (DEFAULT)
 *
 * Layouts no Nuxt 3 permitem criar estruturas reutilizáveis
 * que envolvem múltiplas páginas.
 *
 * 📁 Estrutura:
 * - Layouts ficam em /layouts/
 * - O <slot /> é onde o conteúdo da página será renderizado
 * - Use definePageMeta({ layout: 'nome-do-layout' }) na página
 *
 * 🔄 Como funciona:
 * 1. Nuxt detecta automaticamente arquivos em /layouts/
 * 2. Páginas podem escolher qual layout usar
 * 3. O conteúdo da página é inserido no <slot />
 */

const route = useRoute()

// Nome da página atual para o breadcrumb
const currentPageName = computed(() => {
  const path = route.path
  if (path === '/') return 'Início'
  if (path.includes('greeting')) return 'Saudação'
  if (path.includes('about')) return 'About'
  if (path.includes('products')) return 'Produtos'
  if (path.includes('layouts')) return 'Layouts'
  return 'Página'
})

/**
 * 💡 DICAS SOBRE LAYOUTS:
 *
 * 1. Layout Default:
 *    - Se uma página não especificar layout, usa o default.vue
 *
 * 2. Múltiplos Layouts:
 *    - Crie quantos layouts precisar: admin.vue, minimal.vue, etc.
 *
 * 3. Sem Layout:
 *    - Use definePageMeta({ layout: false }) para não usar layout
 *
 * 4. Transições:
 *    - Adicione <Transition> ao redor do <slot /> para animações
 */
</script>

<style scoped>
$primary: #00dc82;
$secondary: #667eea;
$text-dark: #1e293b;
$text-light: #64748b;
$border-color: #e2e8f0;

/* Layout Container */
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

/* Header */
.layout-header {
  background: white;
  border-bottom: 2px solid $border-color;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  color: $text-dark;
  transition: all 0.3s ease;

  &:hover {
    color: $primary;
    transform: translateY(-2px);
  }

  .logo-icon {
    font-size: 1.75rem;
  }
}

.main-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: $text-light;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: $primary;
    background: rgba(0, 220, 130, 0.1);
  }

  &.router-link-active {
    color: $primary;
    background: rgba(0, 220, 130, 0.15);
  }
}

/* Breadcrumb */
.breadcrumb-wrapper {
  background: white;
  border-bottom: 1px solid $border-color;
}

.breadcrumb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.breadcrumb-item {
  color: $text-light;

  a {
    color: $secondary;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $primary;
    }
  }

  &.current {
    color: $text-dark;
    font-weight: 600;
  }
}

.breadcrumb-separator {
  color: $text-light;
  font-weight: 300;
}

/* Main Content */
.layout-main {
  flex: 1;
  padding: 2rem 0;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Footer */
.layout-footer {
  background: linear-gradient(135deg, $text-dark 0%, #0f172a 100%);
  color: white;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-section {
  h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: $primary;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: $primary;
        }
      }
    }
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;

  p {
    margin: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }

  .breadcrumb-container {
    font-size: 0.85rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
