export interface SearchService {
  name: string;
  bangs: string[];
  query: (searchQuery: string) => string;
}
