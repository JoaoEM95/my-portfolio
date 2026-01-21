<template>
  <!--
    🎯 LAYOUT MÍNIMO - Minimal Layout

    Um layout mais simples, sem header/footer complexos.
    Ideal para páginas de login, erro 404, ou páginas standalone.

    💡 Como usar em uma página:
    definePageMeta({ layout: 'minimal' })
  -->
  <div class="minimal-layout">
    <!-- Header Simples -->
    <div class="minimal-header">
      <NuxtLink to="/" class="back-home">
        <span class="back-icon">←</span>
        <span>Voltar ao Início</span>
      </NuxtLink>
    </div>

    <!-- Conteúdo da Página -->
    <main class="minimal-main">
      <slot />
    </main>

    <!-- Footer Simples -->
    <footer class="minimal-footer">
      <p>Layout: Minimal</p>
    </footer>
  </div>
</template>

<script setup>
/**
 * 🎯 LAYOUT MÍNIMO
 *
 * Um layout mais clean e direto ao ponto.
 * Perfeito para:
 * - Páginas de autenticação (login, registro)
 * - Páginas de erro (404, 500)
 * - Landing pages específicas
 * - Páginas que precisam de foco no conteúdo
 *
 * 📝 Diferença do Layout Default:
 * - Sem navegação complexa
 * - Sem breadcrumbs
 * - Footer minimalista
 * - Foco total no conteúdo
 */
</script>

<style scoped>
$primary: #00dc82;
$text-dark: #1e293b;
$text-light: #64748b;

.minimal-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
}

/* Header Simples */
.minimal-header {
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: white;
  color: $text-dark;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: $primary;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 220, 130, 0.3);
  }

  .back-icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover .back-icon {
    transform: translateX(-4px);
  }
}

/* Main Content */
.minimal-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1.5rem 3rem;
}

/* Footer Simples */
.minimal-footer {
  padding: 1rem;
  text-align: center;
  color: $text-light;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  p {
    margin: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .minimal-main {
    padding: 5rem 1rem 2rem;
  }

  .back-home {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
