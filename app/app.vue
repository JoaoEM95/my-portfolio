<template>
  <!--
    🎯 APP.VUE - Componente Raiz do Nuxt

    Este é o componente principal da aplicação Nuxt.
    Tudo que você colocar aqui aparecerá em TODAS as páginas.

    Ideal para:
    - Headers e Footers globais
    - Navegação principal
    - Layouts compartilhados
    - Scripts e estilos globais
  -->
  <div id="app">
    <!-- Header Global -->
    <header class="app-header">
      <div class="container">
        <h1 class="logo">📚 Nuxt Learning</h1>
        <p class="subtitle">Projeto de estudos - Exemplos práticos</p>
      </div>
    </header>

    <!--
      🔑 <NuxtPage /> - Componente especial do Nuxt

      Este componente renderiza a página atual baseada na rota.
      É como um <router-view> do Vue Router, mas otimizado para Nuxt.

      Cada arquivo em /pages se torna uma rota automaticamente!

      🎬 Page Transitions: Habilitadas no nuxt.config.ts.
      Cada página pode definir sua própria transição com definePageMeta().
    -->
    <main class="app-main">
      <NuxtPage />
    </main>

    <!-- Footer Global -->
    <footer class="app-footer">
      <div class="container">
        <p>Made with 💚 using Nuxt 3</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
/**
 * 🎨 SCRIPT SETUP
 *
 * Syntax sugar do Vue 3 Composition API
 * Tudo aqui fica disponível no template automaticamente!
 */

// Exemplo: Você pode adicionar lógica global aqui
import { ref, onMounted } from 'vue'

// Estado reativo global (compartilhado entre todas as páginas)
const appVersion = ref('1.0.0')

// Lifecycle hook - executa quando o app é montado
onMounted(() => {
  console.log('🚀 Aplicação Nuxt iniciada!')
  console.log(`📦 Versão: ${appVersion.value}`)
})

/**
 * 💡 DICAS:
 *
 * 1. Use app.vue para elementos que aparecem em TODAS as páginas
 * 2. Para layouts específicos, use a pasta /layouts
 * 3. Mantenha app.vue limpo e simples
 * 4. Lógica complexa deve ficar em composables ou stores
 */
</script>

<style scoped>
/**
 * 🎨 ESTILOS ESCOPADOS
 *
 * "scoped" significa que esses estilos só afetam este componente
 * Nuxt usa PostCSS por padrão, mas você pode usar SCSS, LESS, etc.
 */

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Header Global */
.app-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #00dc82;
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  color: #00dc82;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #64748b;
  font-size: 0.95rem;
}

/* Container responsivo */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Área principal do conteúdo */
.app-main {
  flex: 1;
  padding: 3rem 0;
  width: 100%;
}

/* Footer Global */
.app-footer {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  text-align: center;
  color: white;
  margin-top: auto;
}

.app-footer p {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Responsividade */
@media (max-width: 768px) {
  .logo {
    font-size: 1.5rem;
  }

  .app-header {
    padding: 1.5rem 0;
  }

  .app-main {
    padding: 2rem 0;
  }
}
</style>

<style>
/**
 * 🎬 NUXT PAGE TRANSITIONS - Global CSS
 *
 * Estas classes são usadas pelas transições de página do Nuxt.
 * Devem estar em um <style> NÃO-SCOPED para funcionar globalmente.
 */

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

/* Scale Transition */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.scale-enter-from {
  transform: scale(0.9);
  opacity: 0;
}

.scale-leave-to {
  transform: scale(1.1);
  opacity: 0;
}

/* Rotate Transition */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.rotate-enter-from {
  transform: rotate(-180deg) scale(0.8);
  opacity: 0;
}

.rotate-leave-to {
  transform: rotate(180deg) scale(0.8);
  opacity: 0;
}

/* Page Transition - Default (se configurado no nuxt.config) */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
