export type PropsOn = {
  name: string;
  showBar: boolean;
  showChecked: boolean;
  setShowbar: (showBar: boolean | ((prevShowBar: boolean) => boolean)) => void; // Atualização para aceitar função
  setShowChecked: (showChecked: boolean) => void;
  setName: (name: string) => void;
};
