/**
 * 🛡️ MIDDLEWARE EXAMPLE - Named Middleware
 *
 * Arquivo: /middleware/middleware-example.js
 * Tipo: Named Middleware (registrado manualmente nas páginas)
 *
 * Este middleware é executado ANTES de uma página ser renderizada.
 * Perfeito para autenticação, autorização, analytics, etc.
 */

export default defineNuxtRouteMiddleware((to, from) => {
  /**
   * 📥 PARÂMETROS:
   *
   * @param {Route} to - Rota de destino (para onde o usuário está indo)
   *   - to.path: '/about/João/123'
   *   - to.params: { name: 'João', id: '123' }
   *   - to.query: { tab: 'profile' }
   *   - to.name: nome da rota
   *
   * @param {Route} from - Rota de origem (de onde o usuário está vindo)
   *   - Mesmas propriedades que 'to'
   */

  // 📊 Log para debug (visível no console do navegador)
  console.log('🛡️ Middleware Example executado!')
  console.log('📍 Navegando DE:', from.path, '→ PARA:', to.path)
  console.log('🔍 Parâmetros da rota:', to.params)

  /**
   * ✅ EXEMPLOS DE USO:
   *
   * 1. Bloquear acesso não autenticado:
   *    if (!isAuthenticated()) {
   *      return navigateTo('/login')
   *    }
   *
   * 2. Verificar permissões:
   *    if (!hasPermission(to.name)) {
   *      return abortNavigation('Sem permissão de acesso')
   *    }
   *
   * 3. Redirecionamento condicional:
   *    if (to.path === '/admin' && !isAdmin()) {
   *      return navigateTo('/dashboard')
   *    }
   *
   * 4. Analytics/Tracking:
   *    trackPageView(to.path)
   *
   * 5. Validação de parâmetros:
   *    if (!to.params.id || isNaN(to.params.id)) {
   *      return navigateTo('/404')
   *    }
   */

  /**
   * 💡 RETORNOS POSSÍVEIS:
   *
   * - navigateTo('/path') → Redireciona para outra rota
   * - abortNavigation('mensagem') → Cancela a navegação com erro
   * - return undefined (ou nada) → Permite a navegação continuar
   */

  // ✅ Permite a navegação continuar (não retorna nada)
  // Remova este comentário para implementar sua lógica!
})

/**
 * 📚 COMO USAR ESTE MIDDLEWARE:
 *
 * Em uma página .vue, adicione no script setup:
 *
 * definePageMeta({
 *   middleware: ['middleware-example']
 * })
 *
 * Ou múltiplos middlewares:
 * middleware: ['auth', 'middleware-example', 'analytics']
 *
 * Os middlewares são executados na ORDEM que você define!
 */

/**
 * 🔗 RECURSOS:
 * - Docs: https://nuxt.com/docs/guide/directory-structure/middleware
 * - Route Object: https://nuxt.com/docs/api/composables/use-route
 */