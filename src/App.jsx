import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Route, Routes } from "react-router-dom";
import UtilityContextProvider from "./components/ContextProviders/UtilityContextProvider";
import Navbar from "./components/Navbar";
import Anime from "./pages/Anime";
import Home from "./pages/Home";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UtilityContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Anime />} />
          <Route path="*" />
        </Routes>
      </UtilityContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
