import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type favoriteMetasState = {
    favoriteMetasIds: number[],
    addFavoriteMetas: (id: number) => void,
    removeFavoriteMetas: (id: number) => void
};

export const useFavoriteMetasStore = create(persist<favoriteMetasState>(
    set => ({
        favoriteMetasIds: [],
        addFavoriteMetas: (id: number) => set((state) => ({
            favoriteMetasIds: [...state.favoriteMetasIds, id]
        })),
        removeFavoriteMetas: (id: number) => set((state) => ({
            favoriteMetasIds: state.favoriteMetasIds.filter(metaId => metaId !== id)
        })),
    }), {
        name: 'favorite-metas'
    }
));

