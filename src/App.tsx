import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomePage from './pages/HomePage/HomePage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
};

export default App;
