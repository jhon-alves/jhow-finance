import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  return (
    <TransactionsProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}