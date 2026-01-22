<template>
  <!--
    🏠 PÁGINA INICIAL (INDEX.VUE)

    Este é o ponto de entrada da aplicação!
    Localização: /pages/index.vue
    Rota: http://localhost:3000/

    📌 CONCEITO: File-based Routing
    No Nuxt, cada arquivo .vue na pasta /pages vira automaticamente uma rota!
  -->
  <div class="home-page">
    <div class="container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">🎓 Bem-vindo ao Guia de Nuxt 3!</h1>
          <p class="hero-description">
            Este projeto demonstra os principais conceitos do Nuxt de forma prática e didática.
            Explore cada exemplo abaixo para aprender sobre rotas, parâmetros e middlewares!
          </p>
          <div class="stats">
            <div class="stat-card">
              <span class="stat-number">{{ routesCount }}</span>
              <span class="stat-label">Rotas de Exemplo</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">{{ middlewaresCount }}</span>
              <span class="stat-label">Middlewares</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">{{ conceptsCount }}</span>
              <span class="stat-label">Conceitos</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation Cards -->
      <section class="navigation-section">
        <h2 class="section-title">📖 Exemplos Práticos</h2>

        <div class="cards-grid">
          <!-- Card 1: Rotas Simples -->
          <NuxtLink to="/abouts" class="nav-card">
            <div class="card-icon">👤</div>
            <h3 class="card-title">Rotas Simples</h3>
            <p class="card-description">
              Aprenda como criar páginas básicas e navegar entre elas usando NuxtLink.
            </p>
            <div class="card-tag">Básico</div>
            <div class="card-footer">
              <span class="card-path">/pages/abouts.vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 2: Rotas Dinâmicas -->
          <NuxtLink to="/greeting/Nuxt" class="nav-card">
            <div class="card-icon">🔗</div>
            <h3 class="card-title">Rotas Dinâmicas</h3>
            <p class="card-description">
              Use parâmetros na URL para criar páginas dinâmicas. Exemplo: /greeting/[nome]
            </p>
            <div class="card-tag">Intermediário</div>
            <div class="card-footer">
              <span class="card-path">/pages/greeting/[name].vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 3: Middlewares -->
          <NuxtLink to="/middleware-function" class="nav-card">
            <div class="card-icon">🛡️</div>
            <h3 class="card-title">Route Middlewares</h3>
            <p class="card-description">
              Proteja rotas e execute lógica antes da navegação usando middlewares.
            </p>
            <div class="card-tag">Intermediário</div>
            <div class="card-footer">
              <span class="card-path">/middleware/*.js</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 4: Rotas Aninhadas -->
          <NuxtLink to="/about/João/123" class="nav-card">
            <div class="card-icon">📂</div>
            <h3 class="card-title">Rotas Aninhadas</h3>
            <p class="card-description">
              Múltiplos parâmetros em uma URL: /about/[name]/[id]
            </p>
            <div class="card-tag">Intermediário</div>
            <div class="card-footer">
              <span class="card-path">/pages/about/[name]/[id].vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 5: Catch-all Routes -->
          <NuxtLink to="/docs/nuxt/getting-started" class="nav-card">
            <div class="card-icon">🌐</div>
            <h3 class="card-title">Catch-all Routes</h3>
            <p class="card-description">
              Capture qualquer URL com [...slug]. Perfeito para páginas 404 customizadas!
            </p>
            <div class="card-tag">Avançado</div>
            <div class="card-footer">
              <span class="card-path">/pages/[...words].vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 6: Rotas com Prefixo -->
          <NuxtLink to="/admins-João/456" class="nav-card">
            <div class="card-icon">⚙️</div>
            <h3 class="card-title">Rotas com Prefixo</h3>
            <p class="card-description">
              Combine texto estático com parâmetros: /admins-[name]/[id]
            </p>
            <div class="card-tag">Avançado</div>
            <div class="card-footer">
              <span class="card-path">/pages/admins-[name]/[id].vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 7: Validação de Rotas -->
          <NuxtLink to="/products/123" class="nav-card">
            <div class="card-icon">✅</div>
            <h3 class="card-title">Validação de Rotas</h3>
            <p class="card-description">
              Use definePageMeta com validate para validar parâmetros antes de renderizar!
            </p>
            <div class="card-tag">Avançado</div>
            <div class="card-footer">
              <span class="card-path">/pages/products/[id].vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 8: Sistema de Layouts -->
          <NuxtLink to="/layouts-example" class="nav-card">
            <div class="card-icon">🎨</div>
            <h3 class="card-title">Sistema de Layouts</h3>
            <p class="card-description">
              Aprenda sobre NuxtLayout e NuxtPage. Crie layouts reutilizáveis para suas páginas!
            </p>
            <div class="card-tag">Intermediário</div>
            <div class="card-footer">
              <span class="card-path">/layouts/*.vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 9: Lazy Loading -->
          <NuxtLink to="/lazy-loading-example" class="nav-card">
            <div class="card-icon">⚡</div>
            <h3 class="card-title">Lazy Loading</h3>
            <p class="card-description">
              Otimize performance com carregamento preguiçoso! Componentes, imagens e importações dinâmicas.
            </p>
            <div class="card-tag">Avançado</div>
            <div class="card-footer">
              <span class="card-path">/pages/lazy-loading-example.vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 10: Transitions -->
          <NuxtLink to="/transitions-example" class="nav-card">
            <div class="card-icon">🎬</div>
            <h3 class="card-title">Transitions & Animações</h3>
            <p class="card-description">
              Crie animações suaves com Transition e TransitionGroup. Domine timing functions e easing!
            </p>
            <div class="card-tag">Intermediário</div>
            <div class="card-footer">
              <span class="card-path">/pages/transitions-example.vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>

          <!-- Card 11: Nuxt Transitions -->
          <NuxtLink to="/nuxt-transitions" class="nav-card">
            <div class="card-icon">🔄</div>
            <h3 class="card-title">Nuxt Page Transitions</h3>
            <p class="card-description">
              Aprenda sobre transições de página nativas do Nuxt! Animações automáticas entre rotas.
            </p>
            <div class="card-tag">Avançado</div>
            <div class="card-footer">
              <span class="card-path">/pages/nuxt-transitions/*.vue</span>
              <span class="card-arrow">→</span>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Conceitos Importantes -->
      <section class="concepts-section">
        <h2 class="section-title">💡 Conceitos Importantes</h2>

        <div class="concepts-grid">
          <div class="concept-card">
            <h4>🗂️ File-based Routing</h4>
            <p>Cada arquivo em /pages vira uma rota automaticamente. Sem configuração manual!</p>
          </div>

          <div class="concept-card">
            <h4>🔗 NuxtLink</h4>
            <p>Componente para navegação SPA. Pré-carrega páginas para navegação instantânea!</p>
          </div>

          <div class="concept-card">
            <h4>📦 Auto-imports</h4>
            <p>Nuxt importa automaticamente componentes, composables e utilitários!</p>
          </div>

          <div class="concept-card">
            <h4>⚡ SSR + SPA</h4>
            <p>Server-Side Rendering na primeira carga, depois Single Page Application!</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
/**
 * 🎯 COMPOSITION API - SCRIPT SETUP
 *
 * Esta é a forma moderna de escrever componentes Vue/Nuxt!
 * Tudo aqui fica automaticamente disponível no template.
 */

import { ref } from 'vue'

// 📊 Estados reativos - Contadores para estatísticas
const routesCount = ref(13)
const middlewaresCount = ref(2)
const conceptsCount = ref(11)

/**
 * 💡 DICAS DE NAVEGAÇÃO NUXT:
 *
 * 1. <NuxtLink to="/path">     - Navegação interna (SPA)
 * 2. <NuxtLink :to="`/user/${id}`"> - Com variáveis
 * 3. navigateTo('/path')       - Navegação programática
 * 4. External links            - Use <a href="...">
 */

// Exemplo de navegação programática (você pode usar em métodos)
// const router = useRouter()
// router.push('/abouts')

/**
 * 📚 RECURSOS ÚTEIS:
 * - Documentação: https://nuxt.com/docs
 * - Routing: https://nuxt.com/docs/guide/directory-structure/pages
 * - NuxtLink: https://nuxt.com/docs/api/components/nuxt-link
 */
</script>

<style scoped>
/**
 * 🎨 ESTILOS ESCOPADOS COM CSS
 *
 * "scoped" = estilos só afetam este componente
 */

.home-page {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero Section */
.hero {
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.15rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

/* Estatísticas */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.95;
}

/* Seção de Navegação */
.navigation-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

/* Grid de Cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

/* Card de Navegação */
.nav-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: #1e293b;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.nav-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #00dc82, #667eea);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.nav-card:hover::before {
  transform: scaleX(1);
}

.nav-card:hover .card-arrow {
  transform: translateX(4px);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}

.card-description {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  flex: 1;
}

.card-tag {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(0, 220, 130, 0.1);
  color: #00a86b;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.card-path {
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: #64748b;
  background: rgba(0, 0, 0, 0.04);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.card-arrow {
  font-size: 1.5rem;
  color: #00dc82;
  font-weight: 700;
  transition: transform 0.3s ease;
}

/* Seção de Conceitos */
.concepts-section {
  margin-bottom: 3rem;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #00dc82;
}

.concept-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.concept-card p {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 1.6rem;
  }
}
</style>