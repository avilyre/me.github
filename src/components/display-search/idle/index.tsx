import Image from "next/image";

import SearchPeopleImage from "@/assets/svgs/search-people.svg";

export const Idle = () => {
  return (
    <div
      data-testid="display-search-idle"
      className="flex flex-col items-center px-4 pb-16 pt-[168px] text-center"
    >
      <h3 className="text-xl font-semibold text-neutral">
        Procure pelo Nome ou Nome de Usuário
      </h3>
      <p>Encontre os repositórios de algum usuário digitando no campo acima</p>

      <Image
        src={SearchPeopleImage}
        width={230}
        height={260}
        alt="Search People"
        className="mt-12 w-full max-w-[230px]"
      />
    </div>
  );
};
