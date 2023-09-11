import { defineStore } from "pinia";

interface PokemonState {
  list: any[];
  detail: any;
}

function getIdInUrl(url: string): string {
  const urlSplits = url.split("/");
  return urlSplits[urlSplits.length - 2];
}

const BASE_URL = useRuntimeConfig().public.apiBase;

export const usePokemonStore = defineStore("pokemon", {
  state: (): PokemonState => ({
    list: [],
    detail: {},
  }),
  actions: {
    getListing() {
      fetch(`${BASE_URL}/pokemon`)
        .then((response) => response.json())
        .then((data) => {
          this.list = data.results.map((item: any) => {
            return {
              ...item,
              id: getIdInUrl(item.url),
            };
          });
        })
        .catch((error) => console.log("error", error));
    },

    getDetail(id: number) {
      fetch(`${BASE_URL}/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          this.detail = data;
        })
        .catch((error) => console.log("error", error));
    },

    clearDetail() {
      this.detail = {};
    },
  },
});
