import Image from "next/image";

import AbductionImage from "@/assets/svgs/abduction.svg";

import { EmptyResultProps } from "./interface";

export const EmptyResult = (props: EmptyResultProps) => {
  const { searchedText } = props;

  return (
    <div
      data-testid="display-search-empty-result"
      className="flex flex-col items-center px-4 pb-16 pt-[136px] text-center"
    >
      <span className="text-xl font-semibold text-primary">
        {`"${searchedText}"`}
      </span>
      <h3 className="text-xl font-semibold text-neutral">
        Nenhum usuário encontrado
      </h3>
      <p>Verifique se a escrita está correta ou tente novamente</p>

      <Image
        src={AbductionImage}
        width={230}
        height={260}
        alt="Search People"
        className="mt-12 w-full max-w-[400px]"
      />
    </div>
  );
};
