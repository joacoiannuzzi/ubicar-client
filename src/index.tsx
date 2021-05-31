import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ErrorPage } from "./components/ErrorPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { configureAxios } from "./api/config";
import { initializeFirebase } from "./config/FirebaseInitialize";

const queryClient = new QueryClient();

configureAxios();
initializeFirebase();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ErrorBoundary fallback={<ErrorPage />}>
            <App />
          </ErrorBoundary>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
