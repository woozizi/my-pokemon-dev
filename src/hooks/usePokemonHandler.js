import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const usePokemonHandler = () => {
  const dispatch = useDispatch();
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  //추가하기
  const handleAddPokemon = (pokemon) => {
    //중복검사
    if (selectedPokemons.some((prev) => prev.id === pokemon.id)) {
      toast.error("이미 추가된 포켓몬입니다.");
      return;
    }

    //최대개수 제한
    if (selectedPokemons.length >= 6) {
      toast.error("포켓몬은 최대 6마리까지 도감에 추가가능합니다.");
      return;
    }
    dispatch(addPokemon(pokemon));
    toast.success("도감에 추가되었습니다.");
  };

  //삭제하기
  const handleDeletePokemon = (pokemon) => {
    dispatch(deletePokemon(pokemon));
    toast.success("도감에서 삭제했습니다.");
  };

  return { handleAddPokemon, handleDeletePokemon };
};

export default usePokemonHandler;
