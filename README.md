# ⏰ Registro de Horários

Aplicação web para registro e gerenciamento de horários com interface moderna e modo noturno.

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilização
- **Lucide React** - Ícones
- **LocalStorage** - Persistência de dados

## ✨ Funcionalidades

### 📝 Registro de Horários
- Captura automática de data e hora atual
- Relógio analógico animado
- Feedback visual de sucesso
- Exibição do último registro

### 📊 Visualização de Registros
- Listagem completa de todos os registros
- **Ordenação:** Mais recente ↔ Mais antigo
- **Filtros:**
  - Por dia (seletor de data)
  - Por semana (1-53)
  - Por mês
  - Por ano
- Exclusão de registros individuais
- Contador de registros filtrados

### 🌙 Modo Noturno
- Toggle dark/light mode
- Persistência de preferência
- Detecção automática da preferência do sistema
- Transições suaves entre temas

## 📁 Estrutura do Projeto

```
src/
├── types/
│   └── index.ts                    # Tipos TypeScript
├── services/
│   └── timeRecords.service.ts      # Lógica de API/Storage
├── utils/
│   ├── date.utils.ts               # Utilitários de data
│   └── filter.utils.ts             # Lógica de filtros
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeToggle.tsx
│   └── Records/
│       ├── FilterBar.tsx
│       ├── RecordItem.tsx
│       └── RecordsList.tsx
├── pages/
│   ├── RegisterPage.tsx            # Página de registro
│   └── RecordsPage.tsx             # Página de visualização
└── App.tsx                         # Componente principal
```

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd registro-horarios
```

2. **Instale as dependências**
```bash
npm install
```

3. **Instale o Tailwind CSS**
```bash
npm install tailwindcss @tailwindcss/vite
```

4. **Configure o Vite** (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

5. **Configure o CSS** (`src/index.css`)
```css
@import "tailwindcss";
```

6. **Rode o projeto**
```bash
npm run dev
```

## 🎨 Customização

### Trocar Fonte

Adicione no `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

E no `index.css`:
```css
body {
  font-family: 'Inter', system-ui, sans-serif;
}
```

### Cores do Dark Mode

As cores podem ser ajustadas nas classes `dark:` dos componentes:
```tsx
className="bg-white dark:bg-gray-800"
className="text-gray-800 dark:text-gray-100"
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🔍 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🏗️ Arquitetura

### Separação de Responsabilidades
- **Services**: Comunicação com storage/API
- **Utils**: Funções auxiliares reutilizáveis  
- **Components**: Componentes de UI puros
- **Pages**: Páginas com lógica de negócio
- **Types**: Definições de tipos TypeScript

### Fluxo de Dados
```
App.tsx (estado global)
   ↓
Pages (estado local + handlers)
   ↓
Components (props + UI)
```

## 📝 Melhorias Futuras

- [ ] Integração com API REST
- [ ] Autenticação de usuários
- [ ] Exportar dados (CSV/PDF)
- [ ] Gráficos e estatísticas
- [ ] Categorização de registros
- [ ] Notificações push
- [ ] PWA (Progressive Web App)

## 📄 Licença

MIT

## 👤 Autor

Gustavo dias - [GitHub](https://github.com/Gust4v0Di4sC)

---

⭐ Desenvolvido com React + TypeScript + Tailwind CSS