import { DataGrid } from '@mui/x-data-grid';
import type { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import type { PokemonDetail } from "../types/types";
import { useModal } from '../hooks/useModal';

export function TablePokemon({ pokemonList }: { pokemonList: PokemonDetail[] }) {

    const { openModal } = useModal()

    const columns: GridColDef[] = [
        { field: 'image', headerName: 'Image', renderCell: (params) => <img src={params.row.image.src} alt={`Image of ${params.row.image.alt}`} />, width: 200, sortable: false },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'weight', headerName: 'Weight', width: 70 },
        { field: 'height', headerName: 'Height', width: 70 },
        { field: 'hp', headerName: 'HP', width: 70 },
        { field: 'baseExperience', headerName: 'Base XP', width: 80 },
        { field: 'baseAttack', headerName: 'Base Attack', width: 110 },
        { field: 'baseDefense', headerName: 'Base Defense', width: 110 },
        { field: 'baseSpecialAttack', headerName: 'Base Special Attack', width: 150 },
        { field: 'baseSpecialDefense', headerName: 'Base Special Defense', width: 170 },
        { field: 'baseSpeed', headerName: 'Base Speed', width: 100 },
        { field: 'details', headerName: 'More Details', renderCell: (params) => <button onClick={() => openModal(params.row.details)}>Details</button>, width: 200 },
    ];

    const rows: GridRowsProp = pokemonList.map(pokemon => {
        return {
            id: pokemon.id,
            image: { src: pokemon.sprites.front_default, alt: pokemon.name },
            name: (pokemon.name).toLocaleUpperCase(),
            weight: pokemon.weight,
            height: pokemon.height,
            hp: pokemon.stats[0].base_stat,
            baseExperience: pokemon.base_experience,
            baseAttack: pokemon.stats[1].base_stat,
            baseDefense: pokemon.stats[2].base_stat,
            baseSpecialAttack: pokemon.stats[3].base_stat,
            baseSpecialDefense: pokemon.stats[4].base_stat,
            baseSpeed: pokemon.stats[5].base_stat,
            details: pokemon,
        }
    });

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}