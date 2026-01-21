/**
 * 🌍 MIDDLEWARE GLOBAL
 *
 * Arquivo: /middleware/rodar-globalmente.global.js
 * Tipo: Global Middleware (sufixo .global.js)
 *
 * ⚠️ IMPORTANTE: Este middleware executa em TODAS as rotas automaticamente!
 * Não precisa registrar em nenhuma página - o Nuxt detecta pelo sufixo .global.js
 *
 * Use para:
 * - Analytics em todas as páginas
 * - Autenticação global
 * - Loading states
 * - Error tracking
 * - Logs de navegação
 */

export default defineNuxtRouteMiddleware((to, from) => {
  /**
   * 🎯 EXECUÇÃO AUTOMÁTICA
   *
   * Este middleware roda automaticamente em TODA navegação:
   * - Mudanças de rota
   * - Primeiro carregamento
   * - Navegação programática
   * - Voltar/Avançar do navegador
   */

  // 📊 Log de navegação global
  console.log('🌍 [Global Middleware] Navegação detectada!')
  console.log('   DE:', from.path || 'Primeira carga')
  console.log('   PARA:', to.path)

  /**
   * ✅ EXEMPLOS DE USO GLOBAL:
   *
   * 1. Analytics - Track todas as page views:
   *    if (process.client) {
   *      gtag('event', 'page_view', {
   *        page_path: to.path
   *      })
   *    }
   *
   * 2. Autenticação Global:
   *    const publicRoutes = ['/login', '/register', '/']
   *    if (!publicRoutes.includes(to.path) && !isAuthenticated()) {
   *      return navigateTo('/login')
   *    }
   *
   * 3. Loading State:
   *    if (process.client) {
   *      document.body.classList.add('page-loading')
   *    }
   *
   * 4. Scroll to Top:
   *    if (process.client) {
   *      window.scrollTo(0, 0)
   *    }
   *
   * 5. Feature Flags / Manutenção:
   *    if (isMaintenanceMode() && !isAdmin()) {
   *      return navigateTo('/maintenance')
   *    }
   */

  /**
   * 💡 DICA: Use process.client para código que só roda no navegador
   *
   * Durante SSR (Server-Side Rendering), o código roda no servidor primeiro.
   * APIs do navegador (window, document, localStorage) não existem no servidor!
   */

  if (process.client) {
    // Código que só executa no navegador
    console.log('   🖥️ Executando no cliente (navegador)')

    // Exemplo: Salvar histórico de navegação
    // localStorage.setItem('lastRoute', to.path)
  }

  if (process.server) {
    // Código que só executa no servidor
    console.log('   🖧 Executando no servidor (SSR)')
  }

  /**
   * ⚠️ ORDEM DE EXECUÇÃO DOS MIDDLEWARES:
   *
   * 1. Global middlewares (.global.js) - executam primeiro
   * 2. Named middlewares (definePageMeta) - executam depois
   * 3. Inline middlewares (funções anônimas) - executam por último
   */

  // ✅ Permite a navegação continuar
})

/**
 * 📚 DIFERENÇAS ENTRE MIDDLEWARES:
 *
 * GLOBAL (.global.js)
 * - Executa em TODAS as rotas automaticamente
 * - Não precisa registrar nas páginas
 * - Ideal para funcionalidades transversais
 *
 * NAMED (sem .global.js)
 * - Executa apenas onde você registrar
 * - Precisa de definePageMeta({ middleware: ['nome'] })
 * - Ideal para proteção específica de rotas
 */

/**
 * 🔗 RECURSOS:
 * - Global Middleware: https://nuxt.com/docs/guide/directory-structure/middleware#global-middleware
 * - Route Middleware: https://nuxt.com/docs/api/utils/define-nuxt-route-middleware
 */