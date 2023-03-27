import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "../atom";

const useListaDeParticipantes = () => {
  return useRecoilValue(listaParticipantesState);
};

export default useListaDeParticipantes;
