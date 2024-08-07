import { formatDate } from "@/utils/format-date";
import { getLanguage } from "@/utils/get-language";

import { FavoriteButton } from "../favorite-button";
import { RepositoryProps } from "./interface";

export const Repository = (props: RepositoryProps) => {
  const { name, description, languages, updatedAt } = props;

  const formattedUpdatedAt = formatDate(updatedAt);

  return (
    <article className="flex items-start justify-between rounded-[4px] border border-border-line p-4">
      <div>
        <h2 className="text-lg leading-7 text-neutral">{name}</h2>
        <p className="text-sm text-placeholder">{description}</p>
        <footer className="mt-4 flex items-center gap-6">
          {languages.map(language => {
            const lang = getLanguage(language);

            if (lang === null) return null;

            return (
              <div
                data-testid="language"
                key={language}
                className="flex items-center gap-2"
              >
                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: lang.color,
                  }}
                ></div>
                <span className="text-xs text-neutral">{lang.name}</span>
              </div>
            );
          })}
          <time className="text-xs text-neutral" dateTime="2020-04-01">
            Atualizado em {formattedUpdatedAt}
          </time>
        </footer>
      </div>
      <FavoriteButton isFavorited={true} />
    </article>
  );
};
