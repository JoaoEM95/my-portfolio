<template>
  <!--
    🎬 TRANSITIONS - Animações e Transições no Vue/Nuxt

    Demonstra o uso do componente <Transition> para criar
    animações suaves entre estados de componentes.
  -->
  <div class="transitions-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <div class="icon">🎬</div>
        <h1>Transitions no Vue 3</h1>
        <p class="subtitle">Crie animações suaves e profissionais com o componente Transition</p>
      </div>

      <!-- Introdução -->
      <div class="intro-section">
        <h2>🎯 O que são Transitions?</h2>
        <p>
          O componente <code>&lt;Transition&gt;</code> do Vue permite adicionar animações quando
          elementos entram ou saem do DOM. Ele aplica classes CSS automaticamente durante
          o ciclo de vida da transição!
        </p>
      </div>

      <!-- Exemplo 1: Fade Transition -->
      <div class="example-section">
        <div class="example-header">
          <h2>1️⃣ Fade Transition (Aparecer/Desaparecer)</h2>
          <p>A transição mais básica e comum</p>
        </div>

        <div class="demo-box">
          <button @click="showFade = !showFade" class="toggle-button">
            {{ showFade ? '🙈 Ocultar' : '👁️ Mostrar' }} Elemento
          </button>

          <div class="demo-area">
            <Transition name="fade">
              <div v-if="showFade" class="demo-card fade-card">
                <span class="card-icon">✨</span>
                <h3>Olá! Eu apareço suavemente</h3>
                <p>Esta é uma transição fade simples usando opacity</p>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <h4>💻 Código</h4>
            <pre><code>&lt;Transition name="fade"&gt;
  &lt;div v-if="show"&gt;Conteúdo&lt;/div&gt;
&lt;/Transition&gt;

&lt;style&gt;
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
&lt;/style&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Exemplo 2: Slide Transition -->
      <div class="example-section">
        <div class="example-header">
          <h2>2️⃣ Slide Transition (Deslizar)</h2>
          <p>Elemento entra deslizando de baixo para cima</p>
        </div>

        <div class="demo-box">
          <button @click="showSlide = !showSlide" class="toggle-button">
            {{ showSlide ? '⬇️ Esconder' : '⬆️ Revelar' }} Elemento
          </button>

          <div class="demo-area">
            <Transition name="slide-up">
              <div v-if="showSlide" class="demo-card slide-card">
                <span class="card-icon">🚀</span>
                <h3>Eu deslizo para cima!</h3>
                <p>Combinando transform e opacity para um efeito suave</p>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <h4>💻 Código</h4>
            <pre><code>&lt;Transition name="slide-up"&gt;
  &lt;div v-if="show"&gt;Conteúdo&lt;/div&gt;
&lt;/Transition&gt;

&lt;style&gt;
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
&lt;/style&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Exemplo 3: Scale Transition -->
      <div class="example-section">
        <div class="example-header">
          <h2>3️⃣ Scale Transition (Zoom)</h2>
          <p>Elemento aumenta de tamanho ao aparecer</p>
        </div>

        <div class="demo-box">
          <button @click="showScale = !showScale" class="toggle-button">
            {{ showScale ? '🔽 Diminuir' : '🔼 Aumentar' }} Elemento
          </button>

          <div class="demo-area">
            <Transition name="scale">
              <div v-if="showScale" class="demo-card scale-card">
                <span class="card-icon">🎯</span>
                <h3>Eu cresço ao aparecer!</h3>
                <p>Usando scale() para criar efeito de zoom</p>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <h4>💻 Código</h4>
            <pre><code>&lt;Transition name="scale"&gt;
  &lt;div v-if="show"&gt;Conteúdo&lt;/div&gt;
&lt;/Transition&gt;

&lt;style&gt;
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
&lt;/style&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Exemplo 4: Rotate Transition -->
      <div class="example-section">
        <div class="example-header">
          <h2>4️⃣ Rotate Transition (Rotação)</h2>
          <p>Elemento gira ao entrar e sair</p>
        </div>

        <div class="demo-box">
          <button @click="showRotate = !showRotate" class="toggle-button">
            {{ showRotate ? '🔄 Girar para fora' : '🔄 Girar para dentro' }}
          </button>

          <div class="demo-area">
            <Transition name="rotate">
              <div v-if="showRotate" class="demo-card rotate-card">
                <span class="card-icon">🌀</span>
                <h3>Eu giro ao aparecer!</h3>
                <p>Combinando rotate com scale para efeito dramático</p>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <h4>💻 Código</h4>
            <pre><code>&lt;Transition name="rotate"&gt;
  &lt;div v-if="show"&gt;Conteúdo&lt;/div&gt;
&lt;/Transition&gt;

&lt;style&gt;
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.rotate-enter-from,
.rotate-leave-to {
  transform: rotate(180deg) scale(0.5);
  opacity: 0;
}
&lt;/style&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Exemplo 5: Bounce Transition -->
      <div class="example-section">
        <div class="example-header">
          <h2>5️⃣ Bounce Transition (Quicar)</h2>
          <p>Efeito de "quique" ao entrar</p>
        </div>

        <div class="demo-box">
          <button @click="showBounce = !showBounce" class="toggle-button">
            {{ showBounce ? '📉 Remover' : '📈 Adicionar' }} com Bounce
          </button>

          <div class="demo-area">
            <Transition name="bounce">
              <div v-if="showBounce" class="demo-card bounce-card">
                <span class="card-icon">🎾</span>
                <h3>Eu quico ao entrar!</h3>
                <p>Usando cubic-bezier para criar efeito de salto</p>
              </div>
            </Transition>
          </div>

          <div class="code-block">
            <h4>💻 Código</h4>
            <pre><code>&lt;Transition name="bounce"&gt;
  &lt;div v-if="show"&gt;Conteúdo&lt;/div&gt;
&lt;/Transition&gt;

&lt;style&gt;
.bounce-enter-active {
  animation: bounce-in 0.6s;
}

.bounce-leave-active {
  animation: bounce-out 0.4s;
}

@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes bounce-out {
  0% { transform: scale(1); }
  100% { transform: scale(0); }
}
&lt;/style&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Exemplo 6: TransitionGroup com Lista -->
      <div class="example-section">
        <div class="example-header">
          <h2>6️⃣ TransitionGroup (Lista Animada)</h2>
          <p>Anime múltiplos elementos com TransitionGroup</p>
        </div>

        <div class="demo-box">
          <div class="list-controls">
            <button @click="addItem" class="toggle-button">
              ➕ Adicionar Item
            </button>
            <button @click="removeItem" class="toggle-button secondary">
              ➖ Remover Item
            </button>
            <button @click="shuffleItems" class="toggle-button secondary">
              🔀 Embaralhar
            </button>
          </div>

          <div class="demo-area">
            <TransitionGroup name="list" tag="div" class="items-list">
              <div
                v-for="item in items"
                :key="item.id"
                class="list-item"
              >
                <span class="item-icon">{{ item.icon }}</span>
                <span class="item-text">{{ item.text }}</span>
                <button @click="removeSpecificItem(item.id)" class="remove-btn">×</button>
              </div>
            </TransitionGroup>

            <div v-if="items.length === 0" class="empty-state">
              <p>📭 Lista vazia! Clique em "Adicionar Item"</p>
            </div>
          </div>

          <div class="code-block">
            <h4>💻 Código</h4>
            <pre><code>&lt;TransitionGroup name="list" tag="div"&gt;
  &lt;div v-for="item in items" :key="item.id"&gt;
    &#123;&#123; item.text &#125;&#125;
  &lt;/div&gt;
&lt;/TransitionGroup&gt;

&lt;style&gt;
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.5s ease;
}
&lt;/style&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Classes CSS Explicadas -->
      <div class="explanation-section">
        <h2>📚 Classes CSS das Transitions</h2>
        <p class="section-description">
          O Vue aplica automaticamente 6 classes durante a transição:
        </p>

        <div class="classes-grid">
          <div class="class-card enter">
            <h3>ENTER (Entrando)</h3>
            <div class="class-item">
              <code>v-enter-from</code>
              <p>Estado inicial ao entrar</p>
            </div>
            <div class="class-item">
              <code>v-enter-active</code>
              <p>Estado ativo durante toda a entrada</p>
            </div>
            <div class="class-item">
              <code>v-enter-to</code>
              <p>Estado final ao entrar</p>
            </div>
          </div>

          <div class="class-card leave">
            <h3>LEAVE (Saindo)</h3>
            <div class="class-item">
              <code>v-leave-from</code>
              <p>Estado inicial ao sair</p>
            </div>
            <div class="class-item">
              <code>v-leave-active</code>
              <p>Estado ativo durante toda a saída</p>
            </div>
            <div class="class-item">
              <code>v-leave-to</code>
              <p>Estado final ao sair</p>
            </div>
          </div>
        </div>

        <div class="note-box">
          <h4>💡 Nota Importante</h4>
          <p>
            Se você usar <code>&lt;Transition name="fade"&gt;</code>, as classes serão:
            <code>fade-enter-from</code>, <code>fade-enter-active</code>, etc.
          </p>
        </div>
      </div>

      <!-- Boas Práticas -->
      <div class="best-practices-section">
        <h2>✨ Boas Práticas</h2>
        <div class="practices-grid">
          <div class="practice-card">
            <span class="practice-icon">⚡</span>
            <h3>Performance</h3>
            <ul>
              <li>Use <code>transform</code> e <code>opacity</code> (acelerados por GPU)</li>
              <li>Evite animar <code>width</code>, <code>height</code>, <code>margin</code></li>
              <li>Prefira <code>will-change</code> para animações complexas</li>
              <li>Mantenha durações entre 200-500ms</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="practice-icon">🎨</span>
            <h3>UX Design</h3>
            <ul>
              <li>Não abuse de animações - menos é mais</li>
              <li>Use easing functions apropriadas (ease-out para entrada)</li>
              <li>Mantenha consistência nas animações do app</li>
              <li>Considere preferências de movimento reduzido</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="practice-icon">🔧</span>
            <h3>Implementação</h3>
            <ul>
              <li>Sempre defina <code>name</code> na Transition</li>
              <li>Use <code>mode="out-in"</code> para trocar componentes</li>
              <li>TransitionGroup precisa de <code>:key</code> único</li>
              <li>Teste em dispositivos móveis</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Timing Functions -->
      <div class="timing-section">
        <h2>⏱️ Timing Functions (Easing)</h2>
        <p class="section-description">
          As timing functions controlam a aceleração da animação:
        </p>

        <div class="timing-demos">
          <div
            v-for="timing in timingFunctions"
            :key="timing.name"
            class="timing-demo"
          >
            <h4>{{ timing.name }}</h4>
            <code>{{ timing.value }}</code>
            <div class="timing-visual">
              <div
                class="timing-ball"
                :class="{ 'is-animating': animatingTiming === timing.name }"
                :style="{ transitionTimingFunction: timing.value }"
              ></div>
            </div>
            <button
              @click="animateTiming(timing.name)"
              class="timing-button"
            >
              ▶️ Testar
            </button>
          </div>
        </div>
      </div>

      <!-- Recursos -->
      <div class="resources-section">
        <h2>📚 Recursos Adicionais</h2>
        <div class="resources-grid">
          <a href="https://vuejs.org/guide/built-ins/transition.html" target="_blank" class="resource-link">
            <span class="resource-icon">📖</span>
            <div>
              <strong>Vue Transition Guide</strong>
              <small>Documentação oficial do Vue sobre Transitions</small>
            </div>
          </a>
          <a href="https://nuxt.com/docs/getting-started/transitions" target="_blank" class="resource-link">
            <span class="resource-icon">🎨</span>
            <div>
              <strong>Nuxt Transitions</strong>
              <small>Transitions entre páginas no Nuxt</small>
            </div>
          </a>
          <a href="https://cubic-bezier.com/" target="_blank" class="resource-link">
            <span class="resource-icon">📐</span>
            <div>
              <strong>Cubic Bezier Generator</strong>
              <small>Ferramenta para criar timing functions customizadas</small>
            </div>
          </a>
        </div>
      </div>

      <!-- Navigation -->
      <div class="navigation">
        <NuxtLink to="/" class="btn-back">← Voltar ao Início</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * 🎬 TRANSITIONS EXAMPLE
 *
 * Este exemplo demonstra o uso do componente <Transition> do Vue 3
 * para criar animações suaves entre estados.
 *
 * 📚 CONCEITOS:
 *
 * 1. <Transition>
 *    - Componente built-in do Vue
 *    - Aplica classes CSS automaticamente
 *    - Funciona com v-if, v-show, component is
 *
 * 2. <TransitionGroup>
 *    - Para listas de elementos
 *    - Requer :key único em cada item
 *    - Anima inserção, remoção e reordenação
 *
 * 3. Classes CSS
 *    - *-enter-from, *-enter-active, *-enter-to
 *    - *-leave-from, *-leave-active, *-leave-to
 *
 * 4. Modos
 *    - out-in: espera elemento sair antes de entrar novo
 *    - in-out: novo entra antes do antigo sair
 *
 * 💡 DICA: Use transform e opacity para melhor performance!
 */

import { ref, computed } from 'vue'

// Estados dos exemplos
const showFade = ref(false)
const showSlide = ref(false)
const showScale = ref(false)
const showRotate = ref(false)
const showBounce = ref(false)

// TransitionGroup - Lista
const items = ref([
  { id: 1, text: 'Item 1', icon: '🍎' },
  { id: 2, text: 'Item 2', icon: '🍊' },
  { id: 3, text: 'Item 3', icon: '🍋' }
])

let nextId = 4

const addItem = () => {
  const icons = ['🍎', '🍊', '🍋', '🍇', '🍓', '🍑', '🍒', '🍉', '🥝', '🍌']
  const randomIcon = icons[Math.floor(Math.random() * icons.length)]

  items.value.push({
    id: nextId++,
    text: `Item ${nextId - 1}`,
    icon: randomIcon
  })
}

const removeItem = () => {
  if (items.value.length > 0) {
    items.value.pop()
  }
}

const removeSpecificItem = (id) => {
  const index = items.value.findIndex(item => item.id === id)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

const shuffleItems = () => {
  items.value = items.value.sort(() => Math.random() - 0.5)
}

// Timing Functions
const timingFunctions = [
  { name: 'ease', value: 'ease' },
  { name: 'ease-in', value: 'ease-in' },
  { name: 'ease-out', value: 'ease-out' },
  { name: 'ease-in-out', value: 'ease-in-out' },
  { name: 'linear', value: 'linear' },
  { name: 'bounce', value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }
]

const animatingTiming = ref(null)

const animateTiming = (name) => {
  animatingTiming.value = name
  setTimeout(() => {
    animatingTiming.value = null
  }, 1000)
}
</script>

<style scoped>
$primary: #00dc82;
$secondary: #667eea;
$text-dark: #1e293b;
$text-light: #64748b;

.transitions-page {
  width: 100%;
  min-height: 60vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

/* Intro Section */
.intro-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    margin-bottom: 1rem;
    font-size: 1.75rem;
  }

  p {
    color: $text-light;
    line-height: 1.7;
    margin: 0;

    code {
      background: rgba(102, 126, 234, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      color: $secondary;
      font-family: 'Courier New', monospace;
    }
  }
}

/* Example Sections */
.example-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.example-header {
  margin-bottom: 2rem;

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: $text-light;
    margin: 0;
  }
}

.demo-box {
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
}

.toggle-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, $primary 0%, #00a86b 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 220, 130, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 220, 130, 0.4);
  }

  &.secondary {
    background: linear-gradient(135deg, $secondary 0%, #764ba2 100%);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);

    &:hover {
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }
  }
}

.demo-area {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px dashed #e2e8f0;
}

.demo-card {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 2px solid #bae6fd;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  max-width: 400px;

  .card-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
  }

  h3 {
    color: $text-dark;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: $text-light;
    margin: 0;
  }

  &.fade-card {
    background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
    border-color: #fbbf24;
  }

  &.slide-card {
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    border-color: #60a5fa;
  }

  &.scale-card {
    background: linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%);
    border-color: #e879f9;
  }

  &.rotate-card {
    background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
    border-color: #fb923c;
  }

  &.bounce-card {
    background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
    border-color: #4ade80;
  }
}

/* Transition Classes */

/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

/* Scale */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

/* Rotate */
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.rotate-enter-from,
.rotate-leave-to {
  transform: rotate(180deg) scale(0.5);
  opacity: 0;
}

/* Bounce */
.bounce-enter-active {
  animation: bounce-in 0.6s;
}

.bounce-leave-active {
  animation: bounce-out 0.4s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

/* Code Blocks */
.code-block {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  overflow-x: auto;

  h4 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  pre {
    margin: 0;

    code {
      color: #cbd5e1;
      font-family: 'Courier New', monospace;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }
}

/* TransitionGroup - List */
.list-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.list-item {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary;
    transform: translateX(4px);
  }

  .item-icon {
    font-size: 1.5rem;
  }

  .item-text {
    flex: 1;
    color: $text-dark;
    font-weight: 600;
  }

  .remove-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #ef4444;
    background: white;
    color: #ef4444;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    line-height: 1;

    &:hover {
      background: #ef4444;
      color: white;
    }
  }
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: $text-light;

  p {
    margin: 0;
    font-size: 1.1rem;
  }
}

/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.5s ease;
}

/* Classes Explanation */
.explanation-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .section-description {
    color: $text-light;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
}

.classes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.class-card {
  border-radius: 12px;
  padding: 1.5rem;

  &.enter {
    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
    border: 2px solid $primary;
  }

  &.leave {
    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
    border: 2px solid #ef4444;
  }

  h3 {
    color: $text-dark;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
  }

  .class-item {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    code {
      display: block;
      color: $secondary;
      font-family: 'Courier New', monospace;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    p {
      color: $text-light;
      font-size: 0.9rem;
      margin: 0;
    }
  }
}

.note-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #fbbf24;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    color: $text-dark;
    margin-bottom: 0.75rem;
  }

  p {
    color: $text-dark;
    margin: 0;
    line-height: 1.7;

    code {
      background: rgba(0, 0, 0, 0.1);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
    }
  }
}

/* Best Practices */
.best-practices-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.practice-card {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary;
    transform: translateY(-2px);
  }

  .practice-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 1rem;
  }

  h3 {
    color: $text-dark;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0.5rem 0;
      color: $text-light;
      font-size: 0.95rem;
      line-height: 1.6;

      &::before {
        content: '→';
        margin-right: 0.5rem;
        color: $primary;
        font-weight: 700;
      }

      code {
        background: rgba(0, 0, 0, 0.06);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        color: $secondary;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
      }
    }
  }
}

/* Timing Functions */
.timing-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .section-description {
    color: $text-light;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
}

.timing-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.timing-demo {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;

  h4 {
    color: $text-dark;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  code {
    display: block;
    background: white;
    padding: 0.5rem;
    border-radius: 6px;
    color: $secondary;
    font-family: 'Courier New', monospace;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .timing-visual {
    height: 60px;
    background: white;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .timing-ball {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, $primary 0%, #00a86b 100%);
    border-radius: 50%;
    transition: transform 1s;

    &.is-animating {
      transform: translateX(calc(100% + 140px));
    }
  }

  .timing-button {
    padding: 0.5rem 1rem;
    background: $primary;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #00a86b;
    }
  }
}

/* Resources */
.resources-section {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  h2 {
    color: $text-dark;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
}

.resources-grid {
  display: grid;
  gap: 1rem;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary;
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0, 220, 130, 0.2);
  }

  .resource-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  strong {
    display: block;
    color: $text-dark;
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
  }

  small {
    color: $text-light;
    font-size: 0.9rem;
  }
}

/* Navigation */
.navigation {
  text-align: center;
  padding: 2rem 0;
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

  .classes-grid,
  .practices-grid,
  .timing-demos {
    grid-template-columns: 1fr;
  }

  .list-controls {
    flex-direction: column;

    .toggle-button {
      width: 100%;
    }
  }

  .demo-area {
    padding: 1rem;
  }
}
</style>
