import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
import './styles.css'

// 1. Criamos o QueryClient (necessário para o contexto do router)
const queryClient = new QueryClient()

// 2. Criamos o router passando o routeTree E o contexto exigido pelo erro
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

// 3. Registramos o roteador para o TypeScript reconhecer os caminhos
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      {/* 4. Envolvemos a aplicação com o Provider do Query e do Router */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}