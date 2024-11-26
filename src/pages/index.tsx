import Example from "@/components/example";
import WeatherContextProvider from "@/store/weather-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function Home() {

  const queryClient = new QueryClient();

  return (
    <div
      className={`overflow-hidden`}
    >
    <QueryClientProvider client={queryClient}>
    <Example/>
    </QueryClientProvider>
    </div>
  );
}
